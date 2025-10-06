import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "Maria Popescu",
    location: "București",
    rating: 5,
    text: "Rezultatele au depășit toate așteptările! Echipa Aesthetic Lab este incredibil de profesionistă și atentă la detalii.",
    image: "https://www.beyondmedispa.com/wp-content/uploads/2024/10/Ewelina-Roguska.png",
    treatment: "Botox & Fillers"
  },
  {
    id: 2,
    name: "Ana Ionescu",
    location: "Cluj-Napoca",
    rating: 5,
    text: "Cea mai bună experiență pe care am avut-o vreodată la o clinică estetică. Recomand cu încredere!",
    image: "https://www.beyondmedispa.com/wp-content/uploads/2024/10/Azadeh-Manesh.png",
    treatment: "Facial Treatment"
  },
  {
    id: 3,
    name: "Elena Radu",
    location: "Timișoara",
    rating: 5,
    text: "Personalul este extraordinar, iar rezultatele sunt vizibile imediat. Mă întorc cu siguranță!",
    image: "https://www.beyondmedispa.com/wp-content/uploads/2024/10/Claire-Hill.png",
    treatment: "Laser Therapy"
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Ce spun <span className="text-[#284139]">clienții noștri</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Peste 1000 de clienți mulțumiți care și-au transformat viața prin tratamentele noastre
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  <div className="flex mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              
              <div className="bg-[#F8D794]/30 rounded-lg px-4 py-2">
                <span className="text-[#B86330] text-sm font-medium">{testimonial.treatment}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
