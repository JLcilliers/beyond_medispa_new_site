import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { useTranslations } from '../locales/translations'
import { splitHighlight } from '../lib/intl'

export default function ServicesOverview() {
  const { language } = useLanguage()
  const t = useTranslations(language)
  const [activeCategory, setActiveCategory] = useState(0)
  const { leading: servicesTitle, highlight: servicesHighlight } = splitHighlight(t.services.whatCanWeHelp)

  const serviceCategories = [
    {
      title: t.services.injectables,
      description: t.services.injectablesDesc,
      services: [
        { name: t.services.antiWrinkle, description: t.services.antiWrinkleDesc },
        { name: t.services.dermalFillers, description: t.services.dermalFillersDesc },
        { name: t.services.lipEnhancement, description: t.services.lipEnhancementDesc },
        { name: t.services.cheekEnhancement, description: t.services.cheekEnhancementDesc },
        { name: t.services.nasolabialLines, description: t.services.nasolabialLinesDesc },
        { name: t.services.underEyeCorrection, description: t.services.underEyeCorrectionDesc },
        { name: t.services.profhilo, description: t.services.profhiloDesc },
        { name: t.services.b12Injections, description: t.services.b12InjectionsDesc }
      ]
    },
    {
      title: t.services.skinTreatments,
      description: t.services.skinTreatmentsDesc,
      services: [
        { name: t.services.hydrafacial, description: t.services.hydrafacialDesc },
        { name: t.services.oxygenFacial, description: t.services.oxygenFacialDesc },
        { name: t.services.ledTherapy, description: t.services.ledTherapyDesc },
        { name: t.services.microneedling, description: t.services.microneedlingDesc },
        { name: t.services.chemicalPeels, description: t.services.chemicalPeelsDesc },
        { name: t.services.prpHair, description: t.services.prpHairDesc }
      ]
    },
    {
      title: t.services.bodyContouring,
      description: t.services.bodyContouringDesc,
      services: [
        { name: t.services.coolsculpting, description: t.services.coolsculptingDesc },
        { name: t.services.fatFreezing, description: t.services.fatFreezingDesc },
        { name: t.services.vanquish, description: t.services.vanquishDesc },
        { name: t.services.exilis, description: t.services.exilisDesc },
        { name: t.services.buttocksEnhancement, description: t.services.buttocksEnhancementDesc }
      ]
    },
    {
      title: t.services.skinConcerns,
      description: t.services.skinConcernsDesc,
      services: [
        { name: t.services.antiAgeing, description: t.services.antiAgeingDesc },
        { name: t.services.acneScarring, description: t.services.acneScarringDesc },
        { name: t.services.sunDamage, description: t.services.sunDamageDesc },
        { name: t.services.sensitiveSkin, description: t.services.sensitiveSkinDesc },
        { name: t.services.moleRemoval, description: t.services.moleRemovalDesc }
      ]
    },
    {
      title: t.services.wellbeing,
      description: t.services.wellbeingDesc,
      services: [
        { name: t.services.antiCellulite, description: t.services.antiCelluliteDesc },
        { name: t.services.harmonyMassage, description: t.services.harmonyMassageDesc },
        { name: t.services.mesotherapy, description: t.services.mesotherapyDesc },
        { name: t.services.nutritionist, description: t.services.nutritionistDesc }
      ]
    }
  ]

  const handleNavigation = (route: string) => {
    if (window.navigateTo) {
      (window as any).navigateTo(route)
    }
  }

  return (
    <section className="py-20 bg-[#F5F1EC]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-[#333333] mb-6">
            {servicesTitle}
            {servicesHighlight && (
              <span className="text-[#A38E78]">{servicesHighlight}</span>
            )}
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="space-y-2">
              {serviceCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                    activeCategory === index
                      ? 'bg-[#A38E78] text-white'
                      : 'bg-white/50 text-[#333333] hover:bg-white/80 border border-[#E5E5E5]'
                  }`}
                >
                  <h3 className="font-semibold text-lg mb-1">{category.title}</h3>
                  <p className="text-sm opacity-80">{category.description}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white/70 rounded-xl p-8 border border-[#E5E5E5]">
              <h3 className="text-2xl font-semibold text-[#A38E78] mb-6">
                {serviceCategories[activeCategory].title}
              </h3>
              <div className="grid gap-4">
                {serviceCategories[activeCategory].services.map((service, index) => (
                  <div key={index} className="border-b border-[#E5E5E5] pb-4 last:border-b-0">
                    <h4 className="text-[#333333] font-medium text-lg mb-2">{service.name}</h4>
                    <p className="text-[#777777] mb-3">{service.description}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleNavigation('procedures')}
                      className="bg-[#A38E78] text-white hover:bg-[#8B7A67] border-[#A38E78]"
                    >
                      {t.buttons.learnMore}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            onClick={() => handleNavigation('procedures')}
            className="bg-[#A38E78] hover:bg-[#8B7A67] text-white px-8 py-4 text-lg"
          >
            {t.buttons.viewAllTreatments}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
