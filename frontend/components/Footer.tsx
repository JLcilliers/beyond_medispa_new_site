import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { useTranslations } from '../locales/translations'

const formatTelHref = (value: string) => `tel:${value.replace(/[^+\d]/g, '')}`
const formatMailHref = (value: string) => `mailto:${value}`

const policyUrls = {
  privacy: 'https://www.beyondmedispa.com/privacy-policy',
  terms: 'https://www.beyondmedispa.com/terms-and-conditions',
  cookies: 'https://www.beyondmedispa.com/cookie-policy'
}

export default function Footer() {
  const { language } = useLanguage()
  const t = useTranslations(language)

  const primaryPhone = t.contact.primaryPhoneNumber || '020 7224 1555'
  const secondaryPhone = t.contact.secondaryPhoneNumber || '0131 226 8828'
  const primaryEmail = t.contact.primaryEmail || 'info@beyondmedispa.com'
  const secondaryEmail = t.contact.secondaryEmail || ''

  const policyLinks = [
    { label: t.footer.privacyPolicy, href: policyUrls.privacy },
    { label: t.footer.termsConditions, href: policyUrls.terms },
    { label: t.footer.cookies, href: policyUrls.cookies }
  ]

  return (
    <footer className="bg-[#101010] text-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1.35fr]">
          <div>
            <h3 className="text-2xl font-semibold text-white">Beyond MediSpa</h3>
            <p className="mt-4 text-sm leading-relaxed text-white/70">{t.footer.brandDescription}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="https://www.instagram.com/beyond.aesthetic.clinic/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/BeyondAestheticClinicUK/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@beyondmedispa2049"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <a
              href="https://www.phorest.com/salon/beyondmedispa"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-[#C6A77D] px-6 py-3 text-sm font-semibold text-[#1A1A1A] transition-colors hover:bg-[#b49368]"
            >
              {t.footer.bookTreatment}
            </a>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white">{t.footer.services}</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <a href="/procedures/injectables" className="transition-colors hover:text-[#C6A77D]">
                  {t.treatments.injectables}
                </a>
              </li>
              <li>
                <a href="/procedures/facial" className="transition-colors hover:text-[#C6A77D]">
                  {t.treatments.facial}
                </a>
              </li>
              <li>
                <a href="/procedures/body" className="transition-colors hover:text-[#C6A77D]">
                  {t.treatments.body}
                </a>
              </li>
              <li>
                <a href="/procedures/peels" className="transition-colors hover:text-[#C6A77D]">
                  {t.treatments.peels}
                </a>
              </li>
              <li>
                <a href="/doctors" className="transition-colors hover:text-[#C6A77D]">
                  {t.footer.ourTeam}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white">{t.footer.quickLinks}</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <a href="/about" className="transition-colors hover:text-[#C6A77D]">
                  {t.footer.aboutUs}
                </a>
              </li>
              <li>
                <a href="/london" className="transition-colors hover:text-[#C6A77D]">
                  {t.footer.londonClinic}
                </a>
              </li>
              <li>
                <a href="/edinburgh" className="transition-colors hover:text-[#C6A77D]">
                  {t.footer.edinburghClinic}
                </a>
              </li>
              <li>
                <a href="/contact" className="transition-colors hover:text-[#C6A77D]">
                  {t.nav.contact}
                </a>
              </li>
              {policyLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#C6A77D]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white">{t.footer.contactInfo}</h4>
            <div className="mt-4 space-y-4 text-sm text-white/80">
              <div className="flex gap-3">
                <MapPin className="mt-1 h-5 w-5 text-[#C6A77D]" />
                <div className="space-y-2">
                  <div>
                    <p className="font-semibold text-white/90">{t.footer.londonClinic}</p>
                    <p>{t.footer.londonAddress}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white/90">{t.footer.edinburghClinic}</p>
                    <p>{t.footer.edinburghAddress}</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone className="mt-1 h-5 w-5 text-[#C6A77D]" />
                <div className="space-y-1">
                  <a href={formatTelHref(primaryPhone)} className="block transition-colors hover:text-[#C6A77D]">
                    {primaryPhone} <span className="text-xs text-white/50">({t.footer.londonClinic})</span>
                  </a>
                  <a href={formatTelHref(secondaryPhone)} className="block transition-colors hover:text-[#C6A77D]">
                    {secondaryPhone} <span className="text-xs text-white/50">({t.footer.edinburghClinic})</span>
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail className="mt-1 h-5 w-5 text-[#C6A77D]" />
                <div className="space-y-1">
                  <a href={formatMailHref(primaryEmail)} className="block transition-colors hover:text-[#C6A77D]">
                    {primaryEmail}
                  </a>
                  {secondaryEmail && (
                    <a href={formatMailHref(secondaryEmail)} className="block transition-colors hover:text-[#C6A77D]">
                      {secondaryEmail}
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3 rounded-lg bg-white/5 p-4">
              <img
                src="/cqc-logo.svg"
                alt="Care Quality Commission regulated provider"
                className="h-12 w-auto"
                loading="lazy"
              />
              <p className="text-xs font-medium leading-snug text-white/70">
                Regulated by the Care Quality Commission
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>{t.footer.allRightsReserved}</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {policyLinks.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#C6A77D]">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
