'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { 
  Linkedin, 
  Twitter, 
  Mail, 
  Award,
  Users,
  Heart
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const teamMembers = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Environmental scientist with 20+ years experience in sustainable development and community empowerment.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'sarah@gehnecservices.com'
    },
    achievements: ['PhD Environmental Science', 'UN Award Winner', '15+ Years Experience']
  },
  {
    name: 'Aisha Mohammed',
    role: 'Director of Operations',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Operations expert specializing in waste management systems and community development programs.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'aisha@gehnecservices.com'
    },
    achievements: ['MBA Business Administration', 'Waste Management Expert', 'Community Leader']
  },
  {
    name: 'Grace Okonkwo',
    role: 'Head of Environmental Programs',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Environmental engineer leading innovative sustainability initiatives and training programs.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'grace@gehnecservices.com'
    },
    achievements: ['MSc Environmental Engineering', 'Certified Trainer', 'Innovation Award Winner']
  },
  {
    name: 'Fatima Hassan',
    role: 'Community Engagement Manager',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Community development specialist focused on women empowerment and livelihood programs.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'fatima@gehnecservices.com'
    },
    achievements: ['MA Community Development', 'Women Empowerment Expert', 'Social Impact Leader']
  }
]

const teamStats = [
  { icon: Users, number: '25+', label: 'Team Members' },
  { icon: Award, number: '15+', label: 'Years Combined Experience' },
  { icon: Heart, number: '100%', label: 'Women-Led' }
]

export function TeamSection() {
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
            Our Team
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6"
          >
            Meet Our{' '}
            <span className="gradient-text">Leadership</span>{' '}
            Team
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg text-secondary-600 max-w-3xl mx-auto"
          >
            Our diverse team of environmental experts, community leaders, and sustainability 
            professionals are dedicated to creating positive change across Nigeria.
          </motion.p>
        </motion.div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {teamStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-primary-600" />
                </div>
              </div>
              <div className="text-3xl font-bold text-secondary-900 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-secondary-900">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="card h-full overflow-hidden">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Social Links */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex space-x-2">
                      <a
                        href={member.social.linkedin}
                        className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-secondary-700 hover:text-primary-600 transition-colors"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                      <a
                        href={member.social.twitter}
                        className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-secondary-700 hover:text-primary-600 transition-colors"
                      >
                        <Twitter className="h-4 w-4" />
                      </a>
                      <a
                        href={`mailto:${member.social.email}`}
                        className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-secondary-700 hover:text-primary-600 transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-secondary-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                  <p className="text-secondary-600 text-sm mb-4">
                    {member.bio}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2">
                    {member.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-center space-x-2">
                        <Award className="h-3 w-3 text-primary-500 flex-shrink-0" />
                        <span className="text-xs text-secondary-600">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Join Our Mission
            </h3>
            <p className="text-secondary-600 mb-6 max-w-2xl mx-auto">
              We're always looking for passionate individuals who share our vision for 
              environmental sustainability and community empowerment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/careers">View Open Positions</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 