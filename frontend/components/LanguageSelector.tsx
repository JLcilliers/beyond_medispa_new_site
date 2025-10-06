import { useLanguage, Language } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const languages = [
  { code: 'en' as Language, name: 'English', nativeName: 'English' },
  { code: 'zh-TW' as Language, name: 'Traditional Chinese', nativeName: '繁體中文' },
  { code: 'zh-CN' as Language, name: 'Simplified Chinese', nativeName: '简体中文' },
  { code: 'ar' as Language, name: 'Arabic', nativeName: 'العربية' }
];

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find(lang => lang.code === language);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#F5F1EC] transition-colors"
        aria-label="Select language"
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
                  setLanguage(lang.code);
                  setIsOpen(false);
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
  );
}
