'use client'

import { useState } from 'react'
import { 
  PlusIcon, 
  PencilIcon, 
  TrashIcon, 
  EyeIcon,
  CalendarIcon,
  MapPinIcon,
  CurrencyDollarIcon,
  UsersIcon,
  CheckCircleIcon,
  ClockIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'

const jobListings = [
  {
    id: 1,
    title: 'Environmental Consultant',
    department: 'Environmental Services',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
    salary: '₦500,000 - ₦800,000',
    applications: 24,
    status: 'active',
    postedAt: '2024-01-15',
    deadline: '2024-02-15',
    experience: '5+ years',
    description: 'We are seeking an experienced Environmental Consultant to lead our sustainability initiatives...'
  },
  {
    id: 2,
    title: 'Waste Management Specialist',
    department: 'Operations',
    location: 'Abuja, Nigeria',
    type: 'Full-time',
    salary: '₦400,000 - ₦600,000',
    applications: 18,
    status: 'active',
    postedAt: '2024-01-12',
    deadline: '2024-02-12',
    experience: '3+ years',
    description: 'Join our team as a Waste Management Specialist to develop innovative waste solutions...'
  },
  {
    id: 3,
    title: 'Community Outreach Coordinator',
    department: 'Community Development',
    location: 'Port Harcourt, Nigeria',
    type: 'Part-time',
    salary: '₦200,000 - ₦300,000',
    applications: 12,
    status: 'active',
    postedAt: '2024-01-10',
    deadline: '2024-02-10',
    experience: '2+ years',
    description: 'Help us build strong community partnerships and implement environmental education programs...'
  },
  {
    id: 4,
    title: 'Training Program Manager',
    department: 'Training & Development',
    location: 'Remote',
    type: 'Contract',
    salary: '₦350,000 - ₦500,000',
    applications: 8,
    status: 'closed',
    postedAt: '2024-01-05',
    deadline: '2024-02-05',
    experience: '4+ years',
    description: 'Lead our training programs and capacity building initiatives across multiple communities...'
  }
]

const departments = [
  'Environmental Services',
  'Operations',
  'Community Development',
  'Training & Development',
  'Research & Development',
  'Administration'
]

const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Internship', 'Volunteer']

export default function JobManagement() {
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [selectedDepartment, setSelectedDepartment] = useState('all')
  const [selectedType, setSelectedType] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredJobs = jobListings.filter(job => {
    const matchesStatus = selectedStatus === 'all' || job.status === selectedStatus
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment
    const matchesType = selectedType === 'all' || job.type === selectedType
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    return matchesStatus && matchesDepartment && matchesType && matchesSearch
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Job Listings</h1>
          <p className="text-gray-600">Manage job opportunities and recruitment</p>
        </div>
        <Link
          href="/admin/jobs/new"
          className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center"
        >
          <PlusIcon className="h-5 w-5 mr-2" />
          Add Job Listing
        </Link>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
            <input
              type="text"
              placeholder="Search jobs..."
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
              <option value="active">Active</option>
              <option value="closed">Closed</option>
              <option value="draft">Draft</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">All Departments</option>
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Job Type</label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">All Types</option>
              {jobTypes.map(type => (
                <option key={type} value={type}>{type}</option>
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

      {/* Jobs List */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            Job Listings ({filteredJobs.length})
          </h2>
        </div>
        <div className="divide-y divide-gray-200">
          {filteredJobs.map((job) => (
            <div key={job.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      job.status === 'active' 
                        ? 'bg-green-100 text-green-800'
                        : job.status === 'closed'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {job.status}
                    </span>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {job.type}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">{job.description}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <MapPinIcon className="h-4 w-4 mr-1" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <CurrencyDollarIcon className="h-4 w-4 mr-1" />
                      {job.salary}
                    </div>
                    <div className="flex items-center">
                      <UsersIcon className="h-4 w-4 mr-1" />
                      {job.applications} applications
                    </div>
                    <div className="flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      Deadline: {new Date(job.deadline).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="mt-3 flex items-center space-x-4 text-sm text-gray-500">
                    <span>Department: {job.department}</span>
                    <span>Experience: {job.experience}</span>
                    <span>Posted: {new Date(job.postedAt).toLocaleDateString()}</span>
                  </div>
                </div>
                <div className="flex space-x-2 ml-4">
                  <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <EyeIcon className="h-4 w-4" />
                  </button>
                  <Link
                    href={`/admin/jobs/${job.id}/edit`}
                    className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <PencilIcon className="h-4 w-4" />
                  </Link>
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
                <span className="text-blue-600 font-semibold">{jobListings.length}</span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Jobs</p>
              <p className="text-lg font-semibold text-gray-900">{jobListings.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-semibold">
                  {jobListings.filter(j => j.status === 'active').length}
                </span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Active Jobs</p>
              <p className="text-lg font-semibold text-gray-900">
                {jobListings.filter(j => j.status === 'active').length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-semibold">
                  {jobListings.reduce((sum, job) => sum + job.applications, 0)}
                </span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Applications</p>
              <p className="text-lg font-semibold text-gray-900">
                {jobListings.reduce((sum, job) => sum + job.applications, 0)}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-semibold">
                  {jobListings.filter(j => j.status === 'closed').length}
                </span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Closed Jobs</p>
              <p className="text-lg font-semibold text-gray-900">
                {jobListings.filter(j => j.status === 'closed').length}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 