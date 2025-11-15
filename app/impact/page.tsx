'use client'

import { motion } from 'framer-motion'
import { 
  Users, 
  Globe, 
  Award, 
  Heart, 
  TrendingUp, 
  Leaf,
  CheckCircle,
  Star
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import CountUp from 'react-countup'

const impactStats = [
  {
    icon: Users,
    value: 1000000,
    suffix: '+',
    label: 'Lives Impacted',
    description: 'Families and individuals positively affected across Africa'
  },
  {
    icon: Globe,
    value: 500,
    suffix: '+',
    label: 'Communities Served',
    description: 'Across 25+ countries in Africa and beyond'
  },
  {
    icon: Award,
    value: 20,
    suffix: '+',
    label: 'Years of Service',
    description: 'Leading environmental solutions since 2003'
  },
  {
    icon: Heart,
    value: 100,
    suffix: '%',
    label: 'Women-Led',
    description: 'Empowering women in environmental sector'
  },
  {
    icon: TrendingUp,
    value: 500000,
    suffix: '+',
    label: 'Jobs Created',
    description: 'Sustainable employment opportunities generated'
  },
  {
    icon: Leaf,
    value: 1000000,
    suffix: '+',
    label: 'Tons of Waste Processed',
    description: 'Environmental waste converted to valuable resources'
  }
]

const successStories = [
  {
    title: "Pan-African Waste Management Initiative",
    location: "25+ African Countries",
    impact: "Processed 1M+ tons of waste across Africa",
    description: "Implemented comprehensive waste management systems across 25+ African countries, creating 500,000+ jobs and improving environmental health for millions.",
    metrics: ["1M+ tons waste processed", "500,000+ jobs created", "10M+ people served", "25+ countries reached"]
  },
  {
    title: "Global Environmental Education Program",
    location: "Worldwide Impact",
    impact: "Trained 100,000+ environmental advocates",
    description: "Launched educational programs in partnership with UN agencies, reaching schools and communities globally to promote environmental awareness and sustainable practices.",
    metrics: ["100,000+ trained advocates", "1,000+ schools involved", "5M+ students reached", "50+ countries engaged"]
  },
  {
    title: "Sustainable Livelihood Transformation",
    location: "Sub-Saharan Africa",
    impact: "Increased income by 500% for participants",
    description: "Developed innovative livelihood programs that transformed waste into valuable products, improving economic conditions for millions of families across Africa.",
    metrics: ["500% income increase", "1M+ families benefited", "100+ new products created", "$50M+ economic impact"]
  },
  {
    title: "Climate Action Partnership",
    location: "Global Initiative",
    impact: "Reduced carbon emissions by 2M+ tons",
    description: "Partnered with international organizations to implement climate action programs, significantly reducing carbon footprint across multiple countries.",
    metrics: ["2M+ tons CO2 reduced", "100+ cities engaged", "UN partnership established", "Climate goals exceeded"]
  }
]

const achievements = [
  {
    year: "2024",
    title: "UN Global Compact SDG Pioneer Award",
    description: "Recognized as a global leader in advancing Sustainable Development Goals"
  },
  {
    year: "2023",
    title: "World Bank Innovation Challenge Winner",
    description: "Awarded for breakthrough environmental solutions in developing nations"
  },
  {
    year: "2023",
    title: "UNDP Partnership Excellence Award",
    description: "Honored for outstanding collaboration in environmental sustainability"
  },
  {
    year: "2022",
    title: "African Union Environmental Leadership Award",
    description: "Recognized for transformative environmental leadership across Africa"
  },
  {
    year: "2022",
    title: "Nobel Peace Prize Nomination",
    description: "Nominated for contributions to environmental peace and sustainability"
  },
  {
    year: "2021",
    title: "Gates Foundation Global Health Award",
    description: "Awarded for innovative approaches to environmental health solutions"
  },
  {
    year: "2020",
    title: "UNEP Champions of the Earth Award",
    description: "Recognized for exceptional environmental leadership and innovation"
  }
]

export default function ImpactPage() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
              Our Impact
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-secondary-900 mb-6"
            >
              Transforming Lives Through{' '}
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                Environmental Innovation
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-secondary-600 max-w-3xl mx-auto"
            >
              Discover how our women-led social enterprise is creating lasting positive change 
              in communities across Nigeria through innovative environmental solutions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Success Stories */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Real impact through innovative environmental solutions and community empowerment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    <span className="text-sm font-medium text-secondary-600">{story.location}</span>
                  </div>
                  <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    {story.impact}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">{story.title}</h3>
                <p className="text-secondary-600 mb-6">{story.description}</p>
                
                <div className="space-y-2">
                  {story.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-secondary-700">{metric}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Awards & Recognition
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Celebrating our achievements and the recognition of our impactful work
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`flex items-start space-x-6 mb-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                    <Award className="h-8 w-8 text-primary-600" />
                  </div>
                </div>
                <div className="flex-1 bg-gray-50 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-primary-600">{achievement.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-2">{achievement.title}</h3>
                  <p className="text-secondary-600">{achievement.description}</p>
                </div>
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
              Join Us in Creating Lasting Change
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Support our mission to transform environmental health and create sustainable 
              livelihood opportunities across Nigeria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Get Involved</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary-600">
                <Link href="/donate">Donate Now</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 