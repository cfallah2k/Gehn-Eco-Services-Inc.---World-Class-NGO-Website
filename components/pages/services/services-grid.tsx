'use client'

import { motion } from 'framer-motion'
import { 
  TrashIcon, 
  BeakerIcon, 
  WrenchScrewdriverIcon, 
  UserGroupIcon, 
  AcademicCapIcon, 
  ChartBarIcon 
} from '@heroicons/react/24/outline'

const services = [
  {
    icon: TrashIcon,
    title: 'Waste Management',
    description: 'Revolutionary waste management processing 1M+ tons annually across 25+ countries with 99% recovery rate.',
    features: [
      'Advanced recycling systems',
      'Waste-to-energy solutions',
      'Circular economy integration',
      'Zero waste to landfill'
    ],
    color: 'bg-green-500'
  },
  {
    icon: BeakerIcon,
    title: 'Environmental Consultancy',
    description: 'Expert consultancy services across 50+ countries with 1,000+ projects completed and 99% client satisfaction.',
    features: [
      'Environmental impact assessment',
      'Climate action planning',
      'Sustainability strategy',
      'Policy development'
    ],
    color: 'bg-blue-500'
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'Sanitation Solutions',
    description: 'Comprehensive sanitation solutions serving 5M+ people with 95% disease reduction in target communities.',
    features: [
      'Smart sanitation technology',
      'Water treatment systems',
      'Public health programs',
      'Emergency response'
    ],
    color: 'bg-purple-500'
  },
  {
    icon: UserGroupIcon,
    title: 'Livelihood Programs',
    description: 'Creating 500,000+ sustainable jobs with 500% average income increase across 25+ countries.',
    features: [
      'Skills development training',
      'Micro-enterprise development',
      'Green economy opportunities',
      'Digital economy integration'
    ],
    color: 'bg-orange-500'
  },
  {
    icon: AcademicCapIcon,
    title: 'Training & Capacity Building',
    description: 'Empowering 100,000+ professionals across 25+ countries with 95% employment success rate.',
    features: [
      'Professional development',
      'Community capacity building',
      'Digital skills training',
      'Environmental education'
    ],
    color: 'bg-red-500'
  },
  {
    icon: ChartBarIcon,
    title: 'Impact Assessment',
    description: 'Leading impact assessment services with 1,000+ evaluations completed across 25+ countries.',
    features: [
      'Social impact assessment',
      'Environmental impact analysis',
      'Economic impact evaluation',
      'Data analytics & reporting'
    ],
    color: 'bg-indigo-500'
  }
]

export function ServicesGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Global Service Offerings</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading environmental solutions across 25+ countries, serving 1M+ people with 
            innovative, sustainable programs that compete with top international organizations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className={`w-16 h-16 ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Custom Solutions</h3>
            <p className="text-lg text-gray-600 mb-6">
              Partner with us to create innovative environmental solutions that compete with top international organizations. 
              We specialize in large-scale, transformative projects across multiple countries.
            </p>
            <button className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors">
              Request Custom Solution
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 