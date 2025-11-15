'use client'

import { motion } from 'framer-motion'
import { 
  Heart, 
  Users, 
  Globe, 
  Award, 
  CheckCircle,
  ArrowRight,
  Gift,
  Target,
  TrendingUp
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const donationTiers = [
  {
    name: "Supporter",
    amount: 25,
    description: "Help us reach one more family",
    benefits: [
      "Monthly impact report",
      "Thank you certificate",
      "Social media recognition"
    ],
    color: "bg-green-500"
  },
  {
    name: "Champion",
    amount: 100,
    description: "Transform a community's environmental health",
    benefits: [
      "Quarterly impact reports",
      "Personalized thank you video",
      "Invitation to annual event",
      "Named recognition on website"
    ],
    color: "bg-blue-500"
  },
  {
    name: "Partner",
    amount: 500,
    description: "Create lasting environmental change",
    benefits: [
      "Monthly personal updates",
      "Exclusive impact stories",
      "VIP event invitations",
      "Dedicated program naming",
      "Direct team communication"
    ],
    color: "bg-purple-500"
  }
]

const impactAreas = [
  {
    icon: Users,
    title: "Community Health",
    description: "Improve environmental health for underserved communities",
    impact: "10,000+ families served"
  },
  {
    icon: Globe,
    title: "Environmental Education",
    description: "Train environmental advocates and promote sustainability",
    impact: "15,000+ students reached"
  },
  {
    icon: Award,
    title: "Livelihood Programs",
    description: "Create economic opportunities through environmental initiatives",
    impact: "300+ jobs created"
  },
  {
    icon: TrendingUp,
    title: "Waste Management",
    description: "Implement sustainable waste management systems",
    impact: "60% waste reduction achieved"
  }
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Community Leader",
    location: "Lagos, Nigeria",
    quote: "The environmental programs have transformed our community. We now have clean water and proper waste management.",
    amount: 100
  },
  {
    name: "Michael Chen",
    role: "Environmental Advocate",
    location: "Port Harcourt, Nigeria",
    quote: "Your donation helped us train 50 environmental advocates who are now making a difference in their communities.",
    amount: 250
  },
  {
    name: "Fatima Hassan",
    role: "Local Entrepreneur",
    location: "Kano, Nigeria",
    quote: "The livelihood program helped me start a recycling business. I now employ 5 people and support my family.",
    amount: 500
  }
]

export default function DonatePage() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6"
            >
              <Heart className="w-4 h-4 mr-2" />
              Make a Difference
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-secondary-900 mb-6"
            >
              Support Our{' '}
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                Environmental Mission
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8"
            >
              Your donation directly supports environmental health initiatives, community 
              education programs, and sustainable livelihood opportunities across Nigeria.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="text-lg px-8 py-4">
                Donate Now
                <Heart className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-4">
                <Link href="#impact">Learn More</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Your Impact in Numbers
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              See how your donations have transformed communities and created lasting change
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="flex justify-center mb-4">
                  <area.icon className="h-12 w-12 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">{area.title}</h3>
                <p className="text-secondary-600 mb-3 text-sm">{area.description}</p>
                <div className="text-primary-600 font-semibold text-sm">{area.impact}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Tiers */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Choose Your Impact Level
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Every donation makes a difference. Select the level that works for you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {donationTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 ${tier.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Gift className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary-900 mb-2">{tier.name}</h3>
                  <div className="text-3xl font-bold text-primary-600 mb-2">₦{tier.amount.toLocaleString()}</div>
                  <p className="text-secondary-600">{tier.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-secondary-700 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full" size="lg">
                  Donate ₦{tier.amount.toLocaleString()}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Stories of Impact
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Hear from people whose lives have been transformed through your generosity
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-semibold text-secondary-900">{testimonial.name}</h4>
                    <p className="text-sm text-secondary-600">{testimonial.role}</p>
                    <p className="text-xs text-secondary-500">{testimonial.location}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary-600">₦{testimonial.amount.toLocaleString()}</div>
                    <div className="text-xs text-secondary-500">donated</div>
                  </div>
                </div>
                
                <blockquote className="text-secondary-700 italic mb-4">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Heart key={star} className="h-4 w-4 text-red-500 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Your Donation Helps */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              How Your Donation Helps
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Every naira goes directly to creating positive environmental and social impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Direct Impact</h3>
              <p className="text-primary-100 text-sm">100% of your donation goes to programs</p>
            </div>
            
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Community Focus</h3>
              <p className="text-primary-100 text-sm">Supporting underserved communities</p>
            </div>
            
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Environmental Health</h3>
              <p className="text-primary-100 text-sm">Creating sustainable solutions</p>
            </div>
            
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Long-term Change</h3>
              <p className="text-primary-100 text-sm">Building lasting impact</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-secondary-600 mb-8">
              Your donation today will create lasting positive change in communities across Nigeria. 
              Join us in building a more sustainable future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4">
                Donate Now
                <Heart className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-4">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 