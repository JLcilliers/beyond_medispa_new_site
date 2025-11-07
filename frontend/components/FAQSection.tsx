import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { useTranslations } from '../locales/translations'
import { splitHighlight } from '../lib/intl'

export default function FAQSection() {
  const { language } = useLanguage()
  const t = useTranslations(language)
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const { leading: faqTitle, highlight: faqHighlight } = splitHighlight(t.faq.title)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section className="py-20 bg-[#FFFFFF]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-[#333333] mb-6">
            {faqTitle}
            {faqHighlight && (
              <span className="text-[#A38E78]">{faqHighlight}</span>
            )}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {t.faqQuestions.map((faq, index) => (
              <div
                key={index}
                className="bg-[#FAF8F5] border border-[#E5E5E5] rounded-xl overflow-hidden transition-all duration-300 hover:bg-white/80"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none"
                >
                  <h3 className="text-lg font-semibold text-[#333333] pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openFAQ === index ? (
                      <ChevronUp className="w-6 h-6 text-[#A38E78]" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-[#A38E78]" />
                    )}
                  </div>
                </button>

                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <div className="pt-2 border-t border-[#E5E5E5]">
                      <p className="text-[#777777] leading-relaxed mt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-[#FAF8F5] border border-[#E5E5E5] rounded-2xl p-8">
              <h3 className="text-2xl font-light text-[#333333] mb-4">
                {t.faq.visitTitle}
              </h3>
              <p className="text-[#777777] mb-6">
                {t.faq.visitDesc}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:02072018595"
                  className="bg-[#A38E78] hover:bg-[#8B7A67] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  {t.faq.callUs}
                </a>
                <a 
                  href="/book-treatment"
                  className="border border-[#A38E78] text-[#A38E78] hover:bg-[#A38E78] hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  {t.buttons.bookNow}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
