'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { 
  Recycle, 
  Leaf, 
  Droplets, 
  Users, 
  BookOpen, 
  TrendingUp,
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const services = [
  {
    icon: Recycle,
    title: 'Waste Management',
    description: 'Comprehensive waste collection, sorting, and recycling solutions for communities and businesses.',
    features: [
      'Waste collection & transportation',
      'Recycling programs',
      'Composting solutions',
      'Waste audit & assessment'
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    href: '/services/waste-management'
  },
  {
    icon: Leaf,
    title: 'Environmental Consultancy',
    description: 'Expert environmental assessment, planning, and compliance services for sustainable development.',
    features: [
      'Environmental impact assessment',
      'Sustainability planning',
      'Compliance consulting',
      'Green certification support'
    ],
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    href: '/services/environmental-consultancy'
  },
  {
    icon: Droplets,
    title: 'Sanitation Solutions',
    description: 'Innovative sanitation and hygiene solutions for improved public health and environmental protection.',
    features: [
      'Sanitation infrastructure',
      'Hygiene education programs',
      'Water quality management',
      'Public health initiatives'
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    href: '/services/sanitation'
  },
  {
    icon: Users,
    title: 'Livelihood Programs',
    description: 'Creating sustainable income opportunities through environmental entrepreneurship and skill development.',
    features: [
      'Green entrepreneurship training',
      'Skill development programs',
      'Micro-enterprise support',
      'Market access facilitation'
    ],
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    href: '/services/livelihood'
  },
  {
    icon: BookOpen,
    title: 'Training & Capacity Building',
    description: 'Comprehensive training programs to build environmental awareness and technical skills.',
    features: [
      'Environmental education',
      'Technical skills training',
      'Leadership development',
      'Community mobilization'
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    href: '/services/training'
  },
  {
    icon: TrendingUp,
    title: 'Impact Assessment',
    description: 'Measuring and evaluating the social, economic, and environmental impact of our programs.',
    features: [
      'Social impact measurement',
      'Environmental monitoring',
      'Economic analysis',
      'Stakeholder reporting'
    ],
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    href: '/services/impact-assessment'
  }
]

export function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section className="section-padding bg-white" ref={ref}>
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
            Our Services
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6"
          >
            Comprehensive{' '}
            <span className="gradient-text">Environmental</span>{' '}
            Solutions
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg text-secondary-600 max-w-3xl mx-auto"
          >
            We offer a complete range of environmental services designed to address the unique 
            challenges faced by communities, businesses, and organizations in their sustainability journey.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="card h-full overflow-hidden">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/90 rounded-lg flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-primary-600" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-secondary-600 mb-4">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary-500 flex-shrink-0" />
                        <span className="text-sm text-secondary-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button variant="outline" asChild className="w-full group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    <Link href={service.href}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Ready to Transform Your Environmental Impact?
            </h3>
            <p className="text-secondary-600 mb-6 max-w-2xl mx-auto">
              Let's work together to create sustainable solutions that benefit your community 
              and protect our environment for future generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Get Started Today</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 