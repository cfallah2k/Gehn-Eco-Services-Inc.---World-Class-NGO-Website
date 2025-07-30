import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Analytics } from '@/components/analytics'

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
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
} 