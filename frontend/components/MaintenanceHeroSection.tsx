import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function MaintenanceHeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
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
          
          <div className="flex justify-start">
            <Button 
              size="lg" 
              onClick={() => {
                window.open('https://wa.me/442071234567', '_blank')
              }}
              className="bg-[#C6A77D] hover:bg-[#A38E78] text-white px-12 py-6 text-xl group transition-colors font-medium"
            >
              Book Now
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}