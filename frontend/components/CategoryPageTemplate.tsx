import Navigation from './Navigation'
import Footer from './Footer'
import { Button } from '@/components/ui/button'
import { Clock } from 'lucide-react'

const handleNavigation = (route: string) => {
  if (window.navigateTo) {
    (window as any).navigateTo(route)
  }
}

interface HeroProps {
  title: string
  subtitle: string
  description: string
  backgroundImage?: string
}

interface Treatment {
  name: string
  description: string
  duration?: string
  price: string
  image?: string
  benefits?: string[]
  route?: string
}

interface ProcessStep {
  step: string
  title: string
  description: string
}

interface CategoryPageTemplateProps {
  hero: HeroProps
  treatments?: Treatment[]
  processSteps?: ProcessStep[]
  customSections?: React.ReactNode
  showTreatmentGrid?: boolean
  showProcess?: boolean
}

export default function CategoryPageTemplate({ 
  hero, 
  treatments = [], 
  processSteps = [],
  customSections,
  showTreatmentGrid = true,
  showProcess = true
}: CategoryPageTemplateProps) {
  const defaultProcessSteps = [
    { step: "1", title: "Consultation", description: "Detailed assessment and treatment planning" },
    { step: "2", title: "Preparation", description: "Pre-treatment care and preparation guidance" },
    { step: "3", title: "Treatment", description: "Professional treatment with advanced technology" },
    { step: "4", title: "Aftercare", description: "Follow-up support and maintenance advice" }
  ]

  const stepsToShow = processSteps.length > 0 ? processSteps : defaultProcessSteps

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[#2C2C2C] via-[#A38E78] to-[#2C2C2C] text-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl lg:text-6xl font-light mb-6">
                {hero.title} <span className="text-[#C6A77D]">{hero.subtitle}</span>
              </h1>
              <p className="text-xl text-[#F5F1EC] max-w-3xl mx-auto">
                {hero.description}
              </p>
            </div>
          </div>
        </section>

        {/* Custom Sections */}
        {customSections}

        {/* Treatments Grid */}
        {showTreatmentGrid && treatments.length > 0 && (
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12">
                {treatments.map((treatment, index) => (
                  <div key={index}>
                    <div className="bg-[#F5F1EC] rounded-3xl overflow-hidden shadow-lg">
                      {treatment.image && (
                        <img 
                          src={treatment.image} 
                          alt={treatment.name}
                          className="w-full h-64 object-cover"
                        />
                      )}
                      <div className="p-8">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-2xl font-semibold text-[#2C2C2C]">{treatment.name}</h3>
                          <span className="text-[#A38E78] font-bold text-lg">{treatment.price}</span>
                        </div>
                        
                        <p className="text-[#333333] mb-6 leading-relaxed">
                          {treatment.description}
                        </p>
                        
                        {treatment.duration && (
                          <div className="flex items-center text-sm text-[#777777] mb-6">
                            <Clock className="w-4 h-4 mr-2 text-[#A38E78]" />
                            <span>{treatment.duration}</span>
                          </div>
                        )}
                        
                        {treatment.benefits && treatment.benefits.length > 0 && (
                          <div className="grid grid-cols-2 gap-3 mb-6">
                            {treatment.benefits.map((benefit, idx) => (
                              <div key={idx} className="flex items-center">
                                <div className="w-2 h-2 bg-[#A38E78] rounded-full mr-2"></div>
                                <span className="text-sm text-[#777777]">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        
                        <div className="flex space-x-3">
                          <Button 
                            onClick={() => handleNavigation(treatment.route || 'book-treatment')}
                            className="flex-1 bg-[#C6A77D] hover:bg-[#B5956A] text-[#2C2C2C]"
                          >
                            Book Consultation
                          </Button>
                          <Button 
                            variant="outline" 
                            className="border-[#A38E78] text-[#A38E78] hover:bg-[#A38E78] hover:text-white"
                          >
                            Learn More
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Process Section */}
        {showProcess && (
          <section className="py-20 bg-[#A38E78] text-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-light mb-4">
                  Your Treatment <span className="text-[#C6A77D]">Journey</span>
                </h2>
                <p className="text-xl text-[#F5F1EC] max-w-2xl mx-auto">
                  Our comprehensive approach ensures optimal results and your complete satisfaction.
                </p>
              </div>
              
              <div className="grid md:grid-cols-4 gap-8">
                {stepsToShow.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-[#C6A77D] text-[#2C2C2C] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-[#C6A77D]">{item.title}</h3>
                    <p className="text-[#F5F1EC]">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20 bg-[#F5F1EC]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-light text-[#2C2C2C] mb-6">
              Ready to Begin <span className="text-[#A38E78]">Your Journey?</span>
            </h2>
            <p className="text-xl text-[#333333] mb-8 max-w-2xl mx-auto">
              Book your consultation today and take the first step towards achieving your goals.
            </p>
            
            <Button 
              size="lg" 
              onClick={() => handleNavigation('book-treatment')}
              className="bg-[#A38E78] hover:bg-[#8B7355] text-white px-8 py-4"
            >
              Book Free Consultation
            </Button>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  )
}