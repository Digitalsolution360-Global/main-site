'use client';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalContacts: 0,
    totalCareers: 0,
    thisWeek: 0,
    loading: true
  });
  const [contactsBySource, setContactsBySource] = useState([]);
  const [careersByPosition, setCareersByPosition] = useState([]);
  const [recentActivity, setRecentActivity] = useState([]);

  useEffect(() => {
    fetchStats();
  }, []);

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

      // Calculate this week's submissions
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
      
      const thisWeekContacts = contacts.filter(c => new Date(c.created_at) >= oneWeekAgo).length;
      const thisWeekCareers = careers.filter(c => new Date(c.created_at) >= oneWeekAgo).length;

      // Group contacts by source
      const sourceGroups = contacts.reduce((acc, contact) => {
        const source = contact.source || 'unknown';
        acc[source] = (acc[source] || 0) + 1;
        return acc;
      }, {});
      const sourceData = Object.entries(sourceGroups)
        .map(([name, count]) => ({ name: name.replace(/_/g, ' '), count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);

      // Group careers by position
      const positionGroups = careers.reduce((acc, career) => {
        const position = career.apply_for || 'unknown';
        acc[position] = (acc[position] || 0) + 1;
        return acc;
      }, {});
      const positionData = Object.entries(positionGroups)
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count);

      // Get recent activity (last 5 submissions)
      const allActivity = [
        ...contacts.map(c => ({ ...c, type: 'contact' })),
        ...careers.map(c => ({ ...c, type: 'career' }))
      ].sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).slice(0, 5);

      setStats({
        totalContacts: contacts.length,
        totalCareers: careers.length,
        thisWeek: thisWeekContacts + thisWeekCareers,
        loading: false
      });
      setContactsBySource(sourceData);
      setCareersByPosition(positionData);
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
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Total Contacts</p>
              <p className="text-2xl font-bold text-blue-600">
                {stats.loading ? '...' : stats.totalContacts}
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Total Applications</p>
              <p className="text-2xl font-bold text-green-600">
                {stats.loading ? '...' : stats.totalCareers}
              </p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">This Week</p>
              <p className="text-2xl font-bold text-purple-600">
                {stats.loading ? '...' : stats.thisWeek}
              </p>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
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
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-500"
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
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-600 h-2 rounded-full transition-all duration-500"
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
                    <div className={`w-2 h-2 rounded-full ${item.type === 'contact' ? 'bg-blue-600' : 'bg-green-600'}`}></div>
                    <div>
                      <p className="font-medium text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-600">{item.email}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">{formatDate(item.created_at)}</p>
                    <span className={`inline-block mt-1 px-2 py-1 rounded-full text-xs ${
                      item.type === 'contact' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {item.type === 'contact' ? 'Contact' : 'Career'}
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
