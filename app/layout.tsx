import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { LayoutWrapper } from '@/components/layout-wrapper'
import { Analytics } from '@/components/analytics'
import { PWAInstall } from '@/components/pwa-install'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: {
    default: 'Gehn Eco Services Inc. - Leading Environmental & Waste Management Solutions',
    template: '%s | Gehn Eco Services Inc.'
  },
  description: 'Women-led social enterprise specializing in waste value chain, environmental consultancy, and innovative livelihood opportunities. Promoting environmental health and sanitation excellence.',
  keywords: [
    'environmental consultancy',
    'waste management',
    'social enterprise',
    'women-led business',
    'environmental health',
    'sanitation',
    'sustainability',
    'waste value chain',
    'livelihood opportunities',
    'eco services'
  ],
  authors: [{ name: 'Gehn Eco Services Inc.' }],
  creator: 'Gehn Eco Services Inc.',
  publisher: 'Gehn Eco Services Inc.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://gehnecservices.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gehnecservices.com',
    title: 'Gehn Eco Services Inc. - Leading Environmental & Waste Management Solutions',
    description: 'Women-led social enterprise specializing in waste value chain, environmental consultancy, and innovative livelihood opportunities.',
    siteName: 'Gehn Eco Services Inc.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Gehn Eco Services Inc.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gehn Eco Services Inc. - Leading Environmental & Waste Management Solutions',
    description: 'Women-led social enterprise specializing in waste value chain, environmental consultancy, and innovative livelihood opportunities.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#16a34a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="GES" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
          <Analytics />
          <PWAInstall />
        </ThemeProvider>
      </body>
    </html>
  )
} 