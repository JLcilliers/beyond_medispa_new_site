import Navigation from '../../Navigation'
import RussianFooter from '../../RussianFooter'
import { Button } from '@/components/ui/button'
import { Target, Users, Heart } from 'lucide-react'

const handleNavigation = (route: string) => {
  if ((window as any).navigateTo) {
    (window as any).navigateTo(route)
  }
}

export default function SkinConcernsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-[#111A19] to-[#284139] text-white overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/api/placeholder/1920/1080" 
              alt="Skin concern treatments"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#111A19]/80 to-transparent"></div>
          </div>
          
          <div className="relative container mx-auto px-4 py-32 flex items-center min-h-screen">
            <div className="max-w-2xl">
              <p className="text-[#F8D794] text-lg mb-4 tracking-wider">WELCOME TO MAGISPA</p>
              <h1 className="text-5xl lg:text-7xl font-light leading-tight mb-8">
                Your Sanctuary of<br />
                Targeted Solutions and<br />
                <span className="text-[#F8D794]">Skin Health</span>
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
            <h2 className="text-4xl font-light mb-8">Indulge in Targeted Skin Solutions</h2>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto opacity-90">
              Step into a realm of specialized care, where every skin concern is met with precision treatment. 
              At MagiSpa, we're dedicated to addressing your unique skin challenges with targeted, effective solutions.
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
                  <span className="text-[#284139]">Skin Solutions</span>
                </h2>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="bg-[#80907E]/20 p-4 rounded-full">
                      <Target className="w-8 h-8 text-[#284139]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#111A19] mb-3">Targeted Treatments</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Our condition-led approach ensures that every treatment is specifically designed to address 
                        your individual skin concerns with precision and expertise.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-6">
                    <div className="bg-[#80907E]/20 p-4 rounded-full">
                      <Users className="w-8 h-8 text-[#284139]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#111A19] mb-3">Skin Health Experts</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Our team of dermatology specialists and trained aestheticians understand the complexities 
                        of different skin conditions and provide expert guidance throughout your journey.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-6">
                    <div className="bg-[#80907E]/20 p-4 rounded-full">
                      <Heart className="w-8 h-8 text-[#284139]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#111A19] mb-3">Holistic Care</h3>
                      <p className="text-gray-700 leading-relaxed">
                        We believe in treating not just the symptoms but the underlying causes, creating 
                        comprehensive treatment plans for long-lasting skin health and confidence.
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
                  alt="Skin analysis and treatment"
                  className="rounded-3xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Revitalize Section */}
        <section className="py-24 bg-[#F8D794]/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-light text-[#111A19] mb-8">Revitalize Your Skin Health</h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-16">
              Our condition-led treatment hubs are designed to address specific skin concerns with 
              targeted protocols and expert care.
            </p>
            
            <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
              {/* Anti-Aging Hub */}
              <div className="text-left">
                <div className="mb-8">
                  <img 
                    src="/api/placeholder/500/400" 
                    alt="Anti-aging treatments"
                    className="rounded-2xl shadow-lg w-full"
                  />
                </div>
                <h3 className="text-2xl font-light text-[#111A19] mb-6">Anti-Aging Solutions</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Comprehensive anti-aging protocols combining advanced treatments to restore 
                  youthfulness and prevent future signs of aging.
                </p>
                <Button 
                  onClick={() => handleNavigation('treatments-anti-ageing')}
                  className="bg-transparent border border-[#284139] text-[#284139] hover:bg-[#284139] hover:text-white px-6 py-3 font-light tracking-wide transition-all duration-300"
                >
                  LEARN MORE
                </Button>
              </div>
              
              {/* Acne Solutions */}
              <div className="text-left">
                <div className="mb-8">
                  <img 
                    src="/api/placeholder/500/400" 
                    alt="Acne and scarring treatments"
                    className="rounded-2xl shadow-lg w-full"
                  />
                </div>
                <h3 className="text-2xl font-light text-[#111A19] mb-6">Acne & Scarring</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Specialized treatments for active acne and post-inflammatory scarring, 
                  designed to clear skin and restore smooth texture.
                </p>
                <Button 
                  onClick={() => handleNavigation('treatments-acne-scarring')}
                  className="bg-transparent border border-[#284139] text-[#284139] hover:bg-[#284139] hover:text-white px-6 py-3 font-light tracking-wide transition-all duration-300"
                >
                  LEARN MORE
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Skin Concerns Menu Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-[#111A19] mb-4">Condition-Led Treatment Hubs</h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Explore our specialized treatment hubs designed to address specific skin concerns with targeted solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { 
                  name: "Treatments for Anti-Ageing", 
                  description: "Comprehensive protocols to restore youthfulness",
                  route: "treatments-anti-ageing" 
                },
                { 
                  name: "Treatments for Acne and Scarring", 
                  description: "Specialized care for clear, smooth skin",
                  route: "treatments-acne-scarring" 
                },
                { 
                  name: "Treatments for Sun Damage and Pigmentation", 
                  description: "Advanced solutions for even skin tone",
                  route: "treatments-sun-damage-pigmentation" 
                },
                { 
                  name: "Treatments for Sensitive Skin", 
                  description: "Gentle, effective care for reactive skin",
                  route: "treatments-sensitive-skin" 
                },
                { 
                  name: "Mole & Skin Tag Removal", 
                  description: "Safe, professional removal procedures",
                  route: "mole-skin-tag-removal" 
                }
              ].map((treatment, index) => (
                <div key={index} className="group cursor-pointer" onClick={() => handleNavigation(treatment.route)}>
                  <div className="bg-[#F8D794]/10 rounded-2xl p-6 group-hover:bg-[#F8D794]/20 transition-all duration-300 text-center">
                    <h3 className="text-lg font-medium text-[#111A19] mb-3">{treatment.name}</h3>
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
                BOOK SKIN CONSULTATION
              </Button>
            </div>
          </div>
        </section>
      </div>
      
      <RussianFooter />
    </div>
  )
}