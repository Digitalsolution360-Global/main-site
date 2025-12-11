'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { UserButton, useUser } from '@clerk/nextjs';

export default function AdminLeads() {
  const { user } = useUser();
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedLeadForStatus, setSelectedLeadForStatus] = useState(null);
  const [selectedLeadForHistory, setSelectedLeadForHistory] = useState(null);
  const [selectedLeadForView, setSelectedLeadForView] = useState(null);
  const [leadHistory, setLeadHistory] = useState([]);
  const [historyLoading, setHistoryLoading] = useState(false);
  const [statusUpdate, setStatusUpdate] = useState('');
  const [followUpDate, setFollowUpDate] = useState('');
  const [newStatus, setNewStatus] = useState('');
  const [editingLead, setEditingLead] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterPriority, setFilterPriority] = useState('all');
  const [filterBusinessType, setFilterBusinessType] = useState('all');
  const [filterDateFrom, setFilterDateFrom] = useState('');
  const [filterDateTo, setFilterDateTo] = useState('');
  const [sortOrder, setSortOrder] = useState('desc'); // 'desc' for latest first, 'asc' for oldest first
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    website: '',
    priority: 'medium',
    lead_status: 'contacted',
    follow_up_date: '',
    next_follow_up_date: '',
    business_type: '',
    remarks: ''
  });

  const isLeadsUser = user?.username?.toLowerCase() === 'leads';

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const res = await fetch('/api/leads');
      const data = await res.json();
      console.log('Fetched leads with today flag:', data.leads?.map(l => ({ 
        id: l.id, 
        name: l.name, 
        created_at: l.created_at, 
        is_created_today: l.is_created_today 
      })));
      setLeads(data.leads || []);
    } catch (error) {
      console.error('Error fetching leads:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = editingLead 
        ? `/api/leads/${editingLead.id}`
        : '/api/leads';
      
      const method = editingLead ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        alert(editingLead ? 'Lead updated successfully!' : 'Lead created successfully!');
        setShowModal(false);
        setEditingLead(null);
        resetForm();
        fetchLeads();
      } else {
        const error = await res.json();
        alert('Error: ' + (error.error || 'Something went wrong'));
      }
    } catch (error) {
      console.error('Error saving lead:', error);
      alert('Failed to save lead');
    }
  };

  const handleEdit = (lead) => {
    setEditingLead(lead);
    setFormData({
      name: lead.name || '',
      email: lead.email || '',
      phone: lead.phone || '',
      city: lead.city || '',
      website: lead.website || '',
      priority: lead.priority || 'medium',
      lead_status: lead.lead_status || 'new',
      follow_up_date: lead.follow_up_date ? lead.follow_up_date.split('T')[0] : '',
      next_follow_up_date: lead.next_follow_up_date ? lead.next_follow_up_date.split('T')[0] : '',
      business_type: lead.business_type || '',
      remarks: lead.remarks || ''
    });
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this lead?')) return;

    try {
      const res = await fetch(`/api/leads/${id}`, {
        method: 'DELETE'
      });

      if (res.ok) {
        alert('Lead deleted successfully!');
        fetchLeads();
      } else {
        alert('Failed to delete lead');
      }
    } catch (error) {
      console.error('Error deleting lead:', error);
      alert('Failed to delete lead');
    }
  };

  const handleStatusUpdate = (lead) => {
    setSelectedLeadForStatus(lead);
    setStatusUpdate('');
    setFollowUpDate('');
    setNewStatus(lead.lead_status || '');
    setShowStatusModal(true);
  };

  const submitStatusUpdate = async (e) => {
    e.preventDefault();
    if (!statusUpdate.trim()) {
      alert('Please enter a remark');
      return;
    }

    try {
      // First add to history
      const historyRes = await fetch('/api/leads/history', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          lead_id: selectedLeadForStatus.id,
          remarks: statusUpdate,
          follow_up_date: followUpDate || null
        })
      });

      if (!historyRes.ok) {
        alert('Failed to add update');
        return;
      }

      // If status changed, update the lead
      if (newStatus && newStatus !== selectedLeadForStatus.lead_status) {
        const leadRes = await fetch(`/api/leads/${selectedLeadForStatus.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            ...selectedLeadForStatus,
            lead_status: newStatus
          })
        });

        if (!leadRes.ok) {
          alert('Failed to update lead status');
          return;
        }
      }

      alert('Update added to history successfully!');
      setShowStatusModal(false);
      setStatusUpdate('');
      setFollowUpDate('');
      setNewStatus('');
      fetchLeads();
      
      // If history modal was open, refresh it
      if (showHistoryModal && selectedLeadForHistory?.id === selectedLeadForStatus.id) {
        const historyRes = await fetch(`/api/leads/history?lead_id=${selectedLeadForStatus.id}`);
        const data = await historyRes.json();
        setLeadHistory(data.history || []);
      }
      
      setSelectedLeadForStatus(null);
    } catch (error) {
      console.error('Error adding update:', error);
      alert('Failed to add update');
    }
  };

  const handleViewHistory = async (lead) => {
    setSelectedLeadForHistory(lead);
    setShowHistoryModal(true);
    setHistoryLoading(true);
    
    try {
      const res = await fetch(`/api/leads/history?lead_id=${lead.id}`);
      const data = await res.json();
      setLeadHistory(data.history || []);
    } catch (error) {
      console.error('Error fetching history:', error);
      setLeadHistory([]);
    } finally {
      setHistoryLoading(false);
    }
  };

  const handleViewLead = (lead) => {
    setSelectedLeadForView(lead);
    setShowViewModal(true);
  };

  const handleCall = (phone) => {
    window.location.href = `tel:${phone}`;
  };

  const handleWhatsApp = (phone) => {
    // Remove any non-digit characters
    const cleanPhone = phone.replace(/\D/g, '');
    // Open WhatsApp with the phone number
    window.open(`https://wa.me/${cleanPhone}`, '_blank');
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      city: '',
      website: '',
      priority: 'medium',
      lead_status: 'contacted',
      follow_up_date: '',
      next_follow_up_date: '',
      business_type: '',
      remarks: ''
    });
  };

  const getLatestRemark = (remarks) => {
    if (!remarks) return null;
    
    // Split remarks by double newlines to get individual remarks
    const remarksList = remarks.split('\n\n');
    // Get the last remark (most recent)
    const latestRemark = remarksList[remarksList.length - 1];
    
    // Extract timestamp and text
    const timestampMatch = latestRemark.match(/^\[(.*?)\]/);
    if (timestampMatch) {
      const timestamp = timestampMatch[1];
      const text = latestRemark.replace(/^\[.*?\]\s*/, '');
      return { timestamp, text };
    }
    
    return { timestamp: null, text: latestRemark };
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingLead(null);
    resetForm();
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getPriorityColor = (priority) => {
    switch(priority?.toLowerCase()) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status) => {
    switch(status?.toLowerCase()) {
      case 'contacted': return 'bg-purple-100 text-purple-800';
      case 'qualified': return 'bg-green-100 text-green-800';
      case 'proposal': return 'bg-yellow-100 text-yellow-800';
      case 'negotiation': return 'bg-orange-100 text-orange-800';
      case 'won': return 'bg-green-600 text-white';
      case 'lost': return 'bg-red-100 text-red-800';
      case 'call not connected': return 'bg-gray-100 text-gray-800';
      case 'on going process': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredLeads = leads.filter(lead => {
    const statusMatch = filterStatus === 'all' || lead.lead_status === filterStatus;
    const priorityMatch = filterPriority === 'all' || lead.priority === filterPriority;
    const businessTypeMatch = filterBusinessType === 'all' || lead.business_type === filterBusinessType;
    
    // Date range filtering
    let dateMatch = true;
    if (filterDateFrom || filterDateTo) {
      const leadDate = new Date(lead.created_at);
      if (filterDateFrom) {
        const fromDate = new Date(filterDateFrom);
        dateMatch = dateMatch && leadDate >= fromDate;
      }
      if (filterDateTo) {
        const toDate = new Date(filterDateTo);
        toDate.setHours(23, 59, 59, 999); // Include the entire end date
        dateMatch = dateMatch && leadDate <= toDate;
      }
    }
    
    return statusMatch && priorityMatch && businessTypeMatch && dateMatch;
  });

  // Sort filtered leads
  const sortedLeads = [...filteredLeads].sort((a, b) => {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);
    return sortOrder === 'desc' ? dateB - dateA : dateA - dateB ;
  });

  const stats = {
    total: leads.length,
    new: leads.filter(l => l.lead_status === 'new').length,
    high: leads.filter(l => l.priority === 'high').length,
    followUpToday: leads.filter(l => {
      if (!l.next_follow_up_date) return false;
      const today = new Date().toISOString().split('T')[0];
      const followUp = new Date(l.next_follow_up_date).toISOString().split('T')[0];
      return followUp === today;
    }).length
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              {!isLeadsUser && (
                <Link href="/admin" className="text-gray-600 hover:text-gray-900">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </Link>
              )}
              <h1 className="text-2xl font-bold text-gray-900">Leads Management</h1>
            </div>
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow p-4">
            <p className="text-gray-600 text-sm">Total Leads</p>
            <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <p className="text-gray-600 text-sm">New Leads</p>
            <p className="text-2xl font-bold text-blue-600">{stats.new}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <p className="text-gray-600 text-sm">High Priority</p>
            <p className="text-2xl font-bold text-red-600">{stats.high}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <p className="text-gray-600 text-sm">Follow-ups Today</p>
            <p className="text-2xl font-bold text-orange-600">{stats.followUpToday}</p>
          </div>
        </div>

        {/* Actions Bar */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
          <div className="flex flex-wrap gap-3">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="contacted">Contacted</option>
              <option value="qualified">Qualified</option>
              <option value="proposal">Proposal</option>
              <option value="negotiation">Negotiation</option>
              <option value="won">Won</option>
              <option value="lost">Lost</option>
              <option value="call not connected">Call not connected</option>
              <option value="on going process">On Going Process</option>
            </select>
            
            <select
              value={filterPriority}
              onChange={(e) => setFilterPriority(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Priority</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>

            <select
              value={filterBusinessType}
              onChange={(e) => setFilterBusinessType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Business Types</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Web Development">Web Development</option>
              <option value="Google Ads">Google Ads</option>
              <option value="SEO">SEO</option>
              <option value="Content writing services">Content writing services</option>
              <option value="Meta Ads">Meta Ads</option>
              <option value="Instagram Ads">Instagram Ads</option>
              <option value="WhatsApp Marketing">WhatsApp Marketing</option>
              <option value="GMB SEO">GMB SEO</option>
              <option value="GMB Verification">GMB Verification</option>
              <option value="GMB No Not live">GMB No Not live</option>
              <option value="GMB Suspended">GMB Suspended</option>
              <option value="Software Development">Software Development</option>
              <option value="Social Media Services">Social Media Services</option>
            </select>

            <input
              type="date"
              value={filterDateFrom}
              onChange={(e) => setFilterDateFrom(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="From Date"
            />

            <input
              type="date"
              value={filterDateTo}
              onChange={(e) => setFilterDateTo(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="To Date"
            />

            {(filterStatus !== 'all' || filterPriority !== 'all' || filterBusinessType !== 'all' || filterDateFrom || filterDateTo) && (
              <button
                onClick={() => {
                  setFilterStatus('all');
                  setFilterPriority('all');
                  setFilterBusinessType('all');
                  setFilterDateFrom('');
                  setFilterDateTo('');
                }}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Clear Filters
              </button>
            )}

            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="desc">Latest First</option>
              <option value="asc">Oldest First</option>
            </select>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            + Add New Lead
          </button>
        </div>

        {/* Leads List */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-600">Loading leads...</p>
          </div>
        ) : filteredLeads.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <p className="text-gray-500 text-lg">No leads found matching the filters.</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Lead Info
                    </th>
                    <th className="p-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Business Type
                    </th>
                    <th className="p-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Priority
                    </th>
                    <th className="p-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Next Follow-up
                    </th>
                    <th className="p-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Remarks
                    </th>
                    <th className="p-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Latest Update
                    </th>
                    <th className="p-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="p-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {sortedLeads.map((lead) => (
                    <tr 
                      key={lead.id} 
                      onClick={() => handleViewLead(lead)}
                      className={`cursor-pointer hover:bg-gray-100 transition-colors ${lead.is_created_today ? 'bg-green-50 border-l-4 border-l-green-500' : ''}`}
                    >
                      <td className="p-2">
                        <div>
                          <p className="text-sm font-medium text-gray-900">{lead.name}</p>
                          <p className="text-xs text-gray-500">{lead.phone}</p>
                          {lead.email && (
                            <p className="text-xs text-gray-500">{lead.email}</p>
                          )}
                          {lead.city && (
                            <p className="text-xs text-gray-400">{lead.city}</p>
                          )}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap text-sm text-gray-900">
                        {lead.business_type || 'N/A'}
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(lead.priority)}`}>
                          {lead.priority || 'N/A'}
                        </span>
                      </td>
                      <td className="p-2 whitespace-nowrap text-sm font-semibold text-gray-500">
                        {formatDate(lead.next_follow_up_date)}
                      </td>
                      <td className="p-2 text-sm">
                        {lead.remarks ? (
                          <div>
                            <p className="text-gray-700 truncate max-w-30" title={lead.remarks}>
                              {lead.remarks}
                            </p>
                          </div>
                        ) : (
                          <span className="text-gray-400 italic">No remarks</span>
                        )}
                      </td>
                      <td className="p-2 text-sm">
                        <div className="flex items-start gap-2">
                          <div className="flex-1 min-w-0 max-w-50">
                            {lead.latest_remark ? (
                              <div>
                                <p className="text-gray-700 truncate mb-1" title={lead.latest_remark}>
                                  {lead.latest_remark}
                                </p>
                                {lead.latest_remark_date && (
                                  <p className="text-xs text-gray-400">
                                    {new Date(lead.latest_remark_date).toLocaleString('en-US', {
                                      year: 'numeric',
                                      month: 'short',
                                      day: 'numeric',
                                      hour: '2-digit',
                                      minute: '2-digit'
                                    })}
                                  </p>
                                )}
                              </div>
                            ) : (
                              <span className="text-gray-400 italic">No updates</span>
                            )}
                          </div>
                          <button
                            onClick={() => handleViewHistory(lead)}
                            className="flex-shrink-0 bg-orange-500 text-white hover:text-white p-1 rounded hover:bg-orange-600 transition-colors"
                            title="View History"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </button>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap text-center">
                        <div className="flex gap-2 justify-center">
                          <button
                            onClick={() => handleCall(lead.phone)}
                            className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
                            title="Call"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                          </button>
                          <button
                            onClick={() => handleWhatsApp(lead.phone)}
                            className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition-colors"
                            title="WhatsApp"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                            </svg>
                          </button>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => handleStatusUpdate(lead)}
                          className="text-purple-600 hover:text-purple-900 mr-3"
                        >
                          Update
                        </button>
                        <button
                          onClick={() => handleEdit(lead)}
                          className="text-blue-600 hover:text-blue-900 mr-3"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(lead.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center rounded-t-lg z-10">
              <h2 className="text-xl font-bold text-gray-900">
                {editingLead ? 'Edit Lead' : 'Add New Lead'}
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter lead name"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter phone number"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter email address"
                  />
                </div>

                {/* City */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter city"
                  />
                </div>

                {/* Website */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Website
                  </label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="https://example.com"
                  />
                </div>

                {/* Business Type */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Type *
                  </label>
                  <select
                    name="business_type"
                    value={formData.business_type}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Business Type</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Google Ads">Google Ads</option>
                    <option value="SEO">SEO</option>
                    <option value="Content writing services">Content writing services</option>
                    <option value="Meta Ads">Meta Ads</option>
                    <option value="Instagram Ads">Instagram Ads</option>
                    <option value="WhatsApp Marketing">WhatsApp Marketing</option>
                    <option value="GMB SEO">GMB SEO</option>
                    <option value="GMB Verification">GMB Verification</option>
                    <option value="GMB No Not live">GMB No Not live</option>
                    <option value="GMB Suspended">GMB Suspended</option>
                    <option value="Software Development">Software Development</option>
                    <option value="Social Media Services">Social Media Services</option>
                  </select>
                </div>

                {/* Priority */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Priority
                  </label>
                  <select
                    name="priority"
                    value={formData.priority}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>

                {/* Lead Status */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Status
                  </label>
                  <select
                    name="lead_status"
                    value={formData.lead_status}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="contacted">Contacted</option>
                    <option value="qualified">Qualified</option>
                    <option value="proposal">Proposal</option>
                    <option value="negotiation">Negotiation</option>
                    <option value="won">Won</option>
                    <option value="lost">Lost</option>
                    <option value="call not connected">Call not connected</option>
                    <option value="on going process">On Going Process</option>
                  </select>
                </div>

                {editingLead && (
                  <>
                    {/* Follow-up Date */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Follow-up Date
                      </label>
                      <input
                        type="date"
                        name="follow_up_date"
                        value={formData.follow_up_date}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    {/* Next Follow-up Date */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Next Follow-up Date
                      </label>
                      <input
                        type="date"
                        name="next_follow_up_date"
                        value={formData.next_follow_up_date}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </>
                )}

                {/* Remarks */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Remarks
                  </label>
                  <textarea
                    name="remarks"
                    value={formData.remarks}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Add notes, remarks, or important details about this lead"
                  ></textarea>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  {editingLead ? 'Update Lead' : 'Create Lead'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Status Update Modal */}
      {showStatusModal && selectedLeadForStatus && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full">
            <div className="bg-white border-b px-6 py-4 flex justify-between items-center rounded-t-lg">
              <h2 className="text-xl font-bold text-gray-900">
                Add Update to History - {selectedLeadForStatus.name}
              </h2>
              <button
                onClick={() => {
                  setShowStatusModal(false);
                  setSelectedLeadForStatus(null);
                  setStatusUpdate('');
                  setFollowUpDate('');
                }}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>

            <form onSubmit={submitStatusUpdate} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Change Status
                </label>
                <select
                  value={newStatus}
                  onChange={(e) => setNewStatus(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="contacted">Contacted</option>
                  <option value="qualified">Qualified</option>
                  <option value="proposal">Proposal</option>
                  <option value="negotiation">Negotiation</option>
                  <option value="won">Won</option>
                  <option value="lost">Lost</option>
                  <option value="call not connected">Call not connected</option>
                  <option value="on going process">On Going Process</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Follow-up Date
                </label>
                <input
                  type="date"
                  value={followUpDate}
                  onChange={(e) => setFollowUpDate(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Remarks *
                </label>
                <textarea
                  value={statusUpdate}
                  onChange={(e) => setStatusUpdate(e.target.value)}
                  rows="8"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter remarks, notes, or communication details..."
                ></textarea>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t">
                <button
                  type="button"
                  onClick={() => {
                    setShowStatusModal(false);
                    setSelectedLeadForStatus(null);
                    setStatusUpdate('');
                    setFollowUpDate('');
                    setNewStatus('');
                  }}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
                >
                  Add to History
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* History Modal */}
      {showHistoryModal && selectedLeadForHistory && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] flex flex-col">
            <div className="bg-white border-b px-6 py-4 flex justify-between items-center rounded-t-lg">
              <h2 className="text-xl font-bold text-gray-900">
                Update History - {selectedLeadForHistory.name}
              </h2>
              <button
                onClick={() => {
                  setShowHistoryModal(false);
                  setSelectedLeadForHistory(null);
                  setLeadHistory([]);
                }}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>

            <div className="p-6 overflow-y-auto flex-1">
              {historyLoading ? (
                <div className="text-center py-12">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
                  <p className="mt-4 text-gray-600">Loading history...</p>
                </div>
              ) : leadHistory.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500">No update history found for this lead.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {leadHistory.map((entry, index) => (
                    <div key={entry.id} className="bg-gray-50 rounded-lg p-4 border-l-4 border-purple-500">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            Update #{leadHistory.length - index}
                          </p>
                          {entry.follow_up_date && (
                            <p className="text-xs text-blue-600 mt-1">
                              Follow-up: {formatDate(entry.follow_up_date)}
                            </p>
                          )}
                        </div>
                        <p className="text-xs text-gray-500">
                          {new Date(entry.created_at).toLocaleString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </p>
                      </div>
                      <p className="text-gray-700 whitespace-pre-wrap">{entry.remarks}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="border-t px-6 py-4 bg-gray-50 rounded-b-lg flex justify-between items-center">
              <button
                onClick={() => {
                  setShowHistoryModal(false);
                  setSelectedLeadForHistory(null);
                  setLeadHistory([]);
                  // Open the update modal for this lead
                  setSelectedLeadForStatus(selectedLeadForHistory);
                  setStatusUpdate('');
                  setFollowUpDate('');
                  setShowStatusModal(true);
                }}
                className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
              >
                + Add New Update
              </button>
              <button
                onClick={() => {
                  setShowHistoryModal(false);
                  setSelectedLeadForHistory(null);
                  setLeadHistory([]);
                }}
                className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View Lead Modal */}
      {showViewModal && selectedLeadForView && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center rounded-t-lg z-10">
              <h2 className="text-xl font-bold text-gray-900">
                {selectedLeadForView.name}
              </h2>
              <button
                onClick={() => {
                  setShowViewModal(false);
                  setSelectedLeadForView(null);
                }}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Status Badge */}
              <div className="flex items-center gap-4">
                <span className={`px-4 py-2 text-sm font-medium rounded-full ${getStatusColor(selectedLeadForView.lead_status)}`}>
                  {selectedLeadForView.lead_status}
                </span>
                <span className={`px-4 py-2 text-sm font-medium rounded-full ${getPriorityColor(selectedLeadForView.priority)}`}>
                  {selectedLeadForView.priority}
                </span>
              </div>

              {/* Lead Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs font-semibold text-gray-600 uppercase mb-1">Name</p>
                  <p className="text-lg font-medium text-gray-900">{selectedLeadForView.name}</p>
                </div>

                {/* Phone */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs font-semibold text-gray-600 uppercase mb-1">Phone</p>
                  <div className="flex items-center gap-3">
                    <p className="text-lg font-medium text-gray-900">{selectedLeadForView.phone}</p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleCall(selectedLeadForView.phone)}
                        className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors"
                        title="Call"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </button>
                      <button
                        onClick={() => handleWhatsApp(selectedLeadForView.phone)}
                        className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition-colors"
                        title="WhatsApp"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs font-semibold text-gray-600 uppercase mb-1">Email</p>
                  <p className="text-lg font-medium text-gray-900">{selectedLeadForView.email || 'N/A'}</p>
                </div>

                {/* City */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs font-semibold text-gray-600 uppercase mb-1">City</p>
                  <p className="text-lg font-medium text-gray-900">{selectedLeadForView.city || 'N/A'}</p>
                </div>

                {/* Website */}
                <div className="bg-gray-50 rounded-lg p-4 md:col-span-2">
                  <p className="text-xs font-semibold text-gray-600 uppercase mb-1">Website</p>
                  <p className="text-lg font-medium text-gray-900">
                    {selectedLeadForView.website ? (
                      <a href={selectedLeadForView.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        {selectedLeadForView.website}
                      </a>
                    ) : (
                      'N/A'
                    )}
                  </p>
                </div>

                {/* Business Type */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs font-semibold text-gray-600 uppercase mb-1">Business Type</p>
                  <p className="text-lg font-medium text-gray-900">{selectedLeadForView.business_type || 'N/A'}</p>
                </div>

                {/* Follow-up Date */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs font-semibold text-gray-600 uppercase mb-1">Follow-up Date</p>
                  <p className="text-lg font-medium text-gray-900">{formatDate(selectedLeadForView.follow_up_date)}</p>
                </div>

                {/* Next Follow-up Date */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs font-semibold text-gray-600 uppercase mb-1">Next Follow-up Date</p>
                  <p className="text-lg font-medium text-gray-900">{formatDate(selectedLeadForView.next_follow_up_date)}</p>
                </div>

                {/* Created At */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs font-semibold text-gray-600 uppercase mb-1">Created At</p>
                  <p className="text-lg font-medium text-gray-900">
                    {selectedLeadForView.created_at ? new Date(selectedLeadForView.created_at).toLocaleString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    }) : 'N/A'}
                  </p>
                </div>
              </div>

              {/* Remarks Section */}
              {selectedLeadForView.remarks && (
                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-l-blue-500">
                  <p className="text-xs font-semibold text-gray-600 uppercase mb-2">Remarks</p>
                  <p className="text-gray-700 whitespace-pre-wrap">{selectedLeadForView.remarks}</p>
                </div>
              )}

              {/* Latest Update Section */}
              {selectedLeadForView.latest_remark && (
                <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-l-orange-500">
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-xs font-semibold text-gray-600 uppercase">Latest Update</p>
                    <p className="text-xs text-gray-500">
                      {selectedLeadForView.latest_remark_date ? new Date(selectedLeadForView.latest_remark_date).toLocaleString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      }) : 'N/A'}
                    </p>
                  </div>
                  <p className="text-gray-700 whitespace-pre-wrap">{selectedLeadForView.latest_remark}</p>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="border-t px-6 py-4 bg-gray-50 rounded-b-lg flex justify-end gap-3">
              <button
                onClick={() => { setShowViewModal(false); handleViewHistory(selectedLeadForView); }}
                className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium"
              >
                View Full History
              </button>
              <button
                onClick={() => {
                  setShowViewModal(false);
                  handleEdit(selectedLeadForView);
                }}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Edit Lead
              </button>
              <button
                onClick={() => { setShowViewModal(false); handleStatusUpdate(selectedLeadForView); }}
                className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
              >
                Add Update
              </button>
              <button
                onClick={() => {
                  setShowViewModal(false);
                  setSelectedLeadForView(null);
                }}
                className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
