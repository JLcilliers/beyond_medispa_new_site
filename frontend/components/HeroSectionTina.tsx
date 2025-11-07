import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

interface HeroSectionTinaProps {
  hero: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    description: string;
    videoUrl: string;
    features: Array<{ text: string }>;
  };
}

export default function HeroSectionTina({ hero }: HeroSectionTinaProps) {
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
            src={hero.videoUrl}
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative container mx-auto px-4 pt-32 pb-20 min-h-screen flex items-center">
        <div className="max-w-3xl">
          <h1 className="text-5xl lg:text-7xl font-light text-white leading-tight mb-6">
            {hero.title} <span className="text-[#C6A77D]">{hero.titleHighlight}</span>
          </h1>

          <p className="text-2xl text-[#C6A77D] font-light mb-8">
            {hero.subtitle}
          </p>

          <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
            {hero.description}
          </p>

          <div className="flex flex-wrap items-center gap-6 mb-10">
            {hero.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-white/90">
                <div className="w-2 h-2 bg-[#C6A77D] rounded-full"></div>
                <span className="text-sm">{feature.text}</span>
              </div>
            ))}
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
