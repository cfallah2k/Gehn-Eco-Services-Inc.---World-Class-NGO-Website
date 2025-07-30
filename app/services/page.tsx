import type { Metadata } from 'next'
import { ServicesHero } from '@/components/pages/services/services-hero'
import { ServicesGrid } from '@/components/pages/services/services-grid'
import { ProcessSection } from '@/components/pages/services/process-section'
import { CaseStudies } from '@/components/pages/services/case-studies'

export const metadata: Metadata = {
  title: 'Our Services - Gehn Eco Services Inc.',
  description: 'Comprehensive environmental services including waste management, consultancy, sanitation solutions, and livelihood programs.',
  keywords: ['waste management', 'environmental consultancy', 'sanitation', 'livelihood programs', 'training', 'impact assessment'],
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ProcessSection />
      <CaseStudies />
    </>
  )
} 