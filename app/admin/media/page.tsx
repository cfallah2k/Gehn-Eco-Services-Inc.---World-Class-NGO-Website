'use client'

import { useState } from 'react'
import { 
  PlusIcon, 
  PencilIcon, 
  TrashIcon, 
  EyeIcon,
  DownloadIcon,
  FolderIcon,
  PhotoIcon,
  DocumentIcon,
  VideoCameraIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image'

const mediaFiles = [
  {
    id: 1,
    name: 'community-cleanup.jpg',
    type: 'image',
    size: '2.4 MB',
    uploadedAt: '2024-01-15',
    uploadedBy: 'Admin User',
    url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Community clean-up day',
    tags: ['events', 'community', 'environment']
  },
  {
    id: 2,
    name: 'environmental-workshop.pdf',
    type: 'document',
    size: '1.8 MB',
    uploadedAt: '2024-01-12',
    uploadedBy: 'Admin User',
    url: '#',
    alt: 'Environmental workshop guide',
    tags: ['training', 'workshop', 'guide']
  },
  {
    id: 3,
    name: 'team-meeting.mp4',
    type: 'video',
    size: '15.2 MB',
    uploadedAt: '2024-01-10',
    uploadedBy: 'Admin User',
    url: '#',
    alt: 'Team meeting recording',
    tags: ['meeting', 'team', 'internal']
  },
  {
    id: 4,
    name: 'sustainability-report.pdf',
    type: 'document',
    size: '3.1 MB',
    uploadedAt: '2024-01-08',
    uploadedBy: 'Admin User',
    url: '#',
    alt: 'Annual sustainability report',
    tags: ['report', 'sustainability', 'annual']
  },
  {
    id: 5,
    name: 'women-empowerment.jpg',
    type: 'image',
    size: '1.9 MB',
    uploadedAt: '2024-01-05',
    uploadedBy: 'Admin User',
    url: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Women empowerment program',
    tags: ['women', 'empowerment', 'program']
  },
  {
    id: 6,
    name: 'waste-management-guide.pdf',
    type: 'document',
    size: '2.7 MB',
    uploadedAt: '2024-01-03',
    uploadedBy: 'Admin User',
    url: '#',
    alt: 'Waste management guide',
    tags: ['waste', 'management', 'guide']
  }
]

const folders = [
  { name: 'Events', count: 24, icon: FolderIcon },
  { name: 'Reports', count: 12, icon: FolderIcon },
  { name: 'Training Materials', count: 18, icon: FolderIcon },
  { name: 'Team Photos', count: 45, icon: FolderIcon },
  { name: 'Documents', count: 32, icon: FolderIcon },
  { name: 'Videos', count: 8, icon: FolderIcon }
]

export default function MediaLibrary() {
  const [selectedType, setSelectedType] = useState('all')
  const [selectedFolder, setSelectedFolder] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const filteredFiles = mediaFiles.filter(file => {
    const matchesType = selectedType === 'all' || file.type === selectedType
    const matchesSearch = file.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         file.alt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         file.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    return matchesType && matchesSearch
  })

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'image':
        return PhotoIcon
      case 'document':
        return DocumentIcon
      case 'video':
        return VideoCameraIcon
      default:
        return DocumentIcon
    }
  }

  const getFileTypeColor = (type: string) => {
    switch (type) {
      case 'image':
        return 'bg-blue-100 text-blue-600'
      case 'document':
        return 'bg-green-100 text-green-600'
      case 'video':
        return 'bg-purple-100 text-purple-600'
      default:
        return 'bg-gray-100 text-gray-600'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Media Library</h1>
          <p className="text-gray-600">Manage images, documents, and media files</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors">
            <DownloadIcon className="h-5 w-5" />
          </button>
          <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center">
            <PlusIcon className="h-5 w-5 mr-2" />
            Upload Files
          </button>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search files..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">File Type</label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">All Types</option>
              <option value="image">Images</option>
              <option value="document">Documents</option>
              <option value="video">Videos</option>
            </select>
          </div>
          <div className="flex items-end space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-2 rounded-md transition-colors ${
                viewMode === 'grid' ? 'bg-primary-100 text-primary-600' : 'bg-gray-100 text-gray-600'
              }`}
            >
              Grid
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-3 py-2 rounded-md transition-colors ${
                viewMode === 'list' ? 'bg-primary-100 text-primary-600' : 'bg-gray-100 text-gray-600'
              }`}
            >
              List
            </button>
          </div>
        </div>
      </div>

      {/* Folders */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Folders</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {folders.map((folder, index) => (
              <div key={index} className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                <folder.icon className="h-8 w-8 text-gray-400 mb-2" />
                <span className="text-sm font-medium text-gray-900 text-center">{folder.name}</span>
                <span className="text-xs text-gray-500">{folder.count} items</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Files */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Files ({filteredFiles.length})</h2>
        </div>
        <div className="p-6">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {filteredFiles.map((file) => {
                const FileIcon = getFileIcon(file.type)
                return (
                  <div key={file.id} className="group relative">
                    <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                      {file.type === 'image' ? (
                        <Image
                          src={file.url}
                          alt={file.alt}
                          width={200}
                          height={200}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <FileIcon className="h-12 w-12 text-gray-400" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity flex space-x-2">
                          <button className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50">
                            <EyeIcon className="h-4 w-4 text-gray-600" />
                          </button>
                          <button className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50">
                            <DownloadIcon className="h-4 w-4 text-gray-600" />
                          </button>
                          <button className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50">
                            <PencilIcon className="h-4 w-4 text-gray-600" />
                          </button>
                          <button className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50">
                            <TrashIcon className="h-4 w-4 text-red-600" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <p className="text-sm font-medium text-gray-900 truncate">{file.name}</p>
                      <p className="text-xs text-gray-500">{file.size}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFiles.map((file) => {
                const FileIcon = getFileIcon(file.type)
                return (
                  <div key={file.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex-shrink-0">
                      {file.type === 'image' ? (
                        <Image
                          src={file.url}
                          alt={file.alt}
                          width={60}
                          height={60}
                          className="w-15 h-15 object-cover rounded-lg"
                        />
                      ) : (
                        <div className="w-15 h-15 bg-gray-100 rounded-lg flex items-center justify-center">
                          <FileIcon className="h-8 w-8 text-gray-400" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{file.name}</p>
                      <p className="text-sm text-gray-500">{file.alt}</p>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getFileTypeColor(file.type)}`}>
                          {file.type}
                        </span>
                        <span className="text-xs text-gray-500">{file.size}</span>
                        <span className="text-xs text-gray-500">Uploaded {new Date(file.uploadedAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                        <EyeIcon className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                        <DownloadIcon className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                        <PencilIcon className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-red-400 hover:text-red-600 transition-colors">
                        <TrashIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold">{mediaFiles.length}</span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Files</p>
              <p className="text-lg font-semibold text-gray-900">{mediaFiles.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-semibold">
                  {mediaFiles.filter(f => f.type === 'image').length}
                </span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Images</p>
              <p className="text-lg font-semibold text-gray-900">
                {mediaFiles.filter(f => f.type === 'image').length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-semibold">
                  {mediaFiles.filter(f => f.type === 'document').length}
                </span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Documents</p>
              <p className="text-lg font-semibold text-gray-900">
                {mediaFiles.filter(f => f.type === 'document').length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-semibold">
                  {mediaFiles.filter(f => f.type === 'video').length}
                </span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Videos</p>
              <p className="text-lg font-semibold text-gray-900">
                {mediaFiles.filter(f => f.type === 'video').length}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 