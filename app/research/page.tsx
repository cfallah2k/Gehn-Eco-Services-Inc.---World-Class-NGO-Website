'use client'

import { motion } from 'framer-motion'
import { 
  BookOpen, 
  Users, 
  Award,
  CheckCircle,
  TrendingUp,
  Zap,
  Leaf,
  Target,
  Globe,
  FileText,
  Microscope,
  Lightbulb
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import CountUp from 'react-countup'

const researchAreas = [
  {
    icon: Leaf,
    title: "Environmental Science",
    description: "Cutting-edge research in environmental sustainability and climate change",
    topics: ["Climate adaptation", "Biodiversity conservation", "Ecosystem restoration", "Environmental modeling"]
  },
  {
    icon: Users,
    title: "Social Impact Research",
    description: "Comprehensive studies on community development and social transformation",
    topics: ["Community resilience", "Social innovation", "Poverty alleviation", "Gender equality"]
  },
  {
    icon: Zap,
    title: "Technology & Innovation",
    description: "Research on emerging technologies for environmental solutions",
    topics: ["Clean energy", "Smart cities", "Digital transformation", "Circular economy"]
  },
  {
    icon: Target,
    title: "Policy & Governance",
    description: "Research informing environmental policy and governance frameworks",
    topics: ["Policy analysis", "Regulatory frameworks", "International cooperation", "Sustainable development"]
  }
]

const impactStats = [
  {
    icon: BookOpen,
    value: 500,
    suffix: '+',
    label: 'Research Papers',
    description: 'Published in peer-reviewed journals'
  },
  {
    icon: Users,
    value: 100,
    suffix: '+',
    label: 'Research Partners',
    description: 'Universities and institutions worldwide'
  },
  {
    icon: Globe,
    value: 50,
    suffix: '+',
    label: 'Countries Involved',
    description: 'Global research network'
  },
  {
    icon: Award,
    value: 25,
    suffix: '+',
    label: 'Research Awards',
    description: 'International recognition'
  }
]

const publications = [
  {
    title: "Global Environmental Sustainability: A Comprehensive Analysis",
    authors: "Dr. Sarah Johnson, Dr. Michael Chen, Dr. Amina Hassan",
    journal: "Nature Sustainability",
    year: "2024",
    impact: "High-impact research on global sustainability challenges",
    description: "Comprehensive analysis of environmental sustainability across 50+ countries, providing data-driven insights for global policy development."
  },
  {
    title: "Circular Economy Implementation in Developing Nations",
    authors: "Dr. David Okafor, Dr. Lisa Wang, Dr. Carlos Rodriguez",
    journal: "Science Advances",
    year: "2023",
    impact: "Breakthrough research on circular economy",
    description: "Innovative study on implementing circular economy principles in developing nations, with practical applications for waste management."
  },
  {
    title: "Climate Change Adaptation Strategies for African Communities",
    authors: "Dr. Fatima Ndiaye, Dr. James Thompson, Dr. Maria Santos",
    journal: "Global Environmental Change",
    year: "2023",
    impact: "Policy-influencing research on climate adaptation",
    description: "Comprehensive study on climate change adaptation strategies, directly influencing policy decisions across 25 African countries."
  }
]

const researchProjects = [
  {
    title: "UN Sustainable Development Goals Research Initiative",
    location: "Global",
    funding: "$10M+",
    duration: "2022-2025",
    description: "Comprehensive research program supporting all 17 UN SDGs with data-driven insights for global implementation.",
    outcomes: ["17 SDGs analyzed", "Global policy influence", "100+ research papers", "International partnerships"]
  },
  {
    title: "African Environmental Innovation Hub",
    location: "Pan-African",
    funding: "$5M+",
    duration: "2023-2026",
    description: "Research hub fostering environmental innovation across Africa, connecting researchers, policymakers, and communities.",
    outcomes: ["Innovation ecosystem", "Policy development", "Community engagement", "Technology transfer"]
  }
]

const collaborations = [
  "United Nations Environment Programme (UNEP)",
  "World Bank Research Group",
  "MIT Environmental Research Lab",
  "Stanford Sustainability Institute",
  "Oxford Environmental Change Institute",
  "Harvard Kennedy School",
  "African Union Research Commission",
  "European Environment Agency",
  "Intergovernmental Panel on Climate Change (IPCC)",
  "International Union for Conservation of Nature (IUCN)"
]

export default function ResearchPage() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
              Research & Innovation
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-secondary-900 mb-6"
            >
              Advancing{' '}
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                Knowledge
              </span>
              <br />
              For Global Impact
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8"
            >
              Leading environmental research across 50+ countries with 500+ publications, 
              driving innovation and informing global policy for sustainable development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" asChild>
                <Link href="/contact">Collaborate With Us</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#research">Our Research</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
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

      {/* Research Areas */}
      <section id="research" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Research Areas
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Comprehensive research across environmental science, social impact, 
              technology innovation, and policy development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <area.icon className="h-12 w-12 text-primary-600 mr-4" />
                  <h3 className="text-2xl font-semibold text-secondary-900">{area.title}</h3>
                </div>
                
                <p className="text-secondary-600 mb-6">{area.description}</p>
                
                <div className="space-y-3">
                  {area.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-secondary-700">{topic}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Key Publications
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
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <FileText className="h-5 w-5 text-blue-500" />
                    <span className="text-sm font-medium text-secondary-600">{publication.journal}</span>
                  </div>
                  <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    {publication.year}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">{publication.title}</h3>
                <p className="text-sm text-secondary-600 mb-3">By {publication.authors}</p>
                <p className="text-secondary-600 mb-4">{publication.description}</p>
                <div className="text-sm text-primary-600 font-medium">{publication.impact}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Projects */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Major Research Projects
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Large-scale research initiatives with global impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {researchProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Microscope className="h-5 w-5 text-purple-500" />
                    <span className="text-sm font-medium text-secondary-600">{project.location}</span>
                  </div>
                  <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    {project.funding}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">{project.title}</h3>
                <p className="text-secondary-600 mb-4">{project.description}</p>
                <div className="text-sm text-secondary-600 mb-4">Duration: {project.duration}</div>
                
                <div className="space-y-2">
                  {project.outcomes.map((outcome, outcomeIndex) => (
                    <div key={outcomeIndex} className="flex items-center space-x-2">
                      <TrendingUp className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-secondary-700">{outcome}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborations */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Research Collaborations
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Partnering with leading institutions worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collaborations.map((collaboration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg"
              >
                <Lightbulb className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                <span className="text-secondary-700">{collaboration}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Join Our Research Network
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Collaborate with us on groundbreaking environmental research. 
              Let's advance knowledge together for a sustainable future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Collaborate With Us</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary-600">
                <Link href="/publications">View Publications</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
