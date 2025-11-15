'use client'

import { motion } from 'framer-motion'
import { 
  Camera, 
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
  Video,
  Mic,
  Image
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import CountUp from 'react-countup'

const galleryCategories = [
  {
    title: "Project Showcase",
    count: "150+",
    description: "Visual documentation of our environmental projects across Africa",
    images: 45
  },
  {
    title: "Team & Leadership",
    count: "500+",
    description: "Meet our global team of environmental professionals and leaders",
    images: 25
  },
  {
    title: "Community Impact",
    count: "1M+",
    description: "Real stories of communities transformed through our work",
    images: 60
  },
  {
    title: "Events & Conferences",
    count: "50+",
    description: "Highlights from our global events and international conferences",
    images: 80
  }
]

const featuredImages = [
  {
    title: "Waste Management Innovation Center",
    location: "Lagos, Nigeria",
    category: "Infrastructure",
    description: "State-of-the-art waste processing facility processing 1,000+ tons daily",
    impact: "99% recovery rate achieved"
  },
  {
    title: "Community Training Session",
    location: "Nairobi, Kenya",
    category: "Capacity Building",
    description: "Training local communities in sustainable waste management practices",
    impact: "500+ community members trained"
  },
  {
    title: "Environmental Leadership Summit",
    location: "Accra, Ghana",
    category: "Events",
    description: "International summit bringing together environmental leaders from 25+ countries",
    impact: "1,000+ participants from 50+ countries"
  },
  {
    title: "Solar Energy Installation",
    location: "Rural Tanzania",
    category: "Renewable Energy",
    description: "Solar panel installation providing clean energy to rural communities",
    impact: "10,000+ households powered"
  }
]

const impactStats = [
  {
    icon: Camera,
    value: 1000,
    suffix: '+',
    label: 'Photos',
    description: 'High-quality project documentation'
  },
  {
    icon: Video,
    value: 100,
    suffix: '+',
    label: 'Videos',
    description: 'Project documentaries and stories'
  },
  {
    icon: Globe,
    value: 25,
    suffix: '+',
    label: 'Countries',
    description: 'Visual coverage worldwide'
  },
  {
    icon: Users,
    value: 50000,
    suffix: '+',
    label: 'Views',
    description: 'Gallery engagement'
  }
]

const projectGalleries = [
  {
    title: "Waste Management Projects",
    location: "Across Africa",
    images: 25,
    description: "Comprehensive visual documentation of our waste management initiatives",
    projects: ["Lagos Innovation Center", "Nairobi Processing Plant", "Cape Town Recycling Hub"]
  },
  {
    title: "Environmental Education",
    location: "25+ Countries",
    images: 30,
    description: "Training and capacity building programs in action",
    projects: ["School Programs", "Community Workshops", "Leadership Training"]
  },
  {
    title: "Renewable Energy Installations",
    location: "Rural Communities",
    images: 20,
    description: "Solar and renewable energy projects transforming communities",
    projects: ["Solar Installations", "Wind Energy", "Biogas Systems"]
  }
]

const teamPhotos = [
  {
    title: "Executive Leadership Team",
    count: "12",
    description: "Meet our senior leadership driving global environmental innovation"
  },
  {
    title: "Field Operations Team",
    count: "200+",
    description: "Our dedicated field staff working across 25+ countries"
  },
  {
    title: "Research & Development",
    count: "50+",
    description: "Scientists and researchers advancing environmental solutions"
  },
  {
    title: "Community Engagement",
    count: "100+",
    description: "Local teams building relationships and driving change"
  }
]

const categories = [
  "All Photos",
  "Projects",
  "Team",
  "Events",
  "Communities",
  "Infrastructure",
  "Training",
  "Awards",
  "Partnerships",
  "Innovation"
]

export default function GalleryPage() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
              Visual Stories
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-secondary-900 mb-6"
            >
              Project{' '}
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                Gallery
              </span>
              <br />
              & Visual Stories
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8"
            >
              Explore 1,000+ photos and 100+ videos showcasing our environmental projects, 
              team, and impact across 25+ countries worldwide.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" asChild>
                <Link href="#gallery">Browse Gallery</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Request Photos</Link>
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

      {/* Gallery Categories */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Gallery Categories
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Explore our visual content organized by themes and projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <Image className="h-12 w-12 text-primary-600 mr-4" />
                  <div>
                    <h3 className="text-2xl font-semibold text-secondary-900">{category.title}</h3>
                    <p className="text-primary-600 font-medium">{category.count}</p>
                  </div>
                </div>
                
                <p className="text-secondary-600 mb-6">{category.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-secondary-600">{category.images} images</div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/contact">View Gallery</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Images */}
      <section id="gallery" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Featured Images
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Highlighting our most impactful projects and achievements
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
              >
                <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg mb-6 flex items-center justify-center">
                  <Camera className="h-16 w-16 text-primary-600" />
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                    {image.category}
                  </span>
                  <span className="text-sm text-secondary-600">{image.location}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">{image.title}</h3>
                <p className="text-secondary-600 mb-4">{image.description}</p>
                
                <div className="flex items-center space-x-2 text-sm text-green-600">
                  <TrendingUp className="h-4 w-4" />
                  <span>{image.impact}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Galleries */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Project Galleries
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Comprehensive visual documentation of our major initiatives
            </p>
          </div>
          
          <div className="space-y-8">
            {projectGalleries.map((gallery, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-2xl p-8 border border-gray-100"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-secondary-900 mb-2">{gallery.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-secondary-600">
                      <span>{gallery.location}</span>
                      <span>{gallery.images} images</span>
                    </div>
                  </div>
                  <Button variant="outline" asChild>
                    <Link href="/contact">View Gallery</Link>
                  </Button>
                </div>
                
                <p className="text-secondary-600 mb-6">{gallery.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {gallery.projects.map((project, projectIndex) => (
                    <div key={projectIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-secondary-700">{project}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Photos */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Visual introduction to our global team of environmental professionals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamPhotos.map((team, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center"
              >
                <div className="w-full h-32 bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-primary-600" />
                </div>
                
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">{team.title}</h3>
                <p className="text-primary-600 font-medium mb-3">{team.count} members</p>
                <p className="text-secondary-600 text-sm">{team.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Categories */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Filter our gallery by topic or project type
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
                <Image className="h-5 w-5 text-primary-500 flex-shrink-0" />
                <span className="text-secondary-700">{category}</span>
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
              Request Visual Content
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Need high-resolution photos or videos for your project? 
              Contact us to request specific visual content from our extensive gallery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Request Photos</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary-600">
                <Link href="/contact">Media Kit</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
