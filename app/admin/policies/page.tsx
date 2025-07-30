'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  DocumentTextIcon, 
  ShieldCheckIcon, 
  CakeIcon,
  PencilIcon,
  EyeIcon,
  TrashIcon,
  PlusIcon,
  CheckIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/button'

interface Policy {
  id: string
  title: string
  type: 'privacy' | 'terms' | 'cookies'
  content: string
  lastUpdated: string
  status: 'published' | 'draft'
}

const initialPolicies: Policy[] = [
  {
    id: '1',
    title: 'Privacy Policy',
    type: 'privacy',
    content: `# Privacy Policy

## 1. Introduction
Gehn Eco Services Inc. ("we," "our," or "us") is committed to protecting your privacy...

## 2. Information We Collect
We may collect personal information that you voluntarily provide to us, including:
- Name and contact information
- Organization details
- Service preferences
- Communication history

## 3. How We Use Your Information
We use the collected information for various purposes:
- Provide environmental services
- Process donations
- Communicate about programs
- Improve our website

## 4. Contact Us
Email: privacy@gehnecservices.com
Phone: +234 803 123 4567`,
    lastUpdated: '2024-01-15',
    status: 'published'
  },
  {
    id: '2',
    title: 'Terms of Service',
    type: 'terms',
    content: `# Terms of Service

## 1. Acceptance of Terms
By accessing our website and services, you accept and agree to be bound by these terms...

## 2. Description of Service
Gehn Eco Services Inc. provides environmental services including:
- Waste management solutions
- Environmental consultancy
- Sanitation programs
- Livelihood programs

## 3. User Responsibilities
As a user, you agree to:
- Provide accurate information
- Use services lawfully
- Respect intellectual property
- Comply with applicable laws

## 4. Contact Information
Email: legal@gehnecservices.com
Phone: +234 803 123 4567`,
    lastUpdated: '2024-01-15',
    status: 'published'
  },
  {
    id: '3',
    title: 'Cookie Policy',
    type: 'cookies',
    content: `# Cookie Policy

## 1. What Are Cookies?
Cookies are small text files placed on your device when you visit our website...

## 2. How We Use Cookies
We use cookies for:
- Essential website functionality
- Analytics and performance
- User preferences
- Marketing and advertising

## 3. Types of Cookies
- Essential cookies
- Analytics cookies
- Preference cookies
- Marketing cookies

## 4. Cookie Management
You can control cookies through:
- Browser settings
- Cookie consent banner
- Third-party opt-outs

## 5. Contact Us
Email: privacy@gehnecservices.com
Phone: +234 803 123 4567`,
    lastUpdated: '2024-01-15',
    status: 'published'
  }
]

