import { Button } from '@/components/ui/button'
import { Clock, Gift, Percent } from 'lucide-react'

const promotions = [
  {
    icon: Gift,
    title: 'Free Skin Consultation',
    description: 'Get a complimentary skin analysis and treatment recommendation with any booking',
    code: 'FREECONSULT',
    validUntil: 'Valid until end of month',
    highlight: true
  },
  {
    icon: Percent,
    title: '20% Off First Treatment',
    description: 'New clients receive 20% discount on their first aesthetic treatment',
    code: 'FIRST20',
    validUntil: 'New clients only',
    highlight: false
  },
  {
    icon: Gift,
    title: 'Free B12 Injection',
    description: 'Complimentary B12 vitamin injection with any package treatment',
    code: 'B12FREE',
    validUntil: 'Limited time offer',
    highlight: false
  }
]

export default function MaintenancePromotionsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#F5F1EC] via-[#FAF8F5] to-[#F5F1EC]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-[#333333] mb-6">
            Special <span className="text-[#A38E78]">Offers</span>
          </h2>
          <p className="text-xl text-[#777777] max-w-3xl mx-auto">
            Take advantage of our current promotions and start your aesthetic journey 
            with exceptional value at Beyond MediSpa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {promotions.map((promo, index) => {
            const Icon = promo.icon
            return (
              <div
                key={index}
                className="relative rounded-2xl p-8 text-center transition-all duration-300 hover:transform hover:scale-105 bg-gradient-to-br from-[#A38E78] to-[#8B7A67] text-white"
              >
                {promo.highlight && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-white text-[#A38E78] px-4 py-1 rounded-full text-sm font-semibold">
                      POPULAR
                    </div>
                  </div>
                )}
                
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-white/20">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {promo.title}
                </h3>
                
                <p className="mb-6 text-white/90">
                  {promo.description}
                </p>
                
                <p className="text-sm text-white/80">
                  {promo.validUntil}
                </p>
              </div>
            )
          })}
        </div>

        <div className="bg-white/70 border border-[#E5E5E5] rounded-2xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-light text-[#333333] mb-6">
                Ready to Begin Your Transformation?
              </h3>
              <p className="text-[#777777] mb-6 leading-relaxed">
                Book your consultation today and discover how our expert team can help you 
                achieve your aesthetic goals. Mention any promotional code when booking to 
                ensure you receive your discount.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => {
                    window.open('https://wa.me/442071234567', '_blank')
                  }}
                  className="bg-[#A38E78] hover:bg-[#8B7A67] text-white px-8 py-4"
                >
                  Book Consultation
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-[#A38E78]/10 rounded-xl p-6 text-center">
                <Clock className="w-12 h-12 text-[#A38E78] mx-auto mb-4" />
                <h4 className="text-[#333333] font-semibold text-lg mb-2">Limited Time</h4>
                <p className="text-[#777777]">
                  These exclusive offers are available for a limited time. 
                  Book now to secure your preferred appointment time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}