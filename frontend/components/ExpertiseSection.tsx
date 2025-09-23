import { Button } from '@/components/ui/button'
import { Award, Clock, Shield, Sparkles } from 'lucide-react'

export default function ExpertiseSection() {
  const handleNavigation = (route: string) => {
    if ((window as any).navigateTo) {
      (window as any).navigateTo(route)
    }
  }

  return (
    <section className="py-20 bg-[#111A19] text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Images */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/api/placeholder/300/400" 
                  alt="Aesthetic treatment expertise"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/api/placeholder/300/300" 
                  alt="Professional skincare"
                  className="w-full h-60 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
            <div className="space-y-6 mt-12">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/api/placeholder/300/300" 
                  alt="Advanced equipment"
                  className="w-full h-60 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/api/placeholder/300/400" 
                  alt="Luxury treatment room"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl lg:text-5xl font-light mb-6 leading-tight">
                Expertise, Combined with <span className="text-[#F8D794]">Quality</span>. 
                Essence of Beauty.
              </h2>
              <div className="w-20 h-1 bg-[#F8D794] mb-6"></div>
            </div>

            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Our commitment to excellence drives every aspect of our practice. With years of 
              experience and the latest aesthetic technologies, we deliver results that exceed 
              expectations while ensuring your comfort and safety.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-10">
              <div className="text-center">
                <div className="bg-[#F8D794]/10 p-4 rounded-full inline-block mb-4">
                  <Award className="w-8 h-8 text-[#F8D794]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Certified Excellence</h3>
                <p className="text-gray-400 text-sm">Award-winning clinic with certified practitioners</p>
              </div>
              
              <div className="text-center">
                <div className="bg-[#F8D794]/10 p-4 rounded-full inline-block mb-4">
                  <Shield className="w-8 h-8 text-[#F8D794]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Safety First</h3>
                <p className="text-gray-400 text-sm">Highest safety standards and medical protocols</p>
              </div>
              
              <div className="text-center">
                <div className="bg-[#F8D794]/10 p-4 rounded-full inline-block mb-4">
                  <Clock className="w-8 h-8 text-[#F8D794]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">15+ Years</h3>
                <p className="text-gray-400 text-sm">Extensive experience in aesthetic medicine</p>
              </div>
              
              <div className="text-center">
                <div className="bg-[#F8D794]/10 p-4 rounded-full inline-block mb-4">
                  <Sparkles className="w-8 h-8 text-[#F8D794]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Natural Results</h3>
                <p className="text-gray-400 text-sm">Subtle enhancements that look naturally beautiful</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => handleNavigation('about')}
                className="bg-[#F8D794] hover:bg-[#B86330] text-[#111A19] px-8 py-4"
              >
                Meet Our Team
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => handleNavigation('contact')}
                className="border-[#F8D794] text-[#F8D794] hover:bg-[#F8D794] hover:text-[#111A19] px-8 py-4"
              >
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}