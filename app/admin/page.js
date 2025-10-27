'use client';
import { UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const { user } = useUser();
  const router = useRouter();
  const [stats, setStats] = useState({
    totalContacts: 0,
    totalCareers: 0,
    totalLeads: 0,
    totalBlogs: 0,
    thisWeek: 0,
    thisMonth: 0,
    highPriorityLeads: 0,
    newLeads: 0,
    publishedBlogs: 0,
    loading: true
  });
  const [contactsBySource, setContactsBySource] = useState([]);
  const [careersByPosition, setCareersByPosition] = useState([]);
  const [leadsByBusinessType, setLeadsByBusinessType] = useState([]);
  const [leadsByStatus, setLeadsByStatus] = useState([]);
  const [monthlyTrend, setMonthlyTrend] = useState([]);
  const [recentActivity, setRecentActivity] = useState([]);

  useEffect(() => {
    // Redirect leads user to leads page
    if (user?.username?.toLowerCase() === 'leads') {
      router.push('/admin/leads');
      return;
    }
    fetchStats();
  }, [user]);

  const fetchStats = async () => {
    try {
      // Fetch contacts
      const contactsRes = await fetch('/api/contacts');
      const contactsData = await contactsRes.json();
      const contacts = contactsData.success ? contactsData.contacts : [];

      // Fetch careers
      const careersRes = await fetch('/api/careers');
      const careersData = await careersRes.json();
      const careers = careersData.success ? careersData.applications : [];

      // Fetch leads
      const leadsRes = await fetch('/api/leads');
      const leadsData = await leadsRes.json();
      const leads = leadsData.leads || [];

      // Fetch blogs
      const blogsRes = await fetch('/api/blogs');
      const blogsData = await blogsRes.json();
      const blogs = blogsData.blogs || [];

      // Calculate time-based submissions
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
      
      const oneMonthAgo = new Date();
      oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
      
      const thisWeekContacts = contacts.filter(c => new Date(c.created_at) >= oneWeekAgo).length;
      const thisWeekCareers = careers.filter(c => new Date(c.created_at) >= oneWeekAgo).length;
      const thisWeekLeads = leads.filter(l => new Date(l.created_at) >= oneWeekAgo).length;

      const thisMonthContacts = contacts.filter(c => new Date(c.created_at) >= oneMonthAgo).length;
      const thisMonthCareers = careers.filter(c => new Date(c.created_at) >= oneMonthAgo).length;
      const thisMonthLeads = leads.filter(l => new Date(l.created_at) >= oneMonthAgo).length;

      // Group contacts by source
      const sourceGroups = contacts.reduce((acc, contact) => {
        const source = contact.source || 'unknown';
        acc[source] = (acc[source] || 0) + 1;
        return acc;
      }, {});
      const sourceData = Object.entries(sourceGroups)
        .map(([name, count]) => ({ name: name.replace(/_/g, ' '), count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 6);

      // Group careers by position
      const positionGroups = careers.reduce((acc, career) => {
        const position = career.apply_for || 'unknown';
        acc[position] = (acc[position] || 0) + 1;
        return acc;
      }, {});
      const positionData = Object.entries(positionGroups)
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 6);

      // Group leads by business type
      const businessTypeGroups = leads.reduce((acc, lead) => {
        const type = lead.business_type || 'unknown';
        acc[type] = (acc[type] || 0) + 1;
        return acc;
      }, {});
      const businessTypeData = Object.entries(businessTypeGroups)
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 6);

      // Group leads by status
      const statusGroups = leads.reduce((acc, lead) => {
        const status = lead.lead_status || 'unknown';
        acc[status] = (acc[status] || 0) + 1;
        return acc;
      }, {});
      const statusData = Object.entries(statusGroups)
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count);

      // Calculate monthly trend (last 6 months, most recent first)
      const monthlyData = [];
      for (let i = 0; i <= 5; i++) {
        const date = new Date();
        date.setMonth(date.getMonth() - i);
        const monthStart = new Date(date.getFullYear(), date.getMonth(), 1);
        const monthEnd = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        
        const monthContacts = contacts.filter(c => {
          const createdDate = new Date(c.created_at);
          return createdDate >= monthStart && createdDate <= monthEnd;
        }).length;
        
        const monthCareers = careers.filter(c => {
          const createdDate = new Date(c.created_at);
          return createdDate >= monthStart && createdDate <= monthEnd;
        }).length;

        const monthLeads = leads.filter(l => {
          const createdDate = new Date(l.created_at);
          return createdDate >= monthStart && createdDate <= monthEnd;
        }).length;
        
        monthlyData.push({
          month: date.toLocaleDateString('en-US', { month: 'short' }),
          contacts: monthContacts,
          careers: monthCareers,
          leads: monthLeads,
          total: monthContacts + monthCareers + monthLeads
        });
      }

      // Get recent activity (last 8 submissions)
      const allActivity = [
        ...contacts.map(c => ({ ...c, type: 'contact' })),
        ...careers.map(c => ({ ...c, type: 'career' })),
        ...leads.map(l => ({ ...l, type: 'lead' }))
      ].sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).slice(0, 8);

      setStats({
        totalContacts: contacts.length,
        totalCareers: careers.length,
        totalLeads: leads.length,
        totalBlogs: blogs.length,
        thisWeek: thisWeekContacts + thisWeekCareers + thisWeekLeads,
        thisMonth: thisMonthContacts + thisMonthCareers + thisMonthLeads,
        highPriorityLeads: leads.filter(l => l.priority === 'high').length,
        newLeads: leads.filter(l => l.lead_status === 'new').length,
        publishedBlogs: blogs.filter(b => b.status === 0).length,
        loading: false
      });
      setContactsBySource(sourceData);
      setCareersByPosition(positionData);
      setLeadsByBusinessType(businessTypeData);
      setLeadsByStatus(statusData);
      setMonthlyTrend(monthlyData);
      setRecentActivity(allActivity);
    } catch (error) {
      console.error('Error fetching stats:', error);
      setStats(prev => ({ ...prev, loading: false }));
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            </div>
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Contacts Card */}
          <Link href="/admin/contacts" className="group">
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 border-2 border-transparent hover:border-blue-500">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Contact Submissions</h2>
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <p className="text-gray-600 mb-4">View and manage all contact form submissions from your website.</p>
              <div className="flex items-center text-blue-600 font-medium group-hover:gap-2 transition-all">
                View Contacts
                <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Careers Card */}
          <Link href="/admin/careers" className="group">
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 border-2 border-transparent hover:border-green-500">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Career Applications</h2>
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-gray-600 mb-4">Review job applications and manage candidate information.</p>
              <div className="flex items-center text-green-600 font-medium group-hover:gap-2 transition-all">
                View Applications
                <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Blogs Card */}
          <Link href="/admin/blogs" className="group">
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 border-2 border-transparent hover:border-purple-500">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Blog Management</h2>
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <p className="text-gray-600 mb-4">Create, edit, and manage blog posts for your website.</p>
              <div className="flex items-center text-purple-600 font-medium group-hover:gap-2 transition-all">
                Manage Blogs
                <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Leads Card */}
          <Link href="/admin/leads" className="group">
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 border-2 border-transparent hover:border-orange-500">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Leads Management</h2>
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <p className="text-gray-600 mb-4">Track and manage business leads, follow-ups, and prospects.</p>
              <div className="flex items-center text-orange-600 font-medium group-hover:gap-2 transition-all">
                Manage Leads
                <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats Overview</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-xs text-gray-600 mb-1">Total Contacts</p>
              <p className="text-2xl font-bold text-blue-600">
                {stats.loading ? '...' : stats.totalContacts}
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <p className="text-xs text-gray-600 mb-1">Total Careers</p>
              <p className="text-2xl font-bold text-green-600">
                {stats.loading ? '...' : stats.totalCareers}
              </p>
            </div>
            <div className="bg-orange-50 rounded-lg p-4">
              <p className="text-xs text-gray-600 mb-1">Total Leads</p>
              <p className="text-2xl font-bold text-orange-600">
                {stats.loading ? '...' : stats.totalLeads}
              </p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <p className="text-xs text-gray-600 mb-1">Total Blogs</p>
              <p className="text-2xl font-bold text-purple-600">
                {stats.loading ? '...' : stats.totalBlogs}
              </p>
            </div>
            <div className="bg-indigo-50 rounded-lg p-4">
              <p className="text-xs text-gray-600 mb-1">This Week</p>
              <p className="text-2xl font-bold text-indigo-600">
                {stats.loading ? '...' : stats.thisWeek}
              </p>
            </div>
            <div className="bg-pink-50 rounded-lg p-4">
              <p className="text-xs text-gray-600 mb-1">This Month</p>
              <p className="text-2xl font-bold text-pink-600">
                {stats.loading ? '...' : stats.thisMonth}
              </p>
            </div>
          </div>
        </div>

        {/* Leads Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-lg shadow-lg p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-100 text-sm mb-1">High Priority Leads</p>
                <p className="text-4xl font-bold">{stats.loading ? '...' : stats.highPriorityLeads}</p>
              </div>
              <svg className="w-12 h-12 text-red-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm mb-1">New Leads</p>
                <p className="text-4xl font-bold">{stats.loading ? '...' : stats.newLeads}</p>
              </div>
              <svg className="w-12 h-12 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg shadow-lg p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm mb-1">Published Blogs</p>
                <p className="text-4xl font-bold">{stats.loading ? '...' : stats.publishedBlogs}</p>
              </div>
              <svg className="w-12 h-12 text-purple-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Monthly Trend Chart */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">6-Month Activity Trend</h3>
          {stats.loading ? (
            <div className="text-center py-8 text-gray-500">Loading...</div>
          ) : (
            <div className="space-y-4">
              {monthlyTrend.map((month, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-gray-700">{month.month}</span>
                    <span className="text-gray-600">Total: {month.total}</span>
                  </div>
                  <div className="flex gap-1 h-8">
                    {month.contacts > 0 && (
                      <div 
                        className="bg-blue-500 rounded flex items-center justify-center text-white text-xs font-medium hover:bg-blue-600 transition-colors"
                        style={{ width: `${(month.contacts / month.total) * 100}%` }}
                        title={`Contacts: ${month.contacts}`}
                      >
                        {month.contacts > 0 && month.contacts}
                      </div>
                    )}
                    {month.careers > 0 && (
                      <div 
                        className="bg-green-500 rounded flex items-center justify-center text-white text-xs font-medium hover:bg-green-600 transition-colors"
                        style={{ width: `${(month.careers / month.total) * 100}%` }}
                        title={`Careers: ${month.careers}`}
                      >
                        {month.careers > 0 && month.careers}
                      </div>
                    )}
                    {month.leads > 0 && (
                      <div 
                        className="bg-orange-500 rounded flex items-center justify-center text-white text-xs font-medium hover:bg-orange-600 transition-colors"
                        style={{ width: `${(month.leads / month.total) * 100}%` }}
                        title={`Leads: ${month.leads}`}
                      >
                        {month.leads > 0 && month.leads}
                      </div>
                    )}
                  </div>
                  <div className="flex gap-4 mt-1 text-xs text-gray-500">
                    <span>Contacts: {month.contacts}</span>
                    <span>Careers: {month.careers}</span>
                    <span>Leads: {month.leads}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Leads by Business Type */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Leads by Business Type</h3>
            {stats.loading ? (
              <div className="text-center py-8 text-gray-500">Loading...</div>
            ) : leadsByBusinessType.length === 0 ? (
              <div className="text-center py-8 text-gray-500">No data available</div>
            ) : (
              <div className="space-y-3">
                {leadsByBusinessType.map((item, index) => {
                  const maxCount = Math.max(...leadsByBusinessType.map(i => i.count));
                  const percentage = (item.count / maxCount) * 100;
                  return (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-700">{item.name}</span>
                        <span className="font-semibold text-gray-900">{item.count}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-orange-600 h-3 rounded-full transition-all duration-500"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Leads by Status */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Leads by Status</h3>
            {stats.loading ? (
              <div className="text-center py-8 text-gray-500">Loading...</div>
            ) : leadsByStatus.length === 0 ? (
              <div className="text-center py-8 text-gray-500">No data available</div>
            ) : (
              <div className="space-y-3">
                {leadsByStatus.map((item, index) => {
                  const maxCount = Math.max(...leadsByStatus.map(i => i.count));
                  const percentage = (item.count / maxCount) * 100;
                  const colorClass = item.name === 'won' ? 'bg-green-600' : 
                                    item.name === 'lost' ? 'bg-red-600' : 
                                    item.name === 'new' ? 'bg-blue-600' : 'bg-yellow-600';
                  return (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-700 capitalize">{item.name}</span>
                        <span className="font-semibold text-gray-900">{item.count}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className={`${colorClass} h-3 rounded-full transition-all duration-500`}
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Contacts by Source */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Contact Sources</h3>
            {stats.loading ? (
              <div className="text-center py-8 text-gray-500">Loading...</div>
            ) : contactsBySource.length === 0 ? (
              <div className="text-center py-8 text-gray-500">No data available</div>
            ) : (
              <div className="space-y-3">
                {contactsBySource.map((item, index) => {
                  const maxCount = Math.max(...contactsBySource.map(i => i.count));
                  const percentage = (item.count / maxCount) * 100;
                  return (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-700 capitalize">{item.name}</span>
                        <span className="font-semibold text-gray-900">{item.count}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-blue-600 h-3 rounded-full transition-all duration-500"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Careers by Position */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Applications by Position</h3>
            {stats.loading ? (
              <div className="text-center py-8 text-gray-500">Loading...</div>
            ) : careersByPosition.length === 0 ? (
              <div className="text-center py-8 text-gray-500">No data available</div>
            ) : (
              <div className="space-y-3">
                {careersByPosition.map((item, index) => {
                  const maxCount = Math.max(...careersByPosition.map(i => i.count));
                  const percentage = (item.count / maxCount) * 100;
                  return (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-700">{item.name}</span>
                        <span className="font-semibold text-gray-900">{item.count}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-green-600 h-3 rounded-full transition-all duration-500"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          {stats.loading ? (
            <div className="text-center py-8 text-gray-500">Loading...</div>
          ) : recentActivity.length === 0 ? (
            <div className="text-center py-8 text-gray-500">No recent activity</div>
          ) : (
            <div className="space-y-3">
              {recentActivity.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${
                      item.type === 'contact' ? 'bg-blue-600' : 
                      item.type === 'career' ? 'bg-green-600' : 
                      'bg-orange-600'
                    }`}></div>
                    <div>
                      <p className="font-medium text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-600">{item.email || item.phone || 'N/A'}</p>
                      {item.type === 'lead' && item.business_type && (
                        <p className="text-xs text-gray-500 mt-1">{item.business_type}</p>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">{formatDate(item.created_at)}</p>
                    <span className={`inline-block mt-1 px-2 py-1 rounded-full text-xs ${
                      item.type === 'contact' ? 'bg-blue-100 text-blue-800' : 
                      item.type === 'career' ? 'bg-green-100 text-green-800' : 
                      'bg-orange-100 text-orange-800'
                    }`}>
                      {item.type === 'contact' ? 'Contact' : item.type === 'career' ? 'Career' : 'Lead'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
