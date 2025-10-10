import { Button } from '@/components/ui/button'
import { Heart, Star, Sparkles, Shield } from 'lucide-react'

const services = [
  {
    icon: Heart,
    title: "Facial Treatments",
    description: "Advanced skincare solutions for radiant, healthy skin",
    features: ["HydraFacial", "Chemical Peels", "LED Therapy"]
  },
  {
    icon: Sparkles,
    title: "Injectable Aesthetics", 
    description: "Natural enhancement with premium dermal fillers",
    features: ["Anti-Wrinkle", "Lip Enhancement", "Dermal Fillers"]
  },
  {
    icon: Shield,
    title: "Body Contouring",
    description: "Non-surgical body sculpting and fat reduction",
    features: ["CoolSculpting", "Fat Freezing", "Body Tightening"]
  }
]

export default function BeautySection() {
  const handleNavigation = (route: string) => {
    if (window.navigateTo) {
      (window as any).navigateTo(route)
    }
  }

  return (
    <section className="py-20 bg-[#F5F1EC] text-[#333333]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl lg:text-5xl font-light mb-6 leading-tight">
                <span className="text-[#A38E78]">Building Beauty</span>
              </h2>
              <div className="w-20 h-1 bg-[#A38E78] mb-6"></div>
            </div>

            <p className="text-xl text-[#777777] leading-relaxed mb-10">
              Our comprehensive range of aesthetic treatments is designed to enhance your 
              natural beauty. From advanced facial treatments to body contouring, we offer 
              cutting-edge solutions tailored to your unique needs.
            </p>

            <div className="space-y-8 mb-10">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <div key={index} className="flex items-start space-x-6">
                    <div className="bg-[#A38E78]/10 p-4 rounded-full">
                      <Icon className="w-8 h-8 text-[#A38E78]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3 text-[#333333]">{service.title}</h3>
                      <p className="text-[#777777] mb-4">{service.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, idx) => (
                          <span 
                            key={idx}
                            className="bg-[#A38E78]/10 text-[#A38E78] px-3 py-1 rounded-full text-sm border border-[#A38E78]/20"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => handleNavigation('procedures-skin-treatments')}
                className="bg-[#A38E78] hover:bg-[#8B7A67] text-white px-8 py-4"
              >
                View All Treatments
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => handleNavigation('book-treatment')}
                className="border-[#A38E78] text-[#A38E78] hover:bg-[#A38E78] hover:text-white px-8 py-4"
              >
                Book Consultation
              </Button>
            </div>
          </div>

          {/* Right Side - Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://i.ibb.co/HTzHnd2r/a-cosmetologist-performs-hydropiling-in-a-beauty-s-2025-03-08-01-46-27-utc.webp"
                    alt="Facial treatment"
                    className="w-full h-72 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-[#A38E78] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Facial Care
                    </span>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://i.ibb.co/ymtcHXZB/close-up-view-of-a-beautician-hands-injecting-hyal-2024-10-20-11-28-06-utc.webp"
                    alt="Injectable treatments"
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-[#A38E78] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Injectables
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-y-6 mt-8">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://i.ibb.co/nMkByNc2/a-woman-is-getting-a-massage-on-her-stomach-the-m-2025-01-16-02-54-47-utc.webp"
                    alt="Body contouring"
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-[#A38E78] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Body Sculpting
                    </span>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://i.ibb.co/fzMTvxDr/revitalizing-skin-treatment-that-clears-pores-and-2025-03-22-19-33-40-utc-1.webp"
                    alt="Wellness treatments"
                    className="w-full h-72 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-[#A38E78] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Wellness
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats overlay */}
            <div className="absolute -top-6 -right-6 bg-[#A38E78] text-white rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">250+</div>
                <div className="text-sm font-semibold">Treatments Monthly</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}