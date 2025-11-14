'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Leaf, 
  Users, 
  Globe, 
  Heart, 
  CheckCircle, 
  TrendingUp,
  Shield,
  Lightbulb
} from 'lucide-react'

const loadingSteps = [
  {
    icon: Shield,
    title: 'Initializing Security',
    description: 'Setting up secure environment for Gehn Eco Services',
    color: 'text-blue-500'
  },
  {
    icon: Globe,
    title: 'Loading Environmental Data',
    description: 'Connecting to our environmental impact database',
    color: 'text-green-500'
  },
  {
    icon: Users,
    title: 'Preparing Community Features',
    description: 'Loading community engagement and livelihood programs',
    color: 'text-purple-500'
  },
  {
    icon: Leaf,
    title: 'Optimizing Waste Solutions',
    description: 'Initializing waste management and consultancy services',
    color: 'text-emerald-500'
  },
  {
    icon: Lightbulb,
    title: 'Loading Innovation Hub',
    description: 'Preparing sustainable technology and solutions',
    color: 'text-yellow-500'
  },
  {
    icon: TrendingUp,
    title: 'Analyzing Impact Metrics',
    description: 'Loading success stories and impact reports',
    color: 'text-orange-500'
  },
  {
    icon: Heart,
    title: 'Finalizing Experience',
    description: 'Preparing your personalized experience',
    color: 'text-red-500'
  },
  {
    icon: CheckCircle,
    title: 'Ready to Serve',
    description: 'Welcome to Gehn Eco Services Inc.',
    color: 'text-green-600'
  }
]

interface LoadingScreenProps {
  onComplete: () => void
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const totalSteps = loadingSteps.length
    const stepDuration = 10000 / totalSteps // 10 seconds total

    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + (100 / totalSteps)
        if (newProgress >= 100) {
          clearInterval(interval)
          setTimeout(onComplete, 500)
          return 100
        }
        return newProgress
      })
    }, stepDuration)

    const stepInterval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < totalSteps - 1) {
          return prev + 1
        }
        return prev
      })
    }, stepDuration)

    return () => {
      clearInterval(interval)
      clearInterval(stepInterval)
    }
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 flex items-center justify-center"
    >
        <div className="max-w-md w-full mx-4">
          {/* Logo and Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Gehn Eco Services</h1>
                <p className="text-sm text-gray-600">Inc.</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Women-led social enterprise transforming environmental health
            </p>
          </motion.div>

          {/* Current Step */}
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 mb-6"
          >
            <div className="flex items-center space-x-4">
              <div className={`p-3 rounded-xl bg-gray-50 ${loadingSteps[currentStep].color}`}>
                <loadingSteps[currentStep].icon className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">
                  {loadingSteps[currentStep].title}
                </h3>
                <p className="text-sm text-gray-600">
                  {loadingSteps[currentStep].description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Progress Bar */}
          <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-gray-700">Loading Progress</span>
              <span className="text-sm font-medium text-gray-500">{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                className="bg-gradient-to-r from-green-500 to-blue-600 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            
            {/* Loading Animation */}
            <div className="flex justify-center mt-4">
              <div className="flex space-x-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-green-500 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Fun Facts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-center"
          >
            <p className="text-xs text-gray-500">
              Did you know? We've helped over 10,000 families improve their environmental health
            </p>
          </motion.div>
        </div>
      </motion.div>
  )
} 