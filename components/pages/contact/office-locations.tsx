'use client'

import { motion } from 'framer-motion'
import { MapPinIcon, ClockIcon, PhoneIcon } from '@heroicons/react/24/outline'

const offices = [
  {
    city: 'Lagos',
    address: '123 Environmental Street, Victoria Island',
    phone: '+234 803 123 4567',
    email: 'lagos@gehnecservices.com',
    hours: 'Monday - Friday: 8:00 AM - 6:00 PM',
    description: 'Our main headquarters and primary service center.'
  },
  {
    city: 'Abuja',
    address: '456 Green Avenue, Central Business District',
    phone: '+234 802 987 6543',
    email: 'abuja@gehnecservices.com',
    hours: 'Monday - Friday: 8:00 AM - 6:00 PM',
    description: 'Federal capital office serving northern regions.'
  },
  {
    city: 'Port Harcourt',
    address: '789 Eco Drive, Garden City',
    phone: '+234 801 456 7890',
    email: 'portharcourt@gehnecservices.com',
    hours: 'Monday - Friday: 8:00 AM - 6:00 PM',
    description: 'Regional office serving the Niger Delta area.'
  }
]

export function OfficeLocations() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Office Locations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We have strategically located offices across Nigeria to serve our clients 
            and communities effectively.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <motion.div
              key={office.city}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{office.city}</h3>
                <p className="text-gray-600">{office.description}</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPinIcon className="h-5 w-5 text-primary-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Address</p>
                    <p className="text-gray-600">{office.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <PhoneIcon className="h-5 w-5 text-primary-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-gray-600">{office.phone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <ClockIcon className="h-5 w-5 text-primary-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Hours</p>
                    <p className="text-gray-600">{office.hours}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="font-medium text-gray-900">Email</p>
                  <p className="text-primary-600">{office.email}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-primary-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Need Emergency Support?</h3>
            <p className="text-lg opacity-90 mb-6">
              For urgent environmental issues or emergency consultations, 
              call our 24/7 hotline.
            </p>
            <div className="text-3xl font-bold">+234 803 123 4567</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 