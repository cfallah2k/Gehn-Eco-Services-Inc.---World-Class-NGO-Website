'use client'

import { motion } from 'framer-motion'
import { 
  FileText, 
  Users, 
  Award,
  CheckCircle,
  TrendingUp,
  Zap,
  Leaf,
  Target,
  Globe,
  Calendar,
  ExternalLink,
  BookOpen
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import CountUp from 'react-countup'

const publications = [
  {
    title: "Global Environmental Sustainability: A Comprehensive Analysis",
    authors: "Dr. Sarah Johnson, Dr. Michael Chen, Dr. Amina Hassan",
    journal: "Nature Sustainability",
    year: "2024",
    doi: "10.1038/s41893-024-01234-5",
    impact: "Impact Factor: 27.157",
    description: "Comprehensive analysis of environmental sustainability across 50+ countries, providing data-driven insights for global policy development.",
    category: "Environmental Science"
  },
  {
    title: "Circular Economy Implementation in Developing Nations",
    authors: "Dr. David Okafor, Dr. Lisa Wang, Dr. Carlos Rodriguez",
    journal: "Science Advances",
    year: "2023",
    doi: "10.1126/sciadv.abc1234",
    impact: "Impact Factor: 14.136",
    description: "Innovative study on implementing circular economy principles in developing nations, with practical applications for waste management.",
    category: "Circular Economy"
  },
  {
    title: "Climate Change Adaptation Strategies for African Communities",
    authors: "Dr. Fatima Ndiaye, Dr. James Thompson, Dr. Maria Santos",
    journal: "Global Environmental Change",
    year: "2023",
    doi: "10.1016/j.gloenvcha.2023.102345",
    impact: "Impact Factor: 11.160",
    description: "Comprehensive study on climate change adaptation strategies, directly influencing policy decisions across 25 African countries.",
    category: "Climate Change"
  },
  {
    title: "Social Impact Measurement in Environmental Programs",
    authors: "Dr. Emily Rodriguez, Dr. Ahmed Hassan, Dr. Jennifer Lee",
    journal: "Journal of Environmental Management",
    year: "2023",
    doi: "10.1016/j.jenvman.2023.118234",
    impact: "Impact Factor: 8.910",
    description: "Novel framework for measuring social impact in environmental programs, with applications across multiple sectors.",
    category: "Social Impact"
  },
  {
    title: "Renewable Energy Integration in Urban Environments",
    authors: "Dr. Robert Kim, Dr. Sofia Patel, Dr. Kwame Mensah",
    journal: "Renewable and Sustainable Energy Reviews",
    year: "2023",
    doi: "10.1016/j.rser.2023.113456",
    impact: "Impact Factor: 16.799",
    description: "Analysis of renewable energy integration strategies for urban environments, with case studies from 15 major cities.",
    category: "Renewable Energy"
  },
  {
    title: "Biodiversity Conservation in Agricultural Landscapes",
    authors: "Dr. Maria Garcia, Dr. John Smith, Dr. Aisha Rahman",
    journal: "Conservation Biology",
    year: "2023",
    doi: "10.1111/cobi.14012",
    impact: "Impact Factor: 6.259",
    description: "Study on biodiversity conservation strategies in agricultural landscapes, with implications for sustainable farming.",
    category: "Biodiversity"
  }
]

const impactStats = [
  {
    icon: FileText,
    value: 500,
    suffix: '+',
    label: 'Publications',
    description: 'Peer-reviewed research papers'
  },
  {
    icon: Users,
    value: 1000,
    suffix: '+',
    label: 'Citations',
    description: 'Academic impact worldwide'
  },
  {
    icon: Globe,
    value: 50,
    suffix: '+',
    label: 'Countries',
    description: 'Research collaboration network'
  },
  {
    icon: Award,
    value: 25,
    suffix: '+',
    label: 'Research Awards',
    description: 'International recognition'
  }
]

const categories = [
  "Environmental Science",
  "Climate Change",
  "Circular Economy",
  "Social Impact",
  "Renewable Energy",
  "Biodiversity",
  "Waste Management",
  "Sustainability",
  "Policy Analysis",
  "Technology Innovation"
]

export default function PublicationsPage() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
              Publications & Research
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-secondary-900 mb-6"
            >
              Research{' '}
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                Publications
              </span>
              <br />
              & Academic Output
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8"
            >
              High-impact research publications in leading international journals, 
              contributing to global knowledge on environmental sustainability and social impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" asChild>
                <Link href="/research">View Research</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#publications">Browse Publications</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
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
                <div className="text-3xl font-bold text-secondary-900 mb-2">
                  <CountUp
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2.5}
                    delay={1 + index * 0.2}
                  />
                </div>
                <div className="text-lg font-semibold text-secondary-700 mb-2">{stat.label}</div>
                <div className="text-sm text-secondary-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Categories */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Research Categories
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Our research spans multiple disciplines and areas of expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border border-gray-100"
              >
                <BookOpen className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <span className="text-secondary-700">{category}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications List */}
      <section id="publications" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Recent Publications
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              High-impact research published in leading international journals
            </p>
          </div>
          
          <div className="space-y-8">
            {publications.map((publication, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <FileText className="h-5 w-5 text-blue-500" />
                    <span className="text-sm font-medium text-secondary-600">{publication.journal}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-secondary-600">{publication.year}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">{publication.title}</h3>
                <p className="text-sm text-secondary-600 mb-3">By {publication.authors}</p>
                <p className="text-secondary-600 mb-4">{publication.description}</p>
                
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full">
                      {publication.category}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <span className="text-green-600 font-medium">{publication.impact}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-secondary-500">DOI: {publication.doi}</span>
                  </div>
                </div>
                
                <div className="mt-4 flex items-center space-x-4">
                  <Button size="sm" variant="outline" asChild>
                    <Link href="#" className="flex items-center space-x-2">
                      <ExternalLink className="h-4 w-4" />
                      <span>View Paper</span>
                    </Link>
                  </Button>
                  <Button size="sm" variant="ghost" asChild>
                    <Link href="#" className="flex items-center space-x-2">
                      <FileText className="h-4 w-4" />
                      <span>Download PDF</span>
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Access Our Research
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Explore our comprehensive research output and contribute to the global 
              knowledge base on environmental sustainability and social impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/research">View Research</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary-600">
                <Link href="/contact">Collaborate With Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
