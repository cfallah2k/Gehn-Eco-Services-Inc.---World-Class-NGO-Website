'use client'

import { motion } from 'framer-motion'
import { 
  Users, 
  TrendingUp, 
  Award,
  CheckCircle,
  Heart,
  Zap,
  Leaf,
  Target,
  Briefcase,
  Globe
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import CountUp from 'react-countup'

const services = [
  {
    icon: Briefcase,
    title: "Skills Development & Training",
    description: "Comprehensive training programs that equip individuals with marketable skills",
    features: ["Vocational training", "Digital skills", "Entrepreneurship", "Job placement"]
  },
  {
    icon: TrendingUp,
    title: "Micro-Enterprise Development",
    description: "Supporting small business creation and growth in underserved communities",
    features: ["Business planning", "Micro-finance access", "Mentorship programs", "Market access"]
  },
  {
    icon: Leaf,
    title: "Green Economy Opportunities",
    description: "Creating jobs in renewable energy, recycling, and environmental services",
    features: ["Renewable energy jobs", "Recycling initiatives", "Environmental services", "Sustainable agriculture"]
  },
  {
    icon: Zap,
    title: "Digital Economy Integration",
    description: "Connecting communities to digital opportunities and remote work",
    features: ["Digital literacy", "Remote work training", "E-commerce platforms", "Tech skills development"]
  }
]

const impactStats = [
  {
    icon: Users,
    value: 500000,
    suffix: '+',
    label: 'Jobs Created',
    description: 'Sustainable employment opportunities'
  },
  {
    icon: TrendingUp,
    value: 500,
    suffix: '%',
    label: 'Income Increase',
    description: 'Average for program participants'
  },
  {
    icon: Globe,
    value: 25,
    suffix: '+',
    label: 'Countries Reached',
    description: 'Across Africa and beyond'
  },
  {
    icon: Award,
    value: 100000,
    suffix: '+',
    label: 'Entrepreneurs Supported',
    description: 'Small business development'
  }
]

const caseStudies = [
  {
    title: "Women's Economic Empowerment Initiative",
    location: "Sub-Saharan Africa",
    impact: "200,000+ women empowered",
    description: "Comprehensive program supporting women entrepreneurs across 15 countries, creating sustainable businesses and economic independence.",
    results: ["200,000+ women empowered", "15 countries reached", "500% income increase", "UN recognition"]
  },
  {
    title: "Youth Digital Skills Program",
    location: "Pan-African Initiative",
    impact: "100,000+ youth trained",
    description: "Digital skills training program connecting African youth to global remote work opportunities and digital entrepreneurship.",
    results: ["100,000+ youth trained", "50,000+ jobs created", "Digital economy access", "Global partnerships"]
  }
]

const programs = [
  "Vocational Skills Training",
  "Entrepreneurship Development",
  "Micro-Finance Access",
  "Business Mentorship",
  "Digital Skills Training",
  "Green Job Creation",
  "Agricultural Innovation",
  "Artisan Development",
  "Tourism & Hospitality",
  "Technology & Innovation",
  "Healthcare Training",
  "Education & Training",
  "Renewable Energy Jobs",
  "Waste Management Careers",
  "Environmental Services"
]

export default function LivelihoodPage() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
              Livelihood Programs
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-secondary-900 mb-6"
            >
              Empowering{' '}
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                Communities
              </span>
              <br />
              Through Livelihood
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8"
            >
              Creating sustainable employment opportunities for 500,000+ people across 25+ countries, 
              transforming lives through skills development and economic empowerment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#services">Our Programs</Link>
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

      {/* Services */}
      <section id="services" className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Comprehensive Livelihood Programs
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              From skills development to entrepreneurship support, 
              we provide end-to-end solutions for economic empowerment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <service.icon className="h-12 w-12 text-primary-600 mr-4" />
                  <h3 className="text-2xl font-semibold text-secondary-900">{service.title}</h3>
                </div>
                
                <p className="text-secondary-600 mb-6">{service.description}</p>
                
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-secondary-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Our Livelihood Programs
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Diverse programs designed to meet the unique needs of different communities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg"
              >
                <Heart className="h-5 w-5 text-red-500 flex-shrink-0" />
                <span className="text-secondary-700">{program}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Real impact through innovative livelihood programs
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-yellow-500" />
                    <span className="text-sm font-medium text-secondary-600">{study.location}</span>
                  </div>
                  <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    {study.impact}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">{study.title}</h3>
                <p className="text-secondary-600 mb-6">{study.description}</p>
                
                <div className="space-y-2">
                  {study.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center space-x-2">
                      <TrendingUp className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-secondary-700">{result}</span>
                    </div>
                  ))}
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
              Transform Lives Through Livelihood
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Join us in creating sustainable economic opportunities. 
              Let's build prosperous communities together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary-600">
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
