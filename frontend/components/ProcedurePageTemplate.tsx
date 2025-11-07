import Navigation from './Navigation'
import Footer from './Footer'
import TestimonialsSection from './TestimonialsSection'
import SpaWelcome from './SpaWelcome'
import ExpertiseSection from './ExpertiseSection'
import ProfessionalProductsSection from './ProfessionalProductsSection'
import TreatmentJourney from './TreatmentJourney'
import PromotionsSection from './PromotionsSection'
import BeautySection from './BeautySection'
import FAQSection from './FAQSection'
import DynamicSectionRenderer from './DynamicSectionRenderer'
import { Button } from '@/components/ui/button'
import { useLanguage } from '../contexts/LanguageContext'
import { TinaMarkdown } from 'tinacms/dist/rich-text'

const handleNavigation = (route: string) => {
  if (window.navigateTo) {
    (window as any).navigateTo(route)
  }
}

interface HeroProps {
  tagline: string
  title: string
  subtitle: string
  description: string | any // Can be string or TinaCMS rich-text object
  buttonText?: string
  backgroundImage?: string
}

interface TreatmentInfo {
  duration?: string
  results?: string
  price?: string
  benefits?: string[]
}

interface Translation {
  title?: string
  description?: string | any // Can be string or TinaCMS rich-text object
}

interface Translations {
  zhCN?: Translation
  zhTW?: Translation
  ar?: Translation
}

interface ProcedurePageTemplateProps {
  hero: HeroProps
  treatmentInfo?: TreatmentInfo
  translations?: Translations
  sections?: any[]
  customSections?: React.ReactNode
  showStandardSections?: boolean
}

export default function ProcedurePageTemplate({
  hero,
  treatmentInfo,
  translations,
  sections,
  customSections,
  showStandardSections = true
}: ProcedurePageTemplateProps) {
  const { language } = useLanguage()

  // Get translated content based on current language
  const getTranslatedTitle = () => {
    if (!translations) return hero.title

    switch (language) {
      case 'zh-CN':
        return translations.zhCN?.title || hero.title
      case 'zh-TW':
        return translations.zhTW?.title || hero.title
      case 'ar':
        return translations.ar?.title || hero.title
      default:
        return hero.title
    }
  }

  const getTranslatedDescription = () => {
    if (!translations) return hero.description

    switch (language) {
      case 'zh-CN':
        return translations.zhCN?.description || hero.description
      case 'zh-TW':
        return translations.zhTW?.description || hero.description
      case 'ar':
        return translations.ar?.description || hero.description
      default:
        return hero.description
    }
  }

  const displayTitle = getTranslatedTitle()
  const displayDescription = getTranslatedDescription()

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-[#2C2C2C] to-[#A38E78] text-white overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={hero.backgroundImage || "/Hydrafacial/female-at-cosmetic-beauty-spa-clinic-has-facial-ha-2024-10-18-17-49-09-utc (1).jpg"}
              alt={displayTitle}
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#2C2C2C]/80 to-transparent"></div>
          </div>

          <div className="relative container mx-auto px-4 py-32 flex items-center min-h-screen">
            <div className="max-w-2xl">
              <p className="text-[#C6A77D] text-lg mb-4 tracking-wider">{hero.tagline}</p>
              <h1 className="text-5xl lg:text-7xl font-light leading-tight mb-8">
                {displayTitle}<br />
                <span className="text-[#C6A77D]">{hero.subtitle}</span>
              </h1>
              <div className="text-xl text-[#F5F1EC] mb-8 leading-relaxed max-w-lg">
                {typeof displayDescription === 'string' ? (
                  <p>{displayDescription}</p>
                ) : (
                  <TinaMarkdown content={displayDescription} />
                )}
              </div>
              <Button
                onClick={() => handleNavigation('book-treatment')}
                className="bg-transparent border-2 border-[#C6A77D] text-[#C6A77D] hover:bg-[#C6A77D] hover:text-[#2C2C2C] px-8 py-4 text-lg font-light tracking-wide transition-all duration-300"
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
                  <h2 className="text-4xl font-light text-[#2C2C2C] mb-4">Treatment Details</h2>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  {treatmentInfo.duration && (
                    <div className="text-center bg-[#F5F1EC] rounded-2xl p-6">
                      <h3 className="text-xl font-semibold text-[#2C2C2C] mb-3">Duration</h3>
                      <p className="text-2xl font-light text-[#A38E78] mb-2">{treatmentInfo.duration}</p>
                      <p className="text-[#777777] text-sm">Treatment time</p>
                    </div>
                  )}
                  
                  {treatmentInfo.results && (
                    <div className="text-center bg-[#F5F1EC] rounded-2xl p-6">
                      <h3 className="text-xl font-semibold text-[#2C2C2C] mb-3">Results</h3>
                      <p className="text-2xl font-light text-[#A38E78] mb-2">{treatmentInfo.results}</p>
                      <p className="text-[#777777] text-sm">Visible improvement timeline</p>
                    </div>
                  )}
                  
                  {treatmentInfo.price && (
                    <div className="text-center bg-[#F5F1EC] rounded-2xl p-6">
                      <h3 className="text-xl font-semibold text-[#2C2C2C] mb-3">Pricing</h3>
                      <p className="text-2xl font-light text-[#A38E78] mb-2">{treatmentInfo.price}</p>
                      <p className="text-[#777777] text-sm">Starting price</p>
                    </div>
                  )}
                </div>

                {treatmentInfo.benefits && (
                  <div className="bg-[#F5F1EC] rounded-3xl p-8 mb-12">
                    <h3 className="text-2xl font-light text-[#2C2C2C] mb-6 text-center">Key Benefits</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {treatmentInfo.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-[#A38E78] rounded-full mr-3"></div>
                          <span className="text-[#333333]">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="text-center">
                  <Button 
                    onClick={() => handleNavigation('book-treatment')}
                    className="bg-[#A38E78] hover:bg-[#8B7355] text-white px-8 py-4 text-lg font-light tracking-wide"
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

        {/* Dynamic TinaCMS Sections */}
        {sections && sections.length > 0 ? (
          <DynamicSectionRenderer sections={sections} />
        ) : (
          /* Standard Sections (fallback if no custom sections defined) */
          showStandardSections && (
            <>
              <TestimonialsSection />
              <SpaWelcome />
              <ExpertiseSection />
              <ProfessionalProductsSection />
              <TreatmentJourney />
              <PromotionsSection />
              <BeautySection />
              <FAQSection />
            </>
          )
        )}
      </div>
      
      <Footer />
    </div>
  )
}