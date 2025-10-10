import Navigation from '../Navigation'
import Footer from '../Footer'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'
import { useTranslations } from '../../locales/translations'
import { splitHighlight } from '../../lib/intl'

export default function ContactPage() {
  const { language } = useLanguage()
  const t = useTranslations(language)

  const locationsData = t.locations.locationData
  const phoneNumbers = [t.contact.primaryPhoneNumber, t.contact.secondaryPhoneNumber].filter(
    (value): value is string => Boolean(value)
  )
  const emailAddresses = [t.contact.primaryEmail, t.contact.secondaryEmail].filter(
    (value): value is string => Boolean(value)
  )
  const locationSummary = `${t.nav.london} ${t.common.and} ${t.nav.edinburgh}`
  const { leading: heroTitle, highlight: heroHighlight } = splitHighlight(t.contact.pageTitle)
  const { leading: sendMessageTitle, highlight: sendMessageHighlight } = splitHighlight(t.contact.sendMessage)
  const { leading: visitClinicsTitle, highlight: visitClinicsHighlight } = splitHighlight(t.contact.visitOurClinics)
  const { leading: findLocationsTitle, highlight: findLocationsHighlight } = splitHighlight(t.contact.findOurLocations)
  const { leading: urgentTitle, highlight: urgentHighlight } = splitHighlight(t.contact.needImmediate)

  const londonLocation = locationsData.find((location) => location.id === 1)
  const edinburghLocation = locationsData.find((location) => location.id === 2)

  const contactInfo = [
    {
      icon: Phone,
      title: t.contact.phone,
      details: phoneNumbers,
      description: t.contact.callDuringHours
    },
    {
      icon: Mail,
      title: t.contact.email,
      details: emailAddresses,
      description: t.contact.respondWithin24Hours
    },
    {
      icon: MapPin,
      title: t.contact.locations,
      details: [locationSummary],
      description: t.contact.twoConvenientLocations
    },
    {
      icon: Clock,
      title: t.contact.hours,
      details: [t.contact.mondayToFriday, t.contact.saturdayToSunday],
      description: t.contact.extendedWeekendHours
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[#111A19] via-[#284139] to-[#111A19] text-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl lg:text-6xl font-light mb-6">
                {heroTitle}
                {heroHighlight && <span className="text-[#F8D794]">{heroHighlight}</span>}
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                {t.contact.pageDescription}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20 bg-[#F8D794]/10">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-lg">
                  <div className="bg-[#284139] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-[#F8D794]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#111A19] mb-3">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-[#284139] font-medium mb-1">{detail}</p>
                  ))}
                  <p className="text-gray-600 text-sm mt-2">{info.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Locations */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="text-4xl font-light text-[#111A19] mb-8">
                  {sendMessageTitle}
                  {sendMessageHighlight && <span className="text-[#284139]">{sendMessageHighlight}</span>}
                </h2>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.firstName}</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#284139]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.lastName}</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#284139]"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.emailAddress}</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#284139]"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.phoneNumber}</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#284139]"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.preferredLocation}</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#284139]">
                      <option value="">{t.contact.selectLocation}</option>
                      {locationsData.map((location) => (
                        <option key={location.id} value={location.city}>
                          {location.city}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.message}</label>
                    <textarea 
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#284139]"
                      placeholder={t.contact.messagePlaceholder}
                    ></textarea>
                  </div>
                  
                  <Button className="w-full bg-[#F8D794] hover:bg-[#F8D794] text-black py-4 text-lg font-medium hover:opacity-90">
                    {t.buttons.sendMessage}
                  </Button>
                </form>
              </div>

              {/* Location Cards */}
              <div className="space-y-8">
                <h2 className="text-4xl font-light text-[#111A19] mb-8">
                  {visitClinicsTitle}
                  {visitClinicsHighlight && <span className="text-[#284139]">{visitClinicsHighlight}</span>}
                </h2>
                
                {locationsData.map((location) => (
                  <div key={location.id} className="bg-[#F8D794]/10 rounded-2xl p-8">
                    <div>
                      <h3 className="text-2xl font-semibold text-[#111A19] mb-4">{location.city}</h3>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <MapPin className="w-5 h-5 text-[#284139] mr-3 mt-1" />
                          <p className="text-gray-700">{location.address}</p>
                        </div>
                        <div className="flex items-center">
                          <Phone className="w-5 h-5 text-[#284139] mr-3" />
                          <p className="text-gray-700">{location.phone}</p>
                        </div>
                        {location.email && (
                          <div className="flex items-center">
                            <Mail className="w-5 h-5 text-[#284139] mr-3" />
                            <p className="text-gray-700">{location.email}</p>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex space-x-3 mt-6">
                        <Button 
                          size="sm" 
                          className="bg-[#284139] hover:bg-[#111A19] text-white"
                          onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`, '_blank')}
                        >
                          {t.buttons.getDirections}
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="border-[#284139] text-[#284139] hover:bg-[#284139] hover:text-white"
                        >
                          {t.buttons.bookNow}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Maps Section */}
        <section className="py-20 bg-[#F8D794]/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-[#111A19] mb-6">
                {findLocationsTitle}
                {findLocationsHighlight && <span className="text-[#284139]">{findLocationsHighlight}</span>}
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                {t.contact.findLocationsDesc}
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* London Map */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-2xl font-semibold text-[#111A19] mb-4">{t.contact.londonHarleyStreet}</h3>
                <div className="relative h-80 rounded-xl overflow-hidden mb-4">
                  <iframe 
                    src={londonLocation?.mapEmbed ?? ''}
                    width="100%" 
                    height="100%" 
                    style={{border: 0}} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-700 text-sm">{londonLocation?.address || ''}</p>
                    <p className="text-[#284139] font-medium">{londonLocation?.phone || ''}</p>
                  </div>
                  <Button
                    size="sm"
                    className="bg-[#284139] hover:bg-[#111A19] text-white"
                    onClick={() =>
                      window.open(
                        `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(londonLocation?.address || '')}`,
                        '_blank'
                      )
                    }
                  >
                    {t.buttons.getDirections}
                  </Button>
                </div>
              </div>

              {/* Edinburgh Map */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-2xl font-semibold text-[#111A19] mb-4">{t.contact.edinburghGeorgeStreet}</h3>
                <div className="relative h-80 rounded-xl overflow-hidden mb-4">
                  <iframe 
                    src={edinburghLocation?.mapEmbed ?? ''}
                    width="100%" 
                    height="100%" 
                    style={{border: 0}} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-700 text-sm">{edinburghLocation?.address || ''}</p>
                    <p className="text-[#284139] font-medium">{edinburghLocation?.phone || ''}</p>
                  </div>
                  <Button
                    size="sm"
                    className="bg-[#284139] hover:bg-[#111A19] text-white"
                    onClick={() =>
                      window.open(
                        `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(edinburghLocation?.address || '')}`,
                        '_blank'
                      )
                    }
                  >
                    {t.buttons.getDirections}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Contact */}
        <section className="py-20 bg-[#284139] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-light mb-6">
              {urgentTitle}
              {urgentHighlight && <span className="text-[#F8D794]">{urgentHighlight}</span>}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {t.contact.needImmediateDesc}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-[#F8D794] hover:bg-[#B86330] text-[#111A19] px-8 py-4"
              >
                <Phone className="w-5 h-5 mr-2" />
                {t.buttons.callNow}
              </Button>
              
              <Button 
                size="lg" 
                className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                {t.buttons.whatsapp}
              </Button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  )
}
