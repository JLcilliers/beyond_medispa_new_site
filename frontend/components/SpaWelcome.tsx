import { Button } from '@/components/ui/button'
import { Sparkles, Award, Clock } from 'lucide-react'

export default function SpaWelcome() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="/api/placeholder/600/500" 
              alt="Spa center interior"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Bun venit la <br />
              <span className="text-[#284139]">Aesthetic Lab</span>
            </h2>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              La Aesthetic Lab, combinăm tehnologia de ultimă generație cu expertiza medicală pentru 
              a vă oferi tratamente estetice sigure și eficiente. Fiecare client primește o atenție 
              personalizată și un plan de tratament adaptat nevoilor sale specifice.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-[#80907E]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Sparkles className="w-8 h-8 text-[#284139]" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Tehnologie Avansată</h4>
                <p className="text-gray-600 text-sm">Echipamente de ultimă generație</p>
              </div>
              
              <div className="text-center">
                <div className="bg-[#80907E]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-8 h-8 text-[#284139]" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Medici Certificați</h4>
                <p className="text-gray-600 text-sm">Experiență și profesionalism</p>
              </div>
              
              <div className="text-center">
                <div className="bg-[#80907E]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-8 h-8 text-[#284139]" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Rezultate Rapide</h4>
                <p className="text-gray-600 text-sm">Efecte vizibile imediat</p>
              </div>
            </div>
            
            <Button size="lg" className="bg-[#F8D794] hover:bg-[#B86330] text-[#111A19] px-8 py-4">
              Despre Noi
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
