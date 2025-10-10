import { Star, Users, Stethoscope } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { useTranslations } from '../locales/translations'
import { splitHighlight } from '../lib/intl'

export default function GetMoreSection() {
  const { language } = useLanguage()
  const t = useTranslations(language)
  const { leading: getMoreTitle, highlight: getMoreHighlight } = splitHighlight(t.getMore.title)

  const benefits = [
    {
      icon: Star,
      title: t.getMore.benefits.googleReviews,
    },
    {
      icon: Users,
      title: t.getMore.benefits.referFriend,
    },
    {
      icon: Stethoscope,
      title: t.getMore.benefits.freeConsultation,
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-[#A38E78] to-[#8B7A67]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-white mb-4">
            {getMoreTitle}
            {getMoreHighlight && (
              <span className="font-semibold">{getMoreHighlight}</span>
            )}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="text-center group"
              >
                <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-medium text-white">{benefit.title}</h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
