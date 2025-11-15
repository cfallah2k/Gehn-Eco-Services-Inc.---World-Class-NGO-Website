'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Globe, Phone, Mail, Shield, Heart, UserPlus, type LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'

// Main navigation items (always visible)
const mainNavigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Impact', href: '/impact' },
  { name: 'Contact', href: '/contact' },
]

// Services dropdown items
const services = [
  { name: 'All Services', href: '/services' },
  { name: 'Waste Management', href: '/services/waste-management' },
  { name: 'Environmental Consultancy', href: '/services/environmental-consultancy' },
  { name: 'Sanitation Solutions', href: '/services/sanitation' },
  { name: 'Livelihood Programs', href: '/services/livelihood' },
  { name: 'Training & Capacity Building', href: '/services/training' },
  { name: 'Impact Assessment', href: '/services/impact-assessment' },
]

// More dropdown items (secondary navigation)
const moreItems = [
  { name: 'Research', href: '/research' },
  { name: 'Publications', href: '/publications' },
  { name: 'Events', href: '/events' },
  { name: 'Resources', href: '/resources' },
  { name: 'Partnerships', href: '/partnerships' },
  { name: 'Careers', href: '/careers' },
  { name: 'Media', href: '/media' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Blog', href: '/blog' },
  { name: 'Team', href: '/team' },
  { name: 'News', href: '/news' },
]

// Actions dropdown items
const actionItems = [
  { name: 'Donate', href: '/donate', icon: Heart },
  { name: 'Volunteer', href: '/volunteer', icon: UserPlus },
  { name: 'Admin Portal', href: '/admin/login', icon: Shield },
]

// Dropdown component
function Dropdown({ label, items, pathname }: { label: string; items: Array<{ name: string; href: string; icon?: LucideIcon }>; pathname: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const isActive = items.some(item => pathname === item.href)

  const isActionsDropdown = label === 'Actions'

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-1 text-sm font-medium transition-colors ${
          isActionsDropdown
            ? 'px-3 py-1.5 rounded-md border border-gray-300 bg-white hover:bg-gray-50 text-secondary-700'
            : isActive
            ? 'text-primary-600'
            : 'text-secondary-700 hover:text-primary-600'
        }`}
      >
        <span>{label}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-10"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-20"
            >
              {items.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-2 px-4 py-2 text-sm transition-colors ${
                      pathname === item.href
                        ? 'bg-primary-50 text-primary-600'
                        : 'text-secondary-700 hover:bg-gray-50 hover:text-primary-600'
                    }`}
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-sm'
    }`}>
      {/* Top bar - Hidden on mobile */}
      <div className="hidden sm:block bg-primary-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">+234 803 123 4567</span>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@gehnecservices.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <ThemeToggle />
              <div className="flex items-center space-x-2">
                <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">EN</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-lg">GES</span>
              </div>
              <div className="hidden sm:block">
                <div className="font-display font-bold text-lg sm:text-xl text-secondary-900">
                  Gehn Eco Services
                </div>
                <div className="text-xs text-secondary-600">Inc.</div>
              </div>
              <div className="sm:hidden">
                <div className="font-display font-bold text-sm text-secondary-900">
                  GES
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {mainNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? 'text-primary-600'
                      : 'text-secondary-700 hover:text-primary-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Services Dropdown */}
              <Dropdown label="Services" items={services} pathname={pathname} />
              
              {/* More Dropdown */}
              <Dropdown label="More" items={moreItems} pathname={pathname} />
            </div>

            {/* Actions Dropdown - Desktop */}
            <div className="hidden lg:flex items-center space-x-3">
              <Button size="sm" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
              <div className="relative">
                <Dropdown label="Actions" items={actionItems} pathname={pathname} />
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-md text-secondary-700 hover:text-secondary-900 hover:bg-secondary-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-black/50 z-30"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-gray-200 shadow-lg fixed top-[73px] sm:top-[81px] left-0 right-0 z-40 max-h-[calc(100vh-73px)] sm:max-h-[calc(100vh-81px)] overflow-y-auto"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="space-y-1">
                {/* Main Navigation */}
                {mainNavigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block text-base font-medium py-3 px-3 rounded-lg transition-colors ${
                      pathname === item.href
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-secondary-700 hover:text-primary-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Services Dropdown */}
                <div className="pt-2">
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="w-full flex items-center justify-between text-base font-medium py-3 px-3 rounded-lg text-secondary-700 hover:text-primary-600 hover:bg-gray-50"
                  >
                    <span>Services</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-4"
                      >
                        {services.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={`block text-sm py-2 px-3 rounded-lg transition-colors ${
                              pathname === item.href
                                ? 'text-primary-600 bg-primary-50'
                                : 'text-secondary-600 hover:text-primary-600 hover:bg-gray-50'
                            }`}
                            onClick={() => {
                              setMobileMenuOpen(false)
                              setServicesOpen(false)
                            }}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* More Dropdown */}
                <div className="pt-2">
                  <button
                    onClick={() => setMoreOpen(!moreOpen)}
                    className="w-full flex items-center justify-between text-base font-medium py-3 px-3 rounded-lg text-secondary-700 hover:text-primary-600 hover:bg-gray-50"
                  >
                    <span>More</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${moreOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {moreOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-4"
                      >
                        {moreItems.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={`block text-sm py-2 px-3 rounded-lg transition-colors ${
                              pathname === item.href
                                ? 'text-primary-600 bg-primary-50'
                                : 'text-secondary-600 hover:text-primary-600 hover:bg-gray-50'
                            }`}
                            onClick={() => {
                              setMobileMenuOpen(false)
                              setMoreOpen(false)
                            }}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Actions */}
                <div className="pt-3 border-t border-gray-200 space-y-2">
                  <Button asChild className="w-full justify-start">
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Get Started</Link>
                  </Button>
                  {actionItems.map((item) => {
                    const Icon = item.icon
                    return (
                      <Button
                        key={item.name}
                        variant={item.name === 'Admin Portal' ? 'outline' : 'ghost'}
                        asChild
                        className="w-full justify-start"
                      >
                        <Link
                          href={item.href}
                          className="flex items-center space-x-2"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {Icon && <Icon className="w-4 h-4" />}
                          <span>{item.name}</span>
                        </Link>
                      </Button>
                    )
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
} 