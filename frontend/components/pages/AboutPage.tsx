import Navigation from '../Navigation'
import RussianFooter from '../RussianFooter'
import { Award, Users, Heart, Sparkles, Clock } from 'lucide-react'

const stats = [
  { number: "15+", label: "Years Experience", icon: Award },
  { number: "5000+", label: "Happy Clients", icon: Users },
  { number: "98%", label: "Satisfaction Rate", icon: Heart },
  { number: "50+", label: "Treatments Available", icon: Sparkles }
]

const teamMembers = [
  {
    name: 'Dr Azadeh Manesh',
    image: 'https://www.beyondmedispa.com/wp-content/uploads/2025/09/Azadeh-Manesh.png',
    description: 'Dr Azadeh Manesh specialises in non‑surgical aesthetics, offering natural‑looking results and holistic skin consultations tailored to individual needs.',
    role: 'Aesthetic Doctor'
  },
  {
    name: 'Dr Sana Sadiq',
    image: 'https://www.beyondmedispa.com/wp-content/uploads/2025/09/DR-SANA-SADIQ.jpeg',
    description: 'Dr Sana Sadiq focuses on full‑face beautification, combining corrective and preventive treatments for stunning, natural results.',
    role: 'Aesthetic Doctor'
  },
  {
    name: 'Marianne',
    image: 'https://www.beyondmedispa.com/wp-content/uploads/2025/09/MARIANNE.jpg',
    description: 'Marianne focuses on natural enhancements and subtle tweaks to highlight your facial contours.',
    role: 'Senior Aesthetic Practitioner'
  },
  {
    name: 'Ewelina Roguska',
    image: 'https://www.beyondmedispa.com/wp-content/uploads/2025/09/Ewelina-Roguska-1.png',
    description: 'Ewelina has 9+ years of experience and a passion for treating acne and post‑acne skin with advanced skin therapies.',
    role: 'Senior Aesthetic Practitioner'
  },
  {
    name: 'Louise Walker',
    image: 'https://www.beyondmedispa.com/wp-content/uploads/2025/09/Louise-Walker-1.jpg',
    description: 'Louise customises skin treatments using medical‑grade devices and advanced skincare techniques with 18+ years in aesthetics.',
    role: 'Senior Aesthetic Practitioner'
  },
  {
    name: 'Joanna Pullar',
    image: 'https://www.beyondmedispa.com/wp-content/uploads/2025/09/Joanna-Pullar-1.webp',
    description: 'Joanna is a Senior Aesthetic Practitioner with expertise in electrolysis and advanced skin treatments.',
    role: 'Senior Aesthetic Practitioner'
  },
  {
    name: 'Nazish Aman',
    image: 'https://www.beyondmedispa.com/wp-content/uploads/2025/09/Nazish-Aman.jpg',
    description: 'With 11+ years in aesthetics, Naz assists front‑of‑house operations and provides tailored skincare treatments.',
    role: 'Aesthetic Practitioner'
  },
  {
    name: 'Reza',
    image: 'https://www.beyondmedispa.com/wp-content/uploads/2025/09/Reza.png',
    description: 'Known for his five‑star service, Reza ensures clients feel comfortable while delivering expert aesthetic advice.',
    role: 'Aesthetic Practitioner'
  },
  {
    name: 'Leanne',
    image: 'https://www.beyondmedispa.com/wp-content/uploads/2025/09/Leanne.jpg',
    description: 'Leanne has 6+ years of experience in customer service, providing a professional and welcoming presence at Beyond MediSpa.',
    role: 'Client Relations'
  },
  {
    name: 'Ruxi',
    image: 'https://www.beyondmedispa.com/wp-content/uploads/2025/09/Ruxi.png',
    description: 'With over a decade in aesthetics, Ruxi specialises in modern skincare treatments and practitioner training.',
    role: 'Senior Aesthetic Practitioner'
  },
  {
    name: 'Claire Hill',
    image: 'https://www.beyondmedispa.com/wp-content/uploads/2025/09/Claire-Hill.png',
    description: 'A Senior Aesthetician with 14+ years of experience, Claire specialises in laser hair and tattoo removal treatments.',
    role: 'Senior Aesthetic Practitioner'
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
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our highly qualified doctors and practitioners combine medical expertise with artistic vision 
                to deliver exceptional results in a safe, professional environment.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-[#111A19]/80 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-2">
                      <span className="text-xs text-[#F8D794] font-medium uppercase tracking-wider">
                        {member.role}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{member.name}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
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