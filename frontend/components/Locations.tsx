import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { useTranslations } from '../locales/translations'
import { splitHighlight } from '../lib/intl'

const formatPhoneHref = (value: string) => `tel:${value.replace(/[^+\\d]/g, '')}`

export default function Locations() {
  const { language } = useLanguage()
  const t = useTranslations(language)
  const { leading: locationsTitle, highlight: locationsHighlight } = splitHighlight(t.locations.title)

  return (
    <section className="bg-[#FFFFFF] py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-light text-[#333333] md:text-5xl">
            {locationsTitle}
            {locationsHighlight && <span className="text-[#A38E78]">{locationsHighlight}</span>}
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-[#777777]">{t.locations.subtitle}</p>
        </div>

        <div className="space-y-16">
          {t.locations.locationData.map((location, index) => {
            const directionsUrl = location.mapEmbed.replace('/maps/embed?', '/maps?')

            return (
              <div
                key={location.id}
                className={`grid items-center gap-12 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="mb-8">
                  <h3 className="mb-4 text-3xl font-semibold text-[#333333]">{location.city}</h3>
                  <div className="h-1 w-20 bg-[#A38E78]" />
                </div>

                <div className="space-y-6 text-sm text-[#555555]">
                  <div className="flex items-start gap-4">
                    <span className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#A38E78]/20">
                      <MapPin className="h-5 w-5 text-[#A38E78]" />
                    </span>
                    <div>
                      <h4 className="text-base font-semibold text-[#333333]">{t.locations.addressLabel}</h4>
                      <p className="leading-relaxed text-[#666666]">{location.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#A38E78]/20">
                      <Phone className="h-5 w-5 text-[#A38E78]" />
                    </span>
                    <div>
                      <h4 className="text-base font-semibold text-[#333333]">{t.locations.phoneLabel}</h4>
                      <a
                        href={formatPhoneHref(location.phone)}
                        className="font-medium text-[#A38E78] transition-colors hover:text-[#8B7A67]"
                      >
                        {location.phone}
                      </a>
                    </div>
                  </div>

                  {location.email ? (
                    <div className="flex items-start gap-4">
                      <span className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#A38E78]/20">
                        <Mail className="h-5 w-5 text-[#A38E78]" />
                      </span>
                      <div>
                        <h4 className="text-base font-semibold text-[#333333]">{t.contact.email}</h4>
                        <a
                          href={`mailto:${location.email}`}
                          className="font-medium text-[#A38E78] transition-colors hover:text-[#8B7A67]"
                        >
                          {location.email}
                        </a>
                      </div>
                    </div>
                  ) : null}

                  <div className="flex items-start gap-4">
                    <span className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#A38E78]/20">
                      <Clock className="h-5 w-5 text-[#A38E78]" />
                    </span>
                    <div>
                      <h4 className="text-base font-semibold text-[#333333]">{t.locations.hoursLabel}</h4>
                      <p className="whitespace-pre-line text-[#666666]">{location.hours}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="https://www.phorest.com/salon/beyondmedispa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-[#A38E78] px-6 py-3 text-center font-medium text-white transition-colors hover:bg-[#8B7A67]"
                  >
                    {t.locations.bookAppointment}
                  </a>
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-[#A38E78] px-6 py-3 text-center font-medium text-[#A38E78] transition-colors hover:bg-[#A38E78] hover:text-white"
                  >
                    {t.locations.getDirections}
                  </a>
                </div>
              </div>

              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative h-80 overflow-hidden rounded-2xl shadow-lg">
                  <iframe
                    src={location.mapEmbed}
                    title={`${location.city} clinic map`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full w-full"
                  />
                </div>
              </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
