import { Button } from '@/components/ui/button'
import { ArrowRight, MessageCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://i.ibb.co/Y7Q2vjLx/beautiful-woman-getting-facial-skincare-treatment-2025-02-24-12-22-50-utc.webp"
          alt="Elegant woman touching her face"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 lg:px-16 h-screen flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight">
            Invest in <br />
            <span className="text-[#B86330] font-normal">your skin</span> <br />
            with Beyond Aesthetic Clinic
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300 font-light">
            Discover cutting-edge aesthetic treatments for perfect, radiant skin
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
      
      <div className="absolute top-20 right-10 w-32 h-32 bg-[#284139] rounded-full opacity-10 blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-blue-400 rounded-full opacity-10 blur-xl"></div>
    </section>
  )
}
