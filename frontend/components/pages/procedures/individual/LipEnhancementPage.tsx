import Navigation from '../../../Navigation'
import RussianFooter from '../../../RussianFooter'
import TestimonialsSection from '../../../TestimonialsSection'
import SpaWelcome from '../../../SpaWelcome'
import ExpertiseSection from '../../../ExpertiseSection'
import ProfessionalProductsSection from '../../../ProfessionalProductsSection'
import TreatmentJourney from '../../../TreatmentJourney'
import PromotionsSection from '../../../PromotionsSection'
import BeautySection from '../../../BeautySection'
import Locations from '../../../Locations'
import FAQSection from '../../../FAQSection'
import { Button } from '@/components/ui/button'

const handleNavigation = (route: string) => {
  if ((window as any).navigateTo) {
    (window as any).navigateTo(route)
  }
}

export default function LipEnhancementPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-[#111A19] to-[#284139] text-white overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/api/placeholder/1920/1080" 
              alt="Lip enhancement treatments"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#111A19]/80 to-transparent"></div>
          </div>
          
          <div className="relative container mx-auto px-4 py-32 flex items-center min-h-screen">
            <div className="max-w-2xl">
              <p className="text-[#F8D794] text-lg mb-4 tracking-wider">LIP PERFECTION</p>
              <h1 className="text-5xl lg:text-7xl font-light leading-tight mb-8">
                Invest in Your Lips with<br />
                <span className="text-[#F8D794]">Aesthetic Lab</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
                Enhance your natural lip beauty with our expert lip enhancement treatments 
                for fuller, more defined lips.
              </p>
              <Button 
                onClick={() => handleNavigation('book-treatment')}
                className="bg-transparent border-2 border-[#F8D794] text-[#F8D794] hover:bg-[#F8D794] hover:text-[#111A19] px-8 py-4 text-lg font-light tracking-wide transition-all duration-300"
              >
                BOOK CONSULTATION
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Spa Welcome Section */}
        <SpaWelcome />

        {/* Expertise Section */}
        <ExpertiseSection />

        {/* Professional Products Section */}
        <ProfessionalProductsSection />

        {/* Treatment Journey Section */}
        <TreatmentJourney />

        {/* Special Offers Section */}
        <PromotionsSection />

        {/* Beauty Section */}
        <BeautySection />

        {/* Locations Section */}
        <Locations />

        {/* FAQ Section */}
        <FAQSection />
      </div>
      
      <RussianFooter />
    </div>
  )
}