import MaintenanceNavigation from './MaintenanceNavigation'
import MaintenanceHeroSection from './MaintenanceHeroSection'
import WhyChooseUsSection from './WhyChooseUsSection'
import MaintenanceServicesOverview from './MaintenanceServicesOverview'
import MeditationSpaDay from './MeditationSpaDay'
import ProgramSection from './ProgramSection'
import MaintenanceTeamSection from './MaintenanceTeamSection'
import TestimonialsSection from './TestimonialsSection'
import MaintenancePromotionsSection from './MaintenancePromotionsSection'
import FAQSection from './FAQSection'
import RussianFooter from './RussianFooter'

export default function MaintenancePage() {
  return (
    <div className="min-h-screen">
      <MaintenanceNavigation />
      <MaintenanceHeroSection />
      <WhyChooseUsSection />
      <MaintenanceServicesOverview />
      <MeditationSpaDay />
      <ProgramSection />
      <MaintenanceTeamSection />
      <TestimonialsSection />
      <MaintenancePromotionsSection />
      <FAQSection />
      <RussianFooter />
    </div>
  )
}