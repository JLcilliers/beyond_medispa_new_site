import Navigation from '../../Navigation'
import RussianFooter from '../../RussianFooter'
import { Button } from '@/components/ui/button'
import { Flower, Users, Heart } from 'lucide-react'

const handleNavigation = (route: string) => {
  if ((window as any).navigateTo) {
    (window as any).navigateTo(route)
  }
}

export default function WellbeingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-[#111A19] to-[#284139] text-white overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/api/placeholder/1920/1080" 
              alt="Wellbeing and specialist therapies"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#111A19]/80 to-transparent"></div>
          </div>
          
          <div className="relative container mx-auto px-4 py-32 flex items-center min-h-screen">
            <div className="max-w-2xl">
              <p className="text-[#F8D794] text-lg mb-4 tracking-wider">WELCOME TO MAGISPA</p>
              <h1 className="text-5xl lg:text-7xl font-light leading-tight mb-8">
                Your Sanctuary of<br />
                Holistic Wellness and<br />
                <span className="text-[#F8D794]">Inner Harmony</span>
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
            <h2 className="text-4xl font-light mb-8">Indulge in Holistic Wellness</h2>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto opacity-90">
              Step into a realm of complete wellness, where mind, body, and spirit unite in harmony. 
              At MagiSpa, we're dedicated to nurturing your overall wellbeing through specialized therapies and healing treatments.
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
                  <span className="text-[#284139]">Complete Wellness</span>
                </h2>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="bg-[#80907E]/20 p-4 rounded-full">
                      <Flower className="w-8 h-8 text-[#284139]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#111A19] mb-3">Holistic Approach</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Our wellness treatments address not just physical concerns but emotional and spiritual 
                        wellbeing, creating a truly transformative experience.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-6">
                    <div className="bg-[#80907E]/20 p-4 rounded-full">
                      <Users className="w-8 h-8 text-[#284139]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#111A19] mb-3">Wellness Specialists</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Our team includes certified massage therapists, wellness coaches, and holistic practitioners 
                        dedicated to your complete wellbeing journey.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-6">
                    <div className="bg-[#80907E]/20 p-4 rounded-full">
                      <Heart className="w-8 h-8 text-[#284139]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#111A19] mb-3">Personalized Wellness</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Every wellness journey is unique. We create personalized treatment plans that honor 
                        your individual needs, preferences, and wellness goals.
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
                  alt="Wellness and spa treatments"
                  className="rounded-3xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Revitalize Section */}
        <section className="py-24 bg-[#F8D794]/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-light text-[#111A19] mb-8">Revitalize Your Spirit</h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-16">
              Our wellbeing treatments are designed to restore balance, reduce stress, and enhance 
              your overall quality of life through therapeutic touch and healing energy.
            </p>
            
            <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
              {/* Therapeutic Treatments */}
              <div className="text-left">
                <div className="mb-8">
                  <img 
                    src="/api/placeholder/500/400" 
                    alt="Therapeutic treatments"
                    className="rounded-2xl shadow-lg w-full"
                  />
                </div>
                <h3 className="text-2xl font-light text-[#111A19] mb-6">Therapeutic Treatments</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  From anti-cellulite therapy to mesotherapy, our body treatments offer a 
                  holistic approach to wellness, leaving you refreshed and renewed.
                </p>
                <Button 
                  onClick={() => handleNavigation('anti-cellulite-alidya')}
                  className="bg-transparent border border-[#284139] text-[#284139] hover:bg-[#284139] hover:text-white px-6 py-3 font-light tracking-wide transition-all duration-300"
                >
                  LEARN MORE
                </Button>
              </div>
              
              {/* Healing Therapies */}
              <div className="text-left">
                <div className="mb-8">
                  <img 
                    src="/api/placeholder/500/400" 
                    alt="Healing therapies"
                    className="rounded-2xl shadow-lg w-full"
                  />
                </div>
                <h3 className="text-2xl font-light text-[#111A19] mb-6">Healing Therapies</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Experience the power of touch through our signature massage therapies and 
                  intuitive healing sessions designed to restore mind-body harmony.
                </p>
                <Button 
                  onClick={() => handleNavigation('harmony-massage')}
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
              <h2 className="text-4xl font-light text-[#111A19] mb-4">Wellbeing & Specialist Therapies</h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Discover our range of wellness treatments designed to nurture your complete wellbeing.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { 
                  name: "Anti-Cellulite Treatment / Alidya", 
                  description: "Advanced cellulite reduction therapy",
                  price: "From £300",
                  route: "anti-cellulite-alidya" 
                },
                { 
                  name: "Intuitive Healing", 
                  description: "Energy healing and chakra balancing",
                  price: "From £120",
                  route: "intuitive-healing" 
                },
                { 
                  name: "The Harmony Massage", 
                  description: "Signature full-body relaxation therapy",
                  price: "From £150",
                  route: "harmony-massage" 
                },
                { 
                  name: "Mesotherapy", 
                  description: "Micro-injection therapy for skin rejuvenation",
                  price: "From £200",
                  route: "mesotherapy" 
                },
                { 
                  name: "Sarah Carolides (Nutritionist & Skin Health)", 
                  description: "Holistic nutrition and skin health consultation",
                  price: "From £180",
                  route: "sarah-carolides-nutritionist" 
                }
              ].map((treatment, index) => (
                <div key={index} className="group cursor-pointer" onClick={() => handleNavigation(treatment.route)}>
                  <div className="bg-[#F8D794]/10 rounded-2xl p-8 group-hover:bg-[#F8D794]/20 transition-all duration-300">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-medium text-[#111A19] flex-1 mr-4">{treatment.name}</h3>
                      <span className="text-[#284139] font-semibold text-sm">{treatment.price}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{treatment.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button 
                onClick={() => handleNavigation('book-treatment')}
                className="bg-[#284139] hover:bg-[#111A19] text-white px-8 py-4 text-lg font-light tracking-wide"
              >
                BOOK WELLNESS CONSULTATION
              </Button>
            </div>
          </div>
        </section>
      </div>
      
      <RussianFooter />
    </div>
  )
}