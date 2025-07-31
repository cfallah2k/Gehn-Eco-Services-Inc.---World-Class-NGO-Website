import { supabase } from './supabase'
import type { Database } from './supabase'

// Type definitions
export type User = Database['public']['Tables']['users']['Row']
export type Donation = Database['public']['Tables']['donations']['Row']
export type ContactMessage = Database['public']['Tables']['contact_messages']['Row']
export type NewsletterSubscriber = Database['public']['Tables']['newsletter_subscribers']['Row']
export type NewsArticle = Database['public']['Tables']['news_articles']['Row']
export type TeamMember = Database['public']['Tables']['team_members']['Row']
export type ImpactStory = Database['public']['Tables']['impact_stories']['Row']
export type Service = Database['public']['Tables']['services']['Row']

// Authentication functions
export const auth = {
  // Sign in with email and password
  signIn: async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    return { data, error }
  },

  // Sign out
  signOut: async () => {
    const { error } = await supabase.auth.signOut()
    return { error }
  },

  // Get current session
  getSession: async () => {
    const { data: { session }, error } = await supabase.auth.getSession()
    return { session, error }
  },

  // Get current user
  getUser: async () => {
    const { data: { user }, error } = await supabase.auth.getUser()
    return { user, error }
  }
}

// Contact form functions
export const contact = {
  // Submit contact form
  submitMessage: async (message: Omit<ContactMessage, 'id' | 'status' | 'created_at'>) => {
    const { data, error } = await supabase
      .from('contact_messages')
      .insert([message])
      .select()
      .single()
    
    return { data, error }
  },

  // Get all contact messages (admin only)
  getAllMessages: async () => {
    const { data, error } = await supabase
      .from('contact_messages')
      .select('*')
      .order('created_at', { ascending: false })
    
    return { data, error }
  },

  // Update message status (admin only)
  updateMessageStatus: async (id: string, status: ContactMessage['status']) => {
    const { data, error } = await supabase
      .from('contact_messages')
      .update({ status })
      .eq('id', id)
      .select()
      .single()
    
    return { data, error }
  }
}

// Newsletter functions
export const newsletter = {
  // Subscribe to newsletter
  subscribe: async (email: string) => {
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert([{ email }])
      .select()
      .single()
    
    return { data, error }
  },

  // Unsubscribe from newsletter
  unsubscribe: async (email: string) => {
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .update({ status: 'unsubscribed' })
      .eq('email', email)
      .select()
      .single()
    
    return { data, error }
  },

  // Get all subscribers (admin only)
  getAllSubscribers: async () => {
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .select('*')
      .order('created_at', { ascending: false })
    
    return { data, error }
  }
}

// Donations functions
export const donations = {
  // Submit donation
  submitDonation: async (donation: Omit<Donation, 'id' | 'status' | 'created_at'>) => {
    const { data, error } = await supabase
      .from('donations')
      .insert([donation])
      .select()
      .single()
    
    return { data, error }
  },

  // Get all donations (admin only)
  getAllDonations: async () => {
    const { data, error } = await supabase
      .from('donations')
      .select('*')
      .order('created_at', { ascending: false })
    
    return { data, error }
  },

  // Update donation status (admin only)
  updateDonationStatus: async (id: string, status: Donation['status']) => {
    const { data, error } = await supabase
      .from('donations')
      .update({ status })
      .eq('id', id)
      .select()
      .single()
    
    return { data, error }
  }
}

// News articles functions
export const news = {
  // Get all published articles
  getPublishedArticles: async () => {
    const { data, error } = await supabase
      .from('news_articles')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false })
    
    return { data, error }
  },

  // Get featured articles
  getFeaturedArticles: async () => {
    const { data, error } = await supabase
      .from('news_articles')
      .select('*')
      .eq('published', true)
      .eq('featured', true)
      .order('created_at', { ascending: false })
    
    return { data, error }
  },

  // Get article by ID
  getArticleById: async (id: string) => {
    const { data, error } = await supabase
      .from('news_articles')
      .select('*')
      .eq('id', id)
      .eq('published', true)
      .single()
    
    return { data, error }
  },

  // Create new article (admin only)
  createArticle: async (article: Omit<NewsArticle, 'id' | 'created_at' | 'updated_at'>) => {
    const { data, error } = await supabase
      .from('news_articles')
      .insert([article])
      .select()
      .single()
    
    return { data, error }
  },

  // Update article (admin only)
  updateArticle: async (id: string, updates: Partial<NewsArticle>) => {
    const { data, error } = await supabase
      .from('news_articles')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()
    
    return { data, error }
  },

  // Delete article (admin only)
  deleteArticle: async (id: string) => {
    const { error } = await supabase
      .from('news_articles')
      .delete()
      .eq('id', id)
    
    return { error }
  }
}

