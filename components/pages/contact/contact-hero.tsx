'use client'

import { motion } from 'framer-motion'
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'

export function ContactHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-primary-600 to-green-600 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Ready to transform your environmental impact? Let's discuss how we can 
            help you achieve your sustainability goals and create positive change.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <PhoneIcon className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="opacity-90">+234 803 123 4567</p>
            <p className="opacity-90">+234 802 987 6543</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <EnvelopeIcon className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="opacity-90">info@gehnecservices.com</p>
            <p className="opacity-90">support@gehnecservices.com</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPinIcon className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <p className="opacity-90">123 Environmental Street</p>
            <p className="opacity-90">Victoria Island, Lagos, Nigeria</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 