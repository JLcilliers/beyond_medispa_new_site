import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronDown, ArrowRight } from 'lucide-react'

const serviceCategories = [
  {
    title: 'Injectables',
    description: 'Expert anti-aging and enhancement treatments',
    services: [
      { name: 'Anti-Wrinkle Treatment', description: 'Reduce fine lines and wrinkles for a youthful appearance' },
      { name: 'Dermal & Facial Fillers', description: 'Restore volume and enhance facial contours naturally' },
      { name: 'Lip Enhancement', description: 'Achieve fuller, more defined lips with expert precision' },
      { name: 'Cheek Enhancement', description: 'Add volume and definition to enhance facial structure' },
      { name: 'Nasolabial Lines', description: 'Smooth smile lines for a refreshed appearance' },
      { name: 'Under Eye Correction', description: 'Address dark circles and under-eye concerns' },
      { name: 'Profhilo', description: 'Bio-remodelling treatment for skin hydration and firmness' },
      { name: 'B12 Injections', description: 'Boost energy levels and overall wellbeing' }
    ]
  },
  {
    title: 'Skin Treatments',
    description: 'Advanced therapies for radiant, healthy skin',
    services: [
      { name: 'HydraFacial', description: 'Deep cleansing and hydrating facial treatment' },
      { name: 'Oxygen Facial', description: 'Revitalizing treatment for glowing skin' },
      { name: 'LED Light Therapy', description: 'Advanced light therapy for skin rejuvenation' },
      { name: 'Microneedling', description: 'Stimulate collagen production for smoother skin' },
      { name: 'Chemical Peels', description: 'Exfoliate and renew skin texture and tone' },
      { name: 'PRP for Hair Growth', description: 'Platelet-rich plasma therapy for hair restoration' }
    ]
  },
  {
    title: 'Body Contouring & Fat Reduction',
    description: 'Non-surgical body sculpting solutions',
    services: [
      { name: 'CoolSculpting', description: 'FDA-approved fat freezing technology' },
      { name: 'Fat Freezing', description: 'Non-invasive fat reduction treatment' },
      { name: 'Vanquish', description: 'Radiofrequency body contouring' },
      { name: 'Exilis Elite Body', description: 'Skin tightening and fat reduction combined' },
      { name: 'Buttocks Enhancement', description: 'Non-surgical buttock lifting and contouring' }
    ]
  },
  {
    title: 'Skin Concerns',
    description: 'Targeted treatments for specific skin issues',
    services: [
      { name: 'Anti-Ageing Treatments', description: 'Comprehensive approach to age-related skin concerns' },
      { name: 'Acne and Scarring', description: 'Effective treatments for acne and post-acne scarring' },
      { name: 'Sun Damage and Pigmentation', description: 'Address hyperpigmentation and sun damage' },
      { name: 'Sensitive Skin Treatments', description: 'Gentle therapies for reactive skin types' },
      { name: 'Mole & Skin Tag Removal', description: 'Safe removal of unwanted skin growths' }
    ]
  },
  {
    title: 'Wellbeing & Specialist Therapies',
    description: 'Holistic treatments for mind and body wellness',
    services: [
      { name: 'Anti-Cellulite Treatment', description: 'Reduce cellulite appearance with Alidya injections' },
      { name: 'The Harmony Massage', description: 'Relaxing therapeutic massage for stress relief' },
      { name: 'Mesotherapy', description: 'Targeted nutrient injections for skin health' },
      { name: 'Nutritionist Consultation', description: 'Expert advice on skin health and nutrition' }
    ]
  }
]

export default function ServicesOverview() {
  const [activeCategory, setActiveCategory] = useState(0)

  const handleNavigation = (route: string) => {
    if ((window as any).navigateTo) {
      (window as any).navigateTo(route)
    }
  }

  return (
    <section className="py-20 bg-[#F5F1EC]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-[#333333] mb-6">
            Our Comprehensive <span className="text-[#A38E78]">Treatments</span>
          </h2>
          <p className="text-xl text-[#777777] max-w-3xl mx-auto">
            From medical-grade injectables to advanced skin therapies, we offer a complete range of treatments 
            to help you achieve your aesthetic goals naturally and safely.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="space-y-2">
              {serviceCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                    activeCategory === index
                      ? 'bg-[#A38E78] text-white'
                      : 'bg-white/50 text-[#333333] hover:bg-white/80 border border-[#E5E5E5]'
                  }`}
                >
                  <h3 className="font-semibold text-lg mb-1">{category.title}</h3>
                  <p className="text-sm opacity-80">{category.description}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white/70 rounded-xl p-8 border border-[#E5E5E5]">
              <h3 className="text-2xl font-semibold text-[#A38E78] mb-6">
                {serviceCategories[activeCategory].title}
              </h3>
              <div className="grid gap-4">
                {serviceCategories[activeCategory].services.map((service, index) => (
                  <div key={index} className="border-b border-[#E5E5E5] pb-4 last:border-b-0">
                    <h4 className="text-[#333333] font-medium text-lg mb-2">{service.name}</h4>
                    <p className="text-[#777777] mb-3">{service.description}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleNavigation('procedures')}
                      className="bg-[#A38E78] text-white hover:bg-[#8B7A67] border-[#A38E78]"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            onClick={() => handleNavigation('procedures')}
            className="bg-[#A38E78] hover:bg-[#8B7A67] text-white px-8 py-4 text-lg"
          >
            View All Treatments
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}