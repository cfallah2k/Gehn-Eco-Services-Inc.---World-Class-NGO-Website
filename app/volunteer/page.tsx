import type { Metadata } from 'next'
import { motion } from 'framer-motion'
import { 
  Heart, 
  Users, 
  Calendar, 
  Award,
  CheckCircle,
  ArrowRight,
  Clock,
  MapPin,
  Mail,
  Phone,
  Globe
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Volunteer With Us - Gehn Eco Services Inc.',
  description: 'Join our volunteer program and make a difference in environmental sustainability and community empowerment.',
  keywords: ['volunteer', 'environmental', 'community', 'sustainability', 'social impact'],
}

const volunteerOpportunities = [
  {
    title: 'Community Outreach',
    description: 'Help us connect with communities and spread awareness about environmental sustainability.',
    duration: 'Flexible',
    location: 'Field Work',
    requirements: ['Passion for environment', 'Good communication skills', 'Team player'],
    icon: Users,
  },
  {
    title: 'Waste Management Programs',
    description: 'Assist in organizing and implementing waste management initiatives in local communities.',
    duration: '3-6 months',
    location: 'Various Locations',
    requirements: ['Physical fitness', 'Willingness to learn', 'Commitment'],
    icon: Heart,
  },
  {
    title: 'Environmental Education',
    description: 'Teach and educate communities about environmental conservation and sustainable practices.',
    duration: 'Ongoing',
    location: 'Schools & Communities',
    requirements: ['Teaching experience preferred', 'Patience', 'Creative thinking'],
    icon: Globe,
  },
  {
    title: 'Research & Data Collection',
    description: 'Support our research team in collecting and analyzing environmental data.',
    duration: 'Flexible',
    location: 'Office & Field',
    requirements: ['Attention to detail', 'Basic data skills', 'Analytical mindset'],
    icon: Award,
  },
]

const benefits = [
  'Make a real impact on environmental sustainability',
  'Gain valuable experience in the environmental sector',
  'Network with professionals and like-minded individuals',
  'Receive training and professional development',
  'Certificate of recognition upon completion',
  'Flexible scheduling to fit your availability',
]

const testimonials = [
  {
    name: 'Amina Hassan',
    role: 'Community Outreach Volunteer',
    quote: 'Volunteering with GES has been life-changing. I\'ve learned so much and made a real difference in my community.',
    duration: '6 months',
  },
  {
    name: 'David Okonkwo',
    role: 'Waste Management Volunteer',
    quote: 'The experience has been incredible. The team is supportive and the work is meaningful.',
    duration: '1 year',
  },
]

export default function VolunteerPage() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary-50 via-accent-50 to-green-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6"
            >
              <Heart className="w-4 h-4 mr-2" />
              Join Our Mission
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-secondary-900 mb-6"
            >
              Volunteer With{' '}
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                Gehn Eco Services
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8"
            >
              Make a lasting impact on environmental sustainability and community empowerment. 
              Join our passionate team of volunteers and help create a greener future.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" asChild>
                <Link href="#apply">Apply Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Learn More</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Volunteer Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Why Volunteer With Us?
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Be part of a movement that's transforming communities and protecting our environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl"
              >
                <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                <p className="text-secondary-700 font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Volunteer Opportunities
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Choose an opportunity that matches your interests and skills
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {volunteerOpportunities.map((opportunity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                    <opportunity.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-secondary-900">{opportunity.title}</h3>
                </div>

                <p className="text-secondary-600 mb-6">{opportunity.description}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-secondary-600">
                    <Clock className="w-4 h-4 mr-2 text-primary-600" />
                    <span className="font-medium">Duration:</span>
                    <span className="ml-2">{opportunity.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-secondary-600">
                    <MapPin className="w-4 h-4 mr-2 text-primary-600" />
                    <span className="font-medium">Location:</span>
                    <span className="ml-2">{opportunity.location}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-secondary-900 mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {opportunity.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-center text-sm text-secondary-600">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button variant="outline" className="w-full" asChild>
                  <Link href="#apply">
                    Apply for this Role
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              What Our Volunteers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 border border-primary-100"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900">{testimonial.name}</h4>
                    <p className="text-sm text-secondary-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-secondary-700 mb-4 italic">"{testimonial.quote}"</p>
                <p className="text-sm text-secondary-500">Volunteered for {testimonial.duration}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="apply" className="py-16 lg:py-24 bg-gradient-to-br from-primary-600 to-accent-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Fill out our volunteer application form and join our team of changemakers
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-secondary-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-secondary-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-secondary-700 mb-2">
                    Area of Interest *
                  </label>
                  <select
                    id="interest"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select an area</option>
                    <option value="community-outreach">Community Outreach</option>
                    <option value="waste-management">Waste Management Programs</option>
                    <option value="education">Environmental Education</option>
                    <option value="research">Research & Data Collection</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="availability" className="block text-sm font-medium text-secondary-700 mb-2">
                    Availability *
                  </label>
                  <input
                    type="text"
                    id="availability"
                    placeholder="e.g., Weekends, 10 hours/week"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                    Why do you want to volunteer with us? *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <Button size="lg" className="w-full" type="submit">
                  Submit Application
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </div>

            <div className="mt-8 text-center">
              <p className="text-primary-100 mb-4">Have questions? Contact us:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="mailto:volunteer@gehnecservices.com" className="flex items-center text-white hover:text-primary-100">
                  <Mail className="w-5 h-5 mr-2" />
                  volunteer@gehnecservices.com
                </a>
                <a href="tel:+2348031234567" className="flex items-center text-white hover:text-primary-100">
                  <Phone className="w-5 h-5 mr-2" />
                  +234 803 123 4567
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

