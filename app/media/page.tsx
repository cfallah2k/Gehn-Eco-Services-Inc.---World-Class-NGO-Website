import { motion } from 'framer-motion'
import { 
  Newspaper, 
  Users, 
  Award,
  CheckCircle,
  TrendingUp,
  Zap,
  Leaf,
  Target,
  Globe,
  Calendar,
  ExternalLink,
  Video,
  Mic,
  Camera
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import CountUp from 'react-countup'

const pressReleases = [
  {
    title: "Gehn Eco Services Wins UN Global Compact SDG Pioneer Award 2024",
    date: "January 15, 2024",
    category: "Awards",
    summary: "Leading environmental organization recognized for outstanding contribution to Sustainable Development Goals",
    content: "Gehn Eco Services has been awarded the prestigious UN Global Compact SDG Pioneer Award for 2024, recognizing our exceptional work in advancing the United Nations Sustainable Development Goals across Africa and beyond.",
    media: ["UN News", "Reuters", "African Business", "Environmental Leader"]
  },
  {
    title: "Major Partnership Announced with World Bank for Climate Action",
    date: "December 10, 2023",
    category: "Partnerships",
    summary: "Strategic collaboration to implement climate action programs across 25 African countries",
    content: "Gehn Eco Services and the World Bank Group have announced a major partnership to implement comprehensive climate action programs across 25 African countries, with an initial investment of $50 million.",
    media: ["World Bank", "Bloomberg", "Financial Times", "Climate Home"]
  },
  {
    title: "Breakthrough in Waste Management Technology Announced",
    date: "November 20, 2023",
    category: "Innovation",
    summary: "Revolutionary waste processing technology achieves 99% recovery rate",
    content: "Gehn Eco Services has announced a breakthrough in waste management technology that achieves a 99% recovery rate, setting new industry standards for environmental sustainability.",
    media: ["TechCrunch", "Waste Management World", "Environmental Technology", "Innovation Africa"]
  }
]

const mediaCoverage = [
  {
    title: "How One Organization is Transforming Environmental Management in Africa",
    outlet: "The Economist",
    date: "January 2024",
    type: "Feature Article",
    description: "Comprehensive feature on Gehn Eco Services' innovative approach to environmental management across Africa.",
    readTime: "8 min read",
    featured: true
  },
  {
    title: "Environmental Innovation: The African Success Story",
    outlet: "BBC World Service",
    date: "December 2023",
    type: "Radio Interview",
    description: "In-depth interview with our CEO about environmental innovation and sustainable development in Africa.",
    duration: "25 minutes",
    featured: true
  },
  {
    title: "Top 10 Environmental Organizations to Watch in 2024",
    outlet: "Forbes",
    date: "December 2023",
    type: "List Feature",
    description: "Gehn Eco Services featured among the world's most innovative environmental organizations.",
    readTime: "5 min read"
  },
  {
    title: "Circular Economy Success in Nigeria",
    outlet: "National Geographic",
    date: "November 2023",
    type: "Photo Essay",
    description: "Visual story of our circular economy initiatives transforming communities in Nigeria.",
    readTime: "12 min read"
  }
]

const impactStats = [
  {
    icon: Newspaper,
    value: 500,
    suffix: '+',
    label: 'Press Mentions',
    description: 'International media coverage'
  },
  {
    icon: Globe,
    value: 50,
    suffix: '+',
    label: 'Countries',
    description: 'Media reach worldwide'
  },
  {
    icon: Users,
    value: 1000000,
    suffix: '+',
    label: 'Media Reach',
    description: 'Audience impressions'
  },
  {
    icon: Award,
    value: 25,
    suffix: '+',
    label: 'Awards Coverage',
    description: 'Recognition in media'
  }
]

const mediaTypes = [
  {
    icon: Newspaper,
    title: "Press Releases",
    description: "Official announcements and news releases",
    count: "50+ releases",
    examples: ["Award announcements", "Partnership news", "Project launches", "Innovation updates"]
  },
  {
    icon: Video,
    title: "Video Content",
    description: "Multimedia content and documentaries",
    count: "100+ videos",
    examples: ["Project documentaries", "Expert interviews", "Training videos", "Impact stories"]
  },
  {
    icon: Camera,
    title: "Photo Stories",
    description: "Visual storytelling and photo essays",
    count: "200+ photos",
    examples: ["Project photography", "Community impact", "Environmental scenes", "Team activities"]
  },
  {
    icon: Mic,
    title: "Podcasts & Interviews",
    description: "Audio content and expert interviews",
    count: "75+ episodes",
    examples: ["Expert interviews", "Project discussions", "Policy debates", "Innovation talks"]
  }
]

const mediaKit = [
  {
    title: "Organization Fact Sheet",
    type: "PDF",
    size: "2.5 MB",
    description: "Comprehensive overview of Gehn Eco Services including key statistics and achievements"
  },
  {
    title: "High-Resolution Logo Pack",
    type: "ZIP",
    size: "15 MB",
    description: "Complete logo package with various formats and color schemes"
  },
  {
    title: "Executive Team Photos",
    type: "ZIP",
    size: "25 MB",
    description: "Professional headshots and team photos for media use"
  },
  {
    title: "Project Case Studies",
    type: "PDF",
    size: "8 MB",
    description: "Detailed case studies of our most impactful projects"
  }
]

const contactInfo = [
  {
    title: "Press Inquiries",
    email: "press@gehnecservices.com",
    phone: "+234 803 123 4567",
    response: "Within 24 hours"
  },
  {
    title: "Media Interviews",
    email: "media@gehnecservices.com",
    phone: "+234 803 123 4568",
    response: "Within 48 hours"
  },
  {
    title: "Photo & Video Requests",
    email: "multimedia@gehnecservices.com",
    phone: "+234 803 123 4569",
    response: "Within 72 hours"
  }
]

export default function MediaPage() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
              Media & Press
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-secondary-900 mb-6"
            >
              Media{' '}
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                Center
              </span>
              <br />
              & Press Room
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8"
            >
              Access press releases, media coverage, and multimedia content from one of the world's 
              leading environmental organizations, reaching 1M+ audience worldwide.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" asChild>
                <Link href="#press">Press Releases</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Media Contact</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-12 w-12 text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-secondary-900 mb-2">
                  <CountUp
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2.5}
                    delay={1 + index * 0.2}
                  />
                </div>
                <div className="text-lg font-semibold text-secondary-700 mb-2">{stat.label}</div>
                <div className="text-sm text-secondary-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Types */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Media Content
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Comprehensive media resources for journalists and content creators
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mediaTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <type.icon className="h-12 w-12 text-primary-600 mr-4" />
                  <div>
                    <h3 className="text-2xl font-semibold text-secondary-900">{type.title}</h3>
                    <p className="text-primary-600 font-medium">{type.count}</p>
                  </div>
                </div>
                
                <p className="text-secondary-600 mb-6">{type.description}</p>
                
                <div className="space-y-3">
                  {type.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-secondary-700">{example}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section id="press" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Press Releases
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Official announcements and news from Gehn Eco Services
            </p>
          </div>
          
          <div className="space-y-8">
            {pressReleases.map((release, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-secondary-900 mb-2">{release.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-secondary-600">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{release.date}</span>
                      </div>
                      <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full">
                        {release.category}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-secondary-600 mb-6">{release.content}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-secondary-900 mb-3">Media Coverage:</h4>
                  <div className="flex flex-wrap gap-2">
                    {release.media.map((outlet, outletIndex) => (
                      <span key={outletIndex} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                        {outlet}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Button asChild>
                    <Link href="/contact">Read Full Release</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/contact">Download PDF</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Media Coverage
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Recent coverage from leading international media outlets
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mediaCoverage.map((coverage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`bg-white rounded-2xl shadow-lg p-8 border ${coverage.featured ? 'border-primary-200 bg-primary-50' : 'border-gray-100'}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-secondary-600">{coverage.outlet}</span>
                    {coverage.featured && (
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-secondary-600">{coverage.date}</div>
                </div>
                
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">{coverage.title}</h3>
                <p className="text-secondary-600 mb-4">{coverage.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-secondary-600">
                    {coverage.readTime || coverage.duration}
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/contact">Read Article</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Media Kit
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Downloadable resources for journalists and media professionals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mediaKit.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900 mb-2">{item.title}</h3>
                    <p className="text-secondary-600 text-sm">{item.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-secondary-600">{item.type}</div>
                    <div className="text-sm text-secondary-600">{item.size}</div>
                  </div>
                </div>
                
                <Button variant="outline" size="sm" asChild className="w-full">
                  <Link href="/contact">Download</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Media Contact
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Get in touch with our media team for interviews, press inquiries, and content requests
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 text-center"
              >
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">{contact.title}</h3>
                <div className="space-y-2 text-sm">
                  <div className="text-secondary-600">{contact.email}</div>
                  <div className="text-secondary-600">{contact.phone}</div>
                  <div className="text-primary-600 font-medium">Response: {contact.response}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Subscribe to our press releases and media updates to stay informed about 
              our latest news, projects, and achievements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Subscribe to Press Releases</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary-600">
                <Link href="/contact">Contact Media Team</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
