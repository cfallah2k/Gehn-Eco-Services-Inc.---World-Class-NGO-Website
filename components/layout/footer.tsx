'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  Heart
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Mission', href: '/about#mission' },
    { name: 'Leadership Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'News & Updates', href: '/news' },
  ],
  services: [
    { name: 'Waste Management', href: '/services/waste-management' },
    { name: 'Environmental Consultancy', href: '/services/environmental-consultancy' },
    { name: 'Sanitation Solutions', href: '/services/sanitation' },
    { name: 'Livelihood Programs', href: '/services/livelihood' },
    { name: 'Training & Capacity Building', href: '/services/training' },
  ],
  impact: [
    { name: 'Our Impact', href: '/impact' },
    { name: 'Success Stories', href: '/impact#stories' },
    { name: 'Annual Reports', href: '/reports' },
    { name: 'Donate', href: '/donate' },
    { name: 'Volunteer', href: '/volunteer' },
  ],
  resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'Publications', href: '/publications' },
    { name: 'Research', href: '/research' },
    { name: 'Events', href: '/events' },
    { name: 'Contact Us', href: '/contact' },
  ],
}

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'YouTube', href: '#', icon: Youtube },
]

export function Footer() {
  return (
    <footer className="bg-secondary-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 xl:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-lg">GES</span>
              </div>
              <div>
                <div className="font-display font-bold text-lg sm:text-xl">Gehn Eco Services</div>
                <div className="text-xs sm:text-sm text-secondary-400">Inc.</div>
              </div>
            </div>
            <p className="text-secondary-300 mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
              Women-led social enterprise transforming environmental health through innovative 
              waste management, consultancy services, and sustainable livelihood opportunities.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-primary-400 flex-shrink-0" />
                <span className="text-secondary-300 text-sm sm:text-base">+234 803 123 4567</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-primary-400 flex-shrink-0" />
                <span className="text-secondary-300 text-sm sm:text-base">info@gehnecservices.com</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-primary-400 flex-shrink-0" />
                <span className="text-secondary-300 text-sm sm:text-base">Lagos, Nigeria</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-secondary-800 rounded-lg flex items-center justify-center text-secondary-400 hover:text-primary-400 hover:bg-secondary-700 transition-colors"
                >
                  <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Company</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-secondary-300 hover:text-primary-400 transition-colors text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-secondary-300 hover:text-primary-400 transition-colors text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Impact</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.impact.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-secondary-300 hover:text-primary-400 transition-colors text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Resources</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-secondary-300 hover:text-primary-400 transition-colors text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-secondary-800 py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-secondary-300 text-sm sm:text-base">
                Subscribe to our newsletter for the latest updates on environmental initiatives, 
                success stories, and opportunities to get involved.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-secondary-800 border border-secondary-700 rounded-lg text-white placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm sm:text-base"
              />
              <Button asChild className="w-full sm:w-auto">
                <Link href="/newsletter" className="flex items-center justify-center">
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-800 py-4 sm:py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <div className="flex items-center space-x-2 text-secondary-400 text-xs sm:text-sm">
              <span>© 2024 Gehn Eco Services Inc. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Made with</span>
              <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-red-500" />
              <span className="hidden sm:inline">for the environment</span>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6 text-xs sm:text-sm">
              <Link href="/privacy" className="text-secondary-400 hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-secondary-400 hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-secondary-400 hover:text-primary-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 