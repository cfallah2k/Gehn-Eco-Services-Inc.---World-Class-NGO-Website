'use client'

import { motion } from 'framer-motion'
import { CalendarIcon } from '@heroicons/react/24/outline'

const timelineData = [
  {
    year: '2009',
    title: 'Foundation',
    description: 'Gehn Eco Services Inc. was founded as a women-led social enterprise focused on environmental sustainability.',
    achievement: 'Started with 5 team members'
  },
  {
    year: '2012',
    title: 'First Major Project',
    description: 'Successfully implemented waste management system in Victoria Island, Lagos.',
    achievement: 'Served 10,000+ households'
  },
  {
    year: '2015',
    title: 'Expansion',
    description: 'Extended services to multiple communities across Nigeria, establishing regional offices.',
    achievement: 'Expanded to 5 states'
  },
  {
    year: '2018',
    title: 'Innovation Award',
    description: 'Received national recognition for innovative waste-to-wealth programs.',
    achievement: 'National Environmental Award'
  },
  {
    year: '2021',
    title: 'Digital Transformation',
    description: 'Launched digital platforms for waste tracking and community engagement.',
    achievement: '50+ communities served'
  },
  {
    year: '2024',
    title: 'Global Recognition',
    description: 'Recognized as a leading environmental organization in Africa.',
    achievement: '15+ years of impact'
  }
]

export function HistoryTimeline() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <CalendarIcon className="h-8 w-8 text-primary-600" />
            <h2 className="text-4xl font-bold text-gray-900">Our Journey</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From humble beginnings to becoming a leading environmental organization, 
            our journey has been marked by innovation, community impact, and sustainable growth.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary-200"></div>

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>

                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-2xl font-bold text-primary-600">{item.year}</span>
                      <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-3">{item.description}</p>
                    <div className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                      {item.achievement}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 