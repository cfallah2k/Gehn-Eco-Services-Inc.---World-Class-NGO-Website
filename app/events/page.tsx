import { motion } from 'framer-motion'
import { 
  Calendar, 
  Users, 
  Award,
  CheckCircle,
  TrendingUp,
  Zap,
  Leaf,
  Target,
  Globe,
  Clock,
  MapPin,
  ExternalLink,
  Video,
  Mic
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import CountUp from 'react-countup'

const upcomingEvents = [
  {
    title: "Global Environmental Summit 2024",
    type: "Conference",
    date: "March 15-17, 2024",
    location: "Nairobi, Kenya",
    attendees: "1,000+",
    description: "International summit bringing together environmental leaders, policymakers, and innovators from 50+ countries to address global sustainability challenges.",
    speakers: ["UN Environment Executive Director", "World Bank Climate Lead", "African Union Commissioner", "Leading Environmental Scientists"],
    registration: "Open",
    price: "$500"
  },
  {
    title: "Circular Economy Innovation Workshop",
    type: "Workshop",
    date: "April 8-10, 2024",
    location: "Lagos, Nigeria",
    attendees: "200+",
    description: "Hands-on workshop focused on implementing circular economy principles in African cities and communities.",
    speakers: ["Circular Economy Experts", "Urban Planners", "Innovation Leaders", "Community Representatives"],
    registration: "Open",
    price: "$200"
  },
  {
    title: "Climate Action Youth Forum",
    type: "Forum",
    date: "May 12-14, 2024",
    location: "Virtual / Global",
    attendees: "5,000+",
    description: "Global youth forum empowering young environmental leaders with skills, knowledge, and networks for climate action.",
    speakers: ["Youth Climate Activists", "Environmental Educators", "Policy Makers", "Innovation Mentors"],
    registration: "Open",
    price: "Free"
  }
]

const pastEvents = [
  {
    title: "African Environmental Leadership Conference 2023",
    type: "Conference",
    date: "November 2023",
    location: "Accra, Ghana",
    attendees: "800+",
    description: "Successfully convened environmental leaders from across Africa to discuss sustainable development and policy implementation.",
    outcomes: ["Policy recommendations adopted", "Regional partnerships formed", "Capacity building programs launched", "Innovation projects initiated"]
  },
  {
    title: "Waste Management Innovation Summit 2023",
    type: "Summit",
    date: "September 2023",
    location: "Cape Town, South Africa",
    attendees: "600+",
    description: "Showcased cutting-edge waste management technologies and solutions from around the world.",
    outcomes: ["Technology partnerships established", "Investment secured", "Knowledge transfer completed", "Implementation plans developed"]
  }
]

const impactStats = [
  {
    icon: Calendar,
    value: 50,
    suffix: '+',
    label: 'Events Hosted',
    description: 'Annually across the globe'
  },
  {
    icon: Users,
    value: 10000,
    suffix: '+',
    label: 'Participants',
    description: 'From 50+ countries'
  },
  {
    icon: Globe,
    value: 25,
    suffix: '+',
    label: 'Countries',
    description: 'Event locations'
  },
  {
    icon: Award,
    value: 100,
    suffix: '+',
    label: 'Speakers',
    description: 'International experts'
  }
]

const eventTypes = [
  {
    icon: Mic,
    title: "International Conferences",
    description: "Large-scale conferences bringing together global leaders and experts",
    features: ["Keynote speakers", "Panel discussions", "Networking sessions", "Policy dialogues"]
  },
  {
    icon: Users,
    title: "Workshops & Training",
    description: "Hands-on training sessions and capacity building workshops",
    features: ["Skill development", "Practical exercises", "Certification programs", "Expert guidance"]
  },
  {
    icon: Video,
    title: "Virtual Events",
    description: "Online conferences and webinars accessible globally",
    features: ["Global reach", "Interactive sessions", "Recorded content", "Networking platforms"]
  },
  {
    icon: Target,
    title: "Youth Programs",
    description: "Specialized events for young environmental leaders",
    features: ["Leadership development", "Mentorship programs", "Innovation challenges", "Global networks"]
  }
]

const benefits = [
  "Global Networking Opportunities",
  "Expert Knowledge Sharing",
  "Policy Influence",
  "Innovation Showcase",
  "Capacity Building",
  "Partnership Development",
  "Professional Development",
  "Community Engagement"
]

export default function EventsPage() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
              Events & Conferences
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-secondary-900 mb-6"
            >
              Global{' '}
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                Events
              </span>
              <br />
              & Conferences
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8"
            >
              Hosting 50+ events annually with 10,000+ participants from 50+ countries, 
              bringing together global leaders for environmental innovation and policy development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" asChild>
                <Link href="#events">View Events</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Host an Event</Link>
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

      {/* Event Types */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Types of Events
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Comprehensive event portfolio for every audience and objective
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventTypes.map((type, index) => (
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
                  {type.features.map((feature, featureIndex) => (
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

      {/* Upcoming Events */}
      <section id="events" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Join us at our upcoming global events and conferences
            </p>
          </div>
          
          <div className="space-y-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-secondary-900 mb-2">{event.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-secondary-600">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{event.attendees}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      {event.registration}
                    </span>
                    <div className="text-lg font-semibold text-primary-600 mt-2">{event.price}</div>
                  </div>
                </div>
                
                <p className="text-secondary-600 mb-6">{event.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-secondary-900 mb-3">Featured Speakers:</h4>
                  <div className="flex flex-wrap gap-2">
                    {event.speakers.map((speaker, speakerIndex) => (
                      <span key={speakerIndex} className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                        {speaker}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Button asChild>
                    <Link href="/contact">Register Now</Link>
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

      {/* Past Events */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Past Events
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Successful events that have shaped environmental policy and innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
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
                    <span className="text-sm font-medium text-secondary-600">{event.date}</span>
                  </div>
                  <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    {event.attendees}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">{event.title}</h3>
                <p className="text-secondary-600 mb-6">{event.description}</p>
                
                <div className="space-y-2">
                  {event.outcomes.map((outcome, outcomeIndex) => (
                    <div key={outcomeIndex} className="flex items-center space-x-2">
                      <TrendingUp className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-secondary-700">{outcome}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Benefits */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Benefits of Attending
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Why professionals choose our events
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
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
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
              Join Our Global Events
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Connect with global leaders, share knowledge, and drive environmental innovation. 
              Be part of the solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Register for Events</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary-600">
                <Link href="/contact">Host an Event</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
