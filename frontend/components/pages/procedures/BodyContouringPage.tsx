import Navigation from '../../Navigation'
import RussianFooter from '../../RussianFooter'
import { Button } from '@/components/ui/button'
import { Zap, Users, Heart } from 'lucide-react'

const handleNavigation = (route: string) => {
  if ((window as any).navigateTo) {
    (window as any).navigateTo(route)
  }
}

export default function BodyContouringPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-[#111A19] to-[#284139] text-white overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/api/placeholder/1920/1080" 
              alt="Body contouring treatments"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#111A19]/80 to-transparent"></div>
          </div>
          
          <div className="relative container mx-auto px-4 py-32 flex items-center min-h-screen">
            <div className="max-w-2xl">
              <p className="text-[#F8D794] text-lg mb-4 tracking-wider">WELCOME TO MAGISPA</p>
              <h1 className="text-5xl lg:text-7xl font-light leading-tight mb-8">
                Your Sanctuary of<br />
                Body Sculpting and<br />
                <span className="text-[#F8D794]">Transformation</span>
              </h1>
              <Button 
                onClick={() => handleNavigation('book-treatment')}
                className="bg-transparent border-2 border-[#F8D794] text-[#F8D794] hover:bg-[#F8D794] hover:text-[#111A19] px-8 py-4 text-lg font-light tracking-wide transition-all duration-300"
              >
                VIEW OUR SERVICES
              </Button>
            </div>
          </div>
        </section>

        {/* Indulgence Section */}
        <section className="py-24 bg-[#80907E] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-light mb-8">Indulge in Body Transformation</h2>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto opacity-90">
              Step into a realm of advanced body contouring, where innovative technology meets expert care. 
              At MagiSpa, we're dedicated to helping you achieve your ideal silhouette through non-invasive treatments.
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
                  <span className="text-[#284139]">Body Sculpting</span>
                </h2>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="bg-[#80907E]/20 p-4 rounded-full">
                      <Zap className="w-8 h-8 text-[#284139]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#111A19] mb-3">Cutting-Edge Technology</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Our body contouring suite features the latest in non-invasive technology, from CoolSculpting to 
                        radiofrequency treatments, designed to sculpt and refine your silhouette.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-6">
                    <div className="bg-[#80907E]/20 p-4 rounded-full">
                      <Users className="w-8 h-8 text-[#284139]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#111A19] mb-3">Body Sculpting Experts</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Our team of certified body contouring specialists bring extensive training and expertise 
                        to each treatment, ensuring safe and effective results.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-6">
                    <div className="bg-[#80907E]/20 p-4 rounded-full">
                      <Heart className="w-8 h-8 text-[#284139]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#111A19] mb-3">Customized Protocols</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Your body transformation journey begins with a detailed consultation, where we design 
                        a personalized treatment plan to target your specific areas of concern.
                      </p>
                    </div>
                  </div>
                </div>
                
                <Button 
                  onClick={() => handleNavigation('about')}
                  className="mt-8 bg-transparent border-2 border-[#284139] text-[#284139] hover:bg-[#284139] hover:text-white px-8 py-3 font-light tracking-wide transition-all duration-300"
                >
                  LEARN MORE ABOUT US
                </Button>
              </div>
              
              <div className="relative">
                <img 
                  src="/api/placeholder/600/700" 
                  alt="Body contouring treatment"
                  className="rounded-3xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Revitalize Section */}
        <section className="py-24 bg-[#F8D794]/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-light text-[#111A19] mb-8">Revitalize Your Silhouette</h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-16">
              Our body contouring treatments are designed to sculpt, tone, and refine your figure, 
              helping you achieve the silhouette you've always desired.
            </p>
            
            <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
              {/* Fat Reduction */}
              <div className="text-left">
                <div className="mb-8">
                  <img 
                    src="/api/placeholder/500/400" 
                    alt="Fat reduction treatments"
                    className="rounded-2xl shadow-lg w-full"
                  />
                </div>
                <h3 className="text-2xl font-light text-[#111A19] mb-6">Fat Reduction</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  From CoolSculpting to Vanquish, our fat reduction treatments offer a 
                  non-surgical approach to eliminating stubborn fat deposits.
                </p>
                <Button 
                  onClick={() => handleNavigation('coolsculpting')}
                  className="bg-transparent border border-[#284139] text-[#284139] hover:bg-[#284139] hover:text-white px-6 py-3 font-light tracking-wide transition-all duration-300"
                >
                  LEARN MORE
                </Button>
              </div>
              
              {/* Body Tightening */}
              <div className="text-left">
                <div className="mb-8">
                  <img 
                    src="/api/placeholder/500/400" 
                    alt="Body tightening treatments"
                    className="rounded-2xl shadow-lg w-full"
                  />
                </div>
                <h3 className="text-2xl font-light text-[#111A19] mb-6">Body Tightening</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Experience advanced radiofrequency and muscle stimulation treatments 
                  designed to tighten skin and tone muscles for a more sculpted appearance.
                </p>
                <Button 
                  onClick={() => handleNavigation('exilis-elite-body')}
                  className="bg-transparent border border-[#284139] text-[#284139] hover:bg-[#284139] hover:text-white px-6 py-3 font-light tracking-wide transition-all duration-300"
                >
                  LEARN MORE
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Treatments Menu Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-[#111A19] mb-4">Body Contouring Menu</h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Discover our comprehensive range of body contouring treatments designed to sculpt your ideal silhouette.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "CoolSculpting", price: "From £600", route: "coolsculpting" },
                { name: "CoolSculpting for Men", price: "From £650", route: "coolsculpting-men" },
                { name: "Fat Freezing", price: "From £500", route: "fat-freezing" },
                { name: "CM Slim", price: "From £200", route: "cm-slim" },
                { name: "Exilis Elite Body", price: "From £300", route: "exilis-elite-body" },
                { name: "Vanquish", price: "From £400", route: "vanquish" },
                { name: "Buttocks Enhancement", price: "From £800", route: "buttocks-enhancement" }
              ].map((treatment, index) => (
                <div key={index} className="group cursor-pointer" onClick={() => handleNavigation(treatment.route)}>
                  <div className="bg-[#F8D794]/10 rounded-2xl p-6 group-hover:bg-[#F8D794]/20 transition-all duration-300">
                    <h3 className="text-lg font-medium text-[#111A19] mb-2">{treatment.name}</h3>
                    <p className="text-[#284139] font-semibold">{treatment.price}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button 
                onClick={() => handleNavigation('book-treatment')}
                className="bg-[#284139] hover:bg-[#111A19] text-white px-8 py-4 text-lg font-light tracking-wide"
              >
                BOOK YOUR TREATMENT
              </Button>
            </div>
          </div>
        </section>
      </div>
      
      <RussianFooter />
    </div>
  )
}