import Navigation from '../../../Navigation'
import RussianFooter from '../../../RussianFooter'
import { Button } from '@/components/ui/button'
import { Droplets, Sparkles, Heart } from 'lucide-react'

const handleNavigation = (route: string) => {
  if ((window as any).navigateTo) {
    (window as any).navigateTo(route)
  }
}

export default function ProfhiloPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-[#111A19] to-[#284139] text-white overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/api/placeholder/1920/1080" 
              alt="Profhilo bio-remodeling treatment"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#111A19]/80 to-transparent"></div>
          </div>
          
          <div className="relative container mx-auto px-4 py-32 flex items-center min-h-screen">
            <div className="max-w-2xl">
              <p className="text-[#F8D794] text-lg mb-4 tracking-wider">WELCOME TO MAGISPA</p>
              <h1 className="text-5xl lg:text-7xl font-light leading-tight mb-8">
                Your Sanctuary of<br />
                Bio-Remodeling and<br />
                <span className="text-[#F8D794]">Skin Perfection</span>
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
            <h2 className="text-4xl font-light mb-8">Indulge in Revolutionary Bio-Remodeling</h2>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto opacity-90">
              Step into a realm of advanced skin rejuvenation, where innovative bio-remodeling technology transforms your skin from within. 
              At MagiSpa, Profhilo represents the pinnacle of non-surgical skin enhancement.
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
                  <span className="text-[#284139]">Skin Transformation</span>
                </h2>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="bg-[#80907E]/20 p-4 rounded-full">
                      <Droplets className="w-8 h-8 text-[#284139]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#111A19] mb-3">Deep Hydration</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Profhilo's unique formulation provides intense hydration at multiple skin levels, 
                        creating a reservoir of moisture that lasts for months.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-6">
                    <div className="bg-[#80907E]/20 p-4 rounded-full">
                      <Sparkles className="w-8 h-8 text-[#284139]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#111A19] mb-3">Bio-Remodeling Technology</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Stimulates collagen and elastin production naturally, improving skin texture, 
                        firmness, and overall quality without adding volume.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-6">
                    <div className="bg-[#80907E]/20 p-4 rounded-full">
                      <Heart className="w-8 h-8 text-[#284139]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#111A19] mb-3">Natural Enhancement</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Creates subtle, natural-looking improvements that enhance your skin's natural beauty 
                        without changing your facial structure or expressions.
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
                  alt="Profhilo bio-remodeling"
                  className="rounded-3xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Revitalize Section */}
        <section className="py-24 bg-[#F8D794]/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-light text-[#111A19] mb-8">Revitalize Your Skin Quality</h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-16">
              Profhilo can be used on multiple areas of the body to improve skin quality, 
              hydration, and firmness for comprehensive rejuvenation.
            </p>
            
            <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
              {/* Face & Neck */}
              <div className="text-left">
                <div className="mb-8">
                  <img 
                    src="/api/placeholder/500/400" 
                    alt="Profhilo face treatment"
                    className="rounded-2xl shadow-lg w-full"
                  />
                </div>
                <h3 className="text-2xl font-light text-[#111A19] mb-6">Face & Neck Treatment</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Comprehensive facial and neck treatment using precise injection points 
                  to maximize hydration and bio-remodeling effects.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-[#111A19] mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-[#284139] rounded-full mr-3"></div>
                      <span className="text-gray-600">Improved skin hydration</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-[#284139] rounded-full mr-3"></div>
                      <span className="text-gray-600">Enhanced skin firmness</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-[#284139] rounded-full mr-3"></div>
                      <span className="text-gray-600">Smoother skin texture</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Body Areas */}
              <div className="text-left">
                <div className="mb-8">
                  <img 
                    src="/api/placeholder/500/400" 
                    alt="Profhilo body treatment"
                    className="rounded-2xl shadow-lg w-full"
                  />
                </div>
                <h3 className="text-2xl font-light text-[#111A19] mb-6">Body Applications</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Extend the benefits of bio-remodeling to other areas of the body 
                  for comprehensive skin quality improvement.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-[#111A19] mb-3">Treatment Areas:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-[#284139] rounded-full mr-3"></div>
                      <span className="text-gray-600">Hands & décolletage</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-[#284139] rounded-full mr-3"></div>
                      <span className="text-gray-600">Arms & knees</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-[#284139] rounded-full mr-3"></div>
                      <span className="text-gray-600">Abdomen</span>
                    </li>
                  </ul>
                </div>
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
                  <h3 className="text-xl font-semibold text-[#111A19] mb-3">Sessions</h3>
                  <p className="text-2xl font-light text-[#284139] mb-2">2 treatments</p>
                  <p className="text-gray-600 text-sm">4 weeks apart</p>
                </div>
                
                <div className="text-center bg-[#F8D794]/10 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-[#111A19] mb-3">Results</h3>
                  <p className="text-2xl font-light text-[#284139] mb-2">2-4 weeks</p>
                  <p className="text-gray-600 text-sm">Lasting 6-9 months</p>
                </div>
                
                <div className="text-center bg-[#F8D794]/10 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-[#111A19] mb-3">Pricing</h3>
                  <p className="text-2xl font-light text-[#284139] mb-2">From £450</p>
                  <p className="text-gray-600 text-sm">Per treatment session</p>
                </div>
              </div>
              
              <div className="text-center">
                <Button 
                  onClick={() => handleNavigation('book-treatment')}
                  className="bg-[#284139] hover:bg-[#111A19] text-white px-8 py-4 text-lg font-light tracking-wide"
                >
                  BOOK YOUR PROFHILO TREATMENT
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