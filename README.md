# Gehn Eco Services Inc. - Website

A modern, responsive website for Gehn Eco Services Inc., a women-led social enterprise specializing in environmental consultancy, waste management, and livelihood programs.

## 🚀 Features

### Core Features
- **Modern Loading Screen**: Advanced 10-second loading animation with informative content
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Professional Layout**: Clean, organized content structure with proper spacing
- **Admin Portal**: Mock authentication system (ready for backend integration)
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
- **Mock API**: Frontend-only with mock data (backend-ready structure)
- **Responsive Images**: Optimized for all screen sizes

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+ 
- npm or yarn

### 1. Clone the Repository
```bash
git clone <repository-url>
cd gehn-eco-services-website
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration (Optional)
Create a `.env.local` file in the root directory (optional for frontend-only):

```env
# Contact Form Configuration
CONTACT_EMAIL=info@gehnecservices.com

# Admin Portal Configuration (Mock - will be replaced with backend auth)
ADMIN_USERNAME=admin
ADMIN_PASSWORD=ges2024
```

**Note**: This is a frontend-only application with mock data. See `BACKEND_INTEGRATION.md` for backend integration instructions.

### 4. Run Development Server
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
│   ├── api.ts            # API layer (mock implementation, backend-ready)
│   ├── types.ts          # TypeScript type definitions
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
- Mock authentication: Any email/password will work (for demo purposes)

### Features
- Mock authentication system
- Dashboard for managing content (ready for backend integration)
- Analytics and reporting (mock data)
- User management (ready for backend integration)

**Note**: Currently uses mock authentication. See `BACKEND_INTEGRATION.md` for backend setup.

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