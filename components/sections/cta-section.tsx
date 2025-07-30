'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Heart, 
  Users, 
  Globe, 
  ArrowRight,
  Download,
  Mail
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const ctaOptions = [
  {
    icon: Heart,
    title: 'Make a Donation',
    description: 'Support our environmental initiatives and community empowerment programs.',
    href: '/donate',
    color: 'bg-red-500 hover:bg-red-600'
  },
  {
    icon: Users,
    title: 'Volunteer With Us',
    description: 'Join our team of passionate environmental advocates and make a difference.',
    href: '/volunteer',
    color: 'bg-primary-600 hover:bg-primary-700'
  },
  {
    icon: Globe,
    title: 'Partner With Us',
    description: 'Collaborate on environmental projects and sustainability initiatives.',
    href: '/partnership',
    color: 'bg-accent-500 hover:bg-accent-600'
  }
]

const resources = [
  {
    title: 'Annual Report 2023',
    description: 'Download our latest impact report and financial statements.',
    icon: Download,
    href: '/reports/annual-2023'
  },
  {
    title: 'Newsletter',
    description: 'Stay updated with our latest news and environmental initiatives.',
    icon: Mail,
    href: '/newsletter'
  }
]

export function CTASection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 text-white" ref={ref}>
      <div className="container-custom">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl md:text-5xl font-display font-bold mb-6"
          >
            Join Us in Creating a{' '}
            <span className="text-yellow-300">Sustainable Future</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-primary-100 max-w-3xl mx-auto mb-8"
          >
            Every action counts. Whether you donate, volunteer, or partner with us, 
            you're helping to build a greener, more equitable world for future generations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-4">
              <Link href="/donate">
                Donate Now
                <Heart className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-600">
              <Link href="/contact">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* CTA Options */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {ctaOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 h-full border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${option.color} text-white`}>
                    <option.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{option.title}</h3>
                </div>
                <p className="text-primary-100 mb-6">
                  {option.description}
                </p>
                <Button variant="outline" asChild className="w-full border-white text-white hover:bg-white hover:text-primary-600">
                  <Link href={option.href}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Resources */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
            <p className="text-primary-100">
              Download our resources and stay updated with our latest initiatives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
                className="bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                    <resource.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-1">{resource.title}</h4>
                    <p className="text-primary-100 text-sm">{resource.description}</p>
                  </div>
                  <Button variant="outline" size="sm" asChild className="border-white text-white hover:bg-white hover:text-primary-600">
                    <Link href={resource.href}>
                      Download
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-yellow-300 mb-2">₦50M+</div>
              <div className="text-primary-100">Funds Raised</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-300 mb-2">5000+</div>
              <div className="text-primary-100">Lives Impacted</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-300 mb-2">50+</div>
              <div className="text-primary-100">Communities Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-300 mb-2">15+</div>
              <div className="text-primary-100">Years of Service</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 