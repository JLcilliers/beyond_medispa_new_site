import { Button } from '@/components/ui/button'
import { ArrowRight, MessageCircle } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-50 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-[#F8D794]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-60 h-60 bg-[#80907E]/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative container mx-auto px-4 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-7xl font-light text-black leading-tight">
              Beyond MediSpa:<br />
              <span className="text-[#F8D794]">Let Your Natural Beauty Shine</span>
            </h1>
            
            <p className="text-xl text-black leading-relaxed max-w-lg">
              Discover personalized medical and aesthetic treatments that enhance your natural features. From anti-aging injectables to advanced skin therapies, our expert team in London and Edinburgh delivers holistic care for body, skin, and wellbeing. Experience results that feel authentically you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => {
                  if ((window as any).navigateTo) {
                    (window as any).navigateTo('book-treatment')
                  }
                }}
                className="bg-[#F8D794] hover:bg-[#F8D794] text-black px-8 py-4 text-lg group hover:opacity-90"
              >
                Book Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <a 
                href="https://wa.me/442071234567" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="bg-[#F8D794] border-[#F8D794] text-black hover:bg-[#F8D794] hover:text-black px-8 py-4 text-lg group hover:opacity-90">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/api/placeholder/600/700" 
                alt="Spa treatment"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111A19]/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}