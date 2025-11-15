'use client'

import { motion } from 'framer-motion'
import { 
  BookOpen, 
  Users, 
  Award,
  CheckCircle,
  TrendingUp,
  Zap,
  Leaf,
  Target,
  Globe,
  Download,
  ExternalLink,
  FileText,
  Video,
  Wrench as Tool,
  ArrowRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import CountUp from 'react-countup'

const resources = [
  {
    title: "Environmental Impact Assessment Toolkit",
    type: "Toolkit",
    category: "Environmental Assessment",
    downloads: "5,000+",
    description: "Comprehensive toolkit for conducting environmental impact assessments, including templates, guidelines, and best practices.",
    features: ["Assessment templates", "Regulatory guidelines", "Case studies", "Expert guidance"],
    fileSize: "25 MB",
    format: "PDF"
  },
  {
    title: "Circular Economy Implementation Guide",
    type: "Guide",
    category: "Circular Economy",
    downloads: "3,200+",
    description: "Step-by-step guide for implementing circular economy principles in communities and organizations.",
    features: ["Implementation roadmap", "Best practices", "Success stories", "Resource planning"],
    fileSize: "18 MB",
    format: "PDF"
  },
  {
    title: "Climate Action Planning Framework",
    type: "Framework",
    category: "Climate Action",
    downloads: "4,100+",
    description: "Comprehensive framework for developing and implementing climate action plans at local and regional levels.",
    features: ["Planning methodology", "Stakeholder engagement", "Monitoring tools", "Policy recommendations"],
    fileSize: "32 MB",
    format: "PDF"
  },
  {
    title: "Waste Management Best Practices",
    type: "Report",
    category: "Waste Management",
    downloads: "6,800+",
    description: "Comprehensive report on innovative waste management practices from around the world.",
    features: ["Global case studies", "Technology reviews", "Cost analysis", "Implementation strategies"],
    fileSize: "45 MB",
    format: "PDF"
  }
]

const impactStats = [
  {
    icon: Download,
    value: 50000,
    suffix: '+',
    label: 'Downloads',
    description: 'Resources accessed worldwide'
  },
  {
    icon: FileText,
    value: 100,
    suffix: '+',
    label: 'Resources',
    description: 'Available for free download'
  },
  {
    icon: Globe,
    value: 75,
    suffix: '+',
    label: 'Countries',
    description: 'Using our resources'
  },
  {
    icon: Users,
    value: 25000,
    suffix: '+',
    label: 'Users',
    description: 'Registered resource users'
  }
]

const resourceCategories = [
  {
    icon: FileText,
    title: "Reports & Publications",
    description: "Comprehensive research reports and publications on environmental topics",
    count: "25+ reports",
    examples: ["Annual impact reports", "Research studies", "Policy briefs", "Technical papers"]
  },
  {
    icon: Tool,
    title: "Tools & Toolkits",
    description: "Practical tools and toolkits for environmental assessment and implementation",
    count: "15+ tools",
    examples: ["Assessment tools", "Planning frameworks", "Monitoring systems", "Evaluation guides"]
  },
  {
    icon: Video,
    title: "Training Materials",
    description: "Educational videos, webinars, and training resources",
    count: "50+ videos",
    examples: ["Training videos", "Webinar recordings", "Educational content", "Expert interviews"]
  },
  {
    icon: BookOpen,
    title: "Guides & Manuals",
    description: "Step-by-step guides and manuals for environmental projects",
    count: "30+ guides",
    examples: ["Implementation guides", "Best practice manuals", "Technical guides", "User manuals"]
  }
]

const featuredResources = [
  {
    title: "UN SDGs Implementation Guide",
    type: "Guide",
    downloads: "12,000+",
    description: "Comprehensive guide for implementing UN Sustainable Development Goals in local communities.",
    rating: "4.9/5",
    featured: true
  },
  {
    title: "Environmental Data Collection Toolkit",
    type: "Toolkit",
    downloads: "8,500+",
    description: "Complete toolkit for collecting and analyzing environmental data for impact assessment.",
    rating: "4.8/5",
    featured: true
  }
]

const categories = [
  "Environmental Assessment",
  "Circular Economy",
  "Climate Action",
  "Waste Management",
  "Water Resources",
  "Biodiversity",
  "Renewable Energy",
  "Social Impact",
  "Policy Development",
  "Capacity Building"
]

export default function ResourcesPage() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50/40 via-accent-50/30 to-transparent" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(34, 197, 94, 0.15) 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        {/* Floating Animated Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full opacity-20 blur-xl ${
                i % 3 === 0 ? 'bg-primary-400' : i % 3 === 1 ? 'bg-accent-400' : 'bg-secondary-300'
              }`}
              style={{
                width: `${60 + i * 20}px`,
                height: `${60 + i * 20}px`,
                left: `${10 + i * 15}%`,
                top: `${20 + (i % 3) * 30}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, 20, 0],
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10 w-full py-16 sm:py-20 md:py-24 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary-200/50 text-primary-700 text-sm font-medium mb-6 shadow-sm"
            >
              <motion.span
                className="w-2 h-2 bg-primary-500 rounded-full mr-2"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Knowledge Resources
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-secondary-900 mb-6 leading-[1.1] tracking-tight"
            >
              Free{' '}
              <span className="bg-gradient-to-r from-primary-600 via-accent-600 to-primary-600 bg-clip-text text-transparent animate-gradient">
                Resources
              </span>
              <br />
              For Global Impact
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl text-secondary-600 max-w-3xl mx-auto mb-8 leading-relaxed"
            >
              Access 100+ free resources including toolkits, guides, reports, and training materials 
              used by 25,000+ professionals across 75+ countries.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" asChild className="group text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-lg hover:shadow-xl transition-all">
                <Link href="#resources">
                  Browse Resources
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 border-2 hover:bg-white/50 backdrop-blur-sm">
                <Link href="/contact">Request Resource</Link>
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

      {/* Resource Categories */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Resource Categories
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Comprehensive knowledge base covering all aspects of environmental sustainability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resourceCategories.map((category, index) => (
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

      {/* Featured Resources */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Featured Resources
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Our most popular and highly-rated resources
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredResources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 border border-primary-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                    {resource.type}
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-500">★</span>
                    <span className="text-sm font-medium">{resource.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">{resource.title}</h3>
                <p className="text-secondary-600 mb-4">{resource.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-secondary-600">
                    <Download className="h-4 w-4" />
                    <span>{resource.downloads}</span>
                  </div>
                  <Button asChild>
                    <Link href="/contact">Download Now</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Resources */}
      <section id="resources" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              All Resources
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Browse our complete collection of environmental resources
            </p>
          </div>
          
          <div className="space-y-8">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-2xl p-8 border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-secondary-900 mb-2">{resource.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-secondary-600">
                      <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full">
                        {resource.type}
                      </span>
                      <span>{resource.category}</span>
                      <div className="flex items-center space-x-1">
                        <Download className="h-4 w-4" />
                        <span>{resource.downloads}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-secondary-600">{resource.format}</div>
                    <div className="text-sm text-secondary-600">{resource.fileSize}</div>
                  </div>
                </div>
                
                <p className="text-secondary-600 mb-6">{resource.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-secondary-900 mb-3">Features:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {resource.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-secondary-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Button asChild>
                    <Link href="/contact">Download Free</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/contact">Learn More</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Find resources by topic or area of interest
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
                <BookOpen className="h-5 w-5 text-primary-500 flex-shrink-0" />
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
              Access Our Knowledge Base
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Join 25,000+ professionals worldwide who use our resources to drive 
              environmental innovation and sustainable development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Download Resources</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary-600">
                <Link href="/contact">Request Custom Resource</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
