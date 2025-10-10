import { useLanguage } from '../../contexts/LanguageContext'
import { useTranslations } from '../../locales/translations'
import CategoryPageTemplate from '../../CategoryPageTemplate'

export default function BodyPage() {
  const { language } = useLanguage()
  const t = useTranslations(language)
  const { hero, treatments } = t.procedurePages.body

  return <CategoryPageTemplate hero={hero} treatments={treatments} />
}
