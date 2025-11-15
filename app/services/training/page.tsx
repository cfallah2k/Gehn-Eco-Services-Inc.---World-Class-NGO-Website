'use client'

import { motion } from 'framer-motion'
import { 
  GraduationCap, 
  Users, 
  Award,
  CheckCircle,
  TrendingUp,
  Zap,
  Leaf,
  Target,
  Globe,
  BookOpen
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import CountUp from 'react-countup'

const services = [
  {
    icon: GraduationCap,
    title: "Professional Development",
    description: "Comprehensive training programs for environmental professionals and organizations",
    features: ["Certification programs", "Skill development", "Leadership training", "Industry best practices"]
  },
  {
    icon: Users,
    title: "Community Capacity Building",
    description: "Empowering communities with knowledge and skills for sustainable development",
    features: ["Community leadership", "Project management", "Resource mobilization", "Stakeholder engagement"]
  },
  {
    icon: Zap,
    title: "Digital Skills Training",
    description: "Modern digital skills for the environmental sector and beyond",
    features: ["Digital literacy", "Environmental tech", "Data analysis", "Remote collaboration"]
  },
  {
    icon: Leaf,
    title: "Environmental Education",
    description: "Specialized training in environmental science, policy, and sustainability",
    features: ["Environmental science", "Policy development", "Sustainability practices", "Climate action"]
  }
]

const impactStats = [
  {
    icon: Users,
    value: 100000,
    suffix: '+',
    label: 'People Trained',
    description: 'Across 25+ countries'
  },
  {
    icon: GraduationCap,
    value: 500,
    suffix: '+',
    label: 'Training Programs',
    description: 'Comprehensive curriculum'
  },
  {
    icon: Globe,
    value: 25,
    suffix: '+',
    label: 'Countries Reached',
    description: 'Global training network'
  },
  {
    icon: Award,
    value: 95,
    suffix: '%',
    label: 'Success Rate',
    description: 'Employment after training'
  }
]

const caseStudies = [
  {
    title: "African Environmental Leadership Program",
    location: "Pan-African Initiative",
    impact: "10,000+ leaders trained",
    description: "Comprehensive leadership development program for environmental professionals across Africa, creating a network of change-makers.",
    results: ["10,000+ leaders trained", "25 countries reached", "Leadership network", "Policy influence"]
  },
  {
    title: "Youth Environmental Innovation Hub",
    location: "Sub-Saharan Africa",
    impact: "50,000+ youth empowered",
    description: "Innovation and entrepreneurship training program for young environmentalists, fostering the next generation of green leaders.",
    results: ["50,000+ youth empowered", "Innovation projects", "Startup creation", "Job placement"]
  }
]

const programs = [
  "Environmental Leadership Training",
  "Project Management Certification",
  "Sustainable Development Courses",
  "Climate Change Adaptation",
  "Waste Management Training",
  "Renewable Energy Education",
  "Environmental Policy Development",
  "Community Engagement Skills",
  "Digital Transformation Training",
  "Green Business Development",
  "Environmental Impact Assessment",
  "Sustainability Reporting",
  "Circular Economy Training",
  "Biodiversity Conservation",
  "Water Resource Management"
]

export default function TrainingPage() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-purple-50 via-blue-50 to-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
              Training & Capacity Building
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-secondary-900 mb-6"
            >
              Building{' '}
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                Capacity
              </span>
              <br />
              For The Future
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8"
            >
              Empowering 100,000+ professionals and communities across 25+ countries 
              with the knowledge and skills needed for sustainable development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" asChild>
                <Link href="/contact">Get Training</Link>
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
              Comprehensive Training Programs
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              From professional development to community capacity building, 
              we provide cutting-edge training for sustainable development.
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
              Our Training Programs
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Specialized programs designed to meet the evolving needs of the environmental sector
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
                <BookOpen className="h-5 w-5 text-blue-500 flex-shrink-0" />
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
              Real impact through innovative training and capacity building
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
              Invest in Human Capital
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Join us in building the capacity of professionals and communities. 
              Let's create a sustainable future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Get Training</Link>
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
