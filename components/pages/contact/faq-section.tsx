'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: 'What environmental services do you offer?',
    answer: 'We offer comprehensive environmental services including waste management, environmental consultancy, sanitation programs, livelihood programs, training & capacity building, and impact assessment services.'
  },
  {
    question: 'How quickly can you respond to urgent environmental issues?',
    answer: 'We have a 24/7 emergency hotline and can respond to urgent environmental issues within 2-4 hours depending on the location and nature of the problem.'
  },
  {
    question: 'Do you work with both government and private organizations?',
    answer: 'Yes, we work with government agencies, private companies, NGOs, and community organizations. Our services are tailored to meet the specific needs of each client.'
  },
  {
    question: 'What areas do you serve in Nigeria?',
    answer: 'We have offices in Lagos, Abuja, and Port Harcourt, and serve communities across all 36 states of Nigeria. We also provide remote consultancy services.'
  },
  {
    question: 'How do you ensure the sustainability of your projects?',
    answer: 'We focus on capacity building, community engagement, and creating long-term solutions that empower local communities to maintain environmental initiatives independently.'
  },
  {
    question: 'What makes your organization unique?',
    answer: 'As a women-led organization, we bring unique perspectives to environmental challenges and are particularly effective in community engagement and sustainable development initiatives.'
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our services, processes, and environmental solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg border border-gray-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDownIcon 
                    className={`h-5 w-5 text-gray-500 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-green-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-lg opacity-90 mb-6">
              Can't find what you're looking for? Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Call Us Now
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
                Send Email
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 