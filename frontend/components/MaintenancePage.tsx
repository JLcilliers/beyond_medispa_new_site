import MaintenanceNavigation from './MaintenanceNavigation'
import HeroSection from './HeroSection'
import WhyChooseUsSection from './WhyChooseUsSection'
import ServicesOverview from './ServicesOverview'
import MeditationSpaDay from './MeditationSpaDay'
import ProgramSection from './ProgramSection'
import TeamSection from './TeamSection'
import TestimonialsSection from './TestimonialsSection'
import PromotionsSection from './PromotionsSection'
import FAQSection from './FAQSection'
import RussianFooter from './RussianFooter'

export default function MaintenancePage() {
  return (
    <div className="min-h-screen">
      <MaintenanceNavigation />
      <HeroSection />
      <WhyChooseUsSection />
      <ServicesOverview />
      <MeditationSpaDay />
      <ProgramSection />
      <TeamSection />
      <TestimonialsSection />
      <PromotionsSection />
      <FAQSection />
      <RussianFooter />
    </div>
  )
}