import Navigation from '../Navigation'
import Footer from '../Footer'
import TestimonialsSection from '../TestimonialsSection'
import Locations from '../Locations'
import { Award, Users, Heart, Shield, Phone, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'
import { useTranslations } from '../../locales/translations'

export default function AboutPage() {
  const { language } = useLanguage()
  const t = useTranslations(language)

  const differentiators = [
    {
      icon: Award,
      title: t.about.trustedExperts,
      description: t.about.trustedExpertsDesc
    },
    {
      icon: Heart,
      title: t.about.honestAdvice,
      description: t.about.honestAdviceDesc
    },
    {
      icon: Users,
      title: t.about.familyTouch,
      description: t.about.familyTouchDesc
    }
  ]

  const getTeamRoleTranslation = (role: string) => {
    switch (role) {
      case 'Aesthetic Doctor':
        return t.teamRoles.aestheticDoctor
      case 'Senior Aesthetic Practitioner':
        return t.teamRoles.seniorPractitioner
      case 'Aesthetic Practitioner':
        return t.teamRoles.aestheticPractitioner
      case 'Client Relations':
        return t.teamRoles.clientRelations
      default:
        return role
    }
  }
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20">
        <section className="py-20 bg-gradient-to-br from-[#2C2C2C] via-[#333333] to-[#2C2C2C] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl lg:text-6xl font-light mb-6">
                {t.about.pageTitle} <span className="text-[#C6A77D]">{t.about.pageSubtitle}</span>
              </h1>
              <h3 className="text-2xl font-light text-white/80 mb-8">
                {t.about.pageSubtitle}
              </h3>
              <p className="text-xl text-white/90 leading-relaxed mb-12">
                {t.about.pageDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/book-treatment">
                  <Button className="bg-[#C6A77D] hover:bg-[#A38E78] text-white px-8 py-4 text-lg">
                    {t.about.makeBooking}
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
              {t.about.trustedBy}
            </h3>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h4 className="text-sm text-[#A38E78] font-semibold tracking-wider mb-4">{t.about.ourMission}</h4>
              <h2 className="text-4xl lg:text-5xl font-light text-[#333333] mb-12">
                {t.about.missionTitle}
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
              <div>
                <img
                  src="https://i.ibb.co/BKgy3QK1/beautician-doing-facial-skin-procedure-with-electr-2024-11-25-19-06-27-utc.webp"
                  alt={t.about.elevatingCare}
                  className="rounded-3xl shadow-xl w-full"
                />
              </div>
              <div>
                <h3 className="text-3xl font-light text-[#333333] mb-6">{t.about.elevatingCare}</h3>
                <p className="text-lg text-[#777777] leading-relaxed">
                  {t.about.elevatingCareDesc}
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-3xl font-light text-[#333333] mb-6">{t.about.yourJourney}</h3>
                <p className="text-lg text-[#777777] leading-relaxed">
                  {t.about.yourJourneyDesc}
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src="https://i.ibb.co/whcTHZ9L/beautician-makes-laser-procedures-on-a-female-face-2024-11-27-11-44-52-utc.webp"
                  alt={t.about.yourJourney}
                  className="rounded-3xl shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-[#FAF8F5] via-[#FFFFFF] to-[#F5F1EC]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl lg:text-5xl font-light text-[#333333] text-center mb-16">
              {t.about.whatMakesUsDifferent}<span className="text-[#A38E78]">{t.about.whatMakesUsDifferentHighlight}</span>
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
              {t.about.whoWeAre}<span className="text-[#A38E78]">{t.about.whoWeAreHighlight}</span>
            </h2>
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-12">
              <div>
                <img
                  src="https://i.ibb.co/qYdNFxHJ/lovely-woman-receiving-facial-treatment-at-wellnes-2025-03-24-09-37-28-utc.webp"
                  alt={t.about.whoWeAre}
                  className="rounded-3xl shadow-xl w-full"
                />
              </div>
              <div>
                <p className="text-lg text-[#777777] leading-relaxed">
                  {t.about.whoWeAreDesc}
                </p>
                <div className="flex gap-4 mt-8">
                  <Link to="/book-treatment">
                    <Button className="bg-[#A38E78] hover:bg-[#8B7A67] text-white px-6 py-3">
                      {t.about.makeBooking}
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
              <h4 className="text-sm text-[#A38E78] font-semibold tracking-wider mb-4">{t.about.specialistsInBeauty}</h4>
              <h2 className="text-4xl lg:text-5xl font-light text-[#333333] mb-6">
                {t.about.meetOurTeam}<span className="text-[#A38E78]">{t.about.meetOurTeamHighlight}</span>
              </h2>
              <p className="text-xl text-[#777777] max-w-3xl mx-auto">
                {t.about.teamSubtitle}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {t.teamMembers.map((member, index) => (
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
                        {getTeamRoleTranslation(member.role)}
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
              <h4 className="text-sm text-[#A38E78] font-semibold tracking-wider mb-4">{t.about.gallery}</h4>
              <h2 className="text-4xl lg:text-5xl font-light text-[#333333] mb-6">
                {t.about.insideClinic}<span className="text-[#A38E78]">{t.about.insideClinicHighlight}</span>
              </h2>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
              <div>
                <h2 className="text-4xl lg:text-5xl font-light text-[#333333] mb-6">
                  {t.about.trustHonestyExpertise}<span className="text-[#A38E78]">{t.about.trustHonestyExpertiseHighlight}</span>
                </h2>
                <p className="text-lg text-[#777777] leading-relaxed">
                  {t.about.trustDesc}
                </p>
              </div>
              <div>
                <img
                  src="https://i.ibb.co/1f6XFgtK/woman-having-facial-treatment-in-beauty-salon-clo-2025-02-12-23-00-09-utc-1.webp"
                  alt={t.about.trustHonestyExpertise}
                  className="rounded-3xl shadow-xl w-full"
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src="https://i.ibb.co/G4zfSnGV/studio-shot-of-a-beautiful-young-woman-with-flower-2025-04-06-07-14-47-utc.webp"
                  alt={t.about.personalisedExperience}
                  className="rounded-3xl shadow-xl w-full"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl lg:text-5xl font-light text-[#333333] mb-6">
                  {t.about.personalisedExperience}<span className="text-[#A38E78]">{t.about.personalisedExperienceHighlight}</span>
                </h2>
                <p className="text-lg text-[#777777] leading-relaxed">
                  {t.about.personalisedDesc}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-[#FAF8F5] via-[#FFFFFF] to-[#F5F1EC]">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h4 className="text-sm text-[#A38E78] font-semibold tracking-wider mb-4">{t.about.ourCommitment}</h4>
                <h2 className="text-4xl lg:text-5xl font-light text-[#333333] mb-6">
                  {t.about.safetyInnovation}<span className="text-[#A38E78]">{t.about.safetyInnovationHighlight}</span>
                </h2>
                <p className="text-lg text-[#777777] leading-relaxed">
                  {t.about.safetyDesc}
                </p>
              </div>
              <div>
                <img
                  src="https://www.beyondmedispa.com/wp-content/uploads/2024/10/Claire-Hill.png"
                  alt={t.about.safetyInnovation}
                  className="rounded-3xl shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-[#A38E78] to-[#8B7A67] text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h4 className="text-sm text-white/80 font-semibold tracking-wider mb-4">{t.nav.bookNow.toUpperCase()}</h4>
              <h2 className="text-4xl lg:text-5xl font-light mb-6">
                {t.about.visitUsToday}
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                {t.about.visitDesc}
              </p>
              <Link to="/book-treatment">
                <Button size="lg" className="bg-white text-[#A38E78] hover:bg-white/90 px-8 py-4 text-lg">
                  {t.buttons.bookNow}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h4 className="text-sm text-[#A38E78] font-semibold tracking-wider mb-4">{t.about.twoLocations}</h4>
              <h2 className="text-4xl lg:text-5xl font-light text-[#333333] mb-6">
                {t.about.whereToFindUs}<span className="text-[#A38E78]">{t.about.whereToFindUsHighlight}</span>
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
