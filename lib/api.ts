// API Layer - Mock Implementation
// TODO: Replace with actual backend API calls when backend is ready
// This file provides a clean interface that can be easily swapped with real API calls

import type {
  User,
  Donation,
  ContactMessage,
  NewsletterSubscriber,
  NewsArticle,
  TeamMember,
  ImpactStory,
  Service,
  ApiResponse,
  AuthSession
} from './types'

// Mock data - Replace with API calls when backend is ready
const mockTeamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    role: 'Founder & CEO',
    bio: 'Environmental scientist with 20+ years experience in waste management and community development.',
    image_url: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400',
    email: 'sarah@gehnecservices.com',
    linkedin_url: '#',
    expertise: ['Environmental Science', 'Waste Management', 'Community Development'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
]

const mockServices: Service[] = [
  {
    id: '1',
    name: 'Waste Management',
    description: 'Comprehensive waste collection, sorting, and recycling services',
    icon: 'trash',
    features: ['Community waste collection', 'Recycling programs', 'Waste reduction strategies'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
]

const mockImpactStories: ImpactStory[] = [
  {
    id: '1',
    title: 'Community Waste Management Initiative',
    description: 'Implemented comprehensive waste management system in underserved communities',
    location: 'Lagos, Nigeria',
    impact_metrics: ['60% waste reduction', '50 new jobs created', '10,000+ people served'],
    image_url: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800',
    featured: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
]

const mockNewsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'Gehn Eco Services Launches New Initiative',
    excerpt: 'Our latest community-based waste management program has successfully reduced waste by 60%',
    content: 'Full article content...',
    image_url: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800',
    author: 'Sarah Johnson',
    category: 'Programs',
    featured: true,
    published: true,
    read_time: 5,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
]

// Authentication functions - Mock implementation
export const auth = {
  signIn: async (email: string, password: string): Promise<ApiResponse<AuthSession>> => {
    // Mock authentication - Replace with actual API call
    // For demo purposes, accept any credentials
    await new Promise(resolve => setTimeout(resolve, 500)) // Simulate API delay
    
    if (email && password) {
      return {
        data: {
          user: {
            id: '1',
            email,
            name: 'Admin User',
            role: 'admin',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          },
          token: 'mock-token',
          expires_at: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
        },
        error: null
      }
    }
    
    return {
      data: null,
      error: { message: 'Invalid credentials' }
    }
  },

  signOut: async (): Promise<ApiResponse<null>> => {
    await new Promise(resolve => setTimeout(resolve, 200))
    return { data: null, error: null }
  },

  getSession: async (): Promise<ApiResponse<AuthSession | null>> => {
    // Check localStorage for mock session
    if (typeof window !== 'undefined') {
      const session = localStorage.getItem('mock_session')
      if (session) {
        return { data: JSON.parse(session), error: null }
      }
    }
    return { data: null, error: null }
  },

  getUser: async (): Promise<ApiResponse<User | null>> => {
    const sessionResult = await auth.getSession()
    if (sessionResult.data) {
      return { data: sessionResult.data.user, error: null }
    }
    return { data: null, error: null }
  }
}

// Contact form functions - Mock implementation
export const contact = {
  submitMessage: async (
    message: Omit<ContactMessage, 'id' | 'status' | 'created_at'>
  ): Promise<ApiResponse<ContactMessage>> => {
    await new Promise(resolve => setTimeout(resolve, 500))
    
    const newMessage: ContactMessage = {
      id: Date.now().toString(),
      ...message,
      status: 'unread',
      created_at: new Date().toISOString()
    }
    
    // In a real app, this would be stored in localStorage or sent to backend
    console.log('Contact message submitted:', newMessage)
    
    return { data: newMessage, error: null }
  },

  getAllMessages: async (): Promise<ApiResponse<ContactMessage[]>> => {
    await new Promise(resolve => setTimeout(resolve, 300))
    return { data: [], error: null }
  },

  updateMessageStatus: async (
    id: string,
    status: ContactMessage['status']
  ): Promise<ApiResponse<ContactMessage>> => {
    await new Promise(resolve => setTimeout(resolve, 300))
    return {
      data: {
        id,
        name: '',
        email: '',
        subject: '',
        message: '',
        status,
        created_at: new Date().toISOString()
      },
      error: null
    }
  }
}

// Newsletter functions - Mock implementation
export const newsletter = {
  subscribe: async (email: string): Promise<ApiResponse<NewsletterSubscriber>> => {
    await new Promise(resolve => setTimeout(resolve, 500))
    
    const subscriber: NewsletterSubscriber = {
      id: Date.now().toString(),
      email,
      status: 'active',
      created_at: new Date().toISOString()
    }
    
    console.log('Newsletter subscription:', subscriber)
    
    return { data: subscriber, error: null }
  },

  unsubscribe: async (email: string): Promise<ApiResponse<NewsletterSubscriber>> => {
    await new Promise(resolve => setTimeout(resolve, 300))
    return {
      data: {
        id: '1',
        email,
        status: 'unsubscribed',
        created_at: new Date().toISOString()
      },
      error: null
    }
  },

  getAllSubscribers: async (): Promise<ApiResponse<NewsletterSubscriber[]>> => {
    await new Promise(resolve => setTimeout(resolve, 300))
    return { data: [], error: null }
  }
}

// Donations functions - Mock implementation
export const donations = {
  submitDonation: async (
    donation: Omit<Donation, 'id' | 'status' | 'created_at'>
  ): Promise<ApiResponse<Donation>> => {
    await new Promise(resolve => setTimeout(resolve, 500))
    
    const newDonation: Donation = {
      id: Date.now().toString(),
      ...donation,
      status: 'pending',
      created_at: new Date().toISOString()
    }
    
    console.log('Donation submitted:', newDonation)
    
    return { data: newDonation, error: null }
  },

  getAllDonations: async (): Promise<ApiResponse<Donation[]>> => {
    await new Promise(resolve => setTimeout(resolve, 300))
    return { data: [], error: null }
  },

  updateDonationStatus: async (
    id: string,
    status: Donation['status']
  ): Promise<ApiResponse<Donation>> => {
    await new Promise(resolve => setTimeout(resolve, 300))
    return {
      data: {
        id,
        donor_name: '',
        email: '',
        amount: 0,
        status,
        created_at: new Date().toISOString()
      },
      error: null
    }
  }
}

// News articles functions - Mock implementation
export const news = {
  getPublishedArticles: async (): Promise<ApiResponse<NewsArticle[]>> => {
    await new Promise(resolve => setTimeout(resolve, 300))
    return { data: mockNewsArticles.filter(a => a.published), error: null }
  },

  getFeaturedArticles: async (): Promise<ApiResponse<NewsArticle[]>> => {
    await new Promise(resolve => setTimeout(resolve, 300))
    return {
      data: mockNewsArticles.filter(a => a.published && a.featured),
      error: null
    }
  },

  getArticleById: async (id: string): Promise<ApiResponse<NewsArticle>> => {
    await new Promise(resolve => setTimeout(resolve, 300))
    const article = mockNewsArticles.find(a => a.id === id && a.published)
    if (article) {
      return { data: article, error: null }
    }
    return { data: null, error: { message: 'Article not found' } }
  },

  createArticle: async (
    article: Omit<NewsArticle, 'id' | 'created_at' | 'updated_at'>
  ): Promise<ApiResponse<NewsArticle>> => {
    await new Promise(resolve => setTimeout(resolve, 500))
    const newArticle: NewsArticle = {
      id: Date.now().toString(),
      ...article,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
    return { data: newArticle, error: null }
  },

  updateArticle: async (
    id: string,
    updates: Partial<NewsArticle>
  ): Promise<ApiResponse<NewsArticle>> => {
    await new Promise(resolve => setTimeout(resolve, 500))
    const article = mockNewsArticles.find(a => a.id === id)
    if (article) {
      const updated = { ...article, ...updates, updated_at: new Date().toISOString() }
      return { data: updated, error: null }
    }
    return { data: null, error: { message: 'Article not found' } }
  },

  deleteArticle: async (id: string): Promise<ApiResponse<null>> => {
    await new Promise(resolve => setTimeout(resolve, 300))
    return { data: null, error: null }
  }
}

// Team members functions - Mock implementation
export const team = {
  getAllMembers: async (): Promise<ApiResponse<TeamMember[]>> => {
    await new Promise(resolve => setTimeout(resolve, 300))
    return { data: mockTeamMembers, error: null }
  },

  getMemberById: async (id: string): Promise<ApiResponse<TeamMember>> => {
    await new Promise(resolve => setTimeout(resolve, 300))
    const member = mockTeamMembers.find(m => m.id === id)
    if (member) {
      return { data: member, error: null }
    }
    return { data: null, error: { message: 'Team member not found' } }
  },

  createMember: async (
    member: Omit<TeamMember, 'id' | 'created_at' | 'updated_at'>
  ): Promise<ApiResponse<TeamMember>> => {
    await new Promise(resolve => setTimeout(resolve, 500))
    const newMember: TeamMember = {
      id: Date.now().toString(),
      ...member,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
    return { data: newMember, error: null }
  },

  updateMember: async (
    id: string,
    updates: Partial<TeamMember>
  ): Promise<ApiResponse<TeamMember>> => {
    await new Promise(resolve => setTimeout(resolve, 500))
    const member = mockTeamMembers.find(m => m.id === id)
    if (member) {
      const updated = { ...member, ...updates, updated_at: new Date().toISOString() }
      return { data: updated, error: null }
    }
    return { data: null, error: { message: 'Team member not found' } }
  },

  deleteMember: async (id: string): Promise<ApiResponse<null>> => {
    await new Promise(resolve => setTimeout(resolve, 300))
    return { data: null, error: null }
  }
}

// Impact stories functions - Mock implementation
export const impact = {
  getAllStories: async (): Promise<ApiResponse<ImpactStory[]>> => {
    await new Promise(resolve => setTimeout(resolve, 300))
    return { data: mockImpactStories, error: null }
  },

  getFeaturedStories: async (): Promise<ApiResponse<ImpactStory[]>> => {
    await new Promise(resolve => setTimeout(resolve, 300))
    return { data: mockImpactStories.filter(s => s.featured), error: null }
  },

  getStoryById: async (id: string): Promise<ApiResponse<ImpactStory>> => {
    await new Promise(resolve => setTimeout(resolve, 300))
    const story = mockImpactStories.find(s => s.id === id)
    if (story) {
      return { data: story, error: null }
    }
    return { data: null, error: { message: 'Story not found' } }
  },

  createStory: async (
    story: Omit<ImpactStory, 'id' | 'created_at' | 'updated_at'>
  ): Promise<ApiResponse<ImpactStory>> => {
    await new Promise(resolve => setTimeout(resolve, 500))
    const newStory: ImpactStory = {
      id: Date.now().toString(),
      ...story,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
    return { data: newStory, error: null }
  },

  updateStory: async (
    id: string,
    updates: Partial<ImpactStory>
  ): Promise<ApiResponse<ImpactStory>> => {
    await new Promise(resolve => setTimeout(resolve, 500))
    const story = mockImpactStories.find(s => s.id === id)
    if (story) {
      const updated = { ...story, ...updates, updated_at: new Date().toISOString() }
      return { data: updated, error: null }
    }
    return { data: null, error: { message: 'Story not found' } }
  },

  deleteStory: async (id: string): Promise<ApiResponse<null>> => {
    await new Promise(resolve => setTimeout(resolve, 300))
    return { data: null, error: null }
  }
}

// Services functions - Mock implementation
export const services = {
  getAllServices: async (): Promise<ApiResponse<Service[]>> => {
    await new Promise(resolve => setTimeout(resolve, 300))
    return { data: mockServices, error: null }
  },

  getServiceById: async (id: string): Promise<ApiResponse<Service>> => {
    await new Promise(resolve => setTimeout(resolve, 300))
    const service = mockServices.find(s => s.id === id)
    if (service) {
      return { data: service, error: null }
    }
    return { data: null, error: { message: 'Service not found' } }
  },

  createService: async (
    service: Omit<Service, 'id' | 'created_at' | 'updated_at'>
  ): Promise<ApiResponse<Service>> => {
    await new Promise(resolve => setTimeout(resolve, 500))
    const newService: Service = {
      id: Date.now().toString(),
      ...service,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
    return { data: newService, error: null }
  },

  updateService: async (
    id: string,
    updates: Partial<Service>
  ): Promise<ApiResponse<Service>> => {
    await new Promise(resolve => setTimeout(resolve, 500))
    const service = mockServices.find(s => s.id === id)
    if (service) {
      const updated = { ...service, ...updates, updated_at: new Date().toISOString() }
      return { data: updated, error: null }
    }
    return { data: null, error: { message: 'Service not found' } }
  },

  deleteService: async (id: string): Promise<ApiResponse<null>> => {
    await new Promise(resolve => setTimeout(resolve, 300))
    return { data: null, error: null }
  }
}

// Analytics functions - Mock implementation
export const analytics = {
  getDonationStats: async (): Promise<ApiResponse<{
    totalAmount: number
    totalDonations: number
    completedDonations: number
    pendingDonations: number
  }>> => {
    await new Promise(resolve => setTimeout(resolve, 300))
    return {
      data: {
        totalAmount: 0,
        totalDonations: 0,
        completedDonations: 0,
        pendingDonations: 0
      },
      error: null
    }
  },

  getContactStats: async (): Promise<ApiResponse<{
    totalMessages: number
    unreadMessages: number
    readMessages: number
    repliedMessages: number
  }>> => {
    await new Promise(resolve => setTimeout(resolve, 300))
    return {
      data: {
        totalMessages: 0,
        unreadMessages: 0,
        readMessages: 0,
        repliedMessages: 0
      },
      error: null
    }
  }
}
