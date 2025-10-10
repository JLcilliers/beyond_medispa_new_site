import { useLanguage } from '../../../../contexts/LanguageContext'
import { useTranslations } from '../../../../locales/translations'
import ProcedurePageTemplate from '../../../ProcedurePageTemplate'

export default function ExilisPage() {
  const { language } = useLanguage()
  const t = useTranslations(language)
  const content = t.procedurePages.bodyDetails.exilis

  return <ProcedurePageTemplate hero={content.hero} treatmentInfo={content.treatmentInfo} />
}
