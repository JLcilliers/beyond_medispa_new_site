import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
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
        <div className="max-w-3xl">
          <h1 className="text-5xl lg:text-7xl font-light text-white leading-tight mb-6">
            Let Your Natural Beauty Shine at a <span className="text-[#C6A77D]">World-Class Aesthetic Clinic</span>
          </h1>
          
          <p className="text-2xl text-[#C6A77D] font-light mb-8">
            Refine. Rejuvenate. Radiate confidence.
          </p>
          
          <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
            Here at Beyond, we combine advanced aesthetic medicine with a luxurious, calming experience, helping you achieve natural, beautiful results. Our expert doctors and beauticians use the latest techniques and treatments to enhance your beauty - discreetly, elegantly, and effectively.
          </p>

          <div className="flex flex-wrap items-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-white/90">
              <div className="w-2 h-2 bg-[#C6A77D] rounded-full"></div>
              <span className="text-sm">CQC & HIS Regulated</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <div className="w-2 h-2 bg-[#C6A77D] rounded-full"></div>
              <span className="text-sm">Doctor-led Treatment</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <div className="w-2 h-2 bg-[#C6A77D] rounded-full"></div>
              <span className="text-sm">New Customer Discounts</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <div className="w-2 h-2 bg-[#C6A77D] rounded-full"></div>
              <span className="text-sm">10 Years of Excellence</span>
            </div>
          </div>
          
          <div className="flex justify-start">
            <Link to="/book-treatment">
              <Button 
                size="lg" 
                className="bg-[#C6A77D] hover:bg-[#A38E78] text-white px-12 py-6 text-xl group transition-colors font-medium"
              >
                Book Now
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}