import { Button } from '@/components/ui/button'
import { ArrowRight, MessageCircle } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        >
          <source 
            src="https://www.beyondmedispa.com/wp-content/uploads/2025/09/Video_Aspect_Ratio_Adjustment.mp4" 
            type="video/mp4" 
          />
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative container mx-auto px-4 pt-32 pb-20 min-h-screen flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl lg:text-7xl font-light text-white leading-tight mb-8">
            Beyond MediSpa:<br />
            <span className="text-[#C6A77D]">Let Your Natural Beauty Shine</span>
          </h1>
          
          <p className="text-xl text-white/90 leading-relaxed max-w-lg mb-10">
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
              className="bg-[#C6A77D] hover:bg-[#A38E78] text-white px-8 py-4 text-lg group transition-colors font-medium"
            >
              Book Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <a 
              href="https://wa.me/442071234567" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#2C2C2C] px-8 py-4 text-lg group">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}