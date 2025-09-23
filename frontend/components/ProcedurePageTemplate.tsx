import Navigation from './Navigation'
import RussianFooter from './RussianFooter'
import TestimonialsSection from './TestimonialsSection'
import SpaWelcome from './SpaWelcome'
import ExpertiseSection from './ExpertiseSection'
import ProfessionalProductsSection from './ProfessionalProductsSection'
import TreatmentJourney from './TreatmentJourney'
import PromotionsSection from './PromotionsSection'
import BeautySection from './BeautySection'
import Locations from './Locations'
import FAQSection from './FAQSection'
import { Button } from '@/components/ui/button'

const handleNavigation = (route: string) => {
  if ((window as any).navigateTo) {
    (window as any).navigateTo(route)
  }
}

interface HeroProps {
  tagline: string
  title: string
  subtitle: string
  description: string
  buttonText?: string
  backgroundImage?: string
}

interface TreatmentInfo {
  duration?: string
  results?: string
  price?: string
  benefits?: string[]
}

interface ProcedurePageTemplateProps {
  hero: HeroProps
  treatmentInfo?: TreatmentInfo
  customSections?: React.ReactNode
  showStandardSections?: boolean
}

export default function ProcedurePageTemplate({ 
  hero, 
  treatmentInfo, 
  customSections, 
  showStandardSections = true 
}: ProcedurePageTemplateProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-[#111A19] to-[#284139] text-white overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={hero.backgroundImage || "/api/placeholder/1920/1080"} 
              alt={hero.title}
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#111A19]/80 to-transparent"></div>
          </div>
          
          <div className="relative container mx-auto px-4 py-32 flex items-center min-h-screen">
            <div className="max-w-2xl">
              <p className="text-[#F8D794] text-lg mb-4 tracking-wider">{hero.tagline}</p>
              <h1 className="text-5xl lg:text-7xl font-light leading-tight mb-8">
                {hero.title}<br />
                <span className="text-[#F8D794]">{hero.subtitle}</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
                {hero.description}
              </p>
              <Button 
                onClick={() => handleNavigation('book-treatment')}
                className="bg-transparent border-2 border-[#F8D794] text-[#F8D794] hover:bg-[#F8D794] hover:text-[#111A19] px-8 py-4 text-lg font-light tracking-wide transition-all duration-300"
              >
                {hero.buttonText || 'BOOK CONSULTATION'}
              </Button>
            </div>
          </div>
        </section>

        {/* Treatment Details Section */}
        {treatmentInfo && (
          <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-light text-[#111A19] mb-4">Treatment Details</h2>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  {treatmentInfo.duration && (
                    <div className="text-center bg-[#F8D794]/10 rounded-2xl p-6">
                      <h3 className="text-xl font-semibold text-[#111A19] mb-3">Duration</h3>
                      <p className="text-2xl font-light text-[#284139] mb-2">{treatmentInfo.duration}</p>
                      <p className="text-gray-600 text-sm">Treatment time</p>
                    </div>
                  )}
                  
                  {treatmentInfo.results && (
                    <div className="text-center bg-[#F8D794]/10 rounded-2xl p-6">
                      <h3 className="text-xl font-semibold text-[#111A19] mb-3">Results</h3>
                      <p className="text-2xl font-light text-[#284139] mb-2">{treatmentInfo.results}</p>
                      <p className="text-gray-600 text-sm">Visible improvement timeline</p>
                    </div>
                  )}
                  
                  {treatmentInfo.price && (
                    <div className="text-center bg-[#F8D794]/10 rounded-2xl p-6">
                      <h3 className="text-xl font-semibold text-[#111A19] mb-3">Pricing</h3>
                      <p className="text-2xl font-light text-[#284139] mb-2">{treatmentInfo.price}</p>
                      <p className="text-gray-600 text-sm">Starting price</p>
                    </div>
                  )}
                </div>

                {treatmentInfo.benefits && (
                  <div className="bg-[#F8D794]/10 rounded-3xl p-8 mb-12">
                    <h3 className="text-2xl font-light text-[#111A19] mb-6 text-center">Key Benefits</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {treatmentInfo.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-[#284139] rounded-full mr-3"></div>
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="text-center">
                  <Button 
                    onClick={() => handleNavigation('book-treatment')}
                    className="bg-[#284139] hover:bg-[#111A19] text-white px-8 py-4 text-lg font-light tracking-wide"
                  >
                    BOOK YOUR TREATMENT
                  </Button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Custom Sections */}
        {customSections}

        {/* Standard Sections */}
        {showStandardSections && (
          <>
            <TestimonialsSection />
            <SpaWelcome />
            <ExpertiseSection />
            <ProfessionalProductsSection />
            <TreatmentJourney />
            <PromotionsSection />
            <BeautySection />
            <Locations />
            <FAQSection />
          </>
        )}
      </div>
      
      <RussianFooter />
    </div>
  )
}