'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Play, ArrowRight, Users, Globe, Award, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import CountUp from 'react-countup'

const stats = [
  {
    icon: Users,
    value: 5000,
    suffix: '+',
    label: 'Lives Impacted',
    description: 'Communities transformed through our programs'
  },
  {
    icon: Globe,
    value: 50,
    suffix: '+',
    label: 'Communities Served',
    description: 'Across multiple regions and states'
  },
  {
    icon: Award,
    value: 15,
    suffix: '+',
    label: 'Years Experience',
    description: 'Leading environmental solutions'
  },
  {
    icon: Heart,
    value: 100,
    suffix: '%',
    label: 'Women-Led',
    description: 'Empowering women in environmental sector'
  }
]

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-accent-50/50" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-20"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-40 right-20 w-16 h-16 bg-accent-200 rounded-full opacity-20"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-40 left-20 w-12 h-12 bg-secondary-200 rounded-full opacity-20"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium"
              >
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
                Women-Led Social Enterprise
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-4xl md:text-6xl font-display font-bold text-secondary-900 leading-tight"
              >
                Transforming{' '}
                <span className="gradient-text">Environmental</span>{' '}
                Health Through Innovation
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-xl text-secondary-600 leading-relaxed max-w-2xl"
              >
                Leading the charge in waste value chain management, environmental consultancy, 
                and creating sustainable livelihood opportunities. Excellence in environmental 
                health and sanitation since 2008.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" asChild className="text-lg px-8 py-4">
                <Link href="/services">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-4">
                <Link href="/about">
                  Learn More
                </Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <div className="text-2xl font-bold text-secondary-900">
                    <CountUp
                      end={stat.value}
                      suffix={stat.suffix}
                      duration={2.5}
                      delay={1.5 + index * 0.2}
                    />
                  </div>
                  <div className="text-sm font-medium text-secondary-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-accent-400 rounded-3xl transform rotate-6 scale-105 opacity-20" />
              <div className="relative bg-white rounded-3xl shadow-2xl p-8">
                <div className="aspect-square relative overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80"
                    alt="Environmental sustainability and waste management"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-semibold">Sustainable Future</h3>
                    <p className="text-sm opacity-90">Building tomorrow's environmental solutions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Video Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-full p-4 shadow-lg"
            >
              <Play className="h-6 w-6 text-primary-600 ml-1" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-secondary-300 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-secondary-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
} 