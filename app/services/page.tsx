import { ServicesHero } from '@/components/pages/services/services-hero'
import { ServicesGrid } from '@/components/pages/services/services-grid'
import { ProcessSection } from '@/components/pages/services/process-section'
import { CaseStudies } from '@/components/pages/services/case-studies'

export default function ServicesPage() {
  return (
    <div className="space-y-0">
      <ServicesHero />
      <ServicesGrid />
      <ProcessSection />
      <CaseStudies />
    </div>
  )
} 