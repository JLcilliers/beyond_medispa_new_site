import { Button } from '@/components/ui/button'
import { Award, Clock, Shield, Sparkles } from 'lucide-react'

export default function ExpertiseSection() {
  const handleNavigation = (route: string) => {
    if (window.navigateTo) {
      (window as any).navigateTo(route)
    }
  }

  return (
    <section className="py-20 bg-[#F5F1EC] text-[#333333]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Images */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://i.ibb.co/4R2SfBpq/beautician-applying-facial-mask-at-cosmetic-clinic-2024-10-31-01-14-38-utc.webp"
                  alt="Aesthetic treatment expertise"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://i.ibb.co/Kj4wWGcD/beauty-salon-beautician-applies-cooling-gel-to-cli-2025-01-09-05-05-23-utc-1.webp"
                  alt="Professional skincare"
                  className="w-full h-60 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
            <div className="space-y-6 mt-12">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://i.ibb.co/Zz6VZvZS/a-drop-of-gel-pours-from-a-syringe-for-cosmetic-pr-2025-03-16-09-14-11-utc.webp"
                  alt="Advanced equipment"
                  className="w-full h-60 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://i.ibb.co/nqqyz2vP/a-beautician-wearing-gloves-vacuum-cleans-and-poli-2024-12-02-09-41-13-utc.webp"
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
                Expertise, Combined with <span className="text-[#A38E78]">Quality</span>. 
                Essence of Beauty.
              </h2>
              <div className="w-20 h-1 bg-[#A38E78] mb-6"></div>
            </div>

            <p className="text-xl text-[#777777] leading-relaxed mb-10">
              Our commitment to excellence drives every aspect of our practice. With years of 
              experience and the latest aesthetic technologies, we deliver results that exceed 
              expectations while ensuring your comfort and safety.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-10">
              <div className="text-center">
                <div className="bg-[#A38E78]/10 p-4 rounded-full inline-block mb-4">
                  <Award className="w-8 h-8 text-[#A38E78]" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[#333333]">Certified Excellence</h3>
                <p className="text-[#777777] text-sm">Award-winning clinic with certified practitioners</p>
              </div>
              
              <div className="text-center">
                <div className="bg-[#A38E78]/10 p-4 rounded-full inline-block mb-4">
                  <Shield className="w-8 h-8 text-[#A38E78]" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[#333333]">Safety First</h3>
                <p className="text-[#777777] text-sm">Highest safety standards and medical protocols</p>
              </div>
              
              <div className="text-center">
                <div className="bg-[#A38E78]/10 p-4 rounded-full inline-block mb-4">
                  <Clock className="w-8 h-8 text-[#A38E78]" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[#333333]">15+ Years</h3>
                <p className="text-[#777777] text-sm">Extensive experience in aesthetic medicine</p>
              </div>
              
              <div className="text-center">
                <div className="bg-[#A38E78]/10 p-4 rounded-full inline-block mb-4">
                  <Sparkles className="w-8 h-8 text-[#A38E78]" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[#333333]">Natural Results</h3>
                <p className="text-[#777777] text-sm">Subtle enhancements that look naturally beautiful</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => handleNavigation('about')}
                className="bg-[#A38E78] hover:bg-[#8B7A67] text-white px-8 py-4"
              >
                Meet Our Team
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => handleNavigation('contact')}
                className="border-[#A38E78] text-[#A38E78] hover:bg-[#A38E78] hover:text-white px-8 py-4"
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