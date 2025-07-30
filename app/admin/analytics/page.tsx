'use client'

import { useState } from 'react'
import { 
  ChartBarIcon,
  UsersIcon,
  EyeIcon,
  GlobeAltIcon,
  CalendarIcon,
  CurrencyDollarIcon,
  TrendingUpIcon,
  TrendingDownIcon
} from '@heroicons/react/24/outline'

const analyticsData = {
  overview: {
    totalVisitors: 15420,
    uniqueVisitors: 8920,
    pageViews: 45680,
    bounceRate: 32.5,
    avgSessionDuration: '4m 32s',
    conversionRate: 2.8
  },
  topPages: [
    { page: '/', views: 12540, change: 12.5 },
    { page: '/about', views: 8920, change: 8.2 },
    { page: '/services', views: 6540, change: 15.3 },
    { page: '/contact', views: 4320, change: -2.1 },
    { page: '/news', views: 3890, change: 22.7 }
  ],
  trafficSources: [
    { source: 'Organic Search', percentage: 45.2, visitors: 6980 },
    { source: 'Direct', percentage: 28.7, visitors: 4430 },
    { source: 'Social Media', percentage: 15.3, visitors: 2360 },
    { source: 'Referral', percentage: 8.2, visitors: 1260 },
    { source: 'Email', percentage: 2.6, visitors: 400 }
  ],
  visitorStats: {
    newVisitors: 65.2,
    returningVisitors: 34.8,
    mobileUsers: 58.3,
    desktopUsers: 41.7
  },
  engagement: {
    newsletterSubscribers: 1240,
    jobApplications: 156,
    eventRegistrations: 89,
    contactFormSubmissions: 234,
    donations: 67
  }
}

export default function Analytics() {
  const [timeRange, setTimeRange] = useState('30d')

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="text-gray-600">Monitor website performance and user engagement</p>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="1y">Last year</option>
          </select>
          <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
            Export Report
          </button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <UsersIcon className="h-5 w-5 text-blue-600" />
              </div>
            </div>
            <div className="ml-4 flex-1">
              <p className="text-sm font-medium text-gray-500">Total Visitors</p>
              <p className="text-2xl font-semibold text-gray-900">{analyticsData.overview.totalVisitors.toLocaleString()}</p>
            </div>
            <div className="flex items-center text-green-600">
              <TrendingUpIcon className="h-4 w-4 mr-1" />
              <span className="text-sm">+12.5%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <EyeIcon className="h-5 w-5 text-green-600" />
              </div>
            </div>
            <div className="ml-4 flex-1">
              <p className="text-sm font-medium text-gray-500">Page Views</p>
              <p className="text-2xl font-semibold text-gray-900">{analyticsData.overview.pageViews.toLocaleString()}</p>
            </div>
            <div className="flex items-center text-green-600">
              <TrendingUpIcon className="h-4 w-4 mr-1" />
              <span className="text-sm">+8.3%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <GlobeAltIcon className="h-5 w-5 text-purple-600" />
              </div>
            </div>
            <div className="ml-4 flex-1">
              <p className="text-sm font-medium text-gray-500">Bounce Rate</p>
              <p className="text-2xl font-semibold text-gray-900">{analyticsData.overview.bounceRate}%</p>
            </div>
            <div className="flex items-center text-red-600">
              <TrendingDownIcon className="h-4 w-4 mr-1" />
              <span className="text-sm">-2.1%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <CurrencyDollarIcon className="h-5 w-5 text-orange-600" />
              </div>
            </div>
            <div className="ml-4 flex-1">
              <p className="text-sm font-medium text-gray-500">Conversion Rate</p>
              <p className="text-2xl font-semibold text-gray-900">{analyticsData.overview.conversionRate}%</p>
            </div>
            <div className="flex items-center text-green-600">
              <TrendingUpIcon className="h-4 w-4 mr-1" />
              <span className="text-sm">+1.2%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Charts and Detailed Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Pages */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Top Pages</h2>
            <p className="text-sm text-gray-600">Most visited pages</p>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {analyticsData.topPages.map((page, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-900 w-32 truncate">{page.page}</span>
                    <span className="text-sm text-gray-500 ml-4">{page.views.toLocaleString()} views</span>
                  </div>
                  <div className={`flex items-center text-sm ${
                    page.change > 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {page.change > 0 ? (
                      <TrendingUpIcon className="h-4 w-4 mr-1" />
                    ) : (
                      <TrendingDownIcon className="h-4 w-4 mr-1" />
                    )}
                    {Math.abs(page.change)}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Traffic Sources</h2>
            <p className="text-sm text-gray-600">Where your visitors come from</p>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {analyticsData.trafficSources.map((source, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-900 w-32 truncate">{source.source}</span>
                    <span className="text-sm text-gray-500 ml-4">{source.visitors.toLocaleString()} visitors</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{source.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Engagement Metrics */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Engagement Metrics</h2>
          <p className="text-sm text-gray-600">User interactions and conversions</p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{analyticsData.engagement.newsletterSubscribers}</div>
              <div className="text-sm text-gray-600">Newsletter Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{analyticsData.engagement.jobApplications}</div>
              <div className="text-sm text-gray-600">Job Applications</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{analyticsData.engagement.eventRegistrations}</div>
              <div className="text-sm text-gray-600">Event Registrations</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">{analyticsData.engagement.contactFormSubmissions}</div>
              <div className="text-sm text-gray-600">Contact Submissions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">{analyticsData.engagement.donations}</div>
              <div className="text-sm text-gray-600">Donations</div>
            </div>
          </div>
        </div>
      </div>

      {/* Visitor Demographics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Visitor Type</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900">New Visitors</span>
                <div className="flex items-center">
                  <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${analyticsData.visitorStats.newVisitors}%` }}></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{analyticsData.visitorStats.newVisitors}%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900">Returning Visitors</span>
                <div className="flex items-center">
                  <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: `${analyticsData.visitorStats.returningVisitors}%` }}></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{analyticsData.visitorStats.returningVisitors}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Device Usage</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900">Mobile Users</span>
                <div className="flex items-center">
                  <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: `${analyticsData.visitorStats.mobileUsers}%` }}></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{analyticsData.visitorStats.mobileUsers}%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900">Desktop Users</span>
                <div className="flex items-center">
                  <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                    <div className="bg-orange-600 h-2 rounded-full" style={{ width: `${analyticsData.visitorStats.desktopUsers}%` }}></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{analyticsData.visitorStats.desktopUsers}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 