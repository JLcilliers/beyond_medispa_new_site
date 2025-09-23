import CategoryPageTemplate from '../../CategoryPageTemplate'
import { Button } from '@/components/ui/button'
import { Leaf, Users, Heart } from 'lucide-react'

const handleNavigation = (route: string) => {
  if ((window as any).navigateTo) {
    (window as any).navigateTo(route)
  }
}

export default function InjectablesPage() {
  const heroProps = {
    title: "Your Sanctuary of Enhancement and",
    subtitle: "Rejuvenation",
    description: "Experience the artistry of injectable treatments with our expert practitioners, enhancing your natural beauty with precision and care."
  }

  const customSections = (
    <>
      {/* Indulgence Section */}
      <section className="py-24 bg-[#80907E] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-light mb-8">Indulge in Blissful Enhancement</h2>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto opacity-90">
            Step into a realm of tranquility, where stress melts away and your spirit soars. 
            At MagiSpa, we're dedicated to providing you with an unparalleled spa experience that rejuvenates your mind, body, and soul.
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
                <span className="text-[#284139]">Enhancement</span>
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-[#80907E]/20 p-4 rounded-full">
                    <Leaf className="w-8 h-8 text-[#284139]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#111A19] mb-3">Nurturing Atmosphere</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Our spa is a haven of serenity, carefully designed to transport you from the chaos of daily life to a realm of utter calmness.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="bg-[#80907E]/20 p-4 rounded-full">
                    <Users className="w-8 h-8 text-[#284139]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#111A19] mb-3">Skilled Practitioners</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Our team of certified therapists and specialists bring a wealth of knowledge and expertise to each treatment, ensuring you receive the highest level of care.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="bg-[#80907E]/20 p-4 rounded-full">
                    <Heart className="w-8 h-8 text-[#284139]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#111A19] mb-3">Tailored Treatments</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Your journey with us begins with a personalized consultation, where we create a bespoke treatment plan that addresses your unique needs and desires.
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
                alt="Spa atmosphere"
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Revitalize Section */}
      <section className="py-24 bg-[#F8D794]/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-light text-[#111A19] mb-8">Revitalize Your Senses</h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-16">
            Our services are tailored specifically to enhance your natural beauty, ensuring that you receive the 
            pampering you deserve.
          </p>
          
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Injectable Treatments */}
            <div className="text-left">
              <div className="mb-8">
                <img 
                  src="/api/placeholder/500/400" 
                  alt="Injectable treatments"
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
              <h3 className="text-2xl font-light text-[#111A19] mb-6">Injectable Treatments</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                From anti-wrinkle solutions to dermal fillers, our body treatments offer a 
                holistic approach to wellness, leaving you refreshed and renewed.
              </p>
              <Button 
                onClick={() => handleNavigation('anti-wrinkle-treatment')}
                className="bg-transparent border border-[#284139] text-[#284139] hover:bg-[#284139] hover:text-white px-6 py-3 font-light tracking-wide transition-all duration-300"
              >
                LEARN MORE
              </Button>
            </div>
            
            {/* Enhancement Therapy */}
            <div className="text-left">
              <div className="mb-8">
                <img 
                  src="/api/placeholder/500/400" 
                  alt="Enhancement therapy"
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
              <h3 className="text-2xl font-light text-[#111A19] mb-6">Enhancement Therapy</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Immerse yourself in our array of massage techniques, from soothing Swedish to 
                invigorating deep tissue, each designed to relieve tension and promote relaxation.
              </p>
              <Button 
                onClick={() => handleNavigation('dermal-facial-fillers')}
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
            <h2 className="text-4xl font-light text-[#111A19] mb-4">Injectable Treatments Menu</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Discover our comprehensive range of injectable treatments designed to enhance your natural beauty.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Anti-Wrinkle Treatment", price: "From £200", route: "anti-wrinkle-treatment" },
              { name: "Dermal & Facial Fillers", price: "From £350", route: "dermal-facial-fillers" },
              { name: "Lip Enhancement", price: "From £300", route: "lip-enhancement" },
              { name: "Cheek Enhancement", price: "From £400", route: "cheek-enhancement" },
              { name: "Nasolabial Lines", price: "From £350", route: "nasolabial-lines" },
              { name: "Under Eye Correction", price: "From £450", route: "under-eye-correction" },
              { name: "Profhilo", price: "From £450", route: "profhilo" },
              { name: "B12 Injections", price: "From £50", route: "b12-injections" }
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