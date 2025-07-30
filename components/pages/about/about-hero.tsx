'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { Award, Users, Globe, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const stats = [
  { icon: Award, number: '15+', label: 'Years of Excellence' },
  { icon: Users, number: '5000+', label: 'Lives Impacted' },
  { icon: Globe, number: '50+', label: 'Communities Served' },
  { icon: Heart, number: '100%', label: 'Women-Led' }
]

export function AboutHero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium"
            >
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
              About Our Organization
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl md:text-5xl font-display font-bold text-secondary-900 leading-tight"
            >
              Leading{' '}
              <span className="gradient-text">Environmental</span>{' '}
              Innovation Since 2008
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl text-secondary-600 leading-relaxed"
            >
              Gehn Eco Services Inc. is a pioneering women-led social enterprise that has been 
              at the forefront of environmental sustainability and waste management innovation 
              for over 15 years. Our mission is to transform communities through sustainable 
              environmental practices while creating meaningful livelihood opportunities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" asChild>
                <Link href="/team">Meet Our Team</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/impact">View Our Impact</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-accent-400 rounded-3xl transform rotate-6 scale-105 opacity-20" />
              <div className="relative bg-white rounded-3xl shadow-2xl p-8">
                <div className="aspect-square relative overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Team collaboration and environmental work"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-semibold">Women-Led Innovation</h3>
                    <p className="text-sm opacity-90">Empowering communities through environmental leadership</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 grid md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-primary-600" />
                </div>
              </div>
              <div className="text-3xl font-bold text-secondary-900 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-secondary-900">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 