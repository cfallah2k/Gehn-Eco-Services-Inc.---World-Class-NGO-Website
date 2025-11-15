'use client'

import { motion } from 'framer-motion'
import { 
  BarChart3, 
  Users, 
  Award,
  CheckCircle,
  TrendingUp,
  Zap,
  Leaf,
  Target,
  Globe,
  PieChart
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import CountUp from 'react-countup'

const services = [
  {
    icon: BarChart3,
    title: "Social Impact Assessment",
    description: "Comprehensive evaluation of social outcomes and community development",
    features: ["Community surveys", "Stakeholder analysis", "Social indicators", "Impact measurement"]
  },
  {
    icon: Leaf,
    title: "Environmental Impact Assessment",
    description: "Detailed analysis of environmental outcomes and sustainability metrics",
    features: ["Environmental indicators", "Carbon footprint", "Biodiversity impact", "Resource efficiency"]
  },
  {
    icon: TrendingUp,
    title: "Economic Impact Analysis",
    description: "Evaluation of economic benefits and return on investment",
    features: ["Economic indicators", "Cost-benefit analysis", "ROI measurement", "Market impact"]
  },
  {
    icon: Zap,
    title: "Data Analytics & Reporting",
    description: "Advanced analytics and comprehensive reporting for decision-making",
    features: ["Data visualization", "Predictive analytics", "Real-time monitoring", "Custom dashboards"]
  }
]

const impactStats = [
  {
    icon: BarChart3,
    value: 1000,
    suffix: '+',
    label: 'Assessments Completed',
    description: 'Across 25+ countries'
  },
  {
    icon: Users,
    value: 5000000,
    suffix: '+',
    label: 'People Impacted',
    description: 'Through assessed programs'
  },
  {
    icon: Globe,
    value: 25,
    suffix: '+',
    label: 'Countries Served',
    description: 'Global assessment reach'
  },
  {
    icon: Award,
    value: 99,
    suffix: '%',
    label: 'Client Satisfaction',
    description: 'Exceeding expectations'
  }
]

const caseStudies = [
  {
    title: "UN Sustainable Development Goals Impact Assessment",
    location: "Global Initiative",
    impact: "17 SDGs evaluated",
    description: "Comprehensive impact assessment of programs across all 17 UN Sustainable Development Goals, providing data-driven insights for global policy.",
    results: ["17 SDGs evaluated", "Global policy influence", "Data-driven insights", "UN partnership"]
  },
  {
    title: "African Union Development Program Evaluation",
    location: "Pan-African Initiative",
    impact: "55 countries assessed",
    description: "Large-scale impact assessment of development programs across all African Union member states, informing continental development strategy.",
    results: ["55 countries assessed", "Continental strategy", "Policy recommendations", "Development impact"]
  }
]

const methodologies = [
  "Social Return on Investment (SROI)",
  "Theory of Change Analysis",
  "Randomized Control Trials (RCT)",
  "Mixed Methods Research",
  "Participatory Impact Assessment",
  "Cost-Benefit Analysis",
  "Environmental Impact Assessment",
  "Social Impact Measurement",
  "Stakeholder Mapping",
  "Baseline Studies",
  "Longitudinal Studies",
  "Comparative Analysis",
  "Qualitative Research",
  "Quantitative Analysis",
  "Real-time Monitoring"
]

export default function ImpactAssessmentPage() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
              Impact Assessment
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-secondary-900 mb-6"
            >
              Measuring{' '}
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                Real Impact
              </span>
              <br />
              For Real Change
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8"
            >
              Leading impact assessment services across 25+ countries, 
              providing data-driven insights for 1,000+ programs and 5M+ beneficiaries.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" asChild>
                <Link href="/contact">Get Assessment</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#services">Our Services</Link>
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

      {/* Services */}
      <section id="services" className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Comprehensive Impact Assessment
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              From social impact to environmental outcomes, 
              we provide rigorous assessment services for sustainable development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <service.icon className="h-12 w-12 text-primary-600 mr-4" />
                  <h3 className="text-2xl font-semibold text-secondary-900">{service.title}</h3>
                </div>
                
                <p className="text-secondary-600 mb-6">{service.description}</p>
                
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-secondary-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodologies */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Our Assessment Methodologies
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Rigorous, evidence-based approaches for measuring real impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {methodologies.map((methodology, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg"
              >
                <PieChart className="h-5 w-5 text-purple-500 flex-shrink-0" />
                <span className="text-secondary-700">{methodology}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Real impact through rigorous assessment and evaluation
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
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
                    <span className="text-sm font-medium text-secondary-600">{study.location}</span>
                  </div>
                  <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    {study.impact}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">{study.title}</h3>
                <p className="text-secondary-600 mb-6">{study.description}</p>
                
                <div className="space-y-2">
                  {study.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center space-x-2">
                      <TrendingUp className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-secondary-700">{result}</span>
                    </div>
                  ))}
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
              Measure Your Impact
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Join us in measuring and maximizing your social and environmental impact. 
              Let's create data-driven change together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Get Assessment</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary-600">
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
