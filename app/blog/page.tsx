'use client'

import { motion } from 'framer-motion'
import { 
  FileText, 
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
  Clock,
  Tag
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import CountUp from 'react-countup'

const featuredPosts = [
  {
    title: "The Future of Circular Economy in Africa: A Comprehensive Analysis",
    excerpt: "Exploring how circular economy principles are transforming waste management and creating sustainable economic opportunities across the African continent.",
    author: "Dr. Sarah Johnson",
    date: "January 15, 2024",
    readTime: "8 min read",
    category: "Circular Economy",
    featured: true,
    views: "15,000+"
  },
  {
    title: "Climate Action Success Stories: Lessons from 25 African Countries",
    excerpt: "Real-world examples of successful climate action initiatives and the key factors that contributed to their success in diverse African contexts.",
    author: "Michael Chen",
    date: "January 10, 2024",
    readTime: "12 min read",
    category: "Climate Action",
    featured: true,
    views: "12,000+"
  }
]

const recentPosts = [
  {
    title: "Innovative Waste-to-Energy Technologies: Breaking New Ground",
    excerpt: "Latest developments in waste-to-energy conversion technologies and their potential to revolutionize sustainable energy production.",
    author: "Dr. Fatima Ndiaye",
    date: "January 8, 2024",
    readTime: "6 min read",
    category: "Innovation",
    views: "8,500+"
  },
  {
    title: "Community-Led Environmental Initiatives: The Power of Local Action",
    excerpt: "How community-driven environmental projects are creating lasting impact and empowering local populations across Africa.",
    author: "David Okafor",
    date: "January 5, 2024",
    readTime: "7 min read",
    category: "Community Impact",
    views: "7,200+"
  },
  {
    title: "UN SDGs Progress Report: Environmental Goals in Focus",
    excerpt: "Comprehensive analysis of progress towards UN Sustainable Development Goals related to environmental protection and sustainability.",
    author: "Maria Santos",
    date: "January 3, 2024",
    readTime: "10 min read",
    category: "Policy & Research",
    views: "9,800+"
  },
  {
    title: "Youth Engagement in Environmental Conservation: A Global Perspective",
    excerpt: "Examining the critical role of young people in driving environmental change and innovative approaches to youth engagement.",
    author: "Ahmed Hassan",
    date: "December 28, 2023",
    readTime: "5 min read",
    category: "Youth Programs",
    views: "6,500+"
  }
]

const impactStats = [
  {
    icon: FileText,
    value: 200,
    suffix: '+',
    label: 'Articles',
    description: 'Published insights and analysis'
  },
  {
    icon: Users,
    value: 50000,
    suffix: '+',
    label: 'Readers',
    description: 'Monthly blog engagement'
  },
  {
    icon: Globe,
    value: 75,
    suffix: '+',
    label: 'Countries',
    description: 'Global readership reach'
  },
  {
    icon: Award,
    value: 25,
    suffix: '+',
    label: 'Awards',
    description: 'Content recognition'
  }
]

const blogCategories = [
  {
    icon: Leaf,
    title: "Environmental Science",
    description: "In-depth analysis of environmental issues and scientific research",
    count: "45+ articles",
    examples: ["Climate change", "Biodiversity", "Ecosystem restoration", "Environmental monitoring"]
  },
  {
    icon: Zap,
    title: "Innovation & Technology",
    description: "Latest developments in environmental technology and innovation",
    count: "35+ articles",
    examples: ["Clean energy", "Waste technology", "Digital solutions", "Smart cities"]
  },
  {
    icon: Users,
    title: "Community Impact",
    description: "Stories of community transformation and social impact",
    count: "40+ articles",
    examples: ["Community projects", "Capacity building", "Social innovation", "Local partnerships"]
  },
  {
    icon: Target,
    title: "Policy & Research",
    description: "Policy analysis and research insights on environmental governance",
    count: "30+ articles",
    examples: ["Policy development", "Research findings", "International cooperation", "Regulatory frameworks"]
  }
]

const popularTags = [
  "Circular Economy",
  "Climate Action",
  "Waste Management",
  "Renewable Energy",
  "Community Development",
  "Innovation",
  "Sustainability",
  "Policy",
  "Research",
  "Youth Programs",
  "Technology",
  "Africa"
]

const authors = [
  {
    name: "Dr. Sarah Johnson",
    title: "Director of Research",
    expertise: "Environmental Science",
    articles: 25
  },
  {
    name: "Michael Chen",
    title: "Senior Consultant",
    expertise: "Climate Policy",
    articles: 18
  },
  {
    name: "Dr. Fatima Ndiaye",
    title: "Innovation Lead",
    expertise: "Technology",
    articles: 22
  },
  {
    name: "David Okafor",
    title: "Community Programs",
    expertise: "Social Impact",
    articles: 15
  }
]

const categories = [
  "All Posts",
  "Environmental Science",
  "Innovation & Technology",
  "Community Impact",
  "Policy & Research",
  "Circular Economy",
  "Climate Action",
  "Waste Management",
  "Renewable Energy",
  "Youth Programs"
]

export default function BlogPage() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
              Thought Leadership
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-secondary-900 mb-6"
            >
              Insights{' '}
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                & Analysis
              </span>
              <br />
              From Our Experts
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8"
            >
              Discover 200+ articles on environmental innovation, sustainability, and social impact. 
              Join 50,000+ readers from 75+ countries staying informed on global environmental issues.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" asChild>
                <Link href="#blog">Read Articles</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Subscribe</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
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

      {/* Blog Categories */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Blog Categories
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Explore our content organized by themes and expertise areas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <category.icon className="h-12 w-12 text-primary-600 mr-4" />
                  <div>
                    <h3 className="text-2xl font-semibold text-secondary-900">{category.title}</h3>
                    <p className="text-primary-600 font-medium">{category.count}</p>
                  </div>
                </div>
                
                <p className="text-secondary-600 mb-6">{category.description}</p>
                
                <div className="space-y-3">
                  {category.examples.map((example, exampleIndex) => (
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

      {/* Featured Posts */}
      <section id="blog" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Featured Articles
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Our most popular and impactful articles
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 border border-primary-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-2 text-sm text-secondary-600">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">{post.title}</h3>
                <p className="text-secondary-600 mb-4">{post.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-secondary-600">
                    <span>By {post.author}</span>
                    <span>{post.date}</span>
                  </div>
                  <div className="text-sm text-primary-600 font-medium">{post.views}</div>
                </div>
                
                <Button className="w-full mt-4" asChild>
                  <Link href="/contact">Read Full Article</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Recent Articles
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Latest insights and analysis from our expert team
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-2xl p-8 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-2 text-sm text-secondary-600">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">{post.title}</h3>
                <p className="text-secondary-600 mb-4">{post.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-secondary-600">
                    By {post.author} • {post.date}
                  </div>
                  <div className="text-sm text-primary-600 font-medium">{post.views}</div>
                </div>
                
                <Button variant="outline" className="w-full mt-4" asChild>
                  <Link href="/contact">Read Article</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Authors */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Meet Our Authors
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Expert insights from our global team of environmental professionals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {authors.map((author, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-primary-600 font-bold text-lg">
                    {author.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">{author.name}</h3>
                <p className="text-sm text-secondary-600 mb-2">{author.title}</p>
                <p className="text-sm text-primary-600 font-medium mb-3">{author.expertise}</p>
                <p className="text-sm text-secondary-600">{author.articles} articles</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tags */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Popular Topics
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Explore articles by topic or area of interest
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularTags.map((tag, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:bg-primary-50 transition-colors cursor-pointer"
              >
                <Tag className="h-5 w-5 text-primary-500 flex-shrink-0" />
                <span className="text-secondary-700">{tag}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Filter articles by category or expertise area
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors cursor-pointer"
              >
                <FileText className="h-5 w-5 text-primary-500 flex-shrink-0" />
                <span className="text-secondary-700">{category}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Stay Informed
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Subscribe to our newsletter and get the latest insights on environmental 
              innovation, sustainability, and social impact delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Subscribe to Newsletter</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary-600">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
