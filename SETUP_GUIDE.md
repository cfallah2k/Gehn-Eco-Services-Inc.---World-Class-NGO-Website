# 🗄️ Supabase Backend Setup Guide

## Step-by-Step Setup Instructions

### 1. Create Supabase Project

1. **Visit Supabase Dashboard**
   - Go to [supabase.com](https://supabase.com)
   - Sign up or log in to your account

2. **Create New Project**
   - Click "New Project"
   - Choose your organization
   - Enter project details:
     - **Name**: `gehn-eco-services`
     - **Database Password**: Create a strong password (save this!)
     - **Region**: Choose closest to your target audience
   - Click "Create new project"

3. **Wait for Setup**
   - Project creation takes 2-3 minutes
   - You'll receive an email when ready

### 2. Get API Credentials

1. **Navigate to Settings**
   - Go to your project dashboard
   - Click "Settings" in the sidebar
   - Click "API"

2. **Copy Credentials**
   - **Project URL**: Copy the "Project URL"
   - **Anon Key**: Copy the "anon public" key
   - Save these for your environment variables

### 3. Set Up Database Schema

1. **Open SQL Editor**
   - In your Supabase dashboard, go to "SQL Editor"
   - Click "New query"

2. **Run the Setup Script**
   - Copy the entire content from `supabase-setup.sql`
   - Paste it into the SQL editor
   - Click "Run" to execute the script

### 4. Configure Authentication

1. **Go to Authentication Settings**
   - Navigate to "Authentication" → "Settings"
   - Configure the following:

2. **Enable Email Auth**
   - Make sure "Enable email confirmations" is OFF (for demo)
   - Set "Secure email change" to OFF (for demo)

3. **Create Admin User**
   - Go to "Authentication" → "Users"
   - Click "Add user"
   - Enter:
     - **Email**: `admin@gehnecservices.com`
     - **Password**: `ges2024`
   - Click "Add user"

### 5. Set Up Environment Variables

Create a `.env.local` file in your project root:

```env
# Supabase Configuration
# Replace these with your actual Supabase project credentials
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here

# Admin Portal Configuration
ADMIN_USERNAME=admin
ADMIN_PASSWORD=ges2024

# Contact Form Configuration
CONTACT_EMAIL=info@gehnecservices.com
```

### 6. Test the Setup

1. **Start Development Server**
   ```bash
   npm run dev
   ```

2. **Test Admin Login**
   - Go to `http://localhost:3000/admin/login`
   - Use credentials: `admin@gehnecservices.com` / `ges2024`

3. **Test Database Connection**
   - Check if the admin login works
   - Verify data is being fetched from Supabase

## 🔧 Database Tables Created

The setup script creates the following tables:

### Core Tables
- **users**: Admin user management
- **donations**: Track donations and contributions
- **contact_messages**: Contact form submissions
- **newsletter_subscribers**: Email newsletter subscriptions

### Content Tables
- **news_articles**: News and blog posts
- **team_members**: Team member profiles
- **impact_stories**: Success stories and case studies
- **services**: Service offerings

### Security Features
- **Row Level Security (RLS)**: Data protection
- **Indexes**: Performance optimization
- **Policies**: Access control rules

## 📊 Sample Data Included

The setup script includes:

### Team Members
- Dr. Sarah Johnson (Founder & CEO)
- Aisha Mohammed (Director of Operations)
- Grace Okonkwo (Head of Environmental Consultancy)
- Fatima Hassan (Livelihood Programs Manager)

### Services
- Waste Management
- Environmental Consultancy
- Sanitation Solutions
- Livelihood Programs

### Impact Stories
- Community Waste Management Initiative
- Environmental Education Program
- Livelihood Enhancement Project

### News Articles
- Latest program updates
- Success stories
- Award announcements

## 🔐 Security Features

### Row Level Security (RLS)
- **Public Access**: Read-only access to published content
- **Admin Access**: Full CRUD operations for authenticated admins
- **Data Protection**: Sensitive data is protected by policies

### Authentication
- **Email/Password**: Secure login system
- **Session Management**: Automatic session handling
- **Role-based Access**: Admin vs user permissions

## 🚀 Next Steps

### 1. Customize Content
- Update team member information
- Add your own news articles
- Modify service descriptions
- Update impact stories

### 2. Configure Email
- Set up email templates in Supabase
- Configure SMTP settings
- Test contact form submissions

### 3. Add Analytics
- Connect Google Analytics
- Set up conversion tracking
- Monitor user engagement

### 4. Deploy to Production
- Set up production environment variables
- Configure custom domain
- Enable SSL certificates

## 🆘 Troubleshooting

### Common Issues

1. **Authentication Errors**
   - Check environment variables are correct
   - Verify admin user exists in Supabase
   - Ensure email auth is enabled

2. **Database Connection Issues**
   - Verify Supabase URL and key
   - Check if tables were created successfully
   - Ensure RLS policies are in place

3. **Permission Errors**
   - Check RLS policies are enabled
   - Verify user roles are set correctly
   - Test with admin credentials

### Support
- Check Supabase documentation
- Review error logs in browser console
- Test with sample data first

## 📞 Need Help?

If you encounter issues:
1. Check the Supabase dashboard logs
2. Verify all environment variables are set
3. Test the admin login functionality
4. Review the database schema in Supabase

---

**Your Supabase backend is now ready! 🎉** 