import Navigation from '../Navigation'
import RussianFooter from '../RussianFooter'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+44 (20) 7123 4567", "+44 (131) 456 7890"],
    description: "Call us during business hours"
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@magispa.co.uk", "bookings@magispa.co.uk"],
    description: "We respond within 24 hours"
  },
  {
    icon: MapPin,
    title: "Locations",
    details: ["London & Edinburgh"],
    description: "Two convenient locations"
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Mon-Fri: 9:00 AM - 8:00 PM", "Sat-Sun: 10:00 AM - 6:00 PM"],
    description: "Extended weekend hours"
  }
]

const locations = [
  {
    city: "London",
    address: "123 Harley Street, London W1G 6BA",
    phone: "+44 (20) 7123 4567",
    email: "london@magispa.co.uk",
    image: "/api/placeholder/400/300"
  },
  {
    city: "Edinburgh", 
    address: "45 George Street, Edinburgh EH2 2HT",
    phone: "+44 (131) 456 7890",
    email: "edinburgh@magispa.co.uk",
    image: "/api/placeholder/400/300"
  }
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[#111A19] via-[#284139] to-[#111A19] text-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl lg:text-6xl font-light mb-6">
                Contact <span className="text-[#F8D794]">Us</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Get in touch with our team to book your consultation or learn more about our treatments.
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
                  Send us a <span className="text-[#284139]">Message</span>
                </h2>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#284139]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#284139]"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#284139]"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#284139]"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Location</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#284139]">
                      <option>Select Location</option>
                      <option>London</option>
                      <option>Edinburgh</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea 
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#284139]"
                      placeholder="Tell us about your treatment interests..."
                    ></textarea>
                  </div>
                  
                  <Button className="w-full bg-[#F8D794] hover:bg-[#F8D794] text-black py-4 text-lg font-medium hover:opacity-90">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Location Cards */}
              <div className="space-y-8">
                <h2 className="text-4xl font-light text-[#111A19] mb-8">
                  Visit Our <span className="text-[#284139]">Clinics</span>
                </h2>
                
                {locations.map((location, index) => (
                  <div key={index} className="bg-[#F8D794]/10 rounded-2xl p-8">
                    <div className="grid md:grid-cols-2 gap-6 items-center">
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
                          <div className="flex items-center">
                            <Mail className="w-5 h-5 text-[#284139] mr-3" />
                            <p className="text-gray-700">{location.email}</p>
                          </div>
                        </div>
                        
                        <div className="flex space-x-3 mt-6">
                          <Button 
                            size="sm" 
                            className="bg-[#284139] hover:bg-[#111A19] text-white"
                          >
                            Get Directions
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline"
                            className="border-[#284139] text-[#284139] hover:bg-[#284139] hover:text-white"
                          >
                            Book Now
                          </Button>
                        </div>
                      </div>
                      
                      <div>
                        <img 
                          src={location.image} 
                          alt={`${location.city} clinic`}
                          className="rounded-xl shadow-lg w-full h-48 object-cover"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quick Contact */}
        <section className="py-20 bg-[#284139] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-light mb-6">
              Need <span className="text-[#F8D794]">Immediate</span> Assistance?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us directly for urgent inquiries or last-minute bookings.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-[#F8D794] hover:bg-[#B86330] text-[#111A19] px-8 py-4"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
              
              <Button 
                size="lg" 
                className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </section>
      </div>
      
      <RussianFooter />
    </div>
  )
}