import { Award, Zap, Heart } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { useTranslations } from '../locales/translations'
import { splitHighlight } from '../lib/intl'

export default function WhyChooseUsSection() {
  const { language } = useLanguage()
  const t = useTranslations(language)
  const { leading: whyChooseTitle, highlight: whyChooseHighlight } = splitHighlight(t.whyChooseUs.title)
  
  const features = [
    {
      icon: Award,
      title: t.whyChooseUs.feature1Title,
      description: t.whyChooseUs.feature1Desc
    },
    {
      icon: Zap,
      title: t.whyChooseUs.feature2Title,
      description: t.whyChooseUs.feature2Desc
    },
    {
      icon: Heart,
      title: t.whyChooseUs.feature3Title,
      description: t.whyChooseUs.feature3Desc
    }
  ]
  
  return (
    <section className="py-20 bg-gradient-to-br from-[#FFFFFF] via-[#FAF8F5] to-[#F5F1EC]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-[#333333] mb-6">
            {whyChooseTitle}
            {whyChooseHighlight && (
              <span className="text-[#A38E78]">{whyChooseHighlight}</span>
            )}
          </h2>
          <p className="text-xl text-[#777777] max-w-3xl mx-auto">
            {t.whyChooseUs.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-[#A38E78]/10 rounded-full w-20 h-20 flex items-center justify-center mb-6 group-hover:bg-[#A38E78]/20 transition-colors duration-300">
                  <Icon className="w-10 h-10 text-[#A38E78]" />
                </div>
                <h3 className="text-xl font-semibold text-[#333333] mb-4">{feature.title}</h3>
                <p className="text-[#777777] leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-16 bg-[#A38E78]/5 rounded-2xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-light text-[#333333] mb-6">
                {t.whyChooseUs.locationsTitle}
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-[#A38E78] font-semibold text-lg mb-2">{t.whyChooseUs.londonClinic}</h4>
                  <p className="text-[#777777]">
                    {t.whyChooseUs.londonClinicDesc}
                  </p>
                </div>
                <div>
                  <h4 className="text-[#A38E78] font-semibold text-lg mb-2">{t.whyChooseUs.edinburghClinic}</h4>
                  <p className="text-[#777777]">
                    {t.whyChooseUs.edinburghClinicDesc}
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#A38E78]/10 rounded-lg p-6 text-center">
                  <div className="text-2xl font-bold text-[#A38E78] mb-1">500+</div>
                  <div className="text-sm text-[#777777]">{t.whyChooseUs.monthlyTreatments}</div>
                </div>
                <div className="bg-[#A38E78]/10 rounded-lg p-6 text-center">
                  <div className="text-2xl font-bold text-[#A38E78] mb-1">98%</div>
                  <div className="text-sm text-[#777777]">{t.whyChooseUs.clientRetention}</div>
                </div>
                <div className="bg-[#A38E78]/10 rounded-lg p-6 text-center">
                  <div className="text-2xl font-bold text-[#A38E78] mb-1">15+</div>
                  <div className="text-sm text-[#777777]">{t.whyChooseUs.expertPractitioners}</div>
                </div>
                <div className="bg-[#A38E78]/10 rounded-lg p-6 text-center">
                  <div className="text-2xl font-bold text-[#A38E78] mb-1">2</div>
                  <div className="text-sm text-[#777777]">{t.whyChooseUs.premiumLocations}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
