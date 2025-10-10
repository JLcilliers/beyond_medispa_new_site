import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { useTranslations } from '../locales/translations'
import { splitHighlight } from '../lib/intl'

export default function TestimonialsSection() {
  const { language } = useLanguage()
  const t = useTranslations(language)
  const testimonials = t.clientReviews
  const { leading: testimonialsTitle, highlight: testimonialsHighlight } = splitHighlight(t.testimonials.title)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-[#F5F1EC]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-[#333333] mb-6">
            {testimonialsTitle}
            {testimonialsHighlight && (
              <span className="text-[#A38E78]">{testimonialsHighlight}</span>
            )}
          </h2>
          <p className="text-xl text-[#777777] max-w-3xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white/90 border border-[#E5E5E5] rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-[#A38E78] fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-[#333333] leading-relaxed mb-8 italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              
              <div className="space-y-2">
                <p className="text-[#A38E78] font-semibold text-lg">
                  {testimonials[currentTestimonial].name}
                </p>
                <p className="text-[#777777]">
                  {testimonials[currentTestimonial].treatment}
                  {' \u2022 '}
                  {testimonials[currentTestimonial].location}
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="border-[#A38E78] text-[#A38E78] hover:bg-[#A38E78] hover:text-white"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? 'bg-[#A38E78]' : 'bg-[#E5E5E5]'
                    }`}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="border-[#A38E78] text-[#A38E78] hover:bg-[#A38E78] hover:text-white"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#F8D794] mb-2">1000+</div>
              <p className="text-gray-300">{t.testimonials.happyClients}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#F8D794] mb-2">15+</div>
              <p className="text-gray-300">{t.testimonials.yearsExperience}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#F8D794] mb-2">95%</div>
              <p className="text-gray-300">{t.testimonials.satisfactionRate}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
