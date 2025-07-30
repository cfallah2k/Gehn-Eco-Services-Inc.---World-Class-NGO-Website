'use client'

import { useState } from 'react'
import { 
  PlusIcon, 
  PencilIcon, 
  TrashIcon, 
  EyeIcon,
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  AcademicCapIcon,
  BriefcaseIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image'

const teamMembers = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    role: 'Founder & CEO',
    email: 'sarah@gehnecservices.com',
    phone: '+234 803 123 4567',
    location: 'Lagos, Nigeria',
    department: 'Leadership',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Environmental scientist with 20+ years experience in sustainable development and community empowerment.',
    education: 'PhD Environmental Science, University of Lagos',
    experience: '15+ years',
    status: 'active',
    joinedAt: '2008-01-15',
    social: {
      linkedin: '#',
      twitter: '#',
      website: '#'
    }
  },
  {
    id: 2,
    name: 'Aisha Mohammed',
    role: 'Director of Operations',
    email: 'aisha@gehnecservices.com',
    phone: '+234 803 123 4568',
    location: 'Abuja, Nigeria',
    department: 'Operations',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Operations expert specializing in waste management systems and community development programs.',
    education: 'MBA Business Administration, Ahmadu Bello University',
    experience: '12+ years',
    status: 'active',
    joinedAt: '2010-03-20',
    social: {
      linkedin: '#',
      twitter: '#',
      website: '#'
    }
  },
  {
    id: 3,
    name: 'Grace Okonkwo',
    role: 'Head of Environmental Programs',
    email: 'grace@gehnecservices.com',
    phone: '+234 803 123 4569',
    location: 'Port Harcourt, Nigeria',
    department: 'Environmental Services',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Environmental engineer leading innovative sustainability initiatives and training programs.',
    education: 'MSc Environmental Engineering, University of Port Harcourt',
    experience: '10+ years',
    status: 'active',
    joinedAt: '2012-06-10',
    social: {
      linkedin: '#',
      twitter: '#',
      website: '#'
    }
  },
  {
    id: 4,
    name: 'Fatima Hassan',
    role: 'Community Engagement Manager',
    email: 'fatima@gehnecservices.com',
    phone: '+234 803 123 4570',
    location: 'Kano, Nigeria',
    department: 'Community Development',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Community development specialist focused on women empowerment and livelihood programs.',
    education: 'MA Community Development, Bayero University',
    experience: '8+ years',
    status: 'active',
    joinedAt: '2015-09-15',
    social: {
      linkedin: '#',
      twitter: '#',
      website: '#'
    }
  }
]

const departments = [
  'Leadership',
  'Operations',
  'Environmental Services',
  'Community Development',
  'Training & Development',
  'Research & Development',
  'Administration'
]

export default function TeamManagement() {
  const [selectedDepartment, setSelectedDepartment] = useState('all')
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredMembers = teamMembers.filter(member => {
    const matchesDepartment = selectedDepartment === 'all' || member.department === selectedDepartment
    const matchesStatus = selectedStatus === 'all' || member.status === selectedStatus
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.email.toLowerCase().includes(searchTerm.toLowerCase())
    
    return matchesDepartment && matchesStatus && matchesSearch
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Team Management</h1>
          <p className="text-gray-600">Manage your team members and their profiles</p>
        </div>
        <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center">
          <PlusIcon className="h-5 w-5 mr-2" />
          Add Team Member
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
            <input
              type="text"
              placeholder="Search team members..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
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
            <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <div className="flex items-end">
            <button className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors">
              Clear Filters
            </button>
          </div>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMembers.map((member) => (
          <div key={member.id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="relative">
              <Image
                src={member.image}
                alt={member.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4 flex space-x-2">
                <button className="p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition-colors">
                  <EyeIcon className="h-4 w-4 text-gray-600" />
                </button>
                <button className="p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition-colors">
                  <PencilIcon className="h-4 w-4 text-gray-600" />
                </button>
                <button className="p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition-colors">
                  <TrashIcon className="h-4 w-4 text-red-600" />
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-primary-600 font-medium">{member.role}</p>
                </div>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {member.status}
                </span>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <EnvelopeIcon className="h-4 w-4 mr-2" />
                  {member.email}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <PhoneIcon className="h-4 w-4 mr-2" />
                  {member.phone}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPinIcon className="h-4 w-4 mr-2" />
                  {member.location}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <BriefcaseIcon className="h-4 w-4 mr-2" />
                  {member.department}
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-4 line-clamp-3">{member.bio}</p>

              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>Joined: {new Date(member.joinedAt).toLocaleDateString()}</span>
                <span>{member.experience} experience</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold">{teamMembers.length}</span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Team Members</p>
              <p className="text-lg font-semibold text-gray-900">{teamMembers.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-semibold">
                  {teamMembers.filter(m => m.status === 'active').length}
                </span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Active Members</p>
              <p className="text-lg font-semibold text-gray-900">
                {teamMembers.filter(m => m.status === 'active').length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-semibold">
                  {new Set(teamMembers.map(m => m.department)).size}
                </span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Departments</p>
              <p className="text-lg font-semibold text-gray-900">
                {new Set(teamMembers.map(m => m.department)).size}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-semibold">
                  {teamMembers.filter(m => m.department === 'Leadership').length}
                </span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Leadership</p>
              <p className="text-lg font-semibold text-gray-900">
                {teamMembers.filter(m => m.department === 'Leadership').length}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 