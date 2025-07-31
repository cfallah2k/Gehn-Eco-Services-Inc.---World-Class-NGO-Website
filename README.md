# Gehn Eco Services Inc. - Website

A modern, responsive website for Gehn Eco Services Inc., a women-led social enterprise specializing in environmental consultancy, waste management, and livelihood programs.

## 🚀 Features

### Core Features
- **Modern Loading Screen**: Advanced 10-second loading animation with informative content
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Professional Layout**: Clean, organized content structure with proper spacing
- **Admin Portal**: Secure Supabase-powered authentication system
- **Multi-page Structure**: Organized content across dedicated pages

### Pages & Sections
- **Home**: Hero section, about, services, impact, CTA
- **About**: Mission, vision, values, history, awards
- **Services**: Comprehensive service offerings with case studies
- **Impact**: Success stories, statistics, achievements
- **Team**: Leadership profiles and organizational values
- **News**: Latest updates and featured articles
- **Contact**: Contact form, office locations, FAQ

### Technical Features
- **Next.js 14**: Latest React framework with App Router
- **TypeScript**: Full type safety
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Smooth animations and transitions
- **Supabase**: Backend database and authentication
- **Responsive Images**: Optimized for all screen sizes

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Supabase account

### 1. Clone the Repository
```bash
git clone <repository-url>
cd gehn-eco-services-website
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Create a `.env.local` file in the root directory:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Admin Portal Configuration
ADMIN_USERNAME=admin
ADMIN_PASSWORD=ges2024

# Contact Form Configuration
CONTACT_EMAIL=info@gehnecservices.com
```

### 4. Supabase Setup

#### Create Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Get your project URL and anon key from Settings > API

#### Database Schema
Run the following SQL in your Supabase SQL editor:

```sql
-- Create users table
CREATE TABLE users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  role TEXT DEFAULT 'user' CHECK (role IN ('admin', 'user')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create donations table
CREATE TABLE donations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  donor_name TEXT NOT NULL,
  email TEXT NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  message TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'failed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create contact_messages table
CREATE TABLE contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'unread' CHECK (status IN ('unread', 'read', 'replied')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create newsletter_subscribers table
CREATE TABLE newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default admin user
INSERT INTO users (email, name, role) VALUES ('admin@gehnecservices.com', 'Admin User', 'admin');
```

#### Authentication Setup
1. Go to Authentication > Settings in Supabase
2. Enable Email auth provider
3. Set up email templates (optional)

### 5. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── admin/             # Admin portal
│   ├── contact/           # Contact page
│   ├── impact/            # Impact page
│   ├── news/              # News page
│   ├── services/          # Services page
│   └── team/              # Team page
├── components/            # React components
│   ├── layout/           # Header, footer, layout wrapper
│   ├── pages/            # Page-specific components
│   ├── sections/         # Reusable section components
│   └── ui/               # UI components (buttons, etc.)
├── lib/                  # Utility functions and configurations
│   ├── supabase.ts       # Supabase client configuration
│   └── utils.ts          # Utility functions
└── public/               # Static assets
```

## 🎨 Customization

### Colors & Branding
Update the color scheme in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf4',
          600: '#16a34a',
          // ... other shades
        },
        secondary: {
          900: '#111827',
          // ... other shades
        }
      }
    }
  }
}
```

### Content Updates
- **Hero Section**: Update in `components/sections/hero-section.tsx`
- **About Content**: Modify `components/pages/about/` components
- **Services**: Update `components/pages/services/` components
- **Team Members**: Edit `app/team/page.tsx`
- **News Articles**: Update `app/news/page.tsx`

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push

### Other Platforms
- **Netlify**: Build command: `npm run build`, Publish directory: `out`
- **Railway**: Connect repository and add environment variables
- **DigitalOcean App Platform**: Deploy with Node.js preset

## 🔧 Admin Portal

### Access
- URL: `/admin/login`
- Default credentials: `admin@gehnecservices.com` / `ges2024`

### Features
- Secure Supabase authentication
- Dashboard for managing content
- Analytics and reporting
- User management

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## 🎯 Performance

- **Loading Screen**: 10-second modern animation
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic with Next.js
- **SEO Optimized**: Meta tags and structured data

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support or questions:
- Email: info@gehnecservices.com
- Website: https://gehnecservices.com

---

**Built with ❤️ for environmental sustainability and community empowerment** 