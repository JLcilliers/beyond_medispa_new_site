import { Button } from '@/components/ui/button'
import { Heart, Star, Users } from 'lucide-react'

export default function SpaWelcome() {
  const handleNavigation = (route: string) => {
    if (window.navigateTo) {
      (window as any).navigateTo(route)
    }
  }

  return (
    <section className="py-20 bg-[#FFFFFF]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://www.beyondmedispa.com/wp-content/uploads/2024/03/dermal-filler-london-edinburgh-beyond-medispa.jpg" 
                alt="Welcome to Spa Center"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Stats overlay */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#A38E78] mb-1">98%</div>
                <div className="text-sm text-[#777777]">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl lg:text-5xl font-light text-[#333333] mb-6 leading-tight">
                Welcome to <span className="text-[#A38E78]">Spa Center</span>
              </h2>
              <div className="w-20 h-1 bg-[#A38E78] mb-6"></div>
            </div>

            <p className="text-xl text-[#777777] leading-relaxed mb-8">
              Experience the ultimate in aesthetic wellness at our state-of-the-art spa center. 
              Our expert team combines advanced medical techniques with luxurious spa treatments 
              to deliver transformative results in a serene, welcoming environment.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start space-x-4">
                <div className="bg-[#A38E78]/10 p-3 rounded-full">
                  <Heart className="w-6 h-6 text-[#A38E78]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#333333] mb-2">Personalized Care</h3>
                  <p className="text-[#777777]">
                    Every treatment is customized to your unique needs and aesthetic goals
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-[#A38E78]/10 p-3 rounded-full">
                  <Star className="w-6 h-6 text-[#A38E78]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#333333] mb-2">Expert Practitioners</h3>
                  <p className="text-[#777777]">
                    Highly qualified medical professionals with years of aesthetic experience
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-[#A38E78]/10 p-3 rounded-full">
                  <Users className="w-6 h-6 text-[#A38E78]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#333333] mb-2">Trusted by Thousands</h3>
                  <p className="text-[#777777]">
                    Over 1000+ satisfied clients across our London and Edinburgh locations
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => handleNavigation('book-treatment')}
                className="bg-[#A38E78] hover:bg-[#8B7A67] text-white px-8 py-4"
              >
                Book Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => handleNavigation('about')}
                className="border-[#A38E78] text-[#A38E78] hover:bg-[#A38E78] hover:text-white px-8 py-4"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}