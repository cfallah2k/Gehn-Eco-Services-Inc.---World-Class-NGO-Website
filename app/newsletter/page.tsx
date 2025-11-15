'use client'

import { motion } from 'framer-motion'
import { 
  Mail, 
  CheckCircle,
  Bell,
  Sparkles,
  Users,
  TrendingUp,
  Shield,
  Gift,
  ArrowRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const benefits = [
  {
    icon: Bell,
    title: 'Weekly Updates',
    description: 'Get the latest news and updates delivered to your inbox every week',
  },
  {
    icon: Sparkles,
    title: 'Exclusive Content',
    description: 'Access exclusive articles, insights, and early access to new resources',
  },
  {
    icon: Users,
    title: 'Community Stories',
    description: 'Read inspiring stories from our community and impact initiatives',
  },
  {
    icon: TrendingUp,
    title: 'Impact Reports',
    description: 'Receive detailed reports on our environmental impact and achievements',
  },
  {
    icon: Gift,
    title: 'Special Offers',
    description: 'Get notified about events, workshops, and special opportunities',
  },
  {
    icon: Shield,
    title: 'Privacy Protected',
    description: 'Your email is safe with us. We never share your information.',
  },
]

const newsletterTypes = [
  {
    name: 'Weekly Digest',
    frequency: 'Every Monday',
    description: 'A comprehensive summary of the week\'s most important updates',
    popular: false,
  },
  {
    name: 'Monthly Newsletter',
    frequency: 'First of each month',
    description: 'In-depth monthly report with featured stories and impact metrics',
    popular: true,
  },
  {
    name: 'Breaking News',
    frequency: 'As it happens',
    description: 'Real-time updates on major announcements and urgent news',
    popular: false,
  },
]

export default function NewsletterPage() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary-50 via-accent-50 to-green-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6"
            >
              <Mail className="w-4 h-4 mr-2" />
              Stay Connected
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-secondary-900 mb-6"
            >
              Subscribe to Our{' '}
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                Newsletter
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8"
            >
              Join 25,000+ subscribers receiving the latest insights on environmental 
              innovation, sustainability, and community impact.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Subscription Form */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12 shadow-xl border border-primary-100"
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold text-secondary-900 mb-6 text-center">
                Get Started
              </h2>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-base"
                  />
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-base"
                  />
                </div>

                <div>
                  <label htmlFor="interests" className="block text-sm font-medium text-secondary-700 mb-2">
                    Areas of Interest (Select all that apply)
                  </label>
                  <div className="space-y-3">
                    {['Environmental News', 'Impact Stories', 'Research & Publications', 'Events & Workshops', 'Volunteer Opportunities', 'Donation Updates'].map((interest) => (
                      <label key={interest} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          className="w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                        />
                        <span className="text-secondary-700">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="frequency" className="block text-sm font-medium text-secondary-700 mb-2">
                    Newsletter Frequency *
                  </label>
                  <select
                    id="frequency"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-base"
                  >
                    <option value="">Select frequency</option>
                    <option value="weekly">Weekly Digest</option>
                    <option value="monthly">Monthly Newsletter</option>
                    <option value="breaking">Breaking News Only</option>
                  </select>
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    required
                    className="w-5 h-5 mt-1 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <label htmlFor="privacy" className="text-sm text-secondary-600">
                    I agree to receive emails and understand I can unsubscribe at any time. 
                    <Link href="/privacy" className="text-primary-600 hover:underline ml-1">
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                <Button size="lg" className="w-full" type="submit">
                  Subscribe Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              What You'll Get
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Exclusive benefits for our newsletter subscribers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-secondary-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Types */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Choose Your Newsletter Type
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Select the frequency that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {newsletterTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`bg-white rounded-2xl p-8 border-2 ${
                  type.popular 
                    ? 'border-primary-500 shadow-xl scale-105' 
                    : 'border-gray-200 shadow-lg'
                }`}
              >
                {type.popular && (
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-semibold text-secondary-900 mb-2">
                  {type.name}
                </h3>
                <p className="text-primary-600 font-medium mb-4">{type.frequency}</p>
                <p className="text-secondary-600 mb-6">{type.description}</p>
                <Button 
                  variant={type.popular ? "default" : "outline"} 
                  className="w-full"
                >
                  Select This
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">25,000+</div>
              <div className="text-primary-100 text-lg">Active Subscribers</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">98%</div>
              <div className="text-primary-100 text-lg">Open Rate</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">75+</div>
              <div className="text-primary-100 text-lg">Countries Reached</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">
              Ready to Stay Informed?
            </h2>
            <p className="text-xl text-secondary-600 mb-8">
              Join thousands of subscribers who are making a difference in environmental sustainability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#subscribe">Subscribe Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