// Team members functions
export const team = {
  // Get all team members
  getAllMembers: async () => {
    const { data, error } = await supabase
      .from('team_members')
      .select('*')
      .order('created_at', { ascending: true })
    
    return { data, error }
  },

  // Get team member by ID
  getMemberById: async (id: string) => {
    const { data, error } = await supabase
      .from('team_members')
      .select('*')
      .eq('id', id)
      .single()
    
    return { data, error }
  },

  // Create team member (admin only)
  createMember: async (member: Omit<TeamMember, 'id' | 'created_at' | 'updated_at'>) => {
    const { data, error } = await supabase
      .from('team_members')
      .insert([member])
      .select()
      .single()
    
    return { data, error }
  },

  // Update team member (admin only)
  updateMember: async (id: string, updates: Partial<TeamMember>) => {
    const { data, error } = await supabase
      .from('team_members')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()
    
    return { data, error }
  },

  // Delete team member (admin only)
  deleteMember: async (id: string) => {
    const { error } = await supabase
      .from('team_members')
      .delete()
      .eq('id', id)
    
    return { error }
  }
}

// Impact stories functions
export const impact = {
  // Get all impact stories
  getAllStories: async () => {
    const { data, error } = await supabase
      .from('impact_stories')
      .select('*')
      .order('created_at', { ascending: false })
    
    return { data, error }
  },

  // Get featured stories
  getFeaturedStories: async () => {
    const { data, error } = await supabase
      .from('impact_stories')
      .select('*')
      .eq('featured', true)
      .order('created_at', { ascending: false })
    
    return { data, error }
  },

  // Get story by ID
  getStoryById: async (id: string) => {
    const { data, error } = await supabase
      .from('impact_stories')
      .select('*')
      .eq('id', id)
      .single()
    
    return { data, error }
  },

  // Create story (admin only)
  createStory: async (story: Omit<ImpactStory, 'id' | 'created_at' | 'updated_at'>) => {
    const { data, error } = await supabase
      .from('impact_stories')
      .insert([story])
      .select()
      .single()
    
    return { data, error }
  },

  // Update story (admin only)
  updateStory: async (id: string, updates: Partial<ImpactStory>) => {
    const { data, error } = await supabase
      .from('impact_stories')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()
    
    return { data, error }
  },

  // Delete story (admin only)
  deleteStory: async (id: string) => {
    const { error } = await supabase
      .from('impact_stories')
      .delete()
      .eq('id', id)
    
    return { error }
  }
}

// Services functions
export const services = {
  // Get all services
  getAllServices: async () => {
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .order('created_at', { ascending: true })
    
    return { data, error }
  },

  // Get service by ID
  getServiceById: async (id: string) => {
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .eq('id', id)
      .single()
    
    return { data, error }
  },

  // Create service (admin only)
  createService: async (service: Omit<Service, 'id' | 'created_at' | 'updated_at'>) => {
    const { data, error } = await supabase
      .from('services')
      .insert([service])
      .select()
      .single()
    
    return { data, error }
  },

  // Update service (admin only)
  updateService: async (id: string, updates: Partial<Service>) => {
    const { data, error } = await supabase
      .from('services')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()
    
    return { data, error }
  },

  // Delete service (admin only)
  deleteService: async (id: string) => {
    const { error } = await supabase
      .from('services')
      .delete()
      .eq('id', id)
    
    return { error }
  }
}

// Analytics functions
export const analytics = {
  // Get donation statistics
  getDonationStats: async () => {
    const { data, error } = await supabase
      .from('donations')
      .select('amount, status, created_at')
    
    if (error) return { data: null, error }
    
    const totalDonations = data?.reduce((sum, donation) => sum + Number(donation.amount), 0) || 0
    const completedDonations = data?.filter(d => d.status === 'completed').length || 0
    const pendingDonations = data?.filter(d => d.status === 'pending').length || 0
    
    return {
      data: {
        totalAmount: totalDonations,
        totalDonations: data?.length || 0,
        completedDonations,
        pendingDonations
      },
      error: null
    }
  },

  // Get contact message statistics
  getContactStats: async () => {
    const { data, error } = await supabase
      .from('contact_messages')
      .select('status, created_at')
    
    if (error) return { data: null, error }
    
    const unreadMessages = data?.filter(m => m.status === 'unread').length || 0
    const readMessages = data?.filter(m => m.status === 'read').length || 0
    const repliedMessages = data?.filter(m => m.status === 'replied').length || 0
    
    return {
      data: {
        totalMessages: data?.length || 0,
        unreadMessages,
        readMessages,
        repliedMessages
      },
      error: null
    }
  }
} 