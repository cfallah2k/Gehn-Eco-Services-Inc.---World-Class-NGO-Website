'use client'

import { useState } from 'react'
import { 
  PlusIcon, 
  PencilIcon, 
  TrashIcon, 
  EyeIcon,
  CurrencyDollarIcon,
  CalendarIcon,
  UserIcon,
  CheckCircleIcon,
  ClockIcon,
  XCircleIcon
} from '@heroicons/react/24/outline'

const donations = [
  {
    id: 1,
    donorName: 'John Smith',
    email: 'john.smith@email.com',
    amount: 500000,
    currency: 'NGN',
    paymentMethod: 'Bank Transfer',
    status: 'completed',
    date: '2024-01-15',
    reference: 'DON-2024-001',
    purpose: 'Environmental Programs',
    anonymous: false,
    message: 'Supporting your environmental initiatives'
  },
  {
    id: 2,
    donorName: 'Anonymous',
    email: 'anonymous@email.com',
    amount: 250000,
    currency: 'NGN',
    paymentMethod: 'Credit Card',
    status: 'completed',
    date: '2024-01-14',
    reference: 'DON-2024-002',
    purpose: 'Women Empowerment',
    anonymous: true,
    message: ''
  },
  {
    id: 3,
    donorName: 'Sarah Johnson',
    email: 'sarah.j@email.com',
    amount: 1000000,
    currency: 'NGN',
    paymentMethod: 'PayPal',
    status: 'pending',
    date: '2024-01-13',
    reference: 'DON-2024-003',
    purpose: 'General Fund',
    anonymous: false,
    message: 'Keep up the great work!'
  },
  {
    id: 4,
    donorName: 'Corporate Foundation',
    email: 'donations@corporate.com',
    amount: 2500000,
    currency: 'NGN',
    paymentMethod: 'Bank Transfer',
    status: 'completed',
    date: '2024-01-12',
    reference: 'DON-2024-004',
    purpose: 'Community Development',
    anonymous: false,
    message: 'Supporting sustainable community initiatives'
  },
  {
    id: 5,
    donorName: 'Michael Brown',
    email: 'michael.b@email.com',
    amount: 75000,
    currency: 'NGN',
    paymentMethod: 'Mobile Money',
    status: 'failed',
    date: '2024-01-11',
    reference: 'DON-2024-005',
    purpose: 'Training Programs',
    anonymous: false,
    message: 'For educational programs'
  }
]

const purposes = [
  'Environmental Programs',
  'Women Empowerment',
  'Community Development',
  'Training Programs',
  'General Fund',
  'Emergency Relief',
  'Equipment & Infrastructure'
]

export default function DonationsManagement() {
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [selectedPurpose, setSelectedPurpose] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredDonations = donations.filter(donation => {
    const matchesStatus = selectedStatus === 'all' || donation.status === selectedStatus
    const matchesPurpose = selectedPurpose === 'all' || donation.purpose === selectedPurpose
    const matchesSearch = donation.donorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         donation.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         donation.reference.toLowerCase().includes(searchTerm.toLowerCase())
    
    return matchesStatus && matchesPurpose && matchesSearch
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800'
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'failed':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: currency,
    }).format(amount)
  }

  const totalAmount = donations.reduce((sum, donation) => sum + donation.amount, 0)
  const completedAmount = donations.filter(d => d.status === 'completed').reduce((sum, donation) => sum + donation.amount, 0)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Donations Management</h1>
          <p className="text-gray-600">Track and manage donations and contributions</p>
        </div>
        <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center">
          <PlusIcon className="h-5 w-5 mr-2" />
          Add Donation
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
            <input
              type="text"
              placeholder="Search donations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
              <option value="failed">Failed</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Purpose</label>
            <select
              value={selectedPurpose}
              onChange={(e) => setSelectedPurpose(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">All Purposes</option>
              {purposes.map(purpose => (
                <option key={purpose} value={purpose}>{purpose}</option>
              ))}
            </select>
          </div>
          <div className="flex items-end">
            <button className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors">
              Clear Filters
            </button>
          </div>
        </div>
      </div>

      {/* Donations List */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            Donations ({filteredDonations.length})
          </h2>
        </div>
        <div className="divide-y divide-gray-200">
          {filteredDonations.map((donation) => (
            <div key={donation.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {donation.anonymous ? 'Anonymous Donor' : donation.donorName}
                    </h3>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(donation.status)}`}>
                      {donation.status}
                    </span>
                    {donation.anonymous && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        Anonymous
                      </span>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center">
                      <CurrencyDollarIcon className="h-4 w-4 mr-1" />
                      {formatCurrency(donation.amount, donation.currency)}
                    </div>
                    <div className="flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      {new Date(donation.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <UserIcon className="h-4 w-4 mr-1" />
                      {donation.paymentMethod}
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium">{donation.purpose}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>Reference: {donation.reference}</span>
                    {!donation.anonymous && (
                      <span>Email: {donation.email}</span>
                    )}
                    {donation.message && (
                      <span>Message: "{donation.message}"</span>
                    )}
                  </div>
                </div>
                <div className="flex space-x-2 ml-4">
                  <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <EyeIcon className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <PencilIcon className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-red-400 hover:text-red-600 transition-colors">
                    <TrashIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold">{donations.length}</span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Donations</p>
              <p className="text-lg font-semibold text-gray-900">{donations.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-semibold">
                  {formatCurrency(totalAmount, 'NGN')}
                </span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Amount</p>
              <p className="text-lg font-semibold text-gray-900">
                {formatCurrency(totalAmount, 'NGN')}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-semibold">
                  {formatCurrency(completedAmount, 'NGN')}
                </span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Completed</p>
              <p className="text-lg font-semibold text-gray-900">
                {formatCurrency(completedAmount, 'NGN')}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-semibold">
                  {donations.filter(d => d.status === 'completed').length}
                </span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Successful</p>
              <p className="text-lg font-semibold text-gray-900">
                {donations.filter(d => d.status === 'completed').length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {donations.slice(0, 5).map((donation) => (
              <div key={donation.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <CurrencyDollarIcon className="h-4 w-4 text-primary-600" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">
                    {donation.anonymous ? 'Anonymous' : donation.donorName} donated {formatCurrency(donation.amount, donation.currency)}
                  </p>
                  <p className="text-sm text-gray-500">
                    {new Date(donation.date).toLocaleDateString()} • {donation.purpose}
                  </p>
                </div>
                <div className="flex items-center">
                  {donation.status === 'completed' ? (
                    <CheckCircleIcon className="h-4 w-4 text-green-600" />
                  ) : donation.status === 'pending' ? (
                    <ClockIcon className="h-4 w-4 text-yellow-600" />
                  ) : (
                    <XCircleIcon className="h-4 w-4 text-red-600" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 