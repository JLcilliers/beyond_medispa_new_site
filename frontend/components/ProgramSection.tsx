import { Fragment } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { useTranslations } from '../locales/translations'
import { splitHighlight } from '../lib/intl'

export default function ProgramSection() {
  const { language } = useLanguage()
  const t = useTranslations(language)
  const { leading: personalisedTitle, highlight: personalisedHighlight } = splitHighlight(t.personalisedApproach.title)

  const programs = [
    {
      id: 1,
      title: t.personalisedApproach.programs.consultation.title,
      image: "https://www.beyondmedispa.com/wp-content/uploads/2025/09/consultation.png",
      description: t.personalisedApproach.programs.consultation.description
    },
    {
      id: 2,
      title: t.personalisedApproach.programs.customization.title,
      image: "https://www.beyondmedispa.com/wp-content/uploads/2025/09/web-design.png",
      description: t.personalisedApproach.programs.customization.description
    },
    {
      id: 3,
      title: t.personalisedApproach.programs.treatment.title,
      image: "https://www.beyondmedispa.com/wp-content/uploads/2025/09/laser.png",
      description: t.personalisedApproach.programs.treatment.description
    },
    {
      id: 4,
      title: t.personalisedApproach.programs.aftercare.title,
      image: "https://www.beyondmedispa.com/wp-content/uploads/2025/09/solidarity.png",
      description: t.personalisedApproach.programs.aftercare.description
    }
  ]

  const details = [
    {
      title: t.personalisedApproach.details.consultAssess.title,
      description: t.personalisedApproach.details.consultAssess.description
    },
    {
      title: t.personalisedApproach.details.bespokePlan.title,
      description: t.personalisedApproach.details.bespokePlan.description
    },
    {
      title: t.personalisedApproach.details.cuttingEdge.title,
      description: t.personalisedApproach.details.cuttingEdge.description
    },
    {
      title: t.personalisedApproach.details.resultsAftercare.title,
      description: t.personalisedApproach.details.resultsAftercare.description
    }
  ]

  return (
    <section className="py-20 bg-[#F5F1EC] text-[#333333]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-[#333333] mb-8">
            {personalisedTitle}
            {personalisedHighlight && (
              <span className="text-[#A38E78]">{personalisedHighlight}</span>
            )}
          </h2>

          <div className="flex items-center justify-center mb-16">
            {programs.map((program, index) => (
              <Fragment key={program.id}>
                <div className="text-center group">
                  <div className="relative mb-4">
                    <div className="w-24 h-24 rounded-full mx-auto bg-[#A38E78]/10 border-4 border-[#A38E78]/30 group-hover:border-[#A38E78] transition-colors flex items-center justify-center">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-sm font-medium mb-2 text-[#333333]">{program.title}</h3>
                  <p className="text-xs text-[#777777]">{program.description}</p>
                </div>
                {index < programs.length - 1 && (
                  <div className="flex items-center justify-center mx-8">
                    <svg className="w-8 h-8 text-[#A38E78]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {details.map((detail, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-semibold text-[#A38E78]">{detail.title}</h3>
              <p className="text-[#777777] leading-relaxed text-sm">{detail.description}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mt-16 space-x-16">
          <div className="text-center">
            <div className="text-sm text-[#777777] mb-2">{t.personalisedApproach.stats.experienceLabel}</div>
            <div className="text-3xl font-light text-[#A38E78]">{t.personalisedApproach.stats.experienceValue}</div>
          </div>
          <div className="w-px h-12 bg-[#E5E5E5]"></div>
          <div className="text-center">
            <div className="text-sm text-[#777777] mb-2">{t.personalisedApproach.stats.priceLabel}</div>
            <div className="text-3xl font-light text-[#A38E78]">{t.personalisedApproach.stats.priceValue}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
