import { Award, Users, Heart, Sparkles } from 'lucide-react'

const team = [
  {
    name: "Dr. Sana Sadiq",
    role: "Medic Primar Dermatologie",
    image: "https://www.beyondmedispa.com/wp-content/uploads/2024/10/Dr-Sana-Sadiq.jpg",
    experience: "15 ani experiență"
  },
  {
    name: "Dr. Reza Manesh",
    role: "Specialist Medicină Estetică", 
    image: "https://www.beyondmedispa.com/wp-content/uploads/2024/10/Reza.png",
    experience: "12 ani experiență"
  },
  {
    name: "Joanna Pullar",
    role: "Specialist Cosmetologie",
    image: "https://www.beyondmedispa.com/wp-content/uploads/2024/10/Joanna-Pullar.webp", 
    experience: "8 ani experiență"
  }
]

const stats = [
  { number: "5000+", label: "Clienți Mulțumiți", icon: Users },
  { number: "15+", label: "Ani de Experiență", icon: Award },
  { number: "98%", label: "Rate de Satisfacție", icon: Heart },
  { number: "50+", label: "Tratamente Disponibile", icon: Sparkles }
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
              Despre <span className="text-[#284139]">Aesthetic Lab</span>
            </h2>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Aesthetic Lab este o clinică de medicină estetică de renume, dedicată oferirii 
              celor mai avansate tratamente pentru frumusețe și sănătatea pielii. Cu o echipă 
              de medici specialiști și o tehnologie de vârf, ne angajăm să vă oferim rezultate 
              excepționale într-un mediu sigur și confortabil.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Misiunea noastră este să vă ajutăm să vă simțiți încrezători în pielea voastră, 
              oferind tratamente personalizate care respectă frumusețea naturală a fiecărui client.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-[#F8D794]/30 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">Certificări Internaționale</h4>
                <p className="text-gray-600 text-sm">Echipa noastră deține certificări de la organismele medicale de prestigiu</p>
              </div>
              <div className="bg-[#F8D794]/30 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">Tehnologie Avansată</h4>
                <p className="text-gray-600 text-sm">Utilizăm doar echipamente de ultimă generație pentru rezultate optime</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://www.beyondmedispa.com/wp-content/uploads/2024/03/anti-wrinkle-injections-london-edinburgh-beyond-medispa.jpg" 
              alt="Aesthetic Lab clinic"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
        
        {/* Team Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-light text-gray-900 mb-4">
            Echipa <span className="text-[#284139]">Noastră</span>
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Profesioniști dedicați cu experiență vastă în medicina estetică
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
