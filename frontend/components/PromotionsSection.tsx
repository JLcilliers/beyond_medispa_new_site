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

export default function PromotionsSection() {
  const handleNavigation = (route: string) => {
    if ((window as any).navigateTo) {
      (window as any).navigateTo(route)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-r from-[#111A19] via-[#284139] to-[#111A19]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
            Special <span className="text-[#F8D794]">Offers</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
                className="relative rounded-2xl p-8 text-center transition-all duration-300 hover:transform hover:scale-105 bg-gradient-to-br from-[#F8D794] to-[#B86330] text-[#111A19]"
              >
                {promo.highlight && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-[#111A19] text-[#F8D794] px-4 py-1 rounded-full text-sm font-semibold">
                      POPULAR
                    </div>
                  </div>
                )}
                
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-[#111A19]/20">
                  <Icon className="w-8 h-8 text-[#111A19]" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-[#111A19]">
                  {promo.title}
                </h3>
                
                <p className="mb-6 text-[#111A19]/80">
                  {promo.description}
                </p>
                
                <p className="text-sm text-[#111A19]/70">
                  {promo.validUntil}
                </p>
              </div>
            )
          })}
        </div>

        <div className="bg-[#284139]/20 rounded-2xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-light text-white mb-6">
                Ready to Begin Your Transformation?
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Book your consultation today and discover how our expert team can help you 
                achieve your aesthetic goals. Mention any promotional code when booking to 
                ensure you receive your discount.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => handleNavigation('book-treatment')}
                  className="bg-[#F8D794] hover:bg-[#B86330] text-[#111A19] px-8 py-4"
                >
                  Book Consultation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => handleNavigation('contact')}
                  className="border-[#F8D794] text-[#F8D794] hover:bg-[#F8D794] hover:text-[#111A19] px-8 py-4"
                >
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-[#F8D794]/10 rounded-xl p-6 text-center">
                <Clock className="w-12 h-12 text-[#F8D794] mx-auto mb-4" />
                <h4 className="text-white font-semibold text-lg mb-2">Limited Time</h4>
                <p className="text-gray-300">
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