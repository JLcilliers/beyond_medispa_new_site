import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const teamMembers = [
  {
    name: 'Dr Azadeh Manesh',
    image: '/team/azadeh-manesh.png',
    description: 'Dr Azadeh Manesh specialises in non‑surgical aesthetics, offering natural‑looking results and holistic skin consultations tailored to individual needs.',
    role: 'Aesthetic Doctor'
  },
  {
    name: 'Dr Sana Sadiq',
    image: '/team/dr-sana-sadiq.jpg',
    description: 'Dr Sana Sadiq focuses on full‑face beautification, combining corrective and preventive treatments for stunning, natural results.',
    role: 'Aesthetic Doctor'
  },
  {
    name: 'Marianne',
    image: '/team/marianne.jpg',
    description: 'Marianne focuses on natural enhancements and subtle tweaks to highlight your facial contours.',
    role: 'Senior Aesthetic Practitioner'
  },
  {
    name: 'Ewelina Roguska',
    image: '/team/ewelina-roguska.png',
    description: 'Ewelina has 9+ years of experience and a passion for treating acne and post‑acne skin with advanced skin therapies.',
    role: 'Senior Aesthetic Practitioner'
  },
  {
    name: 'Louise Walker',
    image: '/team/louise-walker.jpg',
    description: 'With 18+ years in aesthetics, Louise customises skin treatments using medical‑grade devices and advanced skincare techniques.',
    role: 'Senior Aesthetic Practitioner'
  },
  {
    name: 'Joanna Pullar',
    image: '/team/joanna-pullar.webp',
    description: 'Joanna is a Senior Aesthetic Practitioner with expertise in electrolysis and advanced skin treatments.',
    role: 'Senior Aesthetic Practitioner'
  },
  {
    name: 'Nazish Aman',
    image: '/team/nazish-aman.jpg',
    description: 'With 11+ years in aesthetics, Naz assists front‑of‑house operations and provides tailored skincare treatments.',
    role: 'Aesthetic Practitioner'
  },
  {
    name: 'Reza',
    image: '/team/reza.png',
    description: 'Known for his five‑star service, Reza ensures clients feel comfortable while delivering expert aesthetic advice.',
    role: 'Aesthetic Practitioner'
  },
  {
    name: 'Leanne',
    image: '/team/leanne.jpg',
    description: 'Leanne has 6+ years of experience in customer service, providing a professional and welcoming presence at Beyond MediSpa.',
    role: 'Client Relations'
  },
  {
    name: 'Ruxi',
    image: '/team/ruxi.png',
    description: 'With over a decade in aesthetics, Ruxi specialises in modern skincare treatments and practitioner training.',
    role: 'Senior Aesthetic Practitioner'
  },
  {
    name: 'Claire Hill',
    image: '/team/claire-hill.png',
    description: 'A Senior Aesthetician with 14+ years of experience, Claire specialises in laser hair and tattoo removal treatments.',
    role: 'Senior Aesthetic Practitioner'
  }
]

export default function TeamSection() {
  const handleNavigation = (route: string) => {
    if ((window as any).navigateTo) {
      (window as any).navigateTo(route)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-[#FAF8F5] via-[#FFFFFF] to-[#F5F1EC]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-[#333333] mb-6">
            Meet Our <span className="text-[#A38E78]">Expert Team</span>
          </h2>
          <p className="text-xl text-[#777777] max-w-3xl mx-auto">
            Our highly qualified doctors and practitioners combine medical expertise with artistic vision 
            to deliver exceptional results in a safe, professional environment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white/90 border border-[#E5E5E5] rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group shadow-lg"
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
                  <span className="text-xs text-[#A38E78] font-medium uppercase tracking-wider">
                    {member.role}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-[#333333] mb-3">{member.name}</h3>
                <p className="text-[#777777] text-sm leading-relaxed">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}