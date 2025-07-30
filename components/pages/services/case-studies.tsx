'use client'

import { motion } from 'framer-motion'
import { StarIcon, UserGroupIcon, ChartBarIcon } from '@heroicons/react/24/outline'

const caseStudies = [
  {
    title: 'Victoria Island Waste Management',
    location: 'Lagos, Nigeria',
    duration: '2022-2023',
    description: 'Implemented a comprehensive waste management system serving 50,000+ residents.',
    impact: [
      '85% waste reduction',
      '200+ jobs created',
      'Community engagement program',
      'Recycling infrastructure'
    ],
    results: {
      metric: '85%',
      label: 'Waste Reduction'
    }
  },
  {
    title: 'Rural Sanitation Program',
    location: 'Kano State, Nigeria',
    duration: '2021-2022',
    description: 'Developed sanitation infrastructure and hygiene education for rural communities.',
    impact: [
      '10,000+ lives impacted',
      'Sanitation facilities built',
      'Hygiene education program',
      'Community health improvement'
    ],
    results: {
      metric: '10,000+',
      label: 'Lives Impacted'
    }
  },
  {
    title: 'Corporate Environmental Compliance',
    location: 'Port Harcourt, Nigeria',
    duration: '2023-2024',
    description: 'Provided environmental consultancy and compliance monitoring for major corporations.',
    impact: [
      'Full regulatory compliance',
      'Environmental impact assessment',
      'Sustainability reporting',
      'Policy development'
    ],
    results: {
      metric: '100%',
      label: 'Compliance Rate'
    }
  }
]

export function CaseStudies() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our services have created lasting impact in communities 
            and organizations across Nigeria.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{study.title}</h3>
                    <p className="text-primary-600 font-medium">{study.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">{study.duration}</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">{study.description}</p>

                <div className="space-y-3 mb-6">
                  {study.impact.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start space-x-2">
                      <StarIcon className="h-4 w-4 text-primary-600 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-primary-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-1">
                    {study.results.metric}
                  </div>
                  <div className="text-sm text-primary-700 font-medium">
                    {study.results.label}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserGroupIcon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">5000+</div>
                <div className="text-gray-600">Lives Impacted</div>
              </div>
              <div>
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ChartBarIcon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
                <div className="text-gray-600">Communities Served</div>
              </div>
              <div>
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <StarIcon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-green-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Create Your Success Story?</h3>
            <p className="text-lg opacity-90 mb-6">
              Let's work together to create positive environmental impact in your community or organization.
            </p>
            <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Your Project
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 