'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      // Show after a short delay
      setTimeout(() => setIsVisible(true), 2000)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start space-x-4 flex-1">
                <div className="flex-shrink-0">
                  <Cookie className="h-6 w-6 text-primary-600 mt-1" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-secondary-900 mb-1">
                    Cookie Consent
                  </h3>
                  <p className="text-sm text-secondary-600">
                    We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
                    By clicking "Accept All", you consent to our use of cookies.{' '}
                    <Link href="/cookies" className="text-primary-600 hover:underline">
                      Learn more
                    </Link>
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 w-full sm:w-auto">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={declineCookies}
                  className="flex-1 sm:flex-none"
                >
                  Decline
                </Button>
                <Button
                  size="sm"
                  onClick={acceptCookies}
                  className="flex-1 sm:flex-none"
                >
                  Accept All
                </Button>
                <button
                  onClick={declineCookies}
                  className="p-1 hover:bg-gray-100 rounded"
                  aria-label="Close"
                >
                  <X className="h-5 w-5 text-secondary-600" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

