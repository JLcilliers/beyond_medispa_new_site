import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { useTranslations } from '../locales/translations'

export default function HeroSection() {
  const { language } = useLanguage()
  const t = useTranslations(language)
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
            src="/hero-video.mp4" 
            type="video/mp4" 
          />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative container mx-auto px-4 pt-32 pb-20 min-h-screen flex items-center">
        <div className="max-w-3xl">
          <h1 className="text-5xl lg:text-7xl font-light text-white leading-tight mb-6">
            {t.hero.title} <span className="text-[#C6A77D]">{t.hero.titleHighlight}</span>
          </h1>
          
          <p className="text-2xl text-[#C6A77D] font-light mb-8">
            {t.hero.subtitle}
          </p>
          
          <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
            {t.hero.description}
          </p>

          <div className="flex flex-wrap items-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-white/90">
              <div className="w-2 h-2 bg-[#C6A77D] rounded-full"></div>
              <span className="text-sm">{t.hero.cqcRegulated}</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <div className="w-2 h-2 bg-[#C6A77D] rounded-full"></div>
              <span className="text-sm">{t.hero.doctorLed}</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <div className="w-2 h-2 bg-[#C6A77D] rounded-full"></div>
              <span className="text-sm">{t.hero.newCustomerDiscounts}</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <div className="w-2 h-2 bg-[#C6A77D] rounded-full"></div>
              <span className="text-sm">{t.hero.yearsOfExcellence}</span>
            </div>
          </div>
          
          <div className="flex justify-start">
            <Link to="/book-treatment">
              <Button 
                size="lg" 
                className="bg-[#C6A77D] hover:bg-[#A38E78] text-white px-12 py-6 text-xl group transition-colors font-medium"
              >
                {t.nav.bookNow}
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}