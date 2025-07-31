-- Gehn Eco Services Database Setup
-- Run this script in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  role TEXT DEFAULT 'user' CHECK (role IN ('admin', 'user')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create donations table
CREATE TABLE IF NOT EXISTS donations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  donor_name TEXT NOT NULL,
  email TEXT NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  message TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'failed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'unread' CHECK (status IN ('unread', 'read', 'replied')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create newsletter_subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create news_articles table
CREATE TABLE IF NOT EXISTS news_articles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  excerpt TEXT,
  content TEXT,
  image_url TEXT,
  author TEXT NOT NULL,
  category TEXT NOT NULL,
  featured BOOLEAN DEFAULT false,
  published BOOLEAN DEFAULT false,
  read_time INTEGER DEFAULT 5,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create team_members table
CREATE TABLE IF NOT EXISTS team_members (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  bio TEXT,
  image_url TEXT,
  email TEXT,
  linkedin_url TEXT,
  expertise TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create impact_stories table
CREATE TABLE IF NOT EXISTS impact_stories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  location TEXT,
  impact_metrics TEXT[],
  image_url TEXT,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create services table
CREATE TABLE IF NOT EXISTS services (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  icon TEXT,
  features TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default admin user
INSERT INTO users (email, name, role) 
VALUES ('admin@gehnecservices.com', 'Admin User', 'admin')
ON CONFLICT (email) DO NOTHING;

-- Insert sample team members
INSERT INTO team_members (name, role, bio, image_url, email, linkedin_url, expertise) VALUES
('Dr. Sarah Johnson', 'Founder & CEO', 'Environmental scientist with 20+ years experience in waste management and community development. Passionate about creating sustainable solutions.', 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', 'sarah@gehnecservices.com', '#', ARRAY['Environmental Science', 'Waste Management', 'Community Development']),
('Aisha Mohammed', 'Director of Operations', 'Operations expert specializing in scaling environmental programs and managing community partnerships across Nigeria.', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', 'aisha@gehnecservices.com', '#', ARRAY['Operations Management', 'Program Scaling', 'Partnership Development']),
('Grace Okonkwo', 'Head of Environmental Consultancy', 'Environmental consultant with expertise in impact assessment, sustainability planning, and regulatory compliance.', 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', 'grace@gehnecservices.com', '#', ARRAY['Environmental Assessment', 'Sustainability Planning', 'Regulatory Compliance']),
('Fatima Hassan', 'Livelihood Programs Manager', 'Social entrepreneur focused on creating economic opportunities through environmental initiatives and skill development.', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', 'fatima@gehnecservices.com', '#', ARRAY['Social Entrepreneurship', 'Skill Development', 'Economic Empowerment']);

-- Insert sample services
INSERT INTO services (name, description, icon, features) VALUES
('Waste Management', 'Comprehensive waste collection, sorting, and recycling services for communities and businesses.', 'trash', ARRAY['Community waste collection', 'Recycling programs', 'Waste reduction strategies']),
('Environmental Consultancy', 'Expert environmental assessment, sustainability planning, and regulatory compliance services.', 'leaf', ARRAY['Environmental impact assessment', 'Sustainability planning', 'Regulatory compliance']),
('Sanitation Solutions', 'Innovative sanitation systems and hygiene promotion programs for underserved communities.', 'droplets', ARRAY['Sanitation infrastructure', 'Hygiene education', 'Community health programs']),
('Livelihood Programs', 'Economic empowerment through skill development and sustainable business opportunities.', 'users', ARRAY['Skill development training', 'Business incubation', 'Market access support']);

-- Insert sample impact stories
INSERT INTO impact_stories (title, description, location, impact_metrics, image_url, featured) VALUES
('Community Waste Management Initiative', 'Implemented comprehensive waste management system in underserved communities, creating jobs and improving environmental health.', 'Lagos, Nigeria', ARRAY['60% waste reduction', '50 new jobs created', '10,000+ people served'], 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', true),
('Environmental Education Program', 'Launched educational programs in schools and communities to promote environmental awareness and sustainable practices.', 'Port Harcourt, Nigeria', ARRAY['500+ trained advocates', '25 schools involved', '15,000+ students reached'], 'https://images.unsplash.com/photo-1523240797358-5c6e2c6c0c8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', false),
('Livelihood Enhancement Project', 'Developed sustainable livelihood programs that transformed waste into valuable products, improving economic conditions.', 'Kano, Nigeria', ARRAY['200% income increase', '300 families benefited', '5 new products created'], 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', false);

-- Insert sample news articles
INSERT INTO news_articles (title, excerpt, content, image_url, author, category, featured, published, read_time) VALUES
('Gehn Eco Services Launches New Waste Management Initiative in Lagos', 'Our latest community-based waste management program has successfully reduced waste by 60% in underserved communities, creating 50 new jobs in the process.', 'Full article content here...', 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', 'Sarah Johnson', 'Programs', true, true, 5),
('Environmental Education Program Reaches 15,000 Students', 'Our school-based environmental awareness program has expanded to 25 schools across Nigeria, training 500+ environmental advocates.', 'Full article content here...', 'https://images.unsplash.com/photo-1523240797358-5c6e2c6c0c8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', 'Grace Okonkwo', 'Education', false, true, 4),
('Livelihood Enhancement Project Shows 200% Income Increase', 'Our sustainable livelihood programs have transformed waste into valuable products, significantly improving economic conditions for 300 families.', 'Full article content here...', 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', 'Fatima Hassan', 'Livelihood', false, true, 6);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_news_articles_published ON news_articles(published);
CREATE INDEX IF NOT EXISTS idx_news_articles_featured ON news_articles(featured);
CREATE INDEX IF NOT EXISTS idx_contact_messages_status ON contact_messages(status);
CREATE INDEX IF NOT EXISTS idx_donations_status ON donations(status);
CREATE INDEX IF NOT EXISTS idx_team_members_role ON team_members(role);

-- Enable Row Level Security (RLS)
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE donations ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE news_articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE impact_stories ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
-- Users can only see their own data
CREATE POLICY "Users can view own data" ON users FOR SELECT USING (auth.uid()::text = id::text);

-- Public can view published news articles
CREATE POLICY "Public can view published news" ON news_articles FOR SELECT USING (published = true);

-- Public can view team members
CREATE POLICY "Public can view team members" ON team_members FOR SELECT USING (true);

-- Public can view impact stories
CREATE POLICY "Public can view impact stories" ON impact_stories FOR SELECT USING (true);

-- Public can view services
CREATE POLICY "Public can view services" ON services FOR SELECT USING (true);

-- Public can insert contact messages
CREATE POLICY "Public can insert contact messages" ON contact_messages FOR INSERT WITH CHECK (true);

-- Public can insert newsletter subscriptions
CREATE POLICY "Public can insert newsletter subscriptions" ON newsletter_subscribers FOR INSERT WITH CHECK (true);

-- Public can insert donations
CREATE POLICY "Public can insert donations" ON donations FOR INSERT WITH CHECK (true);

-- Admins can manage all data
CREATE POLICY "Admins can manage all data" ON users FOR ALL USING (
  EXISTS (
    SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin'
  )
);

CREATE POLICY "Admins can manage all data" ON donations FOR ALL USING (
  EXISTS (
    SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin'
  )
);

CREATE POLICY "Admins can manage all data" ON contact_messages FOR ALL USING (
  EXISTS (
    SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin'
  )
);

CREATE POLICY "Admins can manage all data" ON newsletter_subscribers FOR ALL USING (
  EXISTS (
    SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin'
  )
);

CREATE POLICY "Admins can manage all data" ON news_articles FOR ALL USING (
  EXISTS (
    SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin'
  )
);

CREATE POLICY "Admins can manage all data" ON team_members FOR ALL USING (
  EXISTS (
    SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin'
  )
);

CREATE POLICY "Admins can manage all data" ON impact_stories FOR ALL USING (
  EXISTS (
    SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin'
  )
);

CREATE POLICY "Admins can manage all data" ON services FOR ALL USING (
  EXISTS (
    SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin'
  )
); 