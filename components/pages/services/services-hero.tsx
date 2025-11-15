'use client'

import { motion } from 'framer-motion'
import { WrenchScrewdriverIcon, LightBulbIcon, UsersIcon } from '@heroicons/react/24/outline'

export function ServicesHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-green-600 to-primary-600 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-6">Our Comprehensive Services</h1>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            From waste management to environmental consultancy, we provide end-to-end 
            solutions that create sustainable impact and empower communities across Nigeria.
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
              <WrenchScrewdriverIcon className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Practical Solutions</h3>
            <p className="opacity-90">
              Hands-on environmental services that deliver measurable results
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <LightBulbIcon className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="opacity-90">
              Cutting-edge approaches to environmental challenges
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <UsersIcon className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Community Focus</h3>
            <p className="opacity-90">
              Empowering local communities through sustainable development
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="bg-white bg-opacity-10 rounded-lg p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">Why Choose Our Services?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
              <div>
                <div className="font-semibold mb-1">15+ Years Experience</div>
                <div className="opacity-80">Proven track record</div>
              </div>
              <div>
                <div className="font-semibold mb-1">5000+ Lives Impacted</div>
                <div className="opacity-80">Real community change</div>
              </div>
              <div>
                <div className="font-semibold mb-1">50+ Communities</div>
                <div className="opacity-80">Nationwide reach</div>
              </div>
              <div>
                <div className="font-semibold mb-1">Women-Led</div>
                <div className="opacity-80">Unique perspective</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 