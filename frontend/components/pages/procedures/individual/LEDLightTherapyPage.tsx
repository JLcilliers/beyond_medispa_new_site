import Navigation from '../../../Navigation'
import RussianFooter from '../../../RussianFooter'
import { Button } from '@/components/ui/button'
import { Lightbulb, Zap, RefreshCw } from 'lucide-react'

const handleNavigation = (route: string) => {
  if ((window as any).navigateTo) {
    (window as any).navigateTo(route)
  }
}

export default function LEDLightTherapyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-[#111A19] to-[#284139] text-white overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/api/placeholder/1920/1080" 
              alt="LED light therapy"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#111A19]/80 to-transparent"></div>
          </div>
          
          <div className="relative container mx-auto px-4 py-32 flex items-center min-h-screen">
            <div className="max-w-2xl">
              <p className="text-[#F8D794] text-lg mb-4 tracking-wider">WELCOME TO MAGISPA</p>
              <h1 className="text-5xl lg:text-7xl font-light leading-tight mb-8">
                Your Sanctuary of<br />
                Light Healing and<br />
                <span className="text-[#F8D794]">Cellular Renewal</span>
              </h1>
              <Button 
                onClick={() => handleNavigation('book-treatment')}
                className="bg-transparent border-2 border-[#F8D794] text-[#F8D794] hover:bg-[#F8D794] hover:text-[#111A19] px-8 py-4 text-lg font-light tracking-wide transition-all duration-300"
              >
                BOOK CONSULTATION
              </Button>
            </div>
          </div>
        </section>

        {/* Indulgence Section */}
        <section className="py-24 bg-[#80907E] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-light mb-8">Indulge in Therapeutic Light</h2>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto opacity-90">
              Step into a realm of healing light, where advanced phototherapy awakens your skin's natural repair mechanisms. 
              At MagiSpa, LED light therapy harnesses the power of specific wavelengths for targeted skin transformation.
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
                  <span className="text-[#284139]">Light Therapy</span>
                </h2>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="bg-[#80907E]/20 p-4 rounded-full">
                      <Lightbulb className="w-8 h-8 text-[#284139]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#111A19] mb-3">Multi-Wavelength Technology</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Our advanced LED panels emit specific wavelengths of red, blue, and near-infrared light 
                        to target different skin concerns and cellular processes.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-6">
                    <div className="bg-[#80907E]/20 p-4 rounded-full">
                      <Zap className="w-8 h-8 text-[#284139]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#111A19] mb-3">Cellular Stimulation</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Photobiomodulation activates cellular energy production, enhances collagen synthesis, 
                        and promotes natural healing processes within the skin.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-6">
                    <div className="bg-[#80907E]/20 p-4 rounded-full">
                      <RefreshCw className="w-8 h-8 text-[#284139]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#111A19] mb-3">Non-Invasive Healing</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Completely painless and relaxing treatment with no side effects, 
                        suitable for all skin types and conditions.
                      </p>
                    </div>
                  </div>
                </div>
                
                <Button 
                  onClick={() => handleNavigation('procedures-skin-treatments')}
                  className="mt-8 bg-transparent border-2 border-[#284139] text-[#284139] hover:bg-[#284139] hover:text-white px-8 py-3 font-light tracking-wide transition-all duration-300"
                >
                  VIEW ALL SKIN TREATMENTS
                </Button>
              </div>
              
              <div className="relative">
                <img 
                  src="/api/placeholder/600/700" 
                  alt="LED light therapy treatment"
                  className="rounded-3xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Details Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-light text-[#111A19] mb-4">Treatment Details</h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center bg-[#F8D794]/10 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-[#111A19] mb-3">Duration</h3>
                  <p className="text-2xl font-light text-[#284139] mb-2">20-30 minutes</p>
                  <p className="text-gray-600 text-sm">Relaxing treatment</p>
                </div>
                
                <div className="text-center bg-[#F8D794]/10 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-[#111A19] mb-3">Sessions</h3>
                  <p className="text-2xl font-light text-[#284139] mb-2">6-12 treatments</p>
                  <p className="text-gray-600 text-sm">2-3 times per week</p>
                </div>
                
                <div className="text-center bg-[#F8D794]/10 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-[#111A19] mb-3">Pricing</h3>
                  <p className="text-2xl font-light text-[#284139] mb-2">From £100</p>
                  <p className="text-gray-600 text-sm">Per session</p>
                </div>
              </div>
              
              <div className="text-center">
                <Button 
                  onClick={() => handleNavigation('book-treatment')}
                  className="bg-[#284139] hover:bg-[#111A19] text-white px-8 py-4 text-lg font-light tracking-wide"
                >
                  BOOK YOUR LED LIGHT THERAPY
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <RussianFooter />
    </div>
  )
}