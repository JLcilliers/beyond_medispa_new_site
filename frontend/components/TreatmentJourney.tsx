import { Play } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { useTranslations } from '../locales/translations'

export default function TreatmentJourney() {
  const { language } = useLanguage()
  const t = useTranslations(language)

  const steps = [
    {
      step: "01",
      title: t.journey.step1Title,
      description: t.journey.step1Desc,
      image: "https://www.beyondmedispa.com/wp-content/uploads/2025/09/consultation.png"
    },
    {
      step: "02", 
      title: t.journey.step2Title,
      description: t.journey.step2Desc,
      image: "https://www.beyondmedispa.com/wp-content/uploads/2025/09/web-design.png"
    },
    {
      step: "03",
      title: t.journey.step3Title,
      description: t.journey.step3Desc,
      image: "https://www.beyondmedispa.com/wp-content/uploads/2025/09/laser.png"
    },
    {
      step: "04",
      title: t.journey.step4Title,
      description: t.journey.step4Desc,
      image: "https://www.beyondmedispa.com/wp-content/uploads/2025/09/solidarity.png"
    }
  ]

  return (
    <section className="py-20 bg-[#FAF8F5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-[#333333] mb-4">
            {t.journey.title.split('Journey')[0]}<span className="text-[#A38E78]">Journey</span>
          </h2>
          <p className="text-xl text-[#777777] max-w-2xl mx-auto">
            {t.journey.subtitle}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://i.ibb.co/4R2SfBpq/beautician-applying-facial-mask-at-cosmetic-clinic-2024-10-31-01-14-38-utc.webp"
                alt={t.journey.title}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <button className="bg-white bg-opacity-20 backdrop-blur-sm p-6 rounded-full hover:bg-opacity-30 transition-all">
                  <Play className="w-12 h-12 text-white ml-1" />
                </button>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#A38E78] text-white p-6 rounded-2xl">
              <div className="text-center">
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm">{t.journey.clientSatisfaction}</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="relative flex-shrink-0">
                  <div className="absolute -top-2 -left-2 bg-[#A38E78] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm z-10">
                    {step.step}
                  </div>
                  <div className="w-16 h-16 rounded-full bg-[#A38E78]/10 flex items-center justify-center shadow-lg">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#333333] mb-2">{step.title}</h3>
                  <p className="text-[#777777] leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
