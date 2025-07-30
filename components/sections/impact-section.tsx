'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import CountUp from 'react-countup'
import { 
  TrendingUp, 
  Users, 
  Globe, 
  Award, 
  Heart,
  ArrowRight,
  Play
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const impactStats = [
  {
    icon: Users,
    number: 5000,
    suffix: '+',
    label: 'Lives Impacted',
    description: 'Individuals and families benefiting from our programs'
  },
  {
    icon: Globe,
    number: 50,
    suffix: '+',
    label: 'Communities Served',
    description: 'Communities across multiple regions and states'
  },
  {
    icon: TrendingUp,
    number: 85,
    suffix: '%',
    label: 'Waste Reduction',
    description: 'Average reduction in waste sent to landfills'
  },
  {
    icon: Award,
    number: 200,
    suffix: '+',
    label: 'Jobs Created',
    description: 'Sustainable employment opportunities generated'
  }
]

const successStories = [
  {
    title: 'Community Transformation in Lagos',
    description: 'Implemented comprehensive waste management system in underserved communities, creating 50+ jobs and improving sanitation for 2,000+ residents.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    stats: { jobs: 50, residents: 2000, wasteReduction: 90 }
  },
  {
    title: 'Women Empowerment Initiative',
    description: 'Trained 200+ women in environmental entrepreneurship, leading to the establishment of 25 micro-enterprises in waste management.',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    stats: { women: 200, enterprises: 25, income: 150 }
  },
  {
    title: 'School Environmental Program',
    description: 'Launched environmental education programs in 30 schools, reaching 5,000+ students and establishing recycling clubs.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    stats: { schools: 30, students: 5000, clubs: 30 }
  }
]

export function ImpactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section className="section-padding section-gradient" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
            Our Impact
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6"
          >
            Creating{' '}
            <span className="gradient-text">Lasting Change</span>{' '}
            Across Communities
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg text-secondary-600 max-w-3xl mx-auto"
          >
            Through our innovative programs and dedicated team, we've achieved remarkable 
            results in environmental sustainability, community development, and women empowerment.
          </motion.p>
        </motion.div>

        {/* Impact Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {impactStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-primary-600" />
                </div>
              </div>
              <div className="text-3xl font-bold text-secondary-900 mb-2">
                <CountUp
                  end={stat.number}
                  suffix={stat.suffix}
                  duration={2.5}
                  delay={1 + index * 0.2}
                />
              </div>
              <div className="text-lg font-semibold text-secondary-900 mb-2">{stat.label}</div>
              <div className="text-sm text-secondary-600">{stat.description}</div>
            </div>
          ))}
        </motion.div>

        {/* Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="space-y-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">Success Stories</h3>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Discover how our programs are transforming communities and creating sustainable 
              environmental solutions across Nigeria.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2 + index * 0.2, duration: 0.6 }}
                className="group"
              >
                <div className="card h-full overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                        <Play className="h-4 w-4 text-primary-600 ml-1" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-secondary-900 mb-3">
                      {story.title}
                    </h4>
                    <p className="text-secondary-600 mb-4">
                      {story.description}
                    </p>
                    
                    {/* Story Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {Object.entries(story.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold text-primary-600">{value}+</div>
                          <div className="text-xs text-secondary-600 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <Button variant="outline" asChild className="w-full">
                      <Link href="/impact#stories">
                        Read Full Story
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Join Us in Creating Positive Change
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Your support helps us continue our mission of environmental sustainability 
              and community empowerment. Together, we can build a greener, more equitable future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/donate">Donate Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary-600">
                <Link href="/volunteer">Volunteer</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 