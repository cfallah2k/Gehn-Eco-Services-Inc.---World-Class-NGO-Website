'use client'

import { useState, useEffect } from 'react'
import { 
  UsersIcon, 
  NewspaperIcon, 
  BriefcaseIcon, 
  CalendarIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  PhotoIcon,
  DocumentTextIcon,
  PlusIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'

const stats = [
  { name: 'Total News Articles', value: '24', change: '+12%', changeType: 'positive', icon: NewspaperIcon },
  { name: 'Active Job Listings', value: '8', change: '+3', changeType: 'positive', icon: BriefcaseIcon },
  { name: 'Upcoming Events', value: '5', change: '+2', changeType: 'positive', icon: CalendarIcon },
  { name: 'Total Donations', value: '₦2.5M', change: '+15%', changeType: 'positive', icon: CurrencyDollarIcon },
]

const recentActivities = [
  {
    id: 1,
    type: 'news',
    title: 'New article published: "Environmental Impact of Waste Management"',
    time: '2 hours ago',
    author: 'Admin User'
  },
  {
    id: 2,
    type: 'job',
    title: 'New job listing: "Environmental Consultant"',
    time: '4 hours ago',
    author: 'Admin User'
  },
  {
    id: 3,
    type: 'event',
    title: 'Event created: "Community Clean-up Day"',
    time: '1 day ago',
    author: 'Admin User'
  },
  {
    id: 4,
    type: 'donation',
    title: 'New donation received: ₦500,000',
    time: '2 days ago',
    author: 'System'
  }
]

const quickActions = [
  {
    name: 'Add News Article',
    href: '/admin/news/new',
    icon: PlusIcon,
    color: 'bg-blue-500 hover:bg-blue-600'
  },
  {
    name: 'Create Job Listing',
    href: '/admin/jobs/new',
    icon: PlusIcon,
    color: 'bg-green-500 hover:bg-green-600'
  },
  {
    name: 'Schedule Event',
    href: '/admin/events/new',
    icon: PlusIcon,
    color: 'bg-purple-500 hover:bg-purple-600'
  },
  {
    name: 'Upload Media',
    href: '/admin/media/upload',
    icon: PlusIcon,
    color: 'bg-orange-500 hover:bg-orange-600'
  }
]

export default function AdminDashboard() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1000)
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome back, Admin!</h1>
        <p className="text-gray-600">Here's what's happening with your website today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <stat.icon className="h-8 w-8 text-gray-400" />
              </div>
              <div className="ml-4 flex-1">
                <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
            </div>
            <div className="mt-4">
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                stat.changeType === 'positive' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
          <p className="text-sm text-gray-600">Common tasks to manage your content</p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action) => (
              <Link
                key={action.name}
                href={action.href}
                className={`flex items-center p-4 rounded-lg text-white transition-colors ${action.color}`}
              >
                <action.icon className="h-5 w-5 mr-3" />
                <span className="font-medium">{action.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
          <p className="text-sm text-gray-600">Latest updates and changes</p>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    {activity.type === 'news' && <NewspaperIcon className="h-4 w-4 text-primary-600" />}
                    {activity.type === 'job' && <BriefcaseIcon className="h-4 w-4 text-primary-600" />}
                    {activity.type === 'event' && <CalendarIcon className="h-4 w-4 text-primary-600" />}
                    {activity.type === 'donation' && <CurrencyDollarIcon className="h-4 w-4 text-primary-600" />}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                  <p className="text-sm text-gray-500">by {activity.author} • {activity.time}</p>
                </div>
                <div className="flex space-x-2">
                  <button className="p-1 text-gray-400 hover:text-gray-600">
                    <EyeIcon className="h-4 w-4" />
                  </button>
                  <button className="p-1 text-gray-400 hover:text-gray-600">
                    <PencilIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* System Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">System Status</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Website Status</span>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Online
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Database</span>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Connected
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Storage</span>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  75% Used
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Last Backup</span>
                <span className="text-sm text-gray-900">2 hours ago</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Quick Links</h2>
          </div>
          <div className="p-6">
            <div className="space-y-3">
              <Link href="/admin/analytics" className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <ChartBarIcon className="h-5 w-5 text-gray-400 mr-3" />
                <span className="text-sm font-medium text-gray-700">View Analytics</span>
              </Link>
              <Link href="/admin/reports" className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <DocumentTextIcon className="h-5 w-5 text-gray-400 mr-3" />
                <span className="text-sm font-medium text-gray-700">Generate Reports</span>
              </Link>
              <Link href="/admin/media" className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <PhotoIcon className="h-5 w-5 text-gray-400 mr-3" />
                <span className="text-sm font-medium text-gray-700">Manage Media</span>
              </Link>
              <Link href="/admin/settings" className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <UsersIcon className="h-5 w-5 text-gray-400 mr-3" />
                <span className="text-sm font-medium text-gray-700">User Settings</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 