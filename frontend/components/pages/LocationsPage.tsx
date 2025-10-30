import Navigation from '../Navigation'
import Footer from '../Footer'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Mail, Clock, Award, Users, Heart } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'
import { useTranslations } from '../../locales/translations'

const formatPhoneHref = (value: string) => `tel:${value.replace(/[^+\\d]/g, '')}`

const locationHighlights: Record<number, string[]> = {
  1: [
    'Fourth floor of Harvey Nichols, Knightsbridge',
    'Doctor-led aesthetic and wellness treatments',
    'Steps from Knightsbridge Underground station'
  ],
  2: [
    'Within Harvey Nichols on St Andrew Square',
    'Calm clinic environment with leading technology',
    'Close to Edinburgh Waverley station and tram links'
  ]
}

export default function LocationsPage() {
  const { language } = useLanguage()
  const t = useTranslations(language)

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-20">
        <section className="bg-gradient-to-br from-[#111A19] via-[#1f3430] to-[#111A19] py-20 text-white">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-[#C6A77D]">Beyond MediSpa</p>
            <h1 className="mt-4 text-5xl font-light lg:text-6xl">
              Clinics in <span className="text-[#C6A77D]">London &amp; Edinburgh</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Discover bespoke medical aesthetics inside Harvey Nichols in Knightsbridge and Edinburgh’s New Town. Every
              visit includes a dedicated consultation, advanced technology and a warm welcome from our expert team.
            </p>
          </div>
        </section>

        <section className="bg-[#F8F1E7] py-20">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C6A77D]/15">
                <MapPin className="h-6 w-6 text-[#C6A77D]" />
              </div>
              <h2 className="mt-6 text-2xl font-semibold text-[#1C1C1C]">London Knightsbridge</h2>
              <p className="mt-3 text-[#5F5F5F]">
                Fourth Floor, Harvey Nichols, 109-125 Knightsbridge, London SW1X 7RJ
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C6A77D]/15">
                <MapPin className="h-6 w-6 text-[#C6A77D]" />
              </div>
              <h2 className="mt-6 text-2xl font-semibold text-[#1C1C1C]">Edinburgh New Town</h2>
              <p className="mt-3 text-[#5F5F5F]">
                Second Floor, Harvey Nichols, 30-34 St Andrew Square, Edinburgh EH2 2AD
              </p>
            </div>
          </div>

          <div className="mx-auto mt-16 grid max-w-6xl gap-8 px-4 lg:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#C6A77D]/15">
                <Award className="h-6 w-6 text-[#C6A77D]" />
              </span>
              <h3 className="mt-6 text-xl font-semibold text-[#1C1C1C]">Award-winning expertise</h3>
              <p className="mt-3 text-[#626262]">
                Doctor-led teams delivering advanced injectables, skin rejuvenation, and body treatments since 2006.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#C6A77D]/15">
                <Users className="h-6 w-6 text-[#C6A77D]" />
              </span>
              <h3 className="mt-6 text-xl font-semibold text-[#1C1C1C]">Specialist practitioners</h3>
              <p className="mt-3 text-[#626262]">
                Aesthetic doctors, nurse prescribers, and senior practitioners collaborate to personalise every course of care.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#C6A77D]/15">
                <Heart className="h-6 w-6 text-[#C6A77D]" />
              </span>
              <h3 className="mt-6 text-xl font-semibold text-[#1C1C1C]">Patient-first experience</h3>
              <p className="mt-3 text-[#626262]">
                Calm, welcoming spaces with dedicated consultation, treatment, and aftercare support at each location.
              </p>
            </div>
          </div>
        </section>

        {t.locations.locationData.map((location, index) => {
          const highlights = locationHighlights[location.id]
          const directionsUrl = location.mapEmbed.replace('/maps/embed?', '/maps?')

          return (
            <section key={location.id} className={index % 2 === 0 ? 'bg-white py-20' : 'bg-[#111A19] py-20 text-white'}>
              <div className="mx-auto grid max-w-6xl items-start gap-16 px-4 lg:grid-cols-[1.1fr_0.9fr]">
                <div className={index % 2 === 0 ? '' : 'lg:order-2'}>
                  <p className="text-xs uppercase tracking-[0.35em] text-[#C6A77D]">Clinic spotlight</p>
                  <h2 className="mt-4 text-4xl font-light lg:text-5xl">
                    {location.city === 'London' ? 'Beyond MediSpa Knightsbridge' : 'Beyond MediSpa Edinburgh'}
                  </h2>
                  <p className="mt-5 text-lg leading-relaxed text-[#5f5f5f] dark:text-white/80">
                    {location.city === 'London'
                      ? 'Located within Harvey Nichols, our Knightsbridge clinic pairs luxurious surroundings with the very latest technology in aesthetic medicine.'
                      : 'Set within Harvey Nichols, our Edinburgh clinic combines calm interiors with advanced treatments across skin, body, and wellness.'}
                  </p>

                  <div className="mt-8 space-y-5 rounded-2xl border border-[#E7DED1] bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
                    <div className="flex items-start gap-4">
                      <span className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#C6A77D]/15">
                        <MapPin className="h-5 w-5 text-[#C6A77D]" />
                      </span>
                      <div>
                        <h3 className="text-base font-semibold text-[#1C1C1C] dark:text-white">Address</h3>
                        <p className="leading-relaxed text-[#5F5F5F] dark:text-white/80">{location.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#C6A77D]/15">
                        <Phone className="h-5 w-5 text-[#C6A77D]" />
                      </span>
                      <div>
                        <h3 className="text-base font-semibold text-[#1C1C1C] dark:text-white">Phone</h3>
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
                        <span className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#C6A77D]/15">
                          <Mail className="h-5 w-5 text-[#C6A77D]" />
                        </span>
                        <div>
                          <h3 className="text-base font-semibold text-[#1C1C1C] dark:text-white">Email</h3>
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
                      <span className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#C6A77D]/15">
                        <Clock className="h-5 w-5 text-[#C6A77D]" />
                      </span>
                      <div>
                        <h3 className="text-base font-semibold text-[#1C1C1C] dark:text-white">Clinic hours</h3>
                        <p className="whitespace-pre-line text-[#5F5F5F] dark:text-white/80">{location.hours}</p>
                      </div>
                    </div>
                  </div>

                  {highlights ? (
                    <ul className="mt-8 space-y-3">
                      {highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-3 text-[#5F5F5F] dark:text-white/80">
                          <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-[#C6A77D]" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                    <Button asChild className="bg-[#A38E78] px-6 py-3 text-white hover:bg-[#8B7A67]">
                      <a href="https://book.beyondmedispa.com" target="_blank" rel="noopener noreferrer">
                        {t.locations.bookAppointment}
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-[#A38E78] px-6 py-3 text-[#A38E78] hover:bg-[#A38E78] hover:text-white"
                    >
                      <a href={directionsUrl} target="_blank" rel="noopener noreferrer">
                        {t.locations.getDirections}
                      </a>
                    </Button>
                  </div>
                </div>

                <div className={index % 2 === 0 ? '' : 'lg:order-1'}>
                  <div className="relative h-[420px] overflow-hidden rounded-3xl shadow-xl">
                    <iframe
                      src={location.mapEmbed}
                      title={`${location.city} clinic map`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </section>
          )
        })}

        <section className="bg-[#111A19] py-20 text-white">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-4xl font-light lg:text-5xl">Ready to plan your visit?</h2>
            <p className="mt-4 text-lg text-white/80">
              Book online or call our team and we will help you choose the perfect treatment plan at the clinic that
              suits you best.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-[#C6A77D] text-[#1A1A1A] hover:bg-[#b49368]">
                <a href="https://book.beyondmedispa.com" target="_blank" rel="noopener noreferrer">
                  {t.buttons.bookNow}
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#1A1A1A]"
              >
                <a href={formatPhoneHref(t.contact.primaryPhoneNumber)}>{t.buttons.callNow}</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
