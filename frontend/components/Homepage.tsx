import Navigation from './Navigation'
import HeroSection from './HeroSection'
import WhyChooseUsSection from './WhyChooseUsSection'
import ServicesOverview from './ServicesOverview'
import MeditationSpaDay from './MeditationSpaDay'
import ProgramSection from './ProgramSection'
import TeamSection from './TeamSection'
import TestimonialsSection from './TestimonialsSection'
import PromotionsSection from './PromotionsSection'
import FAQSection from './FAQSection'
import Footer from './Footer'

export default function Homepage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WhyChooseUsSection />
      <ServicesOverview />
      <MeditationSpaDay />
      <ProgramSection />
      <TeamSection />
      <TestimonialsSection />
      <PromotionsSection />
      <FAQSection />
      <Footer />
    </div>
  )
}