'use client'

import { motion } from 'framer-motion'
import { Shield, Eye, Lock, Users, FileText } from 'lucide-react'

export default function PrivacyPage() {
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
              <Shield className="w-4 h-4 mr-2" />
              Privacy & Data Protection
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-secondary-900 mb-6"
            >
              Privacy{' '}
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
              We are committed to protecting your privacy and ensuring the security of your personal information. 
              This policy explains how we collect, use, and safeguard your data.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-secondary-900 mb-6">1. Information We Collect</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <Users className="h-5 w-5 text-primary-600 mr-2" />
                      <h3 className="font-semibold text-secondary-900">Personal Information</h3>
                    </div>
                    <ul className="text-sm text-secondary-600 space-y-1">
                      <li>• Name and contact details</li>
                      <li>• Email address</li>
                      <li>• Phone number</li>
                      <li>• Donation information</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <Eye className="h-5 w-5 text-primary-600 mr-2" />
                      <h3 className="font-semibold text-secondary-900">Usage Data</h3>
                    </div>
                    <ul className="text-sm text-secondary-600 space-y-1">
                      <li>• Website usage patterns</li>
                      <li>• Pages visited</li>
                      <li>• Time spent on site</li>
                      <li>• Browser information</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <FileText className="h-5 w-5 text-primary-600 mr-2" />
                      <h3 className="font-semibold text-secondary-900">Communication</h3>
                    </div>
                    <ul className="text-sm text-secondary-600 space-y-1">
                      <li>• Contact form submissions</li>
                      <li>• Newsletter subscriptions</li>
                      <li>• Feedback and inquiries</li>
                      <li>• Event registrations</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-secondary-900 mb-6">2. How We Use Your Information</h2>
                <p className="text-secondary-600 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-secondary-600 mb-8 space-y-2">
                  <li>Provide and improve our environmental services and programs</li>
                  <li>Process donations and send acknowledgment receipts</li>
                  <li>Send newsletters and updates about our work</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Analyze website usage to improve user experience</li>
                  <li>Comply with legal obligations and regulations</li>
                  <li>Protect against fraud and ensure security</li>
                </ul>

                <h2 className="text-2xl font-bold text-secondary-900 mb-6">3. Information Sharing and Disclosure</h2>
                <p className="text-secondary-600 mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-secondary-600 mb-8 space-y-2">
                  <li><strong>Service Providers:</strong> With trusted partners who help us operate our website and provide services</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                  <li><strong>Consent:</strong> With your explicit consent for specific purposes</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                </ul>

                <h2 className="text-2xl font-bold text-secondary-900 mb-6">4. Data Security</h2>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                  <div className="flex items-center mb-3">
                    <Lock className="h-5 w-5 text-green-600 mr-2" />
                    <h3 className="font-semibold text-green-800">Security Measures</h3>
                  </div>
                  <ul className="text-green-700 space-y-2">
                    <li>• Encryption of sensitive data in transit and at rest</li>
                    <li>• Regular security audits and updates</li>
                    <li>• Access controls and authentication</li>
                    <li>• Secure hosting and infrastructure</li>
                    <li>• Employee training on data protection</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-secondary-900 mb-6">5. Your Rights and Choices</h2>
                <p className="text-secondary-600 mb-4">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside text-secondary-600 mb-8 space-y-2">
                  <li><strong>Access:</strong> Request a copy of your personal information</li>
                  <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Receive your data in a portable format</li>
                  <li><strong>Objection:</strong> Object to certain processing activities</li>
                  <li><strong>Withdrawal:</strong> Withdraw consent at any time</li>
                </ul>

                <h2 className="text-2xl font-bold text-secondary-900 mb-6">6. Cookies and Tracking Technologies</h2>
                <p className="text-secondary-600 mb-4">
                  We use cookies and similar technologies to enhance your browsing experience:
                </p>
                <ul className="list-disc list-inside text-secondary-600 mb-8 space-y-2">
                  <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand website usage</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                  <li><strong>Marketing Cookies:</strong> Provide relevant content and advertisements</li>
                </ul>

                <h2 className="text-2xl font-bold text-secondary-900 mb-6">7. Third-Party Services</h2>
                <p className="text-secondary-600 mb-4">
                  Our website may contain links to third-party services. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
                </p>

                <h2 className="text-2xl font-bold text-secondary-900 mb-6">8. Children's Privacy</h2>
                <p className="text-secondary-600 mb-8">
                  We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.
                </p>

                <h2 className="text-2xl font-bold text-secondary-900 mb-6">9. International Data Transfers</h2>
                <p className="text-secondary-600 mb-8">
                  Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data during such transfers.
                </p>

                <h2 className="text-2xl font-bold text-secondary-900 mb-6">10. Changes to This Policy</h2>
                <p className="text-secondary-600 mb-8">
                  We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the effective date.
                </p>

                <h2 className="text-2xl font-bold text-secondary-900 mb-6">11. Contact Us</h2>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <p className="text-blue-800 mb-4">
                    If you have any questions about this privacy policy or our data practices, please contact us:
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