import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - Gehn Eco Services Inc.',
  description: 'Read the terms and conditions governing the use of Gehn Eco Services Inc. website and services.',
  keywords: ['terms of service', 'terms and conditions', 'legal', 'environmental services', 'user agreement'],
}

export default function TermsOfService() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
            <p className="text-blue-800">
              <strong>Last updated:</strong> January 2024
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing and using the website and services of Gehn Eco Services Inc. ("we," "our," or "us"), 
              you accept and agree to be bound by the terms and provision of this agreement. If you do not 
              agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
            <p className="text-gray-600 mb-4">
              Gehn Eco Services Inc. provides environmental services including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Waste management and recycling solutions</li>
              <li>Environmental consultancy and assessment</li>
              <li>Sanitation and hygiene programs</li>
              <li>Livelihood and capacity building programs</li>
              <li>Training and educational services</li>
              <li>Impact assessment and reporting</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>
            <p className="text-gray-600 mb-4">
              As a user of our services, you agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Use our services for lawful purposes only</li>
              <li>Respect intellectual property rights</li>
              <li>Not interfere with the proper functioning of our services</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Intellectual Property</h2>
            <p className="text-gray-600 mb-4">
              The content on this website, including but not limited to text, graphics, images, logos, 
              and software, is the property of Gehn Eco Services Inc. and is protected by copyright laws. 
              You may not reproduce, distribute, or create derivative works without our express written consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Privacy Policy</h2>
            <p className="text-gray-600 mb-4">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your 
              use of our services, to understand our practices regarding the collection and use of your 
              personal information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Service Availability</h2>
            <p className="text-gray-600 mb-4">
              We strive to provide reliable and uninterrupted services. However, we do not guarantee that 
              our services will be available at all times. We may temporarily suspend or discontinue 
              services for maintenance, updates, or other reasons.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-600 mb-4">
              To the maximum extent permitted by law, Gehn Eco Services Inc. shall not be liable for any 
              indirect, incidental, special, consequential, or punitive damages, including but not limited 
              to loss of profits, data, or use, arising out of or relating to your use of our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Indemnification</h2>
            <p className="text-gray-600 mb-4">
              You agree to indemnify and hold harmless Gehn Eco Services Inc. and its officers, directors, 
              employees, and agents from any claims, damages, losses, or expenses arising out of your 
              use of our services or violation of these terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Donations and Payments</h2>
            <p className="text-gray-600 mb-4">
              When making donations or payments through our website:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>All donations are voluntary and non-refundable</li>
              <li>We use secure payment processors to handle transactions</li>
              <li>You agree to provide accurate payment information</li>
              <li>We reserve the right to refuse or cancel donations</li>
              <li>Tax receipts will be provided as required by law</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Environmental Services</h2>
            <p className="text-gray-600 mb-4">
              Our environmental services are provided "as is" and "as available." We make reasonable 
              efforts to ensure the quality and effectiveness of our services, but we do not guarantee 
              specific outcomes or results.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Third-Party Links</h2>
            <p className="text-gray-600 mb-4">
              Our website may contain links to third-party websites. We are not responsible for the 
              content, privacy policies, or practices of these external sites. Your use of third-party 
              sites is at your own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Termination</h2>
            <p className="text-gray-600 mb-4">
              We may terminate or suspend your access to our services at any time, with or without 
              cause, with or without notice. Upon termination, your right to use our services will 
              cease immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Governing Law</h2>
            <p className="text-gray-600 mb-4">
              These terms shall be governed by and construed in accordance with the laws of Nigeria. 
              Any disputes arising from these terms shall be subject to the exclusive jurisdiction 
              of the courts in Lagos, Nigeria.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Changes to Terms</h2>
            <p className="text-gray-600 mb-4">
              We reserve the right to modify these terms at any time. We will notify users of any 
              material changes by posting the updated terms on our website. Your continued use of 
              our services after such changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Contact Information</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> legal@gehnecservices.com
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Phone:</strong> +234 803 123 4567
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong> 123 Environmental Street, Victoria Island, Lagos, Nigeria
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
} 