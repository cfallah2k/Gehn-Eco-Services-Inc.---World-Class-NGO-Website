import type { Metadata } from 'next'
import { ContactHero } from '@/components/pages/contact/contact-hero'
import { ContactForm } from '@/components/pages/contact/contact-form'
import { OfficeLocations } from '@/components/pages/contact/office-locations'
import { FAQSection } from '@/components/pages/contact/faq-section'

export const metadata: Metadata = {
  title: 'Contact Us - Gehn Eco Services Inc.',
  description: 'Get in touch with our team for environmental consultancy, waste management, and community empowerment services.',
  keywords: ['contact', 'environmental services', 'waste management', 'consultancy', 'support'],
}

export default function ContactPage() {
  return (
    <div className="space-y-0">
      <ContactHero />
      <ContactForm />
      <OfficeLocations />
      <FAQSection />
    </div>
  )
} 