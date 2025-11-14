import type { Metadata } from 'next'
import { motion } from 'framer-motion'
import { 
  FileText, 
  Download, 
  Calendar,
  TrendingUp,
  Users,
  Award,
  Globe,
  CheckCircle,
  ExternalLink
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Annual Reports & Publications - Gehn Eco Services Inc.',
  description: 'Access our annual reports, impact assessments, and publications documenting our environmental initiatives and community impact.',
  keywords: ['reports', 'annual report', 'impact assessment', 'publications', 'sustainability'],
}

const annualReports = [
  {
    year: '2024',
    title: 'Annual Impact Report 2024',
    description: 'Comprehensive overview of our environmental initiatives, community impact, and achievements throughout 2024.',
    downloads: '2,500+',
    pages: 45,
    highlights: [
      '50+ communities reached',
      '10,000+ beneficiaries',
      '500+ tons of waste managed',
      '25+ partnerships formed'
    ],
    featured: true,
  },
  {
    year: '2023',
    title: 'Annual Impact Report 2023',
    description: 'Documenting our journey of environmental transformation and community empowerment in 2023.',
    downloads: '1,800+',
    pages: 42,
    highlights: [
      '40+ communities reached',
      '8,000+ beneficiaries',
      '400+ tons of waste managed',
      '20+ partnerships formed'
    ],
  },
  {
    year: '2022',
    title: 'Annual Impact Report 2022',
    description: 'Our foundational year report showcasing initial impact and establishing our presence in environmental sustainability.',
    downloads: '1,200+',
    pages: 38,
    highlights: [
      '30+ communities reached',
      '5,000+ beneficiaries',
      '300+ tons of waste managed',
      '15+ partnerships formed'
    ],
  },
]

const impactReports = [
  {
    title: 'Waste Management Impact Assessment 2024',
    type: 'Impact Assessment',
    date: 'March 2024',
    description: 'Detailed analysis of waste management programs and their environmental impact across 20 communities.',
    downloads: '850+',
  },
  {
    title: 'Community Empowerment Program Evaluation',
    type: 'Program Evaluation',
    date: 'June 2024',
    description: 'Comprehensive evaluation of livelihood programs and their socio-economic impact on beneficiaries.',
    downloads: '720+',
  },
  {
    title: 'Environmental Health Survey Results',
    type: 'Research Report',
    date: 'September 2024',
    description: 'Survey findings on environmental health improvements in communities we serve.',
    downloads: '950+',
  },
]

const stats = [
  {
    icon: FileText,
    value: '15+',
    label: 'Annual Reports',
    description: 'Years of documented impact'
  },
  {
    icon: Download,
    value: '10K+',
    label: 'Total Downloads',
    description: 'Reports accessed globally'
  },
  {
    icon: Globe,
    value: '50+',
    label: 'Countries',
    description: 'Reading our reports'
  },
  {
    icon: Award,
    value: '100%',
    label: 'Transparency',
    description: 'Open access to all reports'
  },
]

export default function ReportsPage() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6"
            >
              <FileText className="w-4 h-4 mr-2" />
              Transparency & Accountability
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-secondary-900 mb-6"
            >
              Annual{' '}
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                Reports & Publications
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8"
            >
              Access our comprehensive reports documenting our environmental impact, 
              community initiatives, and progress towards sustainable development goals.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-12 w-12 text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-secondary-900 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-secondary-700 mb-2">{stat.label}</div>
                <div className="text-sm text-secondary-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Reports */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Annual Impact Reports
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Comprehensive documentation of our yearly achievements and impact
            </p>
          </div>

          <div className="space-y-8">
            {annualReports.map((report, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`bg-white rounded-2xl p-8 shadow-lg border-2 ${
                  report.featured ? 'border-primary-200 bg-gradient-to-br from-primary-50 to-white' : 'border-gray-100'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="px-4 py-2 bg-primary-100 text-primary-700 rounded-lg font-semibold">
                        {report.year}
                      </div>
                      {report.featured && (
                        <span className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-medium">
                          Latest Report
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-semibold text-secondary-900 mb-3">
                      {report.title}
                    </h3>
                    
                    <p className="text-secondary-600 mb-6">{report.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      {report.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-secondary-700">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-secondary-600">
                      <div className="flex items-center space-x-2">
                        <Download className="w-4 h-4" />
                        <span>{report.downloads} downloads</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FileText className="w-4 h-4" />
                        <span>{report.pages} pages</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                    <Button size="lg" className="w-full sm:w-auto lg:w-full" asChild>
                      <Link href="/contact">
                        <Download className="w-5 h-5 mr-2" />
                        Download PDF
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="w-full sm:w-auto lg:w-full" asChild>
                      <Link href="/contact">
                        <ExternalLink className="w-5 h-5 mr-2" />
                        View Online
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Reports */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Impact Assessments & Evaluations
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Detailed reports on specific programs and initiatives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactReports.map((report, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                    {report.type}
                  </span>
                  <div className="flex items-center text-sm text-secondary-600">
                    <Calendar className="w-4 h-4 mr-1" />
                    {report.date}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                  {report.title}
                </h3>

                <p className="text-secondary-600 mb-6">{report.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-secondary-600">
                    <Download className="w-4 h-4 mr-1" />
                    {report.downloads}
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/contact">Download</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Report Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Need a Specific Report?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Can't find what you're looking for? Contact us and we'll help you access 
              the information you need.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Request Report</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

