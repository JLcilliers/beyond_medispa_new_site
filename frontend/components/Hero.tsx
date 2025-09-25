import { Button } from '@/components/ui/button'
import { ArrowRight, MessageCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/api/placeholder/1200/800" 
          alt="Elegant woman touching her face"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight">
            Investește în <br />
            <span className="text-[#B86330] font-normal">pielea ta</span> <br />
            cu Aesthetic Lab
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300 font-light">
            Descoperiți tratamentele estetice de ultimă generație pentru o piele perfectă și strălucitoare
          </p>
          
          <div className="flex justify-start">
            <Button 
              size="lg" 
              onClick={() => {
                if (window.navigateTo) {
                  window.navigateTo!('book-treatment')
                }
              }}
              className="bg-[#F8D794] hover:bg-[#B86330] text-[#111A19] px-12 py-6 text-xl group"
            >
              Book Now
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-[#284139] rounded-full opacity-10 blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-blue-400 rounded-full opacity-10 blur-xl"></div>
    </section>
  )
}
