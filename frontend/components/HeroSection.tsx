import { Button } from '@/components/ui/button'
import { ArrowRight, MessageCircle } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#FAF8F5] via-[#F5F1EC] to-[#FAF8F5] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-[#A38E78]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-60 h-60 bg-[#B5A68B]/8 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative container mx-auto px-4 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-7xl font-light text-[#333333] leading-tight">
              Beyond MediSpa:<br />
              <span className="text-[#A38E78]">Let Your Natural Beauty Shine</span>
            </h1>
            
            <p className="text-xl text-[#777777] leading-relaxed max-w-lg">
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
                className="bg-[#A38E78] hover:bg-[#8B7A67] text-white px-8 py-4 text-lg group transition-colors"
              >
                Book Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <a 
                href="https://wa.me/442071234567" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="border-[#A38E78] text-[#A38E78] hover:bg-[#A38E78] hover:text-white px-8 py-4 text-lg group">
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
              <div className="absolute inset-0 bg-gradient-to-t from-[#A38E78]/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}