import Navigation from '../../../Navigation'
import RussianFooter from '../../../RussianFooter'
import { Button } from '@/components/ui/button'

const handleNavigation = (route: string) => {
  if ((window as any).navigateTo) {
    (window as any).navigateTo(route)
  }
}

export default function UnderEyeCorrectionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20">
        <section className="relative min-h-screen bg-gradient-to-br from-[#111A19] to-[#284139] text-white overflow-hidden">
          <div className="absolute inset-0">
            <img src="/api/placeholder/1920/1080" alt="Under eye correction treatment" className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#111A19]/80 to-transparent"></div>
          </div>
          
          <div className="relative container mx-auto px-4 py-32 flex items-center min-h-screen">
            <div className="max-w-2xl">
              <p className="text-[#F8D794] text-lg mb-4 tracking-wider">WELCOME TO MAGISPA</p>
              <h1 className="text-5xl lg:text-7xl font-light leading-tight mb-8">
                Your Sanctuary of<br />
                Bright Eyes and<br />
                <span className="text-[#F8D794]">Youthful Radiance</span>
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

        <section className="py-24 bg-[#80907E] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-light mb-8">Indulge in Eye Perfection</h2>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto opacity-90">
              Step into a realm of eye enhancement, where dark circles, hollowing, and fine lines are expertly addressed. 
              At MagiSpa, our under eye correction treatments restore youthful brightness and vitality.
            </p>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-light text-[#111A19] mb-4">Treatment Details</h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center bg-[#F8D794]/10 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-[#111A19] mb-3">Duration</h3>
                  <p className="text-2xl font-light text-[#284139] mb-2">45 minutes</p>
                  <p className="text-gray-600 text-sm">Delicate precision work</p>
                </div>
                
                <div className="text-center bg-[#F8D794]/10 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-[#111A19] mb-3">Results</h3>
                  <p className="text-2xl font-light text-[#284139] mb-2">Immediate</p>
                  <p className="text-gray-600 text-sm">Lasting 12-18 months</p>
                </div>
                
                <div className="text-center bg-[#F8D794]/10 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-[#111A19] mb-3">Pricing</h3>
                  <p className="text-2xl font-light text-[#284139] mb-2">From £450</p>
                  <p className="text-gray-600 text-sm">Per treatment</p>
                </div>
              </div>
              
              <div className="text-center">
                <Button 
                  onClick={() => handleNavigation('book-treatment')}
                  className="bg-[#284139] hover:bg-[#111A19] text-white px-8 py-4 text-lg font-light tracking-wide"
                >
                  BOOK UNDER EYE CORRECTION
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