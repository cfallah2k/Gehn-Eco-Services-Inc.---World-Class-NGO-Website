import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gehnecservices.com'

  const routes = [
    '',
    '/about',
    '/services',
    '/services/waste-management',
    '/services/environmental-consultancy',
    '/services/sanitation',
    '/services/livelihood',
    '/services/training',
    '/services/impact-assessment',
    '/impact',
    '/research',
    '/publications',
    '/events',
    '/resources',
    '/partnerships',
    '/careers',
    '/media',
    '/gallery',
    '/testimonials',
    '/blog',
    '/team',
    '/news',
    '/contact',
    '/donate',
    '/volunteer',
    '/newsletter',
    '/reports',
    '/privacy',
    '/terms',
    '/cookies',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}

