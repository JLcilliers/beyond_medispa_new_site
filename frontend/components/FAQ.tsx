import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    id: 1,
    question: "Sunt tratamentele dureroase?",
    answer: "Majoritatea tratamentelor noastre sunt minim invazive și se efectuează cu anestezie locală. Nivelul de disconfort este minimal și temporar. Echipa noastră se asigură că vă simțiți confortabil pe toată durata procedurilor."
  },
  {
    id: 2,
    question: "Cât timp durează o sesiune de tratament?",
    answer: "Durata variază în funcție de tipul de tratament. O sesiune de Botox durează aproximativ 15-30 minute, în timp ce tratamentele faciale pot dura între 60-90 minute. Vă vom informa exact despre durata tratamentului la consultația inițială."
  },
  {
    id: 3,
    question: "Când voi vedea rezultatele?",
    answer: "Rezultatele variază în funcție de tratament. Pentru Botox și fillers, efectele sunt vizibile în 3-7 zile. Pentru tratamentele faciale, pielea arată mai bună imediat după procedură, iar rezultatele se îmbunătățesc progresiv în următoarele săptămâni."
  },
  {
    id: 4,
    question: "Sunt tratamentele sigure?",
    answer: "Da, toate tratamentele sunt efectuate de medici specializați folosind produse certificate și echipamente de ultimă generație. Respectăm toate protocoalele de siguranță și igienă. Fiecare pacient primește o evaluare detaliată înainte de tratament."
  },
  {
    id: 5,
    question: "Care este perioada de recuperare?",
    answer: "Majoritatea tratamentelor nu necesită timp de recuperare. Puteți reveni la activitățile normale imediat după procedură. Pentru anumite tratamente, putem recomanda evitarea expunerii la soare sau a exercițiilor intense pentru 24-48 ore."
  },
  {
    id: 6,
    question: "Cât de des trebuie să repet tratamentele?",
    answer: "Frecvența depinde de tipul de tratament. Botox durează 4-6 luni, fillerii 6-18 luni, iar tratamentele faciale se recomandă lunar. Vă vom oferi un plan personalizat de menținere a rezultatelor."
  },
  {
    id: 7,
    question: "Pot combina mai multe tratamente?",
    answer: "Da, multe tratamente pot fi combinate pentru rezultate optime. De exemplu, Botox cu filleri sau tratamente faciale cu mezoterapia. Medicul specialist va evalua ce combinații sunt potrivite pentru dvs."
  },
  {
    id: 8,
    question: "Care sunt costurile tratamentelor?",
    answer: "Prețurile variază în funcție de tipul și complexitatea tratamentului. Oferim consultații gratuite pentru a evalua nevoile dvs. și a vă oferi un plan de tratament cu costuri transparente. Avem și pachete avantajoase disponibile."
  }
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Întrebări <span className="text-[#284139]">Frecvente</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Răspunsuri la cele mai comune întrebări despre tratamentele noastre
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  {openItems.includes(faq.id) ? (
                    <ChevronUp className="w-6 h-6 text-[#284139] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                {openItems.includes(faq.id) && (
                  <div className="px-8 pb-6">
                    <div className="border-t border-gray-100 pt-6">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Nu ai găsit răspunsul la întrebarea ta?</p>
            <button className="bg-[#F8D794] hover:bg-[#B86330] text-[#111A19] px-8 py-4 rounded-lg font-medium transition-colors">
              Contactează-ne Direct
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
