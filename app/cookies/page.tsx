'use client'

import { motion } from 'framer-motion'
import { Cookie, Settings, Shield, Eye, Info } from 'lucide-react'

export default function CookiesPage() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6"
            >
              <Cookie className="w-4 h-4 mr-2" />
              Cookie Policy
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-secondary-900 mb-6"
            >
              Cookie{' '}
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                Policy
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-secondary-600 max-w-3xl mx-auto"
            >
              Learn how we use cookies and similar technologies to enhance your browsing experience 
              and improve our website functionality.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-secondary-900 mb-6">What Are Cookies?</h2>
                <p className="text-secondary-600 mb-8">
                  Cookies are small text files that are stored on your device when you visit our website. 
                  They help us provide you with a better browsing experience by remembering your preferences, 
                  analyzing how you use our site, and personalizing content.
                </p>

                <h2 className="text-2xl font-bold text-secondary-900 mb-6">Types of Cookies We Use</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <div className="flex items-center mb-3">
                      <Shield className="h-5 w-5 text-green-600 mr-2" />
                      <h3 className="font-semibold text-green-800">Essential Cookies</h3>
                    </div>
                    <p className="text-green-700 text-sm mb-3">
                      These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas.
                    </p>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• Authentication and security</li>
                      <li>• Shopping cart functionality</li>
                      <li>• Form submissions</li>
                      <li>• Language preferences</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <div className="flex items-center mb-3">
                      <Eye className="h-5 w-5 text-blue-600 mr-2" />
                      <h3 className="font-semibold text-blue-800">Analytics Cookies</h3>
                    </div>
                    <p className="text-blue-700 text-sm mb-3">
                      These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                    </p>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• Page views and time spent</li>
                      <li>• Traffic sources</li>
                      <li>• User behavior patterns</li>
                      <li>• Performance metrics</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                    <div className="flex items-center mb-3">
                      <Settings className="h-5 w-5 text-purple-600 mr-2" />
                      <h3 className="font-semibold text-purple-800">Preference Cookies</h3>
                    </div>
                    <p className="text-purple-700 text-sm mb-3">
                      These cookies allow the website to remember choices you make and provide enhanced, more personal features.
                    </p>
                    <ul className="text-purple-700 text-sm space-y-1">
                      <li>• Theme preferences</li>
                      <li>• Language settings</li>
                      <li>• Region-specific content</li>
                      <li>• Customized layouts</li>
                    </ul>
                  </div>
                  
                  <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                    <div className="flex items-center mb-3">
                      <Info className="h-5 w-5 text-orange-600 mr-2" />
                      <h3 className="font-semibold text-orange-800">Marketing Cookies</h3>
                    </div>
                    <p className="text-orange-700 text-sm mb-3">
                      These cookies are used to track visitors across websites to display relevant and engaging advertisements.
                    </p>
                    <ul className="text-orange-700 text-sm space-y-1">
                      <li>• Targeted advertising</li>
                      <li>• Social media integration</li>
                      <li>• Campaign tracking</li>
                      <li>• Conversion optimization</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-secondary-900 mb-6">How We Use Cookies</h2>
                <p className="text-secondary-600 mb-4">
                  We use cookies for the following purposes:
                </p>
                <ul className="list-disc list-inside text-secondary-600 mb-8 space-y-2">
                  <li><strong>Website Functionality:</strong> To ensure our website works properly and provides the features you expect</li>
                  <li><strong>Performance Monitoring:</strong> To understand how our website performs and identify areas for improvement</li>
                  <li><strong>User Experience:</strong> To remember your preferences and provide personalized content</li>
                  <li><strong>Security:</strong> To protect against fraud and ensure secure transactions</li>
                  <li><strong>Analytics:</strong> To analyze website traffic and user behavior patterns</li>
                  <li><strong>Marketing:</strong> To provide relevant content and measure campaign effectiveness</li>
                </ul>

                <h2 className="text-2xl font-bold text-secondary-900 mb-6">Third-Party Cookies</h2>
                <p className="text-secondary-600 mb-4">
                  Some cookies on our website are set by third-party services that we use:
                </p>
                <ul className="list-disc list-inside text-secondary-600 mb-8 space-y-2">
                  <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                  <li><strong>Payment Processors:</strong> For secure donation and payment processing</li>
                  <li><strong>Social Media:</strong> For social media integration and sharing features</li>
                  <li><strong>Content Delivery Networks:</strong> For faster website loading and improved performance</li>
                </ul>

                <h2 className="text-2xl font-bold text-secondary-900 mb-6">Managing Your Cookie Preferences</h2>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
                  <div className="flex items-center mb-3">
                    <Settings className="h-5 w-5 text-yellow-600 mr-2" />
                    <h3 className="font-semibold text-yellow-800">Cookie Control Options</h3>
                  </div>
                  <div className="text-yellow-700 space-y-3">
                    <p><strong>Browser Settings:</strong> You can control cookies through your browser settings. Most browsers allow you to block or delete cookies.</p>
                    <p><strong>Cookie Consent:</strong> We provide a cookie consent banner that allows you to choose which types of cookies to accept.</p>
                    <p><strong>Opt-Out Tools:</strong> You can use browser extensions or tools to manage cookie preferences more granularly.</p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-secondary-900 mb-6">Cookie Duration</h2>
                <p className="text-secondary-600 mb-4">
                  Cookies on our website have different lifespans:
                </p>
                <ul className="list-disc list-inside text-secondary-600 mb-8 space-y-2">
                  <li><strong>Session Cookies:</strong> Temporary cookies that are deleted when you close your browser</li>
                  <li><strong>Persistent Cookies:</strong> Cookies that remain on your device for a set period or until manually deleted</li>
                  <li><strong>First-Party Cookies:</strong> Set by our website directly</li>
                  <li><strong>Third-Party Cookies:</strong> Set by external services we use</li>
                </ul>

                <h2 className="text-2xl font-bold text-secondary-900 mb-6">Your Rights and Choices</h2>
                <p className="text-secondary-600 mb-4">
                  You have the following rights regarding cookies:
                </p>
                <ul className="list-disc list-inside text-secondary-600 mb-8 space-y-2">
                  <li><strong>Accept or Decline:</strong> You can choose which cookies to accept or decline</li>
                  <li><strong>Delete Cookies:</strong> You can delete existing cookies from your browser</li>
                  <li><strong>Block Cookies:</strong> You can block cookies through browser settings</li>
                  <li><strong>Opt-Out:</strong> You can opt out of certain types of cookies, particularly marketing cookies</li>
                  <li><strong>Information:</strong> You have the right to know what cookies we use and why</li>
                </ul>

                <h2 className="text-2xl font-bold text-secondary-900 mb-6">Impact of Disabling Cookies</h2>
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
                  <div className="flex items-center mb-3">
                    <Info className="h-5 w-5 text-red-600 mr-2" />
                    <h3 className="font-semibold text-red-800">Important Notice</h3>
                  </div>
                  <p className="text-red-700">
                    Disabling certain cookies may affect the functionality of our website. Essential cookies are required for basic site operations, while disabling analytics cookies may limit our ability to improve user experience.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-secondary-900 mb-6">Updates to This Policy</h2>
                <p className="text-secondary-600 mb-8">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website.
                </p>

                <h2 className="text-2xl font-bold text-secondary-900 mb-6">Contact Us</h2>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <p className="text-blue-800 mb-4">
                    If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                  </p>
                  <div className="space-y-2 text-blue-700">
                    <p><strong>Email:</strong> privacy@gehnecservices.com</p>
                    <p><strong>Phone:</strong> +234 803 123 4567</p>
                    <p><strong>Address:</strong> Lagos, Nigeria</p>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Last Updated:</strong> March 2024
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 