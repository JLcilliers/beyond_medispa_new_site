import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    location: 'London',
    rating: 5,
    text: 'Dr Azadeh is absolutely amazing! I went for anti-wrinkle treatment and the results exceeded my expectations. The clinic is beautiful and the staff are so professional and welcoming.',
    treatment: 'Anti-Wrinkle Treatment'
  },
  {
    name: 'Emma Thompson',
    location: 'Edinburgh',
    rating: 5,
    text: 'I had the HydraFacial treatment and my skin has never looked better. Louise was fantastic - she explained everything and made me feel completely at ease throughout.',
    treatment: 'HydraFacial'
  },
  {
    name: 'James Wilson',
    location: 'London',
    rating: 5,
    text: 'CoolSculpting at Beyond MediSpa was life-changing. The team was incredibly professional and the results speak for themselves. Highly recommend!',
    treatment: 'CoolSculpting'
  },
  {
    name: 'Charlotte Davies',
    location: 'Edinburgh',
    rating: 5,
    text: 'Dr Sana is truly gifted. My dermal filler treatment looks so natural - exactly what I wanted. The whole experience was comfortable and professional.',
    treatment: 'Dermal Fillers'
  },
  {
    name: 'Michael Brown',
    location: 'London',
    rating: 5,
    text: 'Outstanding service from start to finish. The consultation was thorough and the Profhilo treatment has given me the skin confidence I was looking for.',
    treatment: 'Profhilo'
  },
  {
    name: 'Lucy Roberts',
    location: 'Edinburgh',
    rating: 5,
    text: 'The best aesthetic clinic I have ever been to. Ewelina treated my acne scarring with microneedling and the improvement is incredible. Thank you!',
    treatment: 'Microneedling'
  }
]

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-[#111A19]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
            What Our <span className="text-[#F8D794]">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from our satisfied clients who have experienced 
            the Beyond MediSpa difference across our London and Edinburgh clinics.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-[#284139]/20 rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-[#F8D794] fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-8 italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              
              <div className="space-y-2">
                <p className="text-[#F8D794] font-semibold text-lg">
                  {testimonials[currentTestimonial].name}
                </p>
                <p className="text-gray-300">
                  {testimonials[currentTestimonial].treatment} • {testimonials[currentTestimonial].location}
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="border-[#F8D794] text-[#F8D794] hover:bg-[#F8D794] hover:text-[#111A19]"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? 'bg-[#F8D794]' : 'bg-[#284139]'
                    }`}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="border-[#F8D794] text-[#F8D794] hover:bg-[#F8D794] hover:text-[#111A19]"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#F8D794] mb-2">1000+</div>
              <p className="text-gray-300">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#F8D794] mb-2">15+</div>
              <p className="text-gray-300">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#F8D794] mb-2">95%</div>
              <p className="text-gray-300">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}