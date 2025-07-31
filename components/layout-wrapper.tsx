'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { LoadingScreen } from '@/components/loading-screen'

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(true)
  
  // Check if current path is admin login
  const isAdminLogin = pathname === '/admin/login'
  
  useEffect(() => {
    // Show loading screen for 10 seconds on first visit
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  // Don't show loading screen for admin login
  if (isAdminLogin) {
    return <>{children}</>
  }

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />
  }
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-32 sm:pt-36 md:pt-40">
        {children}
      </main>
      <Footer />
    </div>
  )
} 