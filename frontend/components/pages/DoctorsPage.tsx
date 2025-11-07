import Navigation from '../Navigation'
import Footer from '../Footer'
import { Button } from '@/components/ui/button'
import { Award, Users, MapPin, Star, Phone, Mail } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'
import { useTranslations } from '../../locales/translations'

const doctors = [
  {
    id: 1,
    name: "Dr. Sana Sadiq",
    title: "Lead Dermatologist & Medical Director",
    location: "London",
    image: "/team/dr-sana-sadiq.jpg",
    specialties: ["Anti-aging", "Dermal Fillers", "Laser Treatments", "Skin Analysis"],
    experience: "15 years",
    qualifications: [
      "MD, Dermatology - King's College London",
      "Fellowship in Aesthetic Medicine",
      "Member of British Association of Dermatologists",
      "Certified Laser Specialist"
    ],
    bio: "Dr. Marinescu is a highly respected dermatologist with over 15 years of experience in aesthetic medicine. She specializes in advanced anti-aging treatments and has helped thousands of patients achieve their skincare goals.",
    languages: ["English", "Romanian", "French"]
  },
  {
    id: 2,
    name: "Dr. Reza Manesh",
    title: "Aesthetic Medicine Specialist", 
    location: "London",
    image: "/team/reza.png",
    specialties: ["Botox", "Chemical Peels", "Body Contouring", "Thread Lifts"],
    experience: "12 years",
    qualifications: [
      "MBBS - University of Edinburgh",
      "Diploma in Aesthetic Medicine",
      "Advanced Botox & Filler Certification",
      "Member of British College of Aesthetic Medicine"
    ],
    bio: "Dr. Wilson brings extensive expertise in non-surgical aesthetic procedures. His gentle approach and attention to detail have made him a favorite among patients seeking natural-looking results.",
    languages: ["English", "Spanish"]
  },
  {
    id: 3,
    name: "Joanna Pullar",
    title: "Wellness & Spa Director",
    location: "Edinburgh", 
    image: "/team/joanna-pullar.webp",
    specialties: ["Holistic Treatments", "Wellness Consultation", "Medical Spa", "Skincare"],
    experience: "10 years",
    qualifications: [
      "MD - University of Glasgow",
      "Certification in Integrative Medicine",
      "Advanced Aesthetics Training",
      "Wellness Coaching Certification"
    ],
    bio: "Dr. Mitchell combines traditional medical expertise with holistic wellness approaches. She believes in treating the whole person to achieve optimal health and beauty from within.",
    languages: ["English", "Gaelic"]
  },
  {
    id: 4,
    name: "Ruxi Marinov",
    title: "Laser & Technology Specialist",
    location: "Edinburgh",
    image: "/team/ruxi.png", 
    specialties: ["Laser Hair Removal", "Skin Resurfacing", "Pigmentation", "Vascular Treatments"],
    experience: "8 years",
    qualifications: [
      "MBBS - University of Edinburgh", 
      "Advanced Laser Certification",
      "Dermatology Residency",
      "Technology in Aesthetics Diploma"
    ],
    bio: "Dr. Thompson is our technology expert, specializing in the latest laser and light-based treatments. His precision and technical expertise ensure safe, effective results for all skin types.",
    languages: ["English", "German"]
  }
]

export default function DoctorsPage() {
  const { language } = useLanguage()
  const t = useTranslations(language)

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[#111A19] via-[#284139] to-[#111A19] text-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl lg:text-6xl font-light mb-6">
                {t.doctors.pageTitle.split('Doctors')[0]}<span className="text-[#F8D794]">Doctors</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {t.doctors.pageDescription}
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-[#F8D794]/10">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-[#284139] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-[#F8D794]" />
                </div>
                <div className="text-3xl font-bold text-[#111A19] mb-2">15+</div>
                <div className="text-gray-600">{t.doctors.expertDoctors}</div>
              </div>
              
              <div className="text-center">
                <div className="bg-[#284139] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-[#F8D794]" />
                </div>
                <div className="text-3xl font-bold text-[#111A19] mb-2">50+</div>
                <div className="text-gray-600">{t.doctors.yearsCombinedExperience}</div>
              </div>
              
              <div className="text-center">
                <div className="bg-[#284139] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-[#F8D794]" />
                </div>
                <div className="text-3xl font-bold text-[#111A19] mb-2">4.9</div>
                <div className="text-gray-600">{t.doctors.averageRating}</div>
              </div>
              
              <div className="text-center">
                <div className="bg-[#284139] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-[#F8D794]" />
                </div>
                <div className="text-3xl font-bold text-[#111A19] mb-2">2</div>
                <div className="text-gray-600">{t.doctors.clinicLocations}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Doctors Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="space-y-20">
              {doctors.map((doctor, index) => (
                <div key={doctor.id} className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="mb-6">
                      <div className="flex items-center space-x-3 mb-2">
                        <h2 className="text-3xl font-light text-[#111A19]">{doctor.name}</h2>
                        <span className="bg-[#284139] text-white px-3 py-1 rounded-full text-sm">
                          {doctor.location}
                        </span>
                      </div>
                      <p className="text-xl text-[#284139] font-medium">{doctor.title}</p>
                      <p className="text-gray-600">{doctor.experience} {t.doctors.experience}</p>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {doctor.bio}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-[#111A19] mb-3">{t.doctors.specialties}</h4>
                      <div className="flex flex-wrap gap-2">
                        {doctor.specialties.map((specialty, idx) => (
                          <span key={idx} className="bg-[#F8D794]/30 text-[#284139] px-3 py-1 rounded-full text-sm">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-[#111A19] mb-3">{t.doctors.qualifications}</h4>
                      <ul className="space-y-2">
                        {doctor.qualifications.map((qual, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-[#284139] rounded-full mr-3 mt-2"></div>
                            <span className="text-gray-600 text-sm">{qual}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-8">
                      <h4 className="font-semibold text-[#111A19] mb-3">{t.doctors.languages}</h4>
                      <p className="text-gray-600">{doctor.languages.join(", ")}</p>
                    </div>
                    
                    <div className="flex space-x-4">
                      <Button 
                        className="bg-[#F8D794] hover:bg-[#B86330] text-[#111A19]"
                      >
                        {t.buttons.bookWith} {doctor.name.split(' ')[1]}
                      </Button>
                      <Button 
                        variant="outline" 
                        className="border-[#284139] text-[#284139] hover:bg-[#284139] hover:text-white"
                      >
                        {t.buttons.viewProfile}
                      </Button>
                    </div>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className="relative">
                      <img 
                        src={doctor.image} 
                        alt={doctor.name}
                        className="rounded-3xl shadow-2xl w-full max-w-md mx-auto"
                      />
                      <div className="absolute -bottom-6 -right-6 bg-[#284139] text-white p-4 rounded-2xl">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-[#F8D794]">{doctor.experience.split(' ')[0]}</div>
                          <div className="text-sm">{t.common.years}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#284139] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-light mb-6">
              {t.doctors.readyToMeet.split('Team?')[0]}<span className="text-[#F8D794]">Team?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {t.doctors.readyToMeetDesc}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-[#F8D794] hover:bg-[#B86330] text-[#111A19] px-8 py-4"
              >
                <Phone className="w-5 h-5 mr-2" />
                {t.doctors.callToBook}
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-[#F8D794] text-[#F8D794] hover:bg-[#F8D794] hover:text-[#111A19] px-8 py-4"
              >
                <Mail className="w-5 h-5 mr-2" />
                {t.buttons.emailConsultation}
              </Button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  )
}
