import { useLanguage } from '../../../../contexts/LanguageContext'
import { useTranslations } from '../../../../locales/translations'
import ProcedurePageTemplate from '../../../ProcedurePageTemplate'

export default function HifuPage() {
  const { language } = useLanguage()
  const t = useTranslations(language)
  const content = t.procedurePages.bodyDetails.hifu

  return <ProcedurePageTemplate hero={content.hero} treatmentInfo={content.treatmentInfo} />
}
