import Navigation from '../../../Navigation'
import RussianFooter from '../../../RussianFooter'
import { Button } from '@/components/ui/button'
import { Sparkles, Volume2, Heart } from 'lucide-react'

const handleNavigation = (route: string) => {
  if ((window as any).navigateTo) {
    (window as any).navigateTo(route)
  }
}

export default function DermalFacialFillersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-[#111A19] to-[#284139] text-white overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/api/placeholder/1920/1080" 
              alt="Dermal and facial fillers"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#111A19]/80 to-transparent"></div>
          </div>
          
          <div className="relative container mx-auto px-4 py-32 flex items-center min-h-screen">
            <div className="max-w-2xl">
              <p className="text-[#F8D794] text-lg mb-4 tracking-wider">WELCOME TO MAGISPA</p>
              <h1 className="text-5xl lg:text-7xl font-light leading-tight mb-8">
                Your Sanctuary of<br />
                Facial Volume and<br />
                <span className="text-[#F8D794]">Natural Beauty</span>
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
            <h2 className="text-4xl font-light mb-8">Indulge in Volumized Beauty</h2>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto opacity-90">
              Step into a realm of restored volume and enhanced contours, where your natural beauty is artfully enhanced. 
              At MagiSpa, our dermal and facial fillers create harmonious facial proportions with precision and artistry.
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
                  <span className="text-[#284139]">Facial Harmony</span>
                </h2>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="bg-[#80907E]/20 p-4 rounded-full">
                      <Volume2 className="w-8 h-8 text-[#284139]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#111A19] mb-3">Volume Restoration</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Our premium hyaluronic acid fillers restore lost volume and create beautiful contours, 
                        addressing age-related volume loss with natural-looking results.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-6">
                    <div className="bg-[#80907E]/20 p-4 rounded-full">
                      <Sparkles className="w-8 h-8 text-[#284139]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#111A19] mb-3">Artistic Enhancement</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Our skilled practitioners understand facial anatomy and aesthetic proportions, 
                        creating beautifully balanced results that enhance your unique features.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-6">
                    <div className="bg-[#80907E]/20 p-4 rounded-full">
                      <Heart className="w-8 h-8 text-[#284139]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#111A19] mb-3">Long-lasting Results</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Experience results that last 12-18 months, with gradual, natural-looking enhancement 
                        that maintains your facial expressions and personality.
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
                  alt="Facial filler treatment"
                  className="rounded-3xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Revitalize Section */}
        <section className="py-24 bg-[#F8D794]/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-light text-[#111A19] mb-8">Revitalize Your Features</h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-16">
              Our dermal and facial fillers address multiple areas of concern, creating comprehensive 
              facial rejuvenation with natural-looking enhancement.
            </p>
            
            <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
              {/* Cheek Enhancement */}
              <div className="text-left">
                <div className="mb-8">
                  <img 
                    src="/api/placeholder/500/400" 
                    alt="Cheek enhancement"
                    className="rounded-2xl shadow-lg w-full"
                  />
                </div>
                <h3 className="text-2xl font-light text-[#111A19] mb-6">Cheek & Mid-Face</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Restore volume to the cheeks and mid-face area, creating lifted contours 
                  and addressing age-related volume loss for a more youthful appearance.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-[#111A19] mb-3">Treatment Areas:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-[#284139] rounded-full mr-3"></div>
                      <span className="text-gray-600">Cheek augmentation</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-[#284139] rounded-full mr-3"></div>
                      <span className="text-gray-600">Mid-face lifting</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-[#284139] rounded-full mr-3"></div>
                      <span className="text-gray-600">Temple restoration</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Jawline & Chin */}
              <div className="text-left">
                <div className="mb-8">
                  <img 
                    src="/api/placeholder/500/400" 
                    alt="Jawline enhancement"
                    className="rounded-2xl shadow-lg w-full"
                  />
                </div>
                <h3 className="text-2xl font-light text-[#111A19] mb-6">Jawline & Chin</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Define and enhance the jawline and chin for improved facial balance 
                  and a more structured, confident appearance.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-[#111A19] mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-[#284139] rounded-full mr-3"></div>
                      <span className="text-gray-600">Stronger jawline</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-[#284139] rounded-full mr-3"></div>
                      <span className="text-gray-600">Chin projection</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-[#284139] rounded-full mr-3"></div>
                      <span className="text-gray-600">Facial balance</span>
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
                  <h3 className="text-xl font-semibold text-[#111A19] mb-3">Duration</h3>
                  <p className="text-2xl font-light text-[#284139] mb-2">45-60 minutes</p>
                  <p className="text-gray-600 text-sm">Including consultation</p>
                </div>
                
                <div className="text-center bg-[#F8D794]/10 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-[#111A19] mb-3">Results</h3>
                  <p className="text-2xl font-light text-[#284139] mb-2">Immediate</p>
                  <p className="text-gray-600 text-sm">Lasting 12-18 months</p>
                </div>
                
                <div className="text-center bg-[#F8D794]/10 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-[#111A19] mb-3">Pricing</h3>
                  <p className="text-2xl font-light text-[#284139] mb-2">From £350</p>
                  <p className="text-gray-600 text-sm">Per 1ml treatment</p>
                </div>
              </div>
              
              <div className="text-center">
                <Button 
                  onClick={() => handleNavigation('book-treatment')}
                  className="bg-[#284139] hover:bg-[#111A19] text-white px-8 py-4 text-lg font-light tracking-wide"
                >
                  BOOK YOUR DERMAL FILLER TREATMENT
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