'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Chief Adebayo Oke',
    role: 'Community Leader',
    organization: 'Lagos Community Development Association',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    content: 'Gehn Eco Services transformed our community\'s approach to waste management. Their women-led team brought innovative solutions that not only improved our environment but also created jobs for our residents.',
    rating: 5
  },
  {
    name: 'Dr. Fatima Aliyu',
    role: 'Environmental Officer',
    organization: 'Federal Ministry of Environment',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    content: 'Their environmental consultancy services are world-class. The team\'s expertise in sustainable development and community engagement has set new standards in the sector.',
    rating: 5
  },
  {
    name: 'Mrs. Grace Okonkwo',
    role: 'Micro-entrepreneur',
    organization: 'Green Waste Solutions',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    content: 'Thanks to their livelihood programs, I started my own waste recycling business. The training and support I received empowered me to become financially independent while contributing to environmental protection.',
    rating: 5
  },
  {
    name: 'Mr. David Chen',
    role: 'Sustainability Manager',
    organization: 'EcoTech Industries',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    content: 'Working with Gehn Eco Services has been transformative for our company. Their environmental assessment and compliance consulting helped us achieve our sustainability goals while improving our bottom line.',
    rating: 5
  },
  {
    name: 'Hajia Amina Yusuf',
    role: 'School Principal',
    organization: 'Green Future Academy',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    content: 'Their environmental education programs have inspired our students to become environmental stewards. The hands-on training and practical knowledge they provide are invaluable for the next generation.',
    rating: 5
  },
  {
    name: 'Engr. Michael Thompson',
    role: 'Project Director',
    organization: 'Sustainable Development Initiative',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    content: 'Gehn Eco Services\' impact assessment methodology is rigorous and comprehensive. Their reports provide clear insights that help us make informed decisions about our environmental initiatives.',
    rating: 5
  }
]

export function TestimonialsSection() {
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
            Testimonials
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6"
          >
            What Our{' '}
            <span className="gradient-text">Partners</span>{' '}
            Say
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg text-secondary-600 max-w-3xl mx-auto"
          >
            Hear from communities, businesses, and organizations that have experienced 
            the transformative impact of our environmental services and programs.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="card h-full relative">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6">
                  <Quote className="h-8 w-8 text-primary-200" />
                </div>

                <div className="p-6">
                  {/* Rating */}
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-secondary-600 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-900">{testimonial.name}</h4>
                      <p className="text-sm text-primary-600">{testimonial.role}</p>
                      <p className="text-xs text-secondary-500">{testimonial.organization}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 grid md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
            <div className="text-secondary-600">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">150+</div>
            <div className="text-secondary-600">Happy Partners</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">4.9/5</div>
            <div className="text-secondary-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">95%</div>
            <div className="text-secondary-600">Recommendation Rate</div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Ready to Experience Our Impact?
            </h3>
            <p className="text-secondary-600 mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied partners who have transformed their environmental 
              practices and community impact with our expert services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Start Your Project
              </button>
              <button className="btn-secondary">
                View Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 