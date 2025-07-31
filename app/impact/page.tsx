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
    value: 5000,
    suffix: '+',
    label: 'Lives Impacted',
    description: 'Families and individuals positively affected'
  },
  {
    icon: Globe,
    value: 50,
    suffix: '+',
    label: 'Communities Served',
    description: 'Across multiple regions and states'
  },
  {
    icon: Award,
    value: 15,
    suffix: '+',
    label: 'Years of Service',
    description: 'Leading environmental solutions since 2008'
  },
  {
    icon: Heart,
    value: 100,
    suffix: '%',
    label: 'Women-Led',
    description: 'Empowering women in environmental sector'
  }
]

const successStories = [
  {
    title: "Community Waste Management Initiative",
    location: "Lagos, Nigeria",
    impact: "Reduced waste by 60% in 12 months",
    description: "Implemented comprehensive waste management system in underserved communities, creating jobs and improving environmental health.",
    metrics: ["60% waste reduction", "50 new jobs created", "10,000+ people served"]
  },
  {
    title: "Environmental Education Program",
    location: "Port Harcourt, Nigeria",
    impact: "Trained 500+ environmental advocates",
    description: "Launched educational programs in schools and communities to promote environmental awareness and sustainable practices.",
    metrics: ["500+ trained advocates", "25 schools involved", "15,000+ students reached"]
  },
  {
    title: "Livelihood Enhancement Project",
    location: "Kano, Nigeria",
    impact: "Increased income by 200% for participants",
    description: "Developed sustainable livelihood programs that transformed waste into valuable products, improving economic conditions.",
    metrics: ["200% income increase", "300 families benefited", "5 new products created"]
  }
]

const achievements = [
  {
    year: "2023",
    title: "National Environmental Excellence Award",
    description: "Recognized for outstanding contribution to environmental sustainability"
  },
  {
    year: "2022",
    title: "Women in Business Leadership Award",
    description: "Honored for women-led innovation in environmental services"
  },
  {
    year: "2021",
    title: "Community Impact Recognition",
    description: "Awarded for transformative community development programs"
  },
  {
    year: "2020",
    title: "Sustainable Development Goals Champion",
    description: "Recognized for advancing UN SDGs in Nigeria"
  }
]

export default function ImpactPage() {
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

      {/* Success Stories */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Real impact through innovative environmental solutions and community empowerment
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
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