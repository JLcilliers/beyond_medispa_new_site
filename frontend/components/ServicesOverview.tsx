import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { useTranslations } from '../locales/translations'

type TreatmentCard = {
  tag: string
  title: string
  description: string
  link: string
  image: string
  imageAlt: string
  cta: string
}

export default function ServicesOverview() {
  const { language } = useLanguage()
  const t = useTranslations(language)

  const treatments: TreatmentCard[] = [
    {
      tag: 'London Clinic',
      title: t.treatments.body,
      description: t.services.bodyContouringDesc,
      link: '/london/body',
      image: '/treatment-categories/body-sculpting.png',
      imageAlt: 'Body contouring treatment at Beyond MediSpa',
      cta: 'Explore body treatments'
    },
    {
      tag: 'Tailored Peels',
      title: t.treatments.peels,
      description: t.services.chemicalPeelsDesc || 'Medical-grade peels to renew texture, brighten tone, and reveal clearer skin.',
      link: '/london/peels',
      image: '/treatment-categories/advanced-skin-treatments.png',
      imageAlt: 'Advanced skin peel treatment',
      cta: 'Explore peel treatments'
    },
    {
      tag: 'Complexion Care',
      title: t.treatments.facial,
      description: t.services.skinTreatmentsDesc,
      link: '/london/facial',
      image: '/treatment-categories/hydrafacial.png',
      imageAlt: 'HydraFacial performed in clinic',
      cta: 'Explore facial treatments'
    },
    {
      tag: 'Doctor-Led',
      title: t.treatments.injectables,
      description: t.services.injectablesDesc,
      link: '/london/injectables',
      image: '/treatment-categories/anti-wrinkle-treatments.png',
      imageAlt: 'Injectable aesthetic treatments',
      cta: 'Explore injectables'
    }
  ]

  return (
    <>
      {treatments.map((treatment, index) => (
        <section
          key={treatment.title}
          className={`py-20 ${index % 2 === 0 ? 'bg-gradient-to-br from-[#FAF8F5] via-[#FFFFFF] to-[#F5F1EC]' : 'bg-white'}`}
        >
          <div className="mx-auto grid max-w-6xl items-center gap-16 px-4 lg:grid-cols-2">
            <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#A38E78]">{treatment.tag}</h4>
              <h2 className="mb-6 text-4xl font-light text-[#2C2C2C] lg:text-5xl">{treatment.title}</h2>
              <p className="mb-8 text-lg leading-relaxed text-[#6B6B6B]">{treatment.description}</p>
              <Link to={treatment.link}>
                <Button className="inline-flex items-center gap-2 bg-[#A38E78] px-6 py-3 text-white transition-colors hover:bg-[#8B7A67]">
                  {treatment.cta}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
              <img
                src={treatment.image}
                alt={treatment.imageAlt}
                className="w-full rounded-3xl shadow-xl"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
