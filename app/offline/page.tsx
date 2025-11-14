import { WifiOff, Home, RefreshCw } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function OfflinePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <WifiOff className="w-24 h-24 mx-auto text-primary-600 mb-4" />
          <h1 className="text-4xl font-bold text-secondary-900 mb-4">
            You're Offline
          </h1>
          <p className="text-xl text-secondary-600 mb-2">
            It looks like you've lost your internet connection.
          </p>
          <p className="text-secondary-500">
            Don't worry! Some content is still available offline.
          </p>
        </div>

        <div className="space-y-4">
          <Button
            size="lg"
            onClick={() => window.location.reload()}
            className="w-full"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Try Again
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            asChild
            className="w-full"
          >
            <Link href="/">
              <Home className="w-5 h-5 mr-2" />
              Go to Homepage
            </Link>
          </Button>
        </div>

        <div className="mt-8 p-4 bg-white rounded-lg shadow-sm">
          <p className="text-sm text-secondary-600">
            <strong>Available Offline:</strong> Homepage, About, Services, Contact, and cached resources
          </p>
        </div>
      </div>
    </div>
  )
}

