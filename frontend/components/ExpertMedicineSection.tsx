import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { useTranslations } from '../locales/translations'

export default function ExpertMedicineSection() {
  const { language } = useLanguage()
  const t = useTranslations(language)

  const points = [
    t.expertMedicine.points.quality,
    t.expertMedicine.points.progress,
    t.expertMedicine.points.nonInvasive
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-light text-[#333333] mb-6">
              {t.expertMedicine.title} <span className="text-[#A38E78]">{t.expertMedicine.titleHighlight}</span>
            </h2>
            <p className="text-xl text-[#777777]">
              {t.expertMedicine.subtitle}
            </p>
          </div>

          <div className="space-y-6 mb-12">
            {points.map((point, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-[#A38E78]" />
                </div>
                <p className="text-[#777777] leading-relaxed">{point}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/doctors">
              <Button
                size="lg"
                className="bg-[#A38E78] hover:bg-[#8B7A67] text-white px-8 py-4 text-lg"
              >
                {t.expertMedicine.buttonText}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
