'use client'

import { useState } from 'react'
import { 
  DocumentTextIcon,
  ChartBarIcon,
  CalendarIcon,
  ArrowDownTrayIcon,
  EyeIcon,
  PrinterIcon,
  FunnelIcon,
  ArrowTrendingUpIcon,
  UsersIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline'

const reportTypes = [
  {
    id: 'analytics',
    name: 'Website Analytics',
    description: 'Traffic, engagement, and performance metrics',
    icon: ChartBarIcon,
    color: 'bg-blue-500'
  },
  {
    id: 'donations',
    name: 'Donations Report',
    description: 'Financial contributions and donor analysis',
    icon: CurrencyDollarIcon,
    color: 'bg-green-500'
  },
  {
    id: 'events',
    name: 'Events Report',
    description: 'Event attendance and registration data',
    icon: CalendarIcon,
    color: 'bg-purple-500'
  },
  {
    id: 'jobs',
    name: 'Job Applications',
    description: 'Application statistics and candidate data',
    icon: UsersIcon,
    color: 'bg-orange-500'
  },
  {
    id: 'content',
    name: 'Content Performance',
    description: 'News articles and page view analytics',
    icon: DocumentTextIcon,
    color: 'bg-red-500'
  },
  {
    id: 'impact',
    name: 'Impact Assessment',
    description: 'Program outcomes and success metrics',
    icon: ArrowTrendingUpIcon,
    color: 'bg-indigo-500'
  }
]

const sampleData = {
  analytics: {
    totalVisitors: 15420,
    pageViews: 45680,
    bounceRate: 32.5,
    avgSessionDuration: '4m 32s',
    topPages: [
      { page: '/', views: 12540 },
      { page: '/about', views: 8920 },
      { page: '/services', views: 6540 }
    ]
  },
  donations: {
    totalAmount: 4250000,
    totalDonations: 67,
    averageDonation: 63432,
    topDonors: [
      { name: 'Corporate Foundation', amount: 2500000 },
      { name: 'Sarah Johnson', amount: 1000000 },
      { name: 'John Smith', amount: 500000 }
    ]
  },
  events: {
    totalEvents: 12,
    totalRegistrations: 456,
    averageAttendance: 38,
    upcomingEvents: 5
  }
}

export default function Reports() {
  const [selectedReport, setSelectedReport] = useState('analytics')
  const [dateRange, setDateRange] = useState('30d')
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerateReport = async () => {
    setIsGenerating(true)
    // Simulate report generation
    setTimeout(() => {
      setIsGenerating(false)
    }, 2000)
  }

  const handleExportReport = (format: 'pdf' | 'csv' | 'excel') => {
    // Handle export logic
    console.log(`Exporting ${selectedReport} as ${format}`)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="text-gray-600">Generate comprehensive reports and insights</p>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="1y">Last year</option>
          </select>
          <button
            onClick={handleGenerateReport}
            disabled={isGenerating}
            className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 flex items-center"
          >
            {isGenerating ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Generating...
              </>
            ) : (
              <>
                <ChartBarIcon className="h-5 w-5 mr-2" />
                Generate Report
              </>
            )}
          </button>
        </div>
      </div>

      {/* Report Types */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reportTypes.map((report) => (
          <div
            key={report.id}
            onClick={() => setSelectedReport(report.id)}
            className={`bg-white rounded-lg shadow p-6 cursor-pointer transition-all hover:shadow-lg border-2 ${
              selectedReport === report.id ? 'border-primary-500' : 'border-transparent'
            }`}
          >
            <div className="flex items-center space-x-4">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${report.color}`}>
                <report.icon className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">{report.name}</h3>
                <p className="text-sm text-gray-600">{report.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Report Preview */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">
              {reportTypes.find(r => r.id === selectedReport)?.name} Report
            </h2>
            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <EyeIcon className="h-4 w-4" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <PrinterIcon className="h-4 w-4" />
              </button>
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => handleExportReport('pdf')}
                  className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors"
                >
                  PDF
                </button>
                <button
                  onClick={() => handleExportReport('csv')}
                  className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded hover:bg-green-200 transition-colors"
                >
                  CSV
                </button>
                <button
                  onClick={() => handleExportReport('excel')}
                  className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors"
                >
                  Excel
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6">
          {selectedReport === 'analytics' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-600">
                    {sampleData.analytics.totalVisitors.toLocaleString()}
                  </div>
                  <div className="text-sm text-blue-600">Total Visitors</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-600">
                    {sampleData.analytics.pageViews.toLocaleString()}
                  </div>
                  <div className="text-sm text-green-600">Page Views</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-purple-600">
                    {sampleData.analytics.bounceRate}%
                  </div>
                  <div className="text-sm text-purple-600">Bounce Rate</div>
                </div>
                <div className="bg-orange-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-orange-600">
                    {sampleData.analytics.avgSessionDuration}
                  </div>
                  <div className="text-sm text-orange-600">Avg Session</div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Pages</h3>
                <div className="space-y-2">
                  {sampleData.analytics.topPages.map((page, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <span className="font-medium">{page.page}</span>
                      <span className="text-gray-600">{page.views.toLocaleString()} views</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {selectedReport === 'donations' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-600">
                    ₦{(sampleData.donations.totalAmount / 1000000).toFixed(1)}M
                  </div>
                  <div className="text-sm text-green-600">Total Amount</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-600">
                    {sampleData.donations.totalDonations}
                  </div>
                  <div className="text-sm text-blue-600">Total Donations</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-purple-600">
                    ₦{sampleData.donations.averageDonation.toLocaleString()}
                  </div>
                  <div className="text-sm text-purple-600">Average Donation</div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Donors</h3>
                <div className="space-y-2">
                  {sampleData.donations.topDonors.map((donor, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <span className="font-medium">{donor.name}</span>
                      <span className="text-gray-600">₦{donor.amount.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {selectedReport === 'events' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-purple-600">
                    {sampleData.events.totalEvents}
                  </div>
                  <div className="text-sm text-purple-600">Total Events</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-600">
                    {sampleData.events.totalRegistrations}
                  </div>
                  <div className="text-sm text-green-600">Total Registrations</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-600">
                    {sampleData.events.averageAttendance}
                  </div>
                  <div className="text-sm text-blue-600">Average Attendance</div>
                </div>
                <div className="bg-orange-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-orange-600">
                    {sampleData.events.upcomingEvents}
                  </div>
                  <div className="text-sm text-orange-600">Upcoming Events</div>
                </div>
              </div>
            </div>
          )}

          {selectedReport === 'jobs' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-600">8</div>
                  <div className="text-sm text-blue-600">Active Jobs</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-600">156</div>
                  <div className="text-sm text-green-600">Total Applications</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-purple-600">19.5</div>
                  <div className="text-sm text-purple-600">Avg Applications/Job</div>
                </div>
              </div>
            </div>
          )}

          {selectedReport === 'content' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-600">24</div>
                  <div className="text-sm text-blue-600">Published Articles</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-600">4,290</div>
                  <div className="text-sm text-green-600">Total Views</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-purple-600">178.8</div>
                  <div className="text-sm text-purple-600">Avg Views/Article</div>
                </div>
              </div>
            </div>
          )}

          {selectedReport === 'impact' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-600">5,000+</div>
                  <div className="text-sm text-green-600">Lives Impacted</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-blue-600">Communities Served</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-purple-600">85%</div>
                  <div className="text-sm text-purple-600">Waste Reduction</div>
                </div>
                <div className="bg-orange-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-orange-600">200+</div>
                  <div className="text-sm text-orange-600">Jobs Created</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <ArrowDownTrayIcon className="h-5 w-5 text-gray-400 mr-3" />
            <div className="text-left">
              <div className="font-medium text-gray-900">Export All Reports</div>
              <div className="text-sm text-gray-500">Download all reports as ZIP</div>
            </div>
          </button>
          <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <CalendarIcon className="h-5 w-5 text-gray-400 mr-3" />
            <div className="text-left">
              <div className="font-medium text-gray-900">Schedule Reports</div>
              <div className="text-sm text-gray-500">Set up automated reports</div>
            </div>
          </button>
          <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <FunnelIcon className="h-5 w-5 text-gray-400 mr-3" />
            <div className="text-left">
              <div className="font-medium text-gray-900">Custom Reports</div>
              <div className="text-sm text-gray-500">Create custom analytics</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
} 