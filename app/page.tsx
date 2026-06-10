'use client'

import { LanguageProvider } from '@/lib/i18n'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { ValueProp } from '@/components/value-prop'
import { Methodology } from '@/components/methodology'
import { Sectors } from '@/components/sectors'
import { Team } from '@/components/team'
import { Network } from '@/components/network'
import { ContactForm } from '@/components/contact-form'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <ValueProp />
        <Methodology />
        <Sectors />
        <Team />
        <Network />
        <ContactForm />
        <Footer />
      </main>
    </LanguageProvider>
  )
}