export default function PoliciesPage() {
  const [policies, setPolicies] = useState<Policy[]>(initialPolicies)
  const [selectedPolicy, setSelectedPolicy] = useState<Policy | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [editContent, setEditContent] = useState('')
  const [showPreview, setShowPreview] = useState(false)

  const handleEdit = (policy: Policy) => {
    setSelectedPolicy(policy)
    setEditContent(policy.content)
    setIsEditing(true)
    setShowPreview(false)
  }

  const handleSave = () => {
    if (selectedPolicy) {
      const updatedPolicies = policies.map(policy =>
        policy.id === selectedPolicy.id
          ? { ...policy, content: editContent, lastUpdated: new Date().toISOString().split('T')[0] }
          : policy
      )
      setPolicies(updatedPolicies)
      setIsEditing(false)
      setSelectedPolicy(null)
    }
  }

  const handleCancel = () => {
    setIsEditing(false)
    setSelectedPolicy(null)
    setShowPreview(false)
  }

  const handleDelete = (policyId: string) => {
    if (confirm('Are you sure you want to delete this policy?')) {
      setPolicies(policies.filter(policy => policy.id !== policyId))
    }
  }

  const getPolicyIcon = (type: string) => {
    switch (type) {
      case 'privacy':
        return <ShieldCheckIcon className="h-6 w-6" />
      case 'terms':
        return <DocumentTextIcon className="h-6 w-6" />
      case 'cookies':
        return <CakeIcon className="h-6 w-6" />
      default:
        return <DocumentTextIcon className="h-6 w-6" />
    }
  }

  const getPolicyColor = (type: string) => {
    switch (type) {
      case 'privacy':
        return 'bg-blue-100 text-blue-800'
      case 'terms':
        return 'bg-green-100 text-green-800'
      case 'cookies':
        return 'bg-purple-100 text-purple-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Policy Management</h1>
        <p className="text-gray-600">Manage privacy, terms, and cookie policies for your website.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Policy List */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Policies</h2>
              <Button className="w-full" onClick={() => setIsEditing(true)}>
                <PlusIcon className="h-4 w-4 mr-2" />
                Add New Policy
              </Button>
            </div>
            <div className="p-4">
              <div className="space-y-3">
                {policies.map((policy) => (
                  <motion.div
                    key={policy.id}
                    whileHover={{ scale: 1.02 }}
                    className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                      selectedPolicy?.id === policy.id
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedPolicy(policy)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${getPolicyColor(policy.type)}`}>
                          {getPolicyIcon(policy.type)}
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{policy.title}</h3>
                          <p className="text-sm text-gray-500 capitalize">{policy.type}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            handleEdit(policy)
                          }}
                          className="p-1 text-gray-400 hover:text-gray-600"
                        >
                          <PencilIcon className="h-4 w-4" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            handleDelete(policy.id)
                          }}
                          className="p-1 text-gray-400 hover:text-red-600"
                        >
                          <TrashIcon className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>Updated: {policy.lastUpdated}</span>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        policy.status === 'published' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {policy.status}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Policy Editor/Viewer */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            {selectedPolicy ? (
              <div>
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900">{selectedPolicy.title}</h2>
                      <p className="text-sm text-gray-500">Last updated: {selectedPolicy.lastUpdated}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        onClick={() => setShowPreview(!showPreview)}
                      >
                        <EyeIcon className="h-4 w-4 mr-2" />
                        {showPreview ? 'Edit' : 'Preview'}
                      </Button>
                      {!isEditing && (
                        <Button onClick={() => handleEdit(selectedPolicy)}>
                          <PencilIcon className="h-4 w-4 mr-2" />
                          Edit
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  {isEditing ? (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Policy Content (Markdown)
                        </label>
                        <textarea
                          value={editContent}
                          onChange={(e) => setEditContent(e.target.value)}
                          className="w-full h-96 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 font-mono text-sm"
                          placeholder="Enter policy content in markdown format..."
                        />
                      </div>
                      <div className="flex items-center space-x-3">
                        <Button onClick={handleSave}>
                          <CheckIcon className="h-4 w-4 mr-2" />
                          Save Changes
                        </Button>
                        <Button variant="outline" onClick={handleCancel}>
                          <XMarkIcon className="h-4 w-4 mr-2" />
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : showPreview ? (
                    <div className="prose prose-lg max-w-none">
                      <div dangerouslySetInnerHTML={{ __html: editContent.replace(/\n/g, '<br>') }} />
                    </div>
                  ) : (
                    <div className="prose prose-lg max-w-none">
                      <div dangerouslySetInnerHTML={{ __html: selectedPolicy.content.replace(/\n/g, '<br>') }} />
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="p-12 text-center">
                <DocumentTextIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Policy Selected</h3>
                <p className="text-gray-500">Select a policy from the list to view or edit its content.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button variant="outline" className="justify-start">
            <DocumentTextIcon className="h-4 w-4 mr-2" />
            Export All Policies
          </Button>
          <Button variant="outline" className="justify-start">
            <ShieldCheckIcon className="h-4 w-4 mr-2" />
            Update Privacy Policy
          </Button>
          <Button variant="outline" className="justify-start">
            <CakeIcon className="h-4 w-4 mr-2" />
            Review Cookie Settings
          </Button>
        </div>
      </div>
    </div>
  )
} 