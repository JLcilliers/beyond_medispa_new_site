import Navigation from '../Navigation'
import RussianFooter from '../RussianFooter'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Mail, Clock, Award, Users, Star } from 'lucide-react'

const londonFeatures = [
  "10 state-of-the-art treatment rooms",
  "Dedicated laser suite",
  "VIP consultation rooms", 
  "Advanced medical equipment",
  "Luxury waiting lounge",
  "Private parking available"
]

const londonStats = [
  { number: "5000+", label: "Treatments Completed", icon: Award },
  { number: "15", label: "Expert Specialists", icon: Users },
  { number: "4.9", label: "Average Rating", icon: Star }
]

export default function LondonPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[#111A19] via-[#284139] to-[#111A19] text-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h1 className="text-5xl lg:text-6xl font-light mb-6">
                  MagiSpa <span className="text-[#F8D794]">London</span>
                </h1>
                <p className="text-2xl text-gray-300 mb-4">Harley Street Clinic</p>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  Located in the prestigious Harley Street medical district, our flagship London clinic 
                  offers the complete range of aesthetic treatments in an elegant, state-of-the-art facility.
                </p>
                
                <div className="flex items-center space-x-8 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#F8D794]">2008</div>
                    <div className="text-sm text-gray-400">Established</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#F8D794]">10</div>
                    <div className="text-sm text-gray-400">Treatment Rooms</div>
                  </div>
                </div>
                
                <Button 
                  size="lg" 
                  className="bg-[#F8D794] hover:bg-[#B86330] text-[#111A19] px-8 py-4"
                >
                  Book London Consultation
                </Button>
              </div>
              
              <div className="relative">
                <img 
                  src="/api/placeholder/600/500" 
                  alt="MagiSpa London clinic"
                  className="rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Hours */}
        <section className="py-20 bg-[#F8D794]/10">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
                <MapPin className="w-12 h-12 text-[#284139] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#111A19] mb-3">Address</h3>
                <p className="text-gray-700">123 Harley Street<br />London W1G 6BA</p>
                <Button variant="outline" size="sm" className="mt-4 border-[#284139] text-[#284139]">
                  Get Directions
                </Button>
              </div>
              
              <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
                <Phone className="w-12 h-12 text-[#284139] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#111A19] mb-3">Contact</h3>
                <p className="text-gray-700">+44 (20) 7123 4567<br />london@magispa.co.uk</p>
                <Button variant="outline" size="sm" className="mt-4 border-[#284139] text-[#284139]">
                  Call Now
                </Button>
              </div>
              
              <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
                <Clock className="w-12 h-12 text-[#284139] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#111A19] mb-3">Hours</h3>
                <p className="text-gray-700">Mon-Fri: 9:00 AM - 8:00 PM<br />Sat-Sun: 10:00 AM - 6:00 PM</p>
                <Button variant="outline" size="sm" className="mt-4 border-[#284139] text-[#284139]">
                  Book Online
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-[#111A19] mb-4">
                London Clinic <span className="text-[#284139]">Excellence</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {londonStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-[#284139] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-10 h-10 text-[#F8D794]" />
                  </div>
                  <div className="text-4xl font-bold text-[#111A19] mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-[#284139] text-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-light mb-8">
                  World-Class <span className="text-[#F8D794]">Facilities</span>
                </h2>
                
                <div className="grid gap-4">
                  {londonFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-3 h-3 bg-[#F8D794] rounded-full mr-4"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  size="lg" 
                  className="bg-[#F8D794] hover:bg-[#B86330] text-[#111A19] px-8 py-4 mt-8"
                >
                  Schedule Tour
                </Button>
              </div>
              
              <div>
                <img 
                  src="/api/placeholder/600/400" 
                  alt="London clinic facilities"
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <RussianFooter />
    </div>
  )
}