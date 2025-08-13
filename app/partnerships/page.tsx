import { motion } from 'framer-motion'
import { 
  Handshake, 
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
  Building2
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import CountUp from 'react-countup'

const partnerships = [
  {
    name: "United Nations Environment Programme (UNEP)",
    type: "Strategic Partnership",
    duration: "2018 - Present",
    description: "Global partnership for environmental protection and sustainable development initiatives across Africa.",
    achievements: ["Joint programs in 25+ countries", "Policy influence", "Capacity building", "Research collaboration"],
    logo: "UNEP"
  },
  {
    name: "World Bank Group",
    type: "Development Partnership",
    duration: "2020 - Present",
    description: "Collaboration on large-scale environmental and social development projects in developing nations.",
    achievements: ["$50M+ in joint projects", "Innovation challenges", "Knowledge sharing", "Technical assistance"],
    logo: "World Bank"
  },
  {
    name: "African Union Commission",
    type: "Regional Partnership",
    duration: "2019 - Present",
    description: "Pan-African partnership for environmental governance and sustainable development across the continent.",
    achievements: ["55 countries engaged", "Policy framework", "Regional cooperation", "Capacity development"],
    logo: "AU"
  },
  {
    name: "European Union",
    type: "International Partnership",
    duration: "2021 - Present",
    description: "Partnership for climate action and environmental sustainability in Africa and beyond.",
    achievements: ["Climate action programs", "Green technology transfer", "Capacity building", "Research funding"],
    logo: "EU"
  }
]

const impactStats = [
  {
    icon: Handshake,
    value: 100,
    suffix: '+',
    label: 'Partnerships',
    description: 'Active collaborations worldwide'
  },
  {
    icon: Globe,
    value: 50,
    suffix: '+',
    label: 'Countries',
    description: 'Partnership reach'
  },
  {
    icon: DollarSign,
    value: 100,
    suffix: 'M+',
    label: 'Joint Funding',
    description: 'Collaborative projects'
  },
  {
    icon: Award,
    value: 25,
    suffix: '+',
    label: 'Awards',
    description: 'Partnership recognition'
  }
]

const partnershipTypes = [
  {
    icon: Building2,
    title: "Government Partnerships",
    description: "Collaborations with national and local governments for policy development and implementation",
    examples: ["Ministry partnerships", "Policy development", "Regulatory frameworks", "Public sector capacity building"]
  },
  {
    icon: Users,
    title: "NGO Collaborations",
    description: "Partnerships with civil society organizations for community development and advocacy",
    examples: ["Community programs", "Advocacy campaigns", "Capacity building", "Knowledge sharing"]
  },
  {
    icon: Leaf,
    title: "Academic Partnerships",
    description: "Research collaborations with universities and academic institutions worldwide",
    examples: ["Joint research projects", "Student exchanges", "Academic publications", "Innovation hubs"]
  },
  {
    icon: Zap,
    title: "Private Sector Alliances",
    description: "Strategic partnerships with corporations for sustainable business solutions",
    examples: ["Corporate sustainability", "Green technology", "Supply chain optimization", "ESG initiatives"]
  }
]

const successStories = [
  {
    title: "UNEP Global Environmental Initiative",
    partner: "United Nations Environment Programme",
    impact: "25+ countries engaged",
    description: "Comprehensive environmental protection program across Africa, resulting in significant policy changes and community impact.",
    results: ["Policy influence", "Community engagement", "Capacity building", "Environmental protection"]
  },
  {
    title: "World Bank Innovation Challenge",
    partner: "World Bank Group",
    impact: "$50M+ in funding",
    description: "Successful implementation of innovative environmental solutions, winning multiple World Bank innovation challenges.",
    results: ["Innovation recognition", "Funding secured", "Project implementation", "Knowledge transfer"]
  }
]

const benefits = [
  "Access to Global Networks",
  "Shared Resources & Expertise",
  "Increased Impact & Scale",
  "Innovation & Best Practices",
  "Funding Opportunities",
  "Policy Influence",
  "Capacity Building",
  "Knowledge Exchange"
]

export default function PartnershipsPage() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
              Strategic Partnerships
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-secondary-900 mb-6"
            >
              Global{' '}
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                Partnerships
              </span>
              <br />
              For Impact
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8"
            >
              Partnering with 100+ organizations worldwide, including UN agencies, 
              World Bank, and leading institutions to create sustainable environmental solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" asChild>
                <Link href="/contact">Partner With Us</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#partnerships">Our Partners</Link>
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

      {/* Partnership Types */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Types of Partnerships
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Comprehensive collaboration models for maximum impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <type.icon className="h-12 w-12 text-primary-600 mr-4" />
                  <h3 className="text-2xl font-semibold text-secondary-900">{type.title}</h3>
                </div>
                
                <p className="text-secondary-600 mb-6">{type.description}</p>
                
                <div className="space-y-3">
                  {type.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-secondary-700">{example}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Partnerships */}
      <section id="partnerships" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Key Strategic Partnerships
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Collaborating with leading international organizations for global impact
            </p>
          </div>
          
          <div className="space-y-8">
            {partnerships.map((partnership, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-secondary-900 mb-2">{partnership.name}</h3>
                    <div className="flex items-center space-x-4 text-sm text-secondary-600">
                      <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full">
                        {partnership.type}
                      </span>
                      <span>{partnership.duration}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center">
                      <span className="text-primary-600 font-bold">{partnership.logo}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-secondary-600 mb-6">{partnership.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-secondary-900 mb-3">Key Achievements:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {partnership.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-center space-x-2">
                        <TrendingUp className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-secondary-700">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Button variant="outline" asChild>
                    <Link href="/contact">Learn More</Link>
                  </Button>
                  <Button variant="ghost" asChild>
                    <Link href="/contact" className="flex items-center space-x-2">
                      <ExternalLink className="h-4 w-4" />
                      <span>Partner Website</span>
                    </Link>
                  </Button>
                </div>
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
              Partnership Success Stories
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Real impact through strategic collaborations
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                    <Award className="h-5 w-5 text-yellow-500" />
                    <span className="text-sm font-medium text-secondary-600">{story.partner}</span>
                  </div>
                  <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    {story.impact}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">{story.title}</h3>
                <p className="text-secondary-600 mb-6">{story.description}</p>
                
                <div className="space-y-2">
                  {story.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-secondary-700">{result}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Benefits of Partnership
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Why organizations choose to partner with us
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg"
              >
                <Handshake className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <span className="text-secondary-700">{benefit}</span>
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
              Partner With Us
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Join our network of global partners and together we can create 
              sustainable environmental solutions that make a real difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Partner With Us</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary-600">
                <Link href="/contact">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
