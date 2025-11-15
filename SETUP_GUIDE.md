# 🚀 Frontend Setup Guide

## Quick Start

This is a **frontend-only** application with mock data. No backend setup required!

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

That's it! The application runs with mock data and doesn't require any backend setup.

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── admin/             # Admin portal (mock auth)
│   ├── contact/           # Contact page
│   └── ...                # Other pages
├── components/            # React components
│   ├── layout/           # Header, footer, layout wrapper
│   ├── pages/            # Page-specific components
│   ├── sections/         # Reusable section components
│   └── ui/               # UI components
├── lib/                  # Utility functions and configurations
│   ├── api.ts            # API layer (mock implementation)
│   ├── types.ts          # TypeScript type definitions
│   └── utils.ts          # Utility functions
└── public/               # Static assets
```

## 🎨 Features

### Current Implementation
- ✅ Fully functional frontend with mock data
- ✅ Mock authentication system
- ✅ Contact form (logs to console)
- ✅ Newsletter subscription (logs to console)
- ✅ Donation form (logs to console)
- ✅ All pages working with static/mock data

### Mock Data
- Team members: Static data in `lib/api.ts`
- Services: Static data in `lib/api.ts`
- News articles: Static data in `lib/api.ts`
- Impact stories: Static data in `lib/api.ts`

## 🔧 Admin Portal

### Access
- URL: `/admin/login`
- **Mock Authentication**: Any email/password combination will work
- No backend required - authentication is simulated

### Admin Features
- Dashboard (ready for backend integration)
- Content management (ready for backend integration)
- Analytics (mock data)

## 🚀 Backend Integration

When you're ready to add a backend:

1. **Read `BACKEND_INTEGRATION.md`** for detailed instructions
2. **Update `lib/api.ts`** - Replace mock functions with real API calls
3. **Add environment variables** - Configure your backend API URL
4. **Update authentication** - Replace mock auth with real backend auth

The codebase is structured to make backend integration easy:
- All API functions are in `lib/api.ts`
- Type definitions are in `lib/types.ts`
- Consistent `ApiResponse<T>` return types
- Clear separation between frontend and backend logic

## 📝 Environment Variables (Optional)

Create `.env.local` for optional configuration:

```env
# Contact Form Configuration
CONTACT_EMAIL=info@gehnecservices.com

# Admin Portal Configuration (Mock - will be replaced with backend auth)
ADMIN_USERNAME=admin
ADMIN_PASSWORD=ges2024
```

## 🎯 Customization

### Update Content
- **Team Members**: Edit mock data in `lib/api.ts` → `mockTeamMembers`
- **Services**: Edit mock data in `lib/api.ts` → `mockServices`
- **News Articles**: Edit mock data in `lib/api.ts` → `mockNewsArticles`
- **Impact Stories**: Edit mock data in `lib/api.ts` → `mockImpactStories`

### Update Styling
- Colors: `tailwind.config.js`
- Global styles: `app/globals.css`
- Component styles: Individual component files

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push
3. No environment variables needed for frontend-only

### Other Platforms
- **Netlify**: Build command: `npm run build`, Publish directory: `.next`
- **Railway**: Connect repository and deploy
- **DigitalOcean App Platform**: Deploy with Node.js preset

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
- **PWA Support**: Progressive Web App capabilities

## 🔄 Next Steps

1. **Customize Content**: Update mock data with your actual content
2. **Add Backend**: Follow `BACKEND_INTEGRATION.md` when ready
3. **Deploy**: Push to your hosting platform
4. **Monitor**: Set up analytics and monitoring

## 📞 Support

For support or questions:
- Email: info@gehnecservices.com
- Website: https://gehnecservices.com

---

**Built with ❤️ for environmental sustainability and community empowerment**
