import { HeroSection } from '@/components/sections/hero-section'
import { AboutSection } from '@/components/sections/about-section'
import { ServicesSection } from '@/components/sections/services-section'
import { ImpactSection } from '@/components/sections/impact-section'
import { CTASection } from '@/components/sections/cta-section'

export default function HomePage() {
  return (
    <div className="space-y-0 overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ImpactSection />
      <CTASection />
    </div>
  )
} 