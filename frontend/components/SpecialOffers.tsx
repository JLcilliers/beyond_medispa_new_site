import { Button } from '@/components/ui/button'
import { Clock, Star, Percent } from 'lucide-react'

const offers = [
  {
    id: 1,
    title: "Pachet Complet Anti-Aging",
    originalPrice: "1500 RON",
    discountPrice: "999 RON",
    discount: "33%",
    includes: ["Botox", "Filler", "Mezoterapie", "Consultație gratuită"],
    validUntil: "31 Decembrie 2024",
    popular: true
  },
  {
    id: 2,
    title: "Primul Tratament",
    originalPrice: "400 RON", 
    discountPrice: "199 RON",
    discount: "50%",
    includes: ["Consultație", "Tratament facial", "Produse acasă"],
    validUntil: "Permanent",
    popular: false
  },
  {
    id: 3,
    title: "Abonament 6 Luni",
    originalPrice: "2400 RON",
    discountPrice: "1800 RON",
    discount: "25%",
    includes: ["6 tratamente", "Produse incluse", "Suport permanent"],
    validUntil: "Ofertă limitată",
    popular: false
  }
]

export default function SpecialOffers() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#284139] to-[#111A19] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            Oferte <span className="text-[#F8D794]">Speciale</span>
          </h2>
          <p className="text-xl text-[#80907E] max-w-2xl mx-auto">
            Profită acum de prețurile noastre avantajoase pentru transformarea ta
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {offers.map((offer) => (
            <div key={offer.id} className={`relative bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 ${offer.popular ? 'ring-4 ring-white ring-opacity-50 scale-105' : ''}`}>
              {offer.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-full text-sm font-bold flex items-center">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    Cel mai popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Percent className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">{offer.title}</h3>
              </div>
              
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-lg line-through text-[#80907E]">{offer.originalPrice}</span>
                  <span className="bg-yellow-400 text-gray-900 px-2 py-1 rounded text-sm font-bold">-{offer.discount}</span>
                </div>
                <div className="text-4xl font-bold">{offer.discountPrice}</div>
              </div>
              
              <div className="space-y-3 mb-6">
                {offer.includes.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-center text-sm text-[#80907E] mb-6">
                <Clock className="w-4 h-4 mr-2" />
                Valabil până: {offer.validUntil}
              </div>
              
              <Button 
                className={`w-full py-4 ${offer.popular ? 'bg-yellow-400 hover:bg-yellow-500 text-gray-900' : 'bg-white hover:bg-gray-100 text-gray-900'} font-semibold`}
              >
                Rezervă Acum
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
