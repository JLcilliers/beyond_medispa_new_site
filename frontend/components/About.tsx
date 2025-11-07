import { Award, Users, Heart, Sparkles } from 'lucide-react'

const team = [
  {
    name: "Dr. Sana Sadiq",
    role: "Lead Dermatologist",
    image: "https://www.beyondmedispa.com/wp-content/uploads/2024/10/Dr-Sana-Sadiq.jpg",
    experience: "15 years experience"
  },
  {
    name: "Dr. Reza Manesh",
    role: "Aesthetic Medicine Specialist", 
    image: "https://www.beyondmedispa.com/wp-content/uploads/2024/10/Reza.png",
    experience: "12 years experience"
  },
  {
    name: "Joanna Pullar",
    role: "Cosmetology Specialist",
    image: "https://www.beyondmedispa.com/wp-content/uploads/2024/10/Joanna-Pullar.webp", 
    experience: "8 years experience"
  }
]

const stats = [
  { number: "5000+", label: "Satisfied Clients", icon: Users },
  { number: "15+", label: "Years of Experience", icon: Award },
  { number: "98%", label: "Satisfaction Rate", icon: Heart },
  { number: "50+", label: "Available Treatments", icon: Sparkles }
]

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-[#80907E]/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-10 h-10 text-[#284139]" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              About <span className="text-[#284139]">Beyond Aesthetic Clinic</span>
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Beyond Aesthetic Clinic is a renowned aesthetic medicine clinic, dedicated to providing 
              the most advanced treatments for beauty and skin health. With a team 
              of specialist doctors and cutting-edge technology, we are committed to offering you 
              exceptional results in a safe and comfortable environment.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our mission is to help you feel confident in your own skin, 
              offering personalized treatments that respect the natural beauty of each client.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-[#F8D794]/30 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">International Certifications</h4>
                <p className="text-gray-600 text-sm">Our team holds certifications from prestigious medical organizations</p>
              </div>
              <div className="bg-[#F8D794]/30 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">Advanced Technology</h4>
                <p className="text-gray-600 text-sm">We use only state-of-the-art equipment for optimal results</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://i.ibb.co/PvpR3n95/calm-pleased-lady-undergoing-a-cosmetic-procedure-2025-03-06-21-00-06-utc.webp"
              alt="Aesthetic Lab clinic"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
        
        {/* Team Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-light text-gray-900 mb-4">
            Our <span className="text-[#284139]">Team</span>
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dedicated professionals with extensive experience in aesthetic medicine
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
                <div className="absolute inset-0 bg-[#284139] bg-opacity-0 group-hover:bg-opacity-10 rounded-full transition-all duration-300"></div>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h4>
              <p className="text-[#B86330] font-medium mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.experience}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
