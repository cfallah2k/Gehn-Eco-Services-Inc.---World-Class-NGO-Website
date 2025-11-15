'use client'

import { motion } from 'framer-motion'
import { HeartIcon, ShieldCheckIcon, UsersIcon, LightBulbIcon } from '@heroicons/react/24/outline'

const values = [
  {
    icon: HeartIcon,
    title: 'Sustainability',
    description: 'We are committed to environmental stewardship and creating lasting positive impact.',
    color: 'bg-green-500'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Integrity',
    description: 'We operate with transparency, honesty, and accountability in all our endeavors.',
    color: 'bg-blue-500'
  },
  {
    icon: UsersIcon,
    title: 'Community',
    description: 'We prioritize community needs and empower local stakeholders in our solutions.',
    color: 'bg-purple-500'
  },
  {
    icon: LightBulbIcon,
    title: 'Innovation',
    description: 'We embrace creative solutions and cutting-edge technology to solve environmental challenges.',
    color: 'bg-orange-500'
  }
]

export function ValuesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These fundamental principles guide our work and shape our relationships 
            with communities, partners, and the environment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className={`w-16 h-16 ${value.color} rounded-lg flex items-center justify-center mb-4`}>
                <value.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-white rounded-lg p-8 shadow-lg"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              As a women-led organization, we are committed to breaking barriers and creating 
              opportunities for women in environmental leadership. We believe that sustainable 
              development requires diverse perspectives and inclusive solutions that benefit 
              all members of society.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 