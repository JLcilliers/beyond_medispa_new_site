import CategoryPageTemplate from '../../CategoryPageTemplate'
import { Button } from '@/components/ui/button'
import { Sparkles, Users, Heart } from 'lucide-react'

const handleNavigation = (route: string) => {
  if ((window as any).navigateTo) {
    (window as any).navigateTo(route)
  }
}

export default function SkinTreatmentsPage() {
  const heroProps = {
    title: "Skin",
    subtitle: "Treatments",
    description: "Transform your skin with our advanced skincare treatments. From HydraFacials to laser therapy, reveal your natural radiance through expertly crafted treatments."
  }

  const customSections = (
    <>
      {/* Indulgence Section */}
      <section className="py-24 bg-[#80907E] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-light mb-8">Indulge in Transformative Skincare</h2>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto opacity-90">
            Step into a realm of advanced skincare, where cutting-edge technology meets nurturing care. 
            At MagiSpa, we're dedicated to revealing your skin's natural radiance through expertly crafted treatments.
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
                <span className="text-[#284139]">Skin Wellness</span>
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-[#80907E]/20 p-4 rounded-full">
                    <Sparkles className="w-8 h-8 text-[#284139]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#111A19] mb-3">Advanced Technology</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Our spa features the latest in skincare technology, from HydraFacials to LED therapy, 
                      designed to deliver exceptional results with comfort and precision.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="bg-[#80907E]/20 p-4 rounded-full">
                    <Users className="w-8 h-8 text-[#284139]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#111A19] mb-3">Skincare Specialists</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Our team of certified aestheticians and dermatology experts bring years of experience 
                      to each treatment, ensuring optimal results for every skin type.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="bg-[#80907E]/20 p-4 rounded-full">
                    <Heart className="w-8 h-8 text-[#284139]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#111A19] mb-3">Personalized Protocols</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Every skin journey begins with a comprehensive analysis, allowing us to create 
                      customized treatment protocols that address your specific skin concerns and goals.
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
                alt="Skincare treatments"
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Revitalize Section */}
      <section className="py-24 bg-[#F8D794]/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-light text-[#111A19] mb-8">Revitalize Your Complexion</h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-16">
            Our advanced skin treatments are designed to address every concern, from hydration and 
            anti-aging to acne and pigmentation, revealing your healthiest skin.
          </p>
          
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Facial Treatments */}
            <div className="text-left">
              <div className="mb-8">
                <img 
                  src="/api/placeholder/500/400" 
                  alt="Advanced facial treatments"
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
              <h3 className="text-2xl font-light text-[#111A19] mb-6">Advanced Facials</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                From HydraFacials to microneedling, our facial treatments combine cutting-edge 
                technology with therapeutic techniques for transformative results.
              </p>
              <Button 
                onClick={() => handleNavigation('hydrafacial')}
                className="bg-transparent border border-[#284139] text-[#284139] hover:bg-[#284139] hover:text-white px-6 py-3 font-light tracking-wide transition-all duration-300"
              >
                LEARN MORE
              </Button>
            </div>
            
            {/* Laser Treatments */}
            <div className="text-left">
              <div className="mb-8">
                <img 
                  src="/api/placeholder/500/400" 
                  alt="Laser skin treatments"
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
              <h3 className="text-2xl font-light text-[#111A19] mb-6">Laser & Light Therapy</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Experience the power of light-based treatments including LED therapy, IPL, 
                and Cool Laser for skin rejuvenation and targeted concern treatment.
              </p>
              <Button 
                onClick={() => handleNavigation('led-light-therapy-facial')}
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
            <h2 className="text-4xl font-light text-[#111A19] mb-4">Skin Treatment Menu</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Discover our comprehensive range of skin treatments designed to reveal your natural radiance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "HydraFacial", price: "From £150", route: "hydrafacial" },
              { name: "Oxygen Facial", price: "From £100", route: "oxygen-facial" },
              { name: "LED Light Therapy Facial", price: "From £100", route: "led-light-therapy-facial" },
              { name: "Microneedling", price: "From £250", route: "microneedling" },
              { name: "Chemical Peels", price: "From £180", route: "chemical-peels" },
              { name: "Anti-Aging Treatments", price: "From £250", route: "anti-ageing-treatments" }
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
    </>
  )

  return (
    <CategoryPageTemplate 
      hero={heroProps}
      customSections={customSections}
      showTreatmentGrid={false}
      showProcess={true}
    />
  )
}