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
    description: 'Comprehensive waste collection, recycling, and disposal solutions for communities and organizations.',
    features: [
      'Waste collection & transportation',
      'Recycling programs',
      'Composting solutions',
      'Waste-to-energy projects'
    ],
    color: 'bg-green-500'
  },
  {
    icon: BeakerIcon,
    title: 'Environmental Consultancy',
    description: 'Expert environmental assessment, planning, and compliance services for businesses and government.',
    features: [
      'Environmental impact assessment',
      'Compliance monitoring',
      'Sustainability planning',
      'Policy development'
    ],
    color: 'bg-blue-500'
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'Sanitation Programs',
    description: 'Infrastructure development and hygiene education programs for improved community health.',
    features: [
      'Sanitation infrastructure',
      'Hygiene education',
      'Water quality testing',
      'Public health campaigns'
    ],
    color: 'bg-purple-500'
  },
  {
    icon: UserGroupIcon,
    title: 'Livelihood Programs',
    description: 'Economic empowerment through environmental entrepreneurship and skill development.',
    features: [
      'Green entrepreneurship',
      'Skill development',
      'Micro-enterprise support',
      'Market access'
    ],
    color: 'bg-orange-500'
  },
  {
    icon: AcademicCapIcon,
    title: 'Training & Capacity Building',
    description: 'Educational programs and workshops for environmental awareness and professional development.',
    features: [
      'Environmental education',
      'Professional training',
      'Workshop facilitation',
      'Certification programs'
    ],
    color: 'bg-red-500'
  },
  {
    icon: ChartBarIcon,
    title: 'Impact Assessment',
    description: 'Comprehensive evaluation and measurement of environmental and social impact programs.',
    features: [
      'Impact measurement',
      'Data collection',
      'Performance evaluation',
      'Reporting & analytics'
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Service Offerings</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive environmental solutions tailored to meet the unique 
            needs of communities, businesses, and government organizations.
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Solutions</h3>
            <p className="text-lg text-gray-600 mb-6">
              Don't see exactly what you need? We specialize in creating custom environmental 
              solutions tailored to your specific requirements and challenges.
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