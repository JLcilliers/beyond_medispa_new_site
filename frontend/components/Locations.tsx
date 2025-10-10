import { MapPin, Phone, Clock, Car } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { useTranslations } from '../locales/translations'
import { splitHighlight } from '../lib/intl'

const handleNavigation = (route: string) => {
  if (window.navigateTo) {
    (window as any).navigateTo(route)
  }
}

export default function Locations() {
  const { language } = useLanguage()
  const t = useTranslations(language)
  const { leading: locationsTitle, highlight: locationsHighlight } = splitHighlight(t.locations.title)

  return (
    <section className="py-20 bg-[#FFFFFF]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-[#333333] mb-4">
            {locationsTitle}
            {locationsHighlight && (
              <span className="text-[#A38E78]">{locationsHighlight}</span>
            )}
          </h2>
          <p className="text-xl text-[#777777] max-w-2xl mx-auto">
            {t.locations.subtitle}
          </p>
        </div>
        
        <div className="space-y-16">
          {t.locations.locationData.map((location, index) => (
            <div key={location.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Location Info */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="mb-8">
                  <h3 className="text-3xl font-semibold text-[#333333] mb-4">{location.city}</h3>
                  <div className="w-20 h-1 bg-[#A38E78] mb-6"></div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-[#A38E78]/20 p-3 rounded-full mr-4 mt-1">
                      <MapPin className="w-5 h-5 text-[#A38E78]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#333333] mb-1">{t.locations.addressLabel}</h4>
                      <p className="text-[#777777]">{location.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#A38E78]/20 p-3 rounded-full mr-4 mt-1">
                      <Phone className="w-5 h-5 text-[#A38E78]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#333333] mb-1">{t.locations.phoneLabel}</h4>
                      <p className="text-[#777777]">{location.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#A38E78]/20 p-3 rounded-full mr-4 mt-1">
                      <Clock className="w-5 h-5 text-[#A38E78]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#333333] mb-1">{t.locations.hoursLabel}</h4>
                      <p className="text-[#777777] whitespace-pre-line">{location.hours}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#A38E78]/20 p-3 rounded-full mr-4 mt-1">
                      <Car className="w-5 h-5 text-[#A38E78]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#333333] mb-1">{t.locations.parkingLabel}</h4>
                      <p className="text-[#777777]">{location.parking}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => handleNavigation('book-treatment')}
                    className="bg-[#A38E78] hover:bg-[#8B7A67] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    {t.locations.bookAppointment}
                  </button>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=Beyond+Aesthetic+Clinic+${location.city}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#A38E78] text-[#A38E78] hover:bg-[#A38E78] hover:text-white px-6 py-3 rounded-lg font-medium transition-colors text-center"
                  >
                    {t.locations.getDirections}
                  </a>
                </div>
              </div>
              
              {/* Google Maps Embed */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative h-80 rounded-2xl overflow-hidden">
                  <iframe 
                    src={location.mapEmbed}
                    width="100%" 
                    height="100%" 
                    style={{border: 0}} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
