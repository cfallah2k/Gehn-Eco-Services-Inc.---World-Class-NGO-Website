import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          name: string
          role: 'admin' | 'user'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          name: string
          role?: 'admin' | 'user'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          name?: string
          role?: 'admin' | 'user'
          created_at?: string
          updated_at?: string
        }
      }
      donations: {
        Row: {
          id: string
          donor_name: string
          email: string
          amount: number
          message?: string
          status: 'pending' | 'completed' | 'failed'
          created_at: string
        }
        Insert: {
          id?: string
          donor_name: string
          email: string
          amount: number
          message?: string
          status?: 'pending' | 'completed' | 'failed'
          created_at?: string
        }
        Update: {
          id?: string
          donor_name?: string
          email?: string
          amount?: number
          message?: string
          status?: 'pending' | 'completed' | 'failed'
          created_at?: string
        }
      }
      contact_messages: {
        Row: {
          id: string
          name: string
          email: string
          subject: string
          message: string
          status: 'unread' | 'read' | 'replied'
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          subject: string
          message: string
          status?: 'unread' | 'read' | 'replied'
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          subject?: string
          message?: string
          status?: 'unread' | 'read' | 'replied'
          created_at?: string
        }
      }
      newsletter_subscribers: {
        Row: {
          id: string
          email: string
          status: 'active' | 'unsubscribed'
          created_at: string
        }
        Insert: {
          id?: string
          email: string
          status?: 'active' | 'unsubscribed'
          created_at?: string
        }
        Update: {
          id?: string
          email?: string
          status?: 'active' | 'unsubscribed'
          created_at?: string
        }
      }
      news_articles: {
        Row: {
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
        Insert: {
          id?: string
          title: string
          excerpt?: string
          content?: string
          image_url?: string
          author: string
          category: string
          featured?: boolean
          published?: boolean
          read_time?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          excerpt?: string
          content?: string
          image_url?: string
          author?: string
          category?: string
          featured?: boolean
          published?: boolean
          read_time?: number
          created_at?: string
          updated_at?: string
        }
      }
      team_members: {
        Row: {
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
        Insert: {
          id?: string
          name: string
          role: string
          bio?: string
          image_url?: string
          email?: string
          linkedin_url?: string
          expertise?: string[]
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          role?: string
          bio?: string
          image_url?: string
          email?: string
          linkedin_url?: string
          expertise?: string[]
          created_at?: string
          updated_at?: string
        }
      }
      impact_stories: {
        Row: {
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
        Insert: {
          id?: string
          title: string
          description?: string
          location?: string
          impact_metrics?: string[]
          image_url?: string
          featured?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          location?: string
          impact_metrics?: string[]
          image_url?: string
          featured?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      services: {
        Row: {
          id: string
          name: string
          description?: string
          icon?: string
          features?: string[]
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string
          icon?: string
          features?: string[]
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string
          icon?: string
          features?: string[]
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
} 