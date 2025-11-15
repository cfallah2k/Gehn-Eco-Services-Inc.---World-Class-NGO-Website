'use client'

import { motion } from 'framer-motion'
import { 
  Briefcase, 
  Globe, 
  Users, 
  Award,
  CheckCircle,
  TrendingUp,
  Shield,
  Zap,
  Leaf,
  Target
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import CountUp from 'react-countup'

const services = [
  {
    icon: Target,
    title: "Environmental Impact Assessment",
    description: "Comprehensive EIAs for major infrastructure and development projects across Africa",
    features: ["ISO 14001 compliance", "Regulatory approval", "Stakeholder engagement", "Mitigation strategies"]
  },
  {
    icon: Leaf,
    title: "Sustainability Strategy",
    description: "End-to-end sustainability planning for governments and corporations",
    features: ["SDG alignment", "Carbon footprint analysis", "Circular economy design", "ESG reporting"]
  },
  {
    icon: Shield,
    title: "Environmental Compliance",
    description: "Ensuring adherence to international environmental standards and regulations",
    features: ["Regulatory compliance", "Audit services", "Risk assessment", "Policy development"]
  },
  {
    icon: Zap,
    title: "Climate Action Planning",
    description: "Developing comprehensive climate action strategies for cities and organizations",
    features: ["Carbon neutrality planning", "Renewable energy integration", "Adaptation strategies", "Climate finance"]
  }
]

const impactStats = [
  {
    icon: Briefcase,
    value: 1000,
    suffix: '+',
    label: 'Projects Completed',
    description: 'Across 25+ countries'
  },
  {
    icon: Globe,
    value: 50,
    suffix: '+',
    label: 'Countries Served',
    description: 'Global consultancy reach'
  },
  {
    icon: Users,
    value: 100,
    suffix: '+',
    label: 'Expert Consultants',
    description: 'International specialists'
  },
  {
    icon: Award,
    value: 99,
    suffix: '%',
    label: 'Client Satisfaction',
    description: 'Exceeding expectations'
  }
]

const caseStudies = [
  {
    title: "African Union Environmental Policy Framework",
    location: "Pan-African Initiative",
    impact: "55 countries engaged",
    description: "Developed comprehensive environmental policy framework for the African Union, influencing environmental governance across the continent.",
    results: ["55 countries engaged", "Policy framework adopted", "UN recognition", "Regional cooperation"]
  },
  {
    title: "Nigerian National Climate Action Plan",
    location: "Nigeria",
    impact: "200M+ people impacted",
    description: "Led the development of Nigeria's comprehensive climate action plan, setting ambitious targets for carbon reduction and renewable energy.",
    results: ["200M+ people impacted", "Carbon reduction targets", "Renewable energy goals", "International funding secured"]
  }
]

const expertise = [
  "Environmental Impact Assessment (EIA)",
  "Strategic Environmental Assessment (SEA)",
  "Climate Change Adaptation & Mitigation",
  "Sustainable Development Goals (SDGs)",
  "Environmental Management Systems (EMS)",
  "Carbon Footprint & Life Cycle Assessment",
  "Biodiversity Conservation Planning",
  "Water Resource Management",
  "Air Quality Assessment & Management",
  "Waste Management Strategy",
  "Renewable Energy Planning",
  "Green Building & Infrastructure",
  "Environmental Policy Development",
  "Stakeholder Engagement & Communication",
  "Environmental Risk Assessment"
]

export default function EnvironmentalConsultancyPage() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-green-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
              Environmental Consultancy
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-secondary-900 mb-6"
            >
              Expert{' '}
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                Environmental
              </span>
              <br />
              Consultancy
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8"
            >
              Leading environmental consultancy services across 50+ countries, 
              providing expert guidance for sustainable development and environmental protection.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" asChild>
                <Link href="/contact">Get Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#services">Our Services</Link>
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
              Comprehensive Consultancy Services
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              From environmental impact assessments to sustainability strategy, 
              we provide expert guidance for all your environmental needs.
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

      {/* Areas of Expertise */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Areas of Expertise
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Our team of international experts covers all aspects of environmental consultancy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg"
              >
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-secondary-700">{area}</span>
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
              Real impact through expert environmental consultancy
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
              Expert Environmental Guidance
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Partner with our international team of environmental experts. 
              Let's create sustainable solutions together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Get Consultation</Link>
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
