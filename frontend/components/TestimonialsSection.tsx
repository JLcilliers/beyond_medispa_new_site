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
    text: 'CoolSculpting at Beyond Aesthetic Clinic was life-changing. The team was incredibly professional and the results speak for themselves. Highly recommend!',
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
    <section className="py-20 bg-[#F5F1EC]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-[#333333] mb-6">
            What Our <span className="text-[#A38E78]">Clients Say</span>
          </h2>
          <p className="text-xl text-[#777777] max-w-3xl mx-auto">
            Don't just take our word for it. Hear from our satisfied clients who have experienced 
            the Beyond MediSpa difference across our London and Edinburgh clinics.
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
                  {testimonials[currentTestimonial].treatment} • {testimonials[currentTestimonial].location}
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