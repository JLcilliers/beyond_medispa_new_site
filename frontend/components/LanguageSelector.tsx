import { useState, useRef, useEffect } from 'react'
import { Globe } from 'lucide-react'
import { useLanguage, Language } from '../contexts/LanguageContext'
import { useTranslations } from '../locales/translations'

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage()
  const t = useTranslations(language)
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const languages = [
    {
      code: 'en' as Language,
      name: t.languageSwitcher.languages.en.label,
      nativeName: t.languageSwitcher.languages.en.nativeName,
    },
    {
      code: 'zh-TW' as Language,
      name: t.languageSwitcher.languages['zh-TW'].label,
      nativeName: t.languageSwitcher.languages['zh-TW'].nativeName,
    },
    {
      code: 'zh-CN' as Language,
      name: t.languageSwitcher.languages['zh-CN'].label,
      nativeName: t.languageSwitcher.languages['zh-CN'].nativeName,
    },
    {
      code: 'ar' as Language,
      name: t.languageSwitcher.languages.ar.label,
      nativeName: t.languageSwitcher.languages.ar.nativeName,
    },
  ]

  const currentLanguage = languages.find((lang) => lang.code === language)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#F5F1EC] transition-colors"
        aria-label={t.languageSwitcher.selectLabel}
      >
        <Globe className="w-5 h-5 text-[#C6A77D]" />
        <span className="text-sm font-light text-[#C6A77D]">
          {currentLanguage?.nativeName}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-[#F5F1EC] z-50">
          <div className="py-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code)
                  setIsOpen(false)
                }}
                className={`w-full px-4 py-2 text-left hover:bg-[#F5F1EC] transition-colors ${
                  language === lang.code ? 'bg-[#F5F1EC]' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#2C2C2C]">{lang.nativeName}</span>
                  <span className="text-xs text-[#777777]">{lang.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
