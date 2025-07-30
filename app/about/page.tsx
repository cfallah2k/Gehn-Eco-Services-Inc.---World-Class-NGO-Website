import type { Metadata } from 'next'
import { AboutHero } from '@/components/pages/about/about-hero'
import { MissionVision } from '@/components/pages/about/mission-vision'
import { HistoryTimeline } from '@/components/pages/about/history-timeline'
import { ValuesSection } from '@/components/pages/about/values-section'
import { AwardsSection } from '@/components/pages/about/awards-section'

export const metadata: Metadata = {
  title: 'About Us - Gehn Eco Services Inc.',
  description: 'Learn about our mission, values, and 15+ years of experience in environmental sustainability and community empowerment.',
  keywords: ['about us', 'mission', 'values', 'history', 'environmental sustainability', 'women-led'],
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionVision />
      <HistoryTimeline />
      <ValuesSection />
      <AwardsSection />
    </>
  )
} 