import Navigation from './Navigation'
import HeroSection from './HeroSection'
import WhyChooseUsSection from './WhyChooseUsSection'
import ServicesOverview from './ServicesOverview'
import GetMoreSection from './GetMoreSection'
import ProgramSection from './ProgramSection'
import ExpertMedicineSection from './ExpertMedicineSection'
import Locations from './Locations'
import FAQSection from './FAQSection'
import Footer from './Footer'

export default function Homepage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WhyChooseUsSection />
      <ServicesOverview />
      <GetMoreSection />
      <ProgramSection />
      <ExpertMedicineSection />
      <Locations />
      <FAQSection />
      <Footer />
    </div>
  )
}
