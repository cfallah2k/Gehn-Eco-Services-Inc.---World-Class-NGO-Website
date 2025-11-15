'use client'

import { motion } from 'framer-motion'
import { 
  Droplets, 
  Shield, 
  Users, 
  Award,
  CheckCircle,
  TrendingUp,
  Zap,
  Leaf,
  Target,
  Heart
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import CountUp from 'react-countup'

const services = [
  {
    icon: Droplets,
    title: "Water & Sanitation Infrastructure",
    description: "Comprehensive water and sanitation systems for communities and cities",
    features: ["Clean water access", "Sanitation facilities", "Infrastructure development", "Maintenance services"]
  },
  {
    icon: Shield,
    title: "Public Health Sanitation",
    description: "Public health-focused sanitation programs preventing disease outbreaks",
    features: ["Disease prevention", "Health education", "Community hygiene", "Emergency response"]
  },
  {
    icon: Zap,
    title: "Smart Sanitation Technology",
    description: "Innovative technology solutions for efficient sanitation management",
    features: ["IoT monitoring", "Smart waste collection", "Data analytics", "Predictive maintenance"]
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Sanitation",
    description: "Sustainable sanitation solutions that protect the environment",
    features: ["Water conservation", "Waste treatment", "Renewable energy", "Circular systems"]
  }
]

const impactStats = [
  {
    icon: Users,
    value: 5000000,
    suffix: '+',
    label: 'People Served',
    description: 'With clean water and sanitation'
  },
  {
    icon: Droplets,
    value: 1000,
    suffix: '+',
    label: 'Water Projects',
    description: 'Completed across Africa'
  },
  {
    icon: Shield,
    value: 95,
    suffix: '%',
    label: 'Disease Reduction',
    description: 'In target communities'
  },
  {
    icon: Award,
    value: 100,
    suffix: '+',
    label: 'Communities Transformed',
    description: 'Through sanitation programs'
  }
]

const caseStudies = [
  {
    title: "Lagos Mega-City Sanitation Revolution",
    location: "Lagos, Nigeria",
    impact: "10M+ people served",
    description: "Implemented comprehensive sanitation system for Africa's largest city, providing clean water and sanitation facilities to millions.",
    results: ["10M+ people served", "100% water coverage", "Zero cholera outbreaks", "UN recognition"]
  },
  {
    title: "Rural Water Access Initiative",
    location: "Sub-Saharan Africa",
    impact: "2M+ rural residents",
    description: "Brought clean water and sanitation to remote rural communities across 15 countries, transforming health outcomes.",
    results: ["2M+ rural residents", "15 countries reached", "90% health improvement", "Community empowerment"]
  }
]

const solutions = [
  "Water Treatment & Purification",
  "Sanitation Infrastructure Development",
  "Public Toilet Facilities",
  "Wastewater Treatment Plants",
  "Water Distribution Networks",
  "Hygiene Education Programs",
  "Emergency Sanitation Response",
  "Mobile Sanitation Units",
  "Water Quality Monitoring",
  "Sanitation Technology Innovation",
  "Community Hygiene Programs",
  "School Sanitation Facilities",
  "Healthcare Facility Sanitation",
  "Disaster Relief Sanitation",
  "Sustainable Sanitation Systems"
]

export default function SanitationPage() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-cyan-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
              Sanitation Solutions
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-secondary-900 mb-6"
            >
              Revolutionary{' '}
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                Sanitation
              </span>
              <br />
              Solutions
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8"
            >
              Transforming communities through innovative sanitation solutions, 
              serving 5M+ people with clean water and sanitation across Africa.
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
                <Link href="#services">Our Solutions</Link>
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

      {/* Services */}
      <section id="services" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Comprehensive Sanitation Solutions
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              From water treatment to smart sanitation technology, 
              we provide end-to-end solutions for healthy communities.
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

      {/* Solutions Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Our Sanitation Solutions
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Comprehensive sanitation services designed for communities of all sizes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg"
              >
                <Heart className="h-5 w-5 text-red-500 flex-shrink-0" />
                <span className="text-secondary-700">{solution}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Real impact through innovative sanitation solutions
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Transform Community Health
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Join us in creating healthier communities through innovative sanitation solutions. 
              Let's build a cleaner, safer future together.
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
