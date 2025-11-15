'use client'

import { motion } from 'framer-motion'
import { 
  Calendar, 
  User, 
  Tag,
  ArrowRight,
  ExternalLink
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const newsArticles = [
  {
    title: "Gehn Eco Services Launches New Waste Management Initiative in Lagos",
    excerpt: "Our latest community-based waste management program has successfully reduced waste by 60% in underserved communities, creating 50 new jobs in the process.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "March 15, 2024",
    author: "Sarah Johnson",
    category: "Programs",
    readTime: "5 min read",
    featured: true
  },
  {
    title: "Environmental Education Program Reaches 15,000 Students",
    excerpt: "Our school-based environmental awareness program has expanded to 25 schools across Nigeria, training 500+ environmental advocates.",
    image: "https://images.unsplash.com/photo-1523240797358-5c6e2c6c0c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "March 10, 2024",
    author: "Grace Okonkwo",
    category: "Education",
    readTime: "4 min read",
    featured: false
  },
  {
    title: "Livelihood Enhancement Project Shows 200% Income Increase",
    excerpt: "Our sustainable livelihood programs have transformed waste into valuable products, significantly improving economic conditions for 300 families.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "March 5, 2024",
    author: "Fatima Hassan",
    category: "Livelihood",
    readTime: "6 min read",
    featured: false
  },
  {
    title: "National Environmental Excellence Award 2023",
    excerpt: "Gehn Eco Services has been recognized with the prestigious National Environmental Excellence Award for outstanding contribution to environmental sustainability.",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "February 28, 2024",
    author: "Aisha Mohammed",
    category: "Awards",
    readTime: "3 min read",
    featured: false
  },
  {
    title: "Partnership with Local Government Yields Positive Results",
    excerpt: "Our collaboration with local government authorities has led to improved waste collection systems and better environmental health outcomes.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "February 20, 2024",
    author: "Sarah Johnson",
    category: "Partnerships",
    readTime: "4 min read",
    featured: false
  },
  {
    title: "New Environmental Consultancy Services Launched",
    excerpt: "We've expanded our consultancy services to include comprehensive environmental impact assessments and sustainability planning.",
    image: "https://images.unsplash.com/photo-1523240797358-5c6e2c6c0c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "February 15, 2024",
    author: "Grace Okonkwo",
    category: "Services",
    readTime: "5 min read",
    featured: false
  }
]

const categories = [
  { name: "All", count: 6 },
  { name: "Programs", count: 2 },
  { name: "Education", count: 1 },
  { name: "Livelihood", count: 1 },
  { name: "Awards", count: 1 },
  { name: "Partnerships", count: 1 }
]

export default function NewsPage() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
              Latest News
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-secondary-900 mb-6"
            >
              Stay Updated with{' '}
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                Our Latest Stories
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-secondary-600 max-w-3xl mx-auto"
            >
              Discover the latest updates, success stories, and insights from our environmental 
              initiatives and community development programs.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-primary-100 hover:text-primary-700 transition-colors text-sm font-medium"
              >
                {category.name} ({category.count})
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-secondary-900 mb-4">
              Featured Story
            </h2>
          </div>
          
          {newsArticles.filter(article => article.featured).map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
            >
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-full min-h-[300px]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary-600 text-white rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-secondary-600">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-secondary-600">
                      <User className="h-4 w-4" />
                      <span>{article.author}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-semibold text-secondary-900 mb-4">
                    {article.title}
                  </h3>
                  
                  <p className="text-secondary-600 mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                      <span className="text-sm text-secondary-600">{article.readTime}</span>
                    </div>
                    
                    <Button variant="outline" size="sm">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-secondary-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-secondary-600">
              Stay informed with our latest updates and success stories
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.filter(article => !article.featured).map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 min-h-[200px]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary-600 text-white rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="flex items-center space-x-2 text-xs text-secondary-600">
                      <Calendar className="h-3 w-3" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-secondary-600">
                      <User className="h-3 w-3" />
                      <span>{article.author}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-secondary-900 mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-secondary-600 mb-4 text-sm line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-secondary-600">{article.readTime}</span>
                    
                    <Button variant="ghost" size="sm">
                      Read More
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Stay Connected
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Subscribe to our newsletter for the latest updates on environmental initiatives, 
              success stories, and opportunities to get involved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <Button size="lg" variant="secondary">
                Subscribe
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 