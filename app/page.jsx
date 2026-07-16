import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import AboutSection from '@/components/about-section'
import QuoteSection from '@/components/quote-section'
import KeyFeatures from '@/components/key-features'
import Glimpse from '@/components/glimpse'
import Programs from '@/components/programs'
import Marquee from '@/components/marquee'
import Launching from '@/components/launching'
import Professionals from '@/components/professionals'
import Facilities from '@/components/facilities'
import CoachesEvents from '@/components/coaches-events'
import SiteFooter from '@/components/site-footer'

export default function Page() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <AboutSection />
      <QuoteSection />
      <KeyFeatures />
      <Glimpse />
      <Programs />
      <Marquee />
      <Launching />
      <Professionals />
      <Facilities />
      <CoachesEvents />
      <SiteFooter />
    </main>
  )
}
