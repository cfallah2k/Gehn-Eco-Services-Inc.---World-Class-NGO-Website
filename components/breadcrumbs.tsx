'use client'

import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { usePathname } from 'next/navigation'

export function Breadcrumbs() {
  const pathname = usePathname()
  
  if (pathname === '/') return null

  const pathSegments = pathname.split('/').filter(Boolean)
  
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    ...pathSegments.map((segment, index) => {
      const href = '/' + pathSegments.slice(0, index + 1).join('/')
      const name = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
      return { name, href }
    }),
  ]

  return (
    <nav className="bg-gray-50 border-b border-gray-200 py-3" aria-label="Breadcrumb">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1
            return (
              <li key={crumb.href} className="flex items-center">
                {index === 0 ? (
                  <Link
                    href={crumb.href}
                    className="text-secondary-600 hover:text-primary-600 transition-colors"
                  >
                    <Home className="h-4 w-4" />
                  </Link>
                ) : (
                  <>
                    <ChevronRight className="h-4 w-4 text-secondary-400 mx-2" />
                    {isLast ? (
                      <span className="text-secondary-900 font-medium" aria-current="page">
                        {crumb.name}
                      </span>
                    ) : (
                      <Link
                        href={crumb.href}
                        className="text-secondary-600 hover:text-primary-600 transition-colors"
                      >
                        {crumb.name}
                      </Link>
                    )}
                  </>
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </nav>
  )
}

