import { AboutHero } from '@/components/pages/about/about-hero'
import { MissionVision } from '@/components/pages/about/mission-vision'
import { ValuesSection } from '@/components/pages/about/values-section'
import { HistoryTimeline } from '@/components/pages/about/history-timeline'
import { AwardsSection } from '@/components/pages/about/awards-section'

export default function AboutPage() {
  return (
    <div className="space-y-0">
      <AboutHero />
      <MissionVision />
      <ValuesSection />
      <HistoryTimeline />
      <AwardsSection />
    </div>
  )
} 