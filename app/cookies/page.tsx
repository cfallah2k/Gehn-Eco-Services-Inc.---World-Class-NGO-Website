import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy - Gehn Eco Services Inc.',
  description: 'Learn about how Gehn Eco Services Inc. uses cookies and similar technologies on our website.',
  keywords: ['cookie policy', 'cookies', 'tracking', 'privacy', 'website analytics'],
}

export default function CookiePolicy() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
            <p className="text-blue-800">
              <strong>Last updated:</strong> January 2024
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. What Are Cookies?</h2>
            <p className="text-gray-600 mb-4">
              Cookies are small text files that are placed on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences, 
              analyzing how you use our site, and personalizing content.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Cookies</h2>
            <p className="text-gray-600 mb-4">
              We use cookies for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Essential cookies for website functionality</li>
              <li>Analytics cookies to understand website usage</li>
              <li>Preference cookies to remember your settings</li>
              <li>Marketing cookies to provide relevant content</li>
              <li>Security cookies to protect against fraud</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
            
            <h3 className="text-xl font-medium text-gray-900 mb-3">3.1 Essential Cookies</h3>
            <p className="text-gray-600 mb-4">
              These cookies are necessary for the website to function properly. They enable basic 
              functions like page navigation, access to secure areas, and form submissions. The 
              website cannot function properly without these cookies.
            </p>

            <h3 className="text-xl font-medium text-gray-900 mb-3">3.2 Analytics Cookies</h3>
            <p className="text-gray-600 mb-4">
              We use Google Analytics to understand how visitors interact with our website. These 
              cookies help us improve our website by collecting information about:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Pages visited and time spent on each page</li>
              <li>Traffic sources and referral information</li>
              <li>Device and browser information</li>
              <li>Geographic location data</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mb-3">3.3 Preference Cookies</h3>
            <p className="text-gray-600 mb-4">
              These cookies allow our website to remember choices you make (such as your username, 
              language, or region) and provide enhanced, more personal features.
            </p>

            <h3 className="text-xl font-medium text-gray-900 mb-3">3.4 Marketing Cookies</h3>
            <p className="text-gray-600 mb-4">
              These cookies are used to track visitors across websites to display relevant and 
              engaging advertisements for our environmental services and programs.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Third-Party Cookies</h2>
            <p className="text-gray-600 mb-4">
              We may use third-party services that place cookies on your device:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li><strong>Google Analytics:</strong> For website analytics and performance tracking</li>
              <li><strong>Social Media Platforms:</strong> For social sharing and engagement features</li>
              <li><strong>Payment Processors:</strong> For secure donation and payment processing</li>
              <li><strong>Email Marketing:</strong> For newsletter and communication tracking</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Cookie Management</h2>
            <p className="text-gray-600 mb-4">
              You can control and manage cookies in several ways:
            </p>
            
            <h3 className="text-xl font-medium text-gray-900 mb-3">5.1 Browser Settings</h3>
            <p className="text-gray-600 mb-4">
              Most web browsers allow you to control cookies through their settings. You can:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Block all cookies</li>
              <li>Allow cookies from specific websites</li>
              <li>Delete existing cookies</li>
              <li>Set preferences for different types of cookies</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mb-3">5.2 Cookie Consent</h3>
            <p className="text-gray-600 mb-4">
              When you first visit our website, you'll see a cookie consent banner. You can:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Accept all cookies</li>
              <li>Reject non-essential cookies</li>
              <li>Customize your cookie preferences</li>
              <li>Change your preferences at any time</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Specific Cookies We Use</h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left">Cookie Name</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Purpose</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">_ga</td>
                    <td className="border border-gray-300 px-4 py-2">Google Analytics tracking</td>
                    <td className="border border-gray-300 px-4 py-2">2 years</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">_gid</td>
                    <td className="border border-gray-300 px-4 py-2">Google Analytics session tracking</td>
                    <td className="border border-gray-300 px-4 py-2">24 hours</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">cookie_consent</td>
                    <td className="border border-gray-300 px-4 py-2">Remember cookie preferences</td>
                    <td className="border border-gray-300 px-4 py-2">1 year</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">session_id</td>
                    <td className="border border-gray-300 px-4 py-2">Maintain user session</td>
                    <td className="border border-gray-300 px-4 py-2">Session</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Impact of Disabling Cookies</h2>
            <p className="text-gray-600 mb-4">
              If you choose to disable cookies, some features of our website may not function properly:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Personalized content and recommendations</li>
              <li>Remembered preferences and settings</li>
              <li>Analytics and performance tracking</li>
              <li>Social media integration features</li>
              <li>Some donation and payment features</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Updates to This Policy</h2>
            <p className="text-gray-600 mb-4">
              We may update this Cookie Policy from time to time to reflect changes in our practices 
              or for other operational, legal, or regulatory reasons. We will notify you of any 
              material changes by posting the updated policy on our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> privacy@gehnecservices.com
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