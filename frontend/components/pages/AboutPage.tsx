import Navigation from '../Navigation'
import RussianFooter from '../RussianFooter'
import { Award, Users, Heart, Sparkles, Clock } from 'lucide-react'

const stats = [
  { number: "15+", label: "Years Experience", icon: Award },
  { number: "5000+", label: "Happy Clients", icon: Users },
  { number: "98%", label: "Satisfaction Rate", icon: Heart },
  { number: "50+", label: "Treatments Available", icon: Sparkles }
]

const team = [
  {
    name: "Dr. Elena Marinescu",
    role: "Lead Dermatologist",
    image: "/api/placeholder/300/300",
    experience: "15 years experience",
    specialties: ["Anti-aging", "Dermal Fillers", "Laser Treatments"]
  },
  {
    name: "Dr. James Wilson",
    role: "Aesthetic Medicine Specialist", 
    image: "/api/placeholder/300/300",
    experience: "12 years experience",
    specialties: ["Botox", "Chemical Peels", "Body Contouring"]
  },
  {
    name: "Dr. Sarah Mitchell",
    role: "Wellness & Spa Director",
    image: "/api/placeholder/300/300", 
    experience: "10 years experience",
    specialties: ["Holistic Treatments", "Massage Therapy", "Aromatherapy"]
  }
]

export default function AboutPage() {
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
                  About <span className="text-[#F8D794]">MagiSpa</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  Founded with a vision to provide world-class aesthetic treatments, 
                  MagiSpa has become a leading destination for beauty and wellness. 
                  Our commitment to excellence and innovation has made us the trusted 
                  choice for thousands of clients across London and Edinburgh.
                </p>
                <div className="flex items-center space-x-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#F8D794]">2008</div>
                    <div className="text-sm text-gray-400">Founded</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#F8D794]">2</div>
                    <div className="text-sm text-gray-400">Locations</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/api/placeholder/600/500" 
                  alt="MagiSpa clinic interior"
                  className="rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-[#F8D794]/10">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
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

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-light text-[#111A19] mb-8">
                Our <span className="text-[#284139]">Mission</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                At MagiSpa, we believe that everyone deserves to feel confident and beautiful. 
                Our mission is to provide exceptional aesthetic treatments using the latest 
                technology and techniques, delivered by highly skilled professionals in a 
                luxurious and welcoming environment.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-[#284139] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-[#F8D794]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#111A19] mb-3">Excellence</h3>
                  <p className="text-gray-600">We maintain the highest standards in all our treatments and services.</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-[#284139] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-[#F8D794]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#111A19] mb-3">Care</h3>
                  <p className="text-gray-600">Every client receives personalized attention and care tailored to their needs.</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-[#284139] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-[#F8D794]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#111A19] mb-3">Innovation</h3>
                  <p className="text-gray-600">We use cutting-edge technology and stay updated with the latest techniques.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-[#284139] text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light mb-4">
                Meet Our <span className="text-[#F8D794]">Expert Team</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our team of highly qualified professionals is dedicated to helping you achieve your aesthetic goals.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="text-center group">
                  <div className="mb-6 relative">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-48 h-48 object-cover rounded-full mx-auto shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-[#F8D794] font-medium mb-2">{member.role}</p>
                  <p className="text-gray-300 text-sm mb-4">{member.experience}</p>
                  <div className="space-y-1">
                    {member.specialties.map((specialty, idx) => (
                      <span key={idx} className="inline-block bg-[#F8D794]/20 text-[#F8D794] px-3 py-1 rounded-full text-xs mr-2">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      
      <RussianFooter />
    </div>
  )
}