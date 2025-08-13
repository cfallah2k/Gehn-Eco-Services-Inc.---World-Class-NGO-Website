import { motion } from 'framer-motion'
import { 
  Quote, 
  Users, 
  Award,
  CheckCircle,
  TrendingUp,
  Zap,
  Leaf,
  Target,
  Globe,
  Star,
  ExternalLink,
  Video,
  Mic,
  Heart
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import CountUp from 'react-countup'

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    title: "Director of Environmental Programs",
    organization: "United Nations Environment Programme",
    location: "Nairobi, Kenya",
    rating: 5,
    content: "Gehn Eco Services has been an exceptional partner in our environmental initiatives across Africa. Their innovative approach to waste management and community engagement has set new standards in the industry. The impact they've achieved in just a few years is remarkable.",
    category: "Partnership",
    featured: true
  },
  {
    name: "Michael Chen",
    title: "Senior Environmental Consultant",
    organization: "World Bank Group",
    location: "Washington, DC",
    rating: 5,
    content: "Working with Gehn Eco Services on our climate action programs has been transformative. Their technical expertise, combined with deep local knowledge, has enabled us to implement sustainable solutions that truly make a difference.",
    category: "Technical Excellence",
    featured: true
  },
  {
    name: "Fatima Ndiaye",
    title: "Community Leader",
    organization: "Dakar Community Initiative",
    location: "Dakar, Senegal",
    rating: 5,
    content: "The training and support we received from Gehn Eco Services has completely transformed our community. We now have a sustainable waste management system that provides jobs and keeps our environment clean. They truly care about local communities.",
    category: "Community Impact",
    featured: true
  },
  {
    name: "David Okafor",
    title: "CEO",
    organization: "Lagos Waste Solutions",
    location: "Lagos, Nigeria",
    rating: 5,
    content: "Gehn Eco Services helped us implement cutting-edge waste processing technology that increased our efficiency by 300%. Their expertise and ongoing support have been invaluable to our success.",
    category: "Innovation",
    featured: false
  },
  {
    name: "Maria Santos",
    title: "Environmental Officer",
    organization: "Cape Town Municipality",
    location: "Cape Town, South Africa",
    rating: 5,
    content: "The circular economy program implemented by Gehn Eco Services has been a game-changer for our city. We've seen significant improvements in waste reduction and community engagement.",
    category: "Municipal Partnership",
    featured: false
  },
  {
    name: "Ahmed Hassan",
    title: "Research Director",
    organization: "African Environmental Institute",
    location: "Cairo, Egypt",
    rating: 5,
    content: "Their research contributions and innovative methodologies have advanced environmental science across Africa. Gehn Eco Services is at the forefront of sustainable development research.",
    category: "Research",
    featured: false
  }
]

const impactStats = [
  {
    icon: Quote,
    value: 500,
    suffix: '+',
    label: 'Testimonials',
    description: 'From clients and partners'
  },
  {
    icon: Star,
    value: 4.9,
    suffix: '/5',
    label: 'Average Rating',
    description: 'Client satisfaction score'
  },
  {
    icon: Globe,
    value: 25,
    suffix: '+',
    label: 'Countries',
    description: 'Client testimonials from'
  },
  {
    icon: Heart,
    value: 98,
    suffix: '%',
    label: 'Satisfaction Rate',
    description: 'Would recommend our services'
  }
]

const testimonialCategories = [
  {
    icon: Users,
    title: "Client Testimonials",
    description: "Feedback from organizations and businesses we've served",
    count: "200+ testimonials",
    examples: ["Waste management companies", "Municipalities", "Private sector clients", "Government agencies"]
  },
  {
    icon: Globe,
    title: "Partner Endorsements",
    description: "Recommendations from our international partners and collaborators",
    count: "100+ endorsements",
    examples: ["UN agencies", "World Bank", "Academic institutions", "NGOs"]
  },
  {
    icon: Heart,
    title: "Community Stories",
    description: "Real stories from communities we've transformed",
    count: "150+ stories",
    examples: ["Local communities", "Schools", "Youth groups", "Women's organizations"]
  },
  {
    icon: Award,
    title: "Award Recognition",
    description: "Recognition and awards from industry and international bodies",
    count: "25+ awards",
    examples: ["Environmental awards", "Innovation recognition", "Community impact", "Leadership awards"]
  }
]

const featuredPartners = [
  {
    name: "United Nations Environment Programme",
    logo: "UNEP",
    testimonial: "Gehn Eco Services has demonstrated exceptional leadership in environmental innovation and community engagement across Africa.",
    partnership: "Strategic Partner since 2018"
  },
  {
    name: "World Bank Group",
    logo: "World Bank",
    testimonial: "Their technical expertise and innovative solutions have been instrumental in advancing our climate action programs.",
    partnership: "Development Partner since 2020"
  },
  {
    name: "African Union Commission",
    logo: "AU",
    testimonial: "Gehn Eco Services has been a key partner in implementing our environmental governance framework across the continent.",
    partnership: "Regional Partner since 2019"
  }
]

const categories = [
  "All Testimonials",
  "Client Feedback",
  "Partner Endorsements",
  "Community Stories",
  "Award Recognition",
  "Technical Excellence",
  "Innovation",
  "Community Impact",
  "Municipal Partnerships",
  "Research & Development"
]

export default function TestimonialsPage() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
              Client Stories
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-secondary-900 mb-6"
            >
              Client{' '}
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                Testimonials
              </span>
              <br />
              & Success Stories
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8"
            >
              Discover what our clients, partners, and communities say about our work. 
              500+ testimonials with a 4.9/5 rating from 25+ countries worldwide.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" asChild>
                <Link href="#testimonials">Read Stories</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Share Your Story</Link>
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

      {/* Testimonial Categories */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Types of Testimonials
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Comprehensive feedback from all our stakeholders and partners
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonialCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <category.icon className="h-12 w-12 text-primary-600 mr-4" />
                  <div>
                    <h3 className="text-2xl font-semibold text-secondary-900">{category.title}</h3>
                    <p className="text-primary-600 font-medium">{category.count}</p>
                  </div>
                </div>
                
                <p className="text-secondary-600 mb-6">{category.description}</p>
                
                <div className="space-y-3">
                  {category.examples.map((example, exampleIndex) => (
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

      {/* Featured Testimonials */}
      <section id="testimonials" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Featured Testimonials
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Stories from our most valued clients and partners
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.filter(t => t.featured).map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 border border-primary-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                    {testimonial.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-primary-600 mb-4" />
                  <p className="text-secondary-700 italic text-lg">{testimonial.content}</p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900">{testimonial.name}</h4>
                    <p className="text-sm text-secondary-600">{testimonial.title}</p>
                    <p className="text-sm text-secondary-600">{testimonial.organization}</p>
                    <p className="text-sm text-secondary-600">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Testimonials */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              All Testimonials
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Complete collection of client feedback and success stories
            </p>
          </div>
          
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-2xl p-8 border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-primary-600 font-bold text-lg">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-secondary-900">{testimonial.name}</h3>
                      <p className="text-sm text-secondary-600">{testimonial.title}</p>
                      <p className="text-sm text-secondary-600">{testimonial.organization}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                      {testimonial.category}
                    </span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <Quote className="h-6 w-6 text-primary-600 mb-2" />
                  <p className="text-secondary-700">{testimonial.content}</p>
                </div>
                
                <div className="text-sm text-secondary-600">{testimonial.location}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Endorsements */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Partner Endorsements
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Recognition from our international partners and collaborators
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPartners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-primary-600 font-bold">{partner.logo}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">{partner.name}</h3>
                <p className="text-secondary-600 mb-4 italic">"{partner.testimonial}"</p>
                <p className="text-sm text-primary-600 font-medium">{partner.partnership}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Categories */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Filter testimonials by type or area of expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:bg-primary-50 transition-colors cursor-pointer"
              >
                <Quote className="h-5 w-5 text-primary-500 flex-shrink-0" />
                <span className="text-secondary-700">{category}</span>
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
              Share Your Story
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Have you worked with us? We'd love to hear about your experience. 
              Share your testimonial and help others discover our impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Share Testimonial</Link>
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
