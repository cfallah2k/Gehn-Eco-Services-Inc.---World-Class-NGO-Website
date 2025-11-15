'use client'

import { motion } from 'framer-motion'
import { TrophyIcon } from '@heroicons/react/24/outline'

const awards = [
  {
    year: '2023',
    title: 'National Environmental Excellence Award',
    organization: 'Federal Ministry of Environment',
    description: 'Recognition for outstanding contribution to environmental sustainability in Nigeria.'
  },
  {
    year: '2022',
    title: 'Women in Leadership Award',
    organization: 'African Women in Business',
    description: 'Honored for pioneering women-led environmental initiatives in Africa.'
  },
  {
    year: '2021',
    title: 'Innovation in Waste Management',
    organization: 'Lagos State Government',
    description: 'Awarded for innovative waste-to-wealth programs in Lagos communities.'
  },
  {
    year: '2020',
    title: 'Community Impact Award',
    organization: 'NGO Network Nigeria',
    description: 'Recognition for significant positive impact on local communities.'
  },
  {
    year: '2019',
    title: 'Sustainable Development Champion',
    organization: 'United Nations Development Programme',
    description: 'Awarded for contributions to achieving SDG goals in Nigeria.'
  },
  {
    year: '2018',
    title: 'Environmental Stewardship Award',
    organization: 'Environmental Protection Agency',
    description: 'Recognition for excellence in environmental protection and conservation.'
  }
]

export function AwardsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <TrophyIcon className="h-8 w-8 text-primary-600" />
            <h2 className="text-4xl font-bold text-gray-900">Awards & Recognition</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to environmental sustainability and community empowerment 
            has been recognized through numerous awards and accolades.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-6 border border-primary-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-primary-600">{award.year}</span>
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                  <TrophyIcon className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{award.title}</h3>
              <p className="text-primary-700 font-medium mb-3">{award.organization}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{award.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-green-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Our Impact Continues</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              These awards represent not just recognition of our past achievements, 
              but also our ongoing commitment to environmental sustainability, 
              community empowerment, and women leadership in Africa.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 