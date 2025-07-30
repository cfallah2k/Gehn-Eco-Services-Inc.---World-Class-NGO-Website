'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { CheckCircle, Award, Users, Globe, Heart, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const values = [
  {
    icon: Heart,
    title: 'Empowerment',
    description: 'Empowering women and communities through sustainable environmental practices'
  },
  {
    icon: Shield,
    title: 'Sustainability',
    description: 'Committed to long-term environmental protection and resource conservation'
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Building strong partnerships with local communities and stakeholders'
  },
  {
    icon: Globe,
    title: 'Innovation',
    description: 'Developing cutting-edge solutions for environmental challenges'
  }
]

const achievements = [
  { number: '15+', label: 'Years of Excellence' },
  { number: '5000+', label: 'Lives Impacted' },
  { number: '50+', label: 'Communities Served' },
  { number: '100%', label: 'Women-Led' }
]

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section className="section-padding section-gradient" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium"
              >
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
                About Our Organization
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-3xl md:text-4xl font-display font-bold text-secondary-900"
              >
                Leading Environmental{' '}
                <span className="gradient-text">Innovation</span>{' '}
                Since 2008
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-lg text-secondary-600 leading-relaxed"
              >
                Gehn Eco Services Inc. is a pioneering women-led social enterprise that has been 
                at the forefront of environmental sustainability and waste management innovation 
                for over 15 years. Our mission is to transform communities through sustainable 
                environmental practices while creating meaningful livelihood opportunities.
              </motion.p>
            </div>

            {/* Mission Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary-500"
            >
              <h3 className="font-semibold text-lg text-secondary-900 mb-2">Our Mission</h3>
              <p className="text-secondary-600">
                To promote environmental health and sanitation excellence while creating innovative 
                livelihood opportunities that empower communities and protect our planet for future generations.
              </p>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1, duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                    <value.icon className="h-4 w-4 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900">{value.title}</h4>
                    <p className="text-sm text-secondary-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" asChild>
                <Link href="/about">Learn More About Us</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/team">Meet Our Team</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-accent-400 rounded-3xl transform -rotate-6 scale-105 opacity-20" />
              <div className="relative bg-white rounded-3xl shadow-2xl p-8">
                <div className="aspect-square relative overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80"
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

            {/* Achievement Cards */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-lg p-6">
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-primary-600">{achievement.number}</div>
                    <div className="text-xs text-secondary-600">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-secondary-900 mb-2">Excellence</h3>
            <p className="text-secondary-600">
              Recognized for outstanding contributions to environmental sustainability and community development.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-accent-600" />
            </div>
            <h3 className="text-xl font-semibold text-secondary-900 mb-2">Global Impact</h3>
            <p className="text-secondary-600">
              Our innovative solutions have been implemented across multiple regions, creating lasting positive change.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-secondary-600" />
            </div>
            <h3 className="text-xl font-semibold text-secondary-900 mb-2">Community Focus</h3>
            <p className="text-secondary-600">
              Building strong partnerships with local communities to create sustainable environmental solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 