import ProcedurePageTemplate from '../../../ProcedurePageTemplate'
import { Button } from '@/components/ui/button'
import { Clock, Zap, Heart } from 'lucide-react'

const handleNavigation = (route: string) => {
  if ((window as any).navigateTo) {
    (window as any).navigateTo(route)
  }
}

export default function AntiWrinkleTreatmentPage() {
  const heroProps = {
    tagline: "WELCOME TO MAGISPA",
    title: "Your Sanctuary of Smooth Skin and",
    subtitle: "Timeless Beauty",
    description: "Advanced anti-wrinkle treatments using precision techniques to restore your skin's youthful smoothness.",
    buttonText: "BOOK CONSULTATION"
  }

  const treatmentInfo = {
    duration: "15-30 minutes",
    results: "3-7 days",
    price: "From £200",
    benefits: [
      "Reduces fine lines and wrinkles",
      "Natural-looking results",
      "Quick treatment time",
      "Minimal discomfort",
      "No downtime required",
      "Long-lasting effects"
    ]
  }

  const customSections = (
    <>
      {/* Indulgence Section */}
      <section className="py-24 bg-[#80907E] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-light mb-8">Indulge in Ageless Beauty</h2>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto opacity-90">
            Step into a realm of timeless beauty, where fine lines and wrinkles gently fade away. 
            At MagiSpa, our anti-wrinkle treatments use precision techniques to restore your skin's youthful smoothness.
          </p>
        </div>
      </section>

      {/* Oasis Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-light text-[#111A19] mb-8">
                Your Oasis of<br />
                <span className="text-[#284139]">Youthful Radiance</span>
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-[#80907E]/20 p-4 rounded-full">
                    <Zap className="w-8 h-8 text-[#284139]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#111A19] mb-3">Precision Technique</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Our skilled practitioners use advanced injection techniques to target specific muscles 
                      responsible for expression lines, creating natural-looking results.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="bg-[#80907E]/20 p-4 rounded-full">
                    <Clock className="w-8 h-8 text-[#284139]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#111A19] mb-3">Quick & Effective</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Treatment takes just 15-30 minutes with minimal discomfort. Results begin to appear 
                      within 3-5 days, with full effects visible within 2 weeks.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="bg-[#80907E]/20 p-4 rounded-full">
                    <Heart className="w-8 h-8 text-[#284139]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#111A19] mb-3">Natural Results</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Our approach ensures you maintain natural facial expressions while dramatically 
                      reducing the appearance of fine lines and wrinkles.
                    </p>
                  </div>
                </div>
              </div>
              
              <Button 
                onClick={() => handleNavigation('procedures-injectables')}
                className="mt-8 bg-transparent border-2 border-[#284139] text-[#284139] hover:bg-[#284139] hover:text-white px-8 py-3 font-light tracking-wide transition-all duration-300"
              >
                VIEW ALL INJECTABLES
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src="/api/placeholder/600/700" 
                alt="Anti-wrinkle injection process"
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Revitalize Section */}
      <section className="py-24 bg-[#F8D794]/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-light text-[#111A19] mb-8">Revitalize Your Expression</h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-16">
            Our anti-wrinkle treatments target the most common areas of concern, helping you achieve 
            a refreshed and youthful appearance.
          </p>
          
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Treatment Areas */}
            <div className="text-left">
              <div className="mb-8">
                <img 
                  src="/api/placeholder/500/400" 
                  alt="Forehead treatment"
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
              <h3 className="text-2xl font-light text-[#111A19] mb-6">Forehead & Frown Lines</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Smooth horizontal forehead lines and vertical frown lines between the brows 
                for a more relaxed and approachable appearance.
              </p>
              <div className="mb-6">
                <h4 className="font-semibold text-[#111A19] mb-3">Treatment Areas:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#284139] rounded-full mr-3"></div>
                    <span className="text-gray-600">Horizontal forehead lines</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#284139] rounded-full mr-3"></div>
                    <span className="text-gray-600">Frown lines (11s)</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#284139] rounded-full mr-3"></div>
                    <span className="text-gray-600">Glabellar lines</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Crow's Feet */}
            <div className="text-left">
              <div className="mb-8">
                <img 
                  src="/api/placeholder/500/400" 
                  alt="Crow's feet treatment"
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
              <h3 className="text-2xl font-light text-[#111A19] mb-6">Crow's Feet & Eye Area</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Soften the fine lines around the eyes that appear when smiling or squinting, 
                creating a more youthful and bright-eyed appearance.
              </p>
              <div className="mb-6">
                <h4 className="font-semibold text-[#111A19] mb-3">Benefits:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#284139] rounded-full mr-3"></div>
                    <span className="text-gray-600">Smoother eye area</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#284139] rounded-full mr-3"></div>
                    <span className="text-gray-600">Brighter appearance</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#284139] rounded-full mr-3"></div>
                    <span className="text-gray-600">Natural expressions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )

  return (
    <ProcedurePageTemplate 
      hero={heroProps}
      treatmentInfo={treatmentInfo}
      customSections={customSections}
      showStandardSections={false}
    />
  )
}