import { motion } from 'framer-motion'
import { FileText, Shield, Users, Globe, AlertTriangle } from 'lucide-react'

export default function TermsPage() {
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
              <FileText className="w-4 h-4 mr-2" />
              Terms & Conditions
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-secondary-900 mb-6"
            >
              Terms of{' '}
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                Service
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-secondary-600 max-w-3xl mx-auto"
            >
              Please read these terms carefully before using our website and services. 
              By accessing our site, you agree to be bound by these terms and conditions.
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
                <h2 className="text-2xl font-bold text-secondary-900 mb-6">1. Acceptance of Terms</h2>
                <p className="text-secondary-600 mb-8">
                  By accessing and using the Gehn Eco Services Inc. website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>

                <h2 className="text-2xl font-bold text-secondary-900 mb-6">2. Description of Service</h2>
                <p className="text-secondary-600 mb-4">
                  Gehn Eco Services Inc. provides environmental consultancy, waste management services, and community development programs. Our services include:
                </p>
                <ul className="list-disc list-inside text-secondary-600 mb-8 space-y-2">
                  <li>Environmental consultancy and assessment</li>
                  <li>Waste management and recycling programs</li>
                  <li>Community health and sanitation initiatives</li>
                  <li>Livelihood and skill development programs</li>
                  <li>Environmental education and awareness</li>
                  <li>Donation and fundraising services</li>
                </ul>

                <h2 className="text-2xl font-bold text-secondary-900 mb-6">3. User Responsibilities</h2>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                  <div className="flex items-center mb-3">
                    <Users className="h-5 w-5 text-blue-600 mr-2" />
                    <h3 className="font-semibold text-blue-800">Your Obligations</h3>
                  </div>
                  <ul className="text-blue-700 space-y-2">
                    <li>• Provide accurate and truthful information</li>
                    <li>• Respect intellectual property rights</li>
                    <li>• Use services for lawful purposes only</li>
                    <li>• Maintain confidentiality of account information</li>
                    <li>• Report any security concerns immediately</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-secondary-900 mb-6">4. Prohibited Activities</h2>
                <p className="text-secondary-600 mb-4">
                  You agree not to engage in any of the following activities:
                </p>
                <ul className="list-disc list-inside text-secondary-600 mb-8 space-y-2">
                  <li>Using our services for any illegal or unauthorized purpose</li>
                  <li>Attempting to gain unauthorized access to our systems</li>
                  <li>Interfering with or disrupting our services</li>
                  <li>Transmitting viruses, malware, or harmful code</li>
                  <li>Harassing, abusing, or harming others</li>
                  <li>Violating any applicable laws or regulations</li>
                </ul>

                <h2 className="text-2xl font-bold text-secondary-900 mb-6">5. Intellectual Property Rights</h2>
                <p className="text-secondary-600 mb-4">
                  All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Gehn Eco Services Inc. and is protected by copyright and other intellectual property laws.
                </p>
                <p className="text-secondary-600 mb-8">
                  You may not reproduce, distribute, modify, or create derivative works without our express written consent.
                </p>

                <h2 className="text-2xl font-bold text-secondary-900 mb-6">6. Privacy and Data Protection</h2>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                  <div className="flex items-center mb-3">
                    <Shield className="h-5 w-5 text-green-600 mr-2" />
                    <h3 className="font-semibold text-green-800">Data Protection</h3>
                  </div>
                  <p className="text-green-700 mb-3">
                    We are committed to protecting your privacy. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these terms by reference.
                  </p>
                  <p className="text-green-700">
                    By using our services, you consent to the collection and use of your information as described in our Privacy Policy.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-secondary-900 mb-6">7. Donations and Payments</h2>
                <p className="text-secondary-600 mb-4">
                  When making donations through our website:
                </p>
                <ul className="list-disc list-inside text-secondary-600 mb-8 space-y-2">
                  <li>All donations are voluntary and non-refundable</li>
                  <li>We use secure payment processors to handle transactions</li>
                  <li>Donation receipts will be provided for tax purposes</li>
                  <li>We reserve the right to refuse or return donations</li>
                  <li>Donations are used for environmental and community programs</li>
                </ul>

                <h2 className="text-2xl font-bold text-secondary-900 mb-6">8. Limitation of Liability</h2>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
                  <div className="flex items-center mb-3">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
                    <h3 className="font-semibold text-yellow-800">Important Notice</h3>
                  </div>
                  <p className="text-yellow-700">
                    Gehn Eco Services Inc. shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or use, arising out of or relating to your use of our services.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-secondary-900 mb-6">9. Disclaimers</h2>
                <p className="text-secondary-600 mb-4">
                  Our services are provided "as is" and "as available" without warranties of any kind. We do not guarantee:
                </p>
                <ul className="list-disc list-inside text-secondary-600 mb-8 space-y-2">
                  <li>Uninterrupted or error-free service</li>
                  <li>Immediate response to all inquiries</li>
                  <li>Availability of all features at all times</li>
                  <li>Compatibility with all devices or browsers</li>
                  <li>Accuracy of all information provided</li>
                </ul>

                <h2 className="text-2xl font-bold text-secondary-900 mb-6">10. Indemnification</h2>
                <p className="text-secondary-600 mb-8">
                  You agree to indemnify and hold harmless Gehn Eco Services Inc., its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of our services or violation of these terms.
                </p>

                <h2 className="text-2xl font-bold text-secondary-900 mb-6">11. Termination</h2>
                <p className="text-secondary-600 mb-8">
                  We may terminate or suspend your access to our services at any time, with or without cause, with or without notice. Upon termination, your right to use our services will cease immediately.
                </p>

                <h2 className="text-2xl font-bold text-secondary-900 mb-6">12. Governing Law</h2>
                <p className="text-secondary-600 mb-8">
                  These terms shall be governed by and construed in accordance with the laws of Nigeria. Any disputes arising from these terms shall be resolved in the courts of Lagos, Nigeria.
                </p>

                <h2 className="text-2xl font-bold text-secondary-900 mb-6">13. Changes to Terms</h2>
                <p className="text-secondary-600 mb-8">
                  We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new terms on our website. Your continued use of our services after such changes constitutes acceptance of the new terms.
                </p>

                <h2 className="text-2xl font-bold text-secondary-900 mb-6">14. Severability</h2>
                <p className="text-secondary-600 mb-8">
                  If any provision of these terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these terms will otherwise remain in full force and effect.
                </p>

                <h2 className="text-2xl font-bold text-secondary-900 mb-6">15. Contact Information</h2>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <p className="text-blue-800 mb-4">
                    If you have any questions about these terms of service, please contact us:
                  </p>
                  <div className="space-y-2 text-blue-700">
                    <p><strong>Email:</strong> legal@gehnecservices.com</p>
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