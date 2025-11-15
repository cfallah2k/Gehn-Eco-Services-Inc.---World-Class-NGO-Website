'use client'

import { motion } from 'framer-motion'
import { 
  Briefcase, 
  Users, 
  Award,
  CheckCircle,
  TrendingUp,
  Zap,
  Leaf,
  Target,
  Globe,
  Calendar,
  MapPin,
  Clock,
  DollarSign,
  Heart
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import CountUp from 'react-countup'

const jobOpenings = [
  {
    title: "Senior Environmental Consultant",
    location: "Lagos, Nigeria",
    type: "Full-time",
    department: "Environmental Consultancy",
    experience: "5+ years",
    salary: "$60,000 - $80,000",
    description: "Lead environmental impact assessments and sustainability projects across Africa.",
    requirements: [
      "Master's degree in Environmental Science or related field",
      "5+ years experience in environmental consulting",
      "Strong project management skills",
      "Experience with international environmental standards"
    ]
  },
  {
    title: "Waste Management Specialist",
    location: "Nairobi, Kenya",
    type: "Full-time",
    department: "Waste Management",
    experience: "3+ years",
    salary: "$45,000 - $60,000",
    description: "Develop and implement innovative waste management solutions for urban environments.",
    requirements: [
      "Bachelor's degree in Environmental Engineering or related field",
      "3+ years experience in waste management",
      "Knowledge of circular economy principles",
      "Experience with waste-to-energy technologies"
    ]
  },
  {
    title: "Social Impact Researcher",
    location: "Remote / Global",
    type: "Full-time",
    department: "Research & Development",
    experience: "4+ years",
    salary: "$50,000 - $70,000",
    description: "Conduct research on social impact measurement and community development programs.",
    requirements: [
      "PhD in Social Sciences or related field",
      "4+ years research experience",
      "Experience with impact assessment methodologies",
      "Strong analytical and writing skills"
    ]
  },
  {
    title: "Training Coordinator",
    location: "Accra, Ghana",
    type: "Full-time",
    department: "Training & Capacity Building",
    experience: "3+ years",
    salary: "$40,000 - $55,000",
    description: "Coordinate training programs and capacity building initiatives across West Africa.",
    requirements: [
      "Bachelor's degree in Education or related field",
      "3+ years experience in training coordination",
      "Experience with adult learning methodologies",
      "Strong organizational and communication skills"
    ]
  }
]

const impactStats = [
  {
    icon: Users,
    value: 500,
    suffix: '+',
    label: 'Team Members',
    description: 'Across 25+ countries'
  },
  {
    icon: Globe,
    value: 25,
    suffix: '+',
    label: 'Countries',
    description: 'Global presence'
  },
  {
    icon: Award,
    value: 95,
    suffix: '%',
    label: 'Employee Satisfaction',
    description: 'High retention rate'
  },
  {
    icon: Heart,
    value: 100,
    suffix: '%',
    label: 'Remote Work',
    description: 'Flexible work options'
  }
]

const benefits = [
  {
    icon: DollarSign,
    title: "Competitive Salary",
    description: "Above-market compensation with performance bonuses and annual reviews"
  },
  {
    icon: Globe,
    title: "Global Opportunities",
    description: "Work on projects across 25+ countries with international exposure"
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs"
  },
  {
    icon: Clock,
    title: "Flexible Work",
    description: "Remote work options and flexible scheduling"
  },
  {
    icon: Award,
    title: "Professional Development",
    description: "Continuous learning opportunities and career advancement"
  },
  {
    icon: Leaf,
    title: "Purpose-Driven",
    description: "Make a real impact on environmental sustainability and social change"
  }
]

const values = [
  "Environmental Stewardship",
  "Social Impact",
  "Innovation",
  "Collaboration",
  "Excellence",
  "Diversity & Inclusion",
  "Sustainability",
  "Integrity"
]

export default function CareersPage() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
              Careers & Opportunities
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-secondary-900 mb-6"
            >
              Join Our{' '}
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                Global Team
              </span>
              <br />
              Of Changemakers
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8"
            >
              Be part of a team of 500+ professionals across 25+ countries, 
              working together to create sustainable environmental solutions and social impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" asChild>
                <Link href="#jobs">View Openings</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
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

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Why Work With Us
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Join a purpose-driven organization with competitive benefits and global opportunities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <benefit.icon className="h-12 w-12 text-primary-600 mr-4" />
                  <h3 className="text-xl font-semibold text-secondary-900">{benefit.title}</h3>
                </div>
                
                <p className="text-secondary-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              The principles that guide our work and culture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg"
              >
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-secondary-700">{value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="jobs" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Current Openings
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Join our team and make a difference in environmental sustainability
            </p>
          </div>
          
          <div className="space-y-8">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-secondary-900 mb-2">{job.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-secondary-600">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Briefcase className="h-4 w-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{job.experience}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-primary-600">{job.salary}</div>
                    <div className="text-sm text-secondary-600">{job.department}</div>
                  </div>
                </div>
                
                <p className="text-secondary-600 mb-6">{job.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-secondary-900 mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {job.requirements.map((requirement, reqIndex) => (
                      <li key={reqIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-secondary-700">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Button asChild>
                    <Link href="/contact">Apply Now</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/contact">Learn More</Link>
                  </Button>
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
              Join Our Mission
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Be part of a team that's making real change in environmental sustainability 
              and social impact across the globe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Apply Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary-600">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
