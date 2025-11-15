// API Types - Ready for backend integration
// These types define the structure of data that will come from the backend

export type User = {
  id: string
  email: string
  name: string
  role: 'admin' | 'user'
  created_at: string
  updated_at: string
}

export type Donation = {
  id: string
  donor_name: string
  email: string
  amount: number
  message?: string
  status: 'pending' | 'completed' | 'failed'
  created_at: string
}

export type ContactMessage = {
  id: string
  name: string
  email: string
  subject: string
  message: string
  status: 'unread' | 'read' | 'replied'
  created_at: string
}

export type NewsletterSubscriber = {
  id: string
  email: string
  status: 'active' | 'unsubscribed'
  created_at: string
}

export type NewsArticle = {
  id: string
  title: string
  excerpt?: string
  content?: string
  image_url?: string
  author: string
  category: string
  featured: boolean
  published: boolean
  read_time: number
  created_at: string
  updated_at: string
}

export type TeamMember = {
  id: string
  name: string
  role: string
  bio?: string
  image_url?: string
  email?: string
  linkedin_url?: string
  expertise?: string[]
  created_at: string
  updated_at: string
}

export type ImpactStory = {
  id: string
  title: string
  description?: string
  location?: string
  impact_metrics?: string[]
  image_url?: string
  featured: boolean
  created_at: string
  updated_at: string
}

export type Service = {
  id: string
  name: string
  description?: string
  icon?: string
  features?: string[]
  created_at: string
  updated_at: string
}

// API Response types
export type ApiResponse<T> = {
  data: T | null
  error: {
    message: string
    code?: string
  } | null
}

export type AuthSession = {
  user: User
  token: string
  expires_at: string
}

