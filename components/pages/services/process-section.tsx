'use client'

import { motion } from 'framer-motion'
import { 
  MagnifyingGlassIcon, 
  LightBulbIcon, 
  WrenchScrewdriverIcon, 
  ChartBarIcon 
} from '@heroicons/react/24/outline'

const processSteps = [
  {
    icon: MagnifyingGlassIcon,
    title: 'Assessment',
    description: 'We conduct comprehensive environmental assessments to understand your specific needs and challenges.',
    details: [
      'Site evaluation',
      'Stakeholder consultation',
      'Impact analysis',
      'Resource assessment'
    ]
  },
  {
    icon: LightBulbIcon,
    title: 'Planning',
    description: 'Our experts develop customized solutions and strategic plans tailored to your objectives.',
    details: [
      'Solution design',
      'Implementation strategy',
      'Timeline development',
      'Resource allocation'
    ]
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'Implementation',
    description: 'We execute the planned solutions with precision, ensuring quality and sustainability.',
    details: [
      'Project execution',
      'Quality control',
      'Stakeholder engagement',
      'Progress monitoring'
    ]
  },
  {
    icon: ChartBarIcon,
    title: 'Evaluation',
    description: 'We measure outcomes and provide detailed reports on impact and effectiveness.',
    details: [
      'Impact measurement',
      'Performance analysis',
      'Reporting',
      'Continuous improvement'
    ]
  }
]

export function ProcessSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a proven methodology that ensures successful project delivery 
            and sustainable environmental impact.
          </p>
        </motion.div>

        <div className="relative">
          {/* Process line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-1 bg-primary-200 hidden lg:block"></div>

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start lg:justify-start' : 'justify-start lg:justify-end'
                }`}
              >
                {/* Step number */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white font-bold text-sm hidden lg:flex">
                  {index + 1}
                </div>

                {/* Content */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <div className="bg-gray-50 rounded-lg p-6 shadow-lg">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                        <step.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-green-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-lg opacity-90 mb-6">
              Our team is ready to help you achieve your environmental goals. 
              Let's discuss your project and create a plan together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
                Download Brochure
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 