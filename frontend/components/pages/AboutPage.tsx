import Navigation from '../Navigation'
import Footer from '../Footer'
import TestimonialsSection from '../TestimonialsSection'
import Locations from '../Locations'
import { Award, Users, Heart, Shield, Phone, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

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

const differentiators = [
  {
    icon: Award,
    title: 'Trusted Experts in Aesthetic Medicine',
    description: 'Our team of qualified doctors and practitioners deliver safe, effective treatments backed by science.'
  },
  {
    icon: Heart,
    title: 'Honest Advice, Real Results',
    description: 'We provide transparent consultations and realistic expectations, ensuring you make informed decisions.'
  },
  {
    icon: Users,
    title: 'Aesthetic Excellence with a Family Touch',
    description: 'We combine professional expertise with a warm, welcoming approach that makes you feel at home.'
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20">
        <section className="py-20 bg-gradient-to-br from-[#2C2C2C] via-[#333333] to-[#2C2C2C] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl lg:text-6xl font-light mb-6">
                Our Vision, Mission, <span className="text-[#C6A77D]">& Values</span>
              </h1>
              <h3 className="text-2xl font-light text-white/80 mb-8">
                Learn more about Beyond MediSpa
              </h3>
              <p className="text-xl text-white/90 leading-relaxed mb-12">
                Here at Beyond MediSpa, we go beyond expectations to deliver advanced aesthetic treatments that enhance your natural beauty. With a patient-first approach, expert practitioners, and cutting-edge technology, we create a bespoke experience tailored to your unique goals, ensuring exceptional results every time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/book-treatment">
                  <Button className="bg-[#C6A77D] hover:bg-[#A38E78] text-white px-8 py-4 text-lg">
                    Make a Booking Today
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <a href="tel:02072018595">
                  <Button variant="outline" className="border-2 border-[#C6A77D] text-[#C6A77D] hover:bg-[#C6A77D] hover:text-white px-8 py-4 text-lg">
                    <Phone className="mr-2 w-5 h-5" />
                    020 7201 8595
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-[#FAF8F5] via-[#FFFFFF] to-[#F5F1EC]">
          <div className="container mx-auto px-4">
            <h3 className="text-center text-xl text-[#777777] mb-8">
              Tried and Trusted By Top Aesthetic Professionals
            </h3>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h4 className="text-sm text-[#A38E78] font-semibold tracking-wider mb-4">OUR MISSION</h4>
              <h2 className="text-4xl lg:text-5xl font-light text-[#333333] mb-12">
                Going Above & Beyond In <span className="text-[#A38E78]">Medical Aesthetics</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
              <div>
                <img 
                  src="https://www.beyondmedispa.com/wp-content/uploads/2025/09/Gemini_Generated_Image_w7zyv8w7zyv8w7zy.png" 
                  alt="Elevating Aesthetic Care"
                  className="rounded-3xl shadow-xl w-full"
                />
              </div>
              <div>
                <h3 className="text-3xl font-light text-[#333333] mb-6">Elevating Aesthetic Care</h3>
                <p className="text-lg text-[#777777] leading-relaxed">
                  We believe that beauty should be approached with expertise, precision, and care. Our highly skilled team provides safe, effective, and scientifically backed treatments, ensuring that every patient receives world-class results in a welcoming, luxurious environment.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-3xl font-light text-[#333333] mb-6">Your Journey, Our Expertise</h3>
                <p className="text-lg text-[#777777] leading-relaxed">
                  Your journey is just as important as the outcome. Through detailed consultations, personalised treatment plans, and industry-leading techniques, we help you achieve your desired look while maintaining a natural and refreshed appearance.
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src="https://www.beyondmedispa.com/wp-content/uploads/2025/09/Gemini_Generated_Image_w7zyv8w7zyv8w7zy.png" 
                  alt="Your Journey, Our Expertise"
                  className="rounded-3xl shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-[#FAF8F5] via-[#FFFFFF] to-[#F5F1EC]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl lg:text-5xl font-light text-[#333333] text-center mb-16">
              What Makes Us <span className="text-[#A38E78]">Different?</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {differentiators.map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="text-center">
                    <div className="bg-[#A38E78]/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-10 h-10 text-[#A38E78]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#333333] mb-4">{item.title}</h3>
                    <p className="text-[#777777] leading-relaxed">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl lg:text-5xl font-light text-[#333333] mb-12">
              Who We <span className="text-[#A38E78]">Are</span>
            </h2>
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-12">
              <div>
                <img 
                  src="https://www.beyondmedispa.com/wp-content/uploads/2025/09/Gemini_Generated_Image_w7zyv8w7zyv8w7zy.png" 
                  alt="Who We Are"
                  className="rounded-3xl shadow-xl w-full"
                />
              </div>
              <div>
                <p className="text-lg text-[#777777] leading-relaxed">
                  With locations in London and Edinburgh, since 2006, Beyond MediSpa has established itself as a leader in medical aesthetics. Our expert team provides facial and body treatments designed to enhance your confidence and well-being. We prioritise safety, innovation, and personalised care, ensuring that every treatment plan is tailored to meet the unique needs of our patients. From skin rejuvenation to body contouring, we are committed to delivering exceptional results.
                </p>
                <div className="flex gap-4 mt-8">
                  <Link to="/book-treatment">
                    <Button className="bg-[#A38E78] hover:bg-[#8B7A67] text-white px-6 py-3">
                      Make a Booking
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TestimonialsSection />

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h4 className="text-sm text-[#A38E78] font-semibold tracking-wider mb-4">SPECIALISTS IN BEAUTY</h4>
              <h2 className="text-4xl lg:text-5xl font-light text-[#333333] mb-6">
                Meet Our <span className="text-[#A38E78]">Team</span>
              </h2>
              <p className="text-xl text-[#777777] max-w-3xl mx-auto">
                Behind every exceptional result is an expert you can trust. Our handpicked team of aesthetic specialists includes leading doctors, nurses, and advanced practitioners dedicated to tailoring treatments to your needs.
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

        <section className="py-20 bg-gradient-to-br from-[#FAF8F5] via-[#FFFFFF] to-[#F5F1EC]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h4 className="text-sm text-[#A38E78] font-semibold tracking-wider mb-4">GALLERY</h4>
              <h2 className="text-4xl lg:text-5xl font-light text-[#333333] mb-6">
                Inside <span className="text-[#A38E78]">Beyond MediSpa</span>
              </h2>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
              <div>
                <h2 className="text-4xl lg:text-5xl font-light text-[#333333] mb-6">
                  Trust, Honesty, <span className="text-[#A38E78]">Expertise</span>
                </h2>
                <p className="text-lg text-[#777777] leading-relaxed">
                  We are committed to delivering outstanding aesthetic results with integrity and professionalism. Our approach is built on trust, honesty, and clinical excellence, ensuring that every patient receives treatments tailored to their unique needs.
                </p>
              </div>
              <div>
                <img 
                  src="https://www.beyondmedispa.com/wp-content/uploads/2025/09/Gemini_Generated_Image_w7zyv8w7zyv8w7zy.png" 
                  alt="Trust and Expertise"
                  className="rounded-3xl shadow-xl w-full"
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src="https://www.beyondmedispa.com/wp-content/uploads/2025/09/Gemini_Generated_Image_w7zyv8w7zyv8w7zy.png" 
                  alt="Personalised Experience"
                  className="rounded-3xl shadow-xl w-full"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl lg:text-5xl font-light text-[#333333] mb-6">
                  A Truly <span className="text-[#A38E78]">Personalised Experience</span>
                </h2>
                <p className="text-lg text-[#777777] leading-relaxed">
                  Every individual is unique, and so is our approach to aesthetic care. We take the time to understand your goals, crafting a bespoke treatment plan that enhances your natural beauty while prioritising long-term skin health.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-[#FAF8F5] via-[#FFFFFF] to-[#F5F1EC]">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h4 className="text-sm text-[#A38E78] font-semibold tracking-wider mb-4">OUR COMMITMENT</h4>
                <h2 className="text-4xl lg:text-5xl font-light text-[#333333] mb-6">
                  Safety & <span className="text-[#A38E78]">Innovation</span>
                </h2>
                <p className="text-lg text-[#777777] leading-relaxed">
                  Patient safety is always our top priority. We use only the most advanced, clinically approved technologies and techniques to ensure every treatment is safe, effective, and tailored to your needs. Our team continually undergoes training to stay ahead in the industry.
                </p>
              </div>
              <div>
                <img 
                  src="https://www.beyondmedispa.com/wp-content/uploads/2025/09/Gemini_Generated_Image_w7zyv8w7zyv8w7zy.png" 
                  alt="Safety and Innovation"
                  className="rounded-3xl shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-[#A38E78] to-[#8B7A67] text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h4 className="text-sm text-white/80 font-semibold tracking-wider mb-4">BOOK YOUR APPOINTMENT</h4>
              <h2 className="text-4xl lg:text-5xl font-light mb-6">
                Visit Us In London Or Edinburgh Today
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                Experience expert aesthetic care in a luxurious, calming setting. Visit our London or Edinburgh clinics and start your beauty journey today.
              </p>
              <Link to="/book-treatment">
                <Button size="lg" className="bg-white text-[#A38E78] hover:bg-white/90 px-8 py-4 text-lg">
                  Book Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h4 className="text-sm text-[#A38E78] font-semibold tracking-wider mb-4">TWO LOCATIONS – ONE PREMIUM AESTHETIC BRAND</h4>
              <h2 className="text-4xl lg:text-5xl font-light text-[#333333] mb-6">
                Where To <span className="text-[#A38E78]">Find Us</span>
              </h2>
            </div>
            <Locations />
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  )
}
