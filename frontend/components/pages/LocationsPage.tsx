import Navigation from '../Navigation'
import RussianFooter from '../RussianFooter'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Clock, Users, Award } from 'lucide-react'

const locations = [
  {
    id: 'london',
    city: "London",
    subtitle: "Harley Street Clinic",
    address: "123 Harley Street, London W1G 6BA",
    phone: "+44 (20) 7123 4567",
    email: "london@magispa.co.uk",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.628183492772!2d-0.1624627224548056!3d51.50169031111937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487605397680ad09%3A0x68bb8e672eb273a1!2sBeyond%20Aesthetic%20Clinic%20by%20Beyond%20MediSpa!5e0!3m2!1sen!2sza!4v1758541805476!5m2!1sen!2sza",
    description: "Our flagship clinic in the heart of London's medical district, offering the full range of aesthetic treatments in a luxurious setting.",
    features: [
      "10 treatment rooms",
      "State-of-the-art equipment",
      "Parking available",
      "Wheelchair accessible"
    ],
    hours: {
      weekdays: "Monday - Friday: 9:00 AM - 8:00 PM",
      weekends: "Saturday - Sunday: 10:00 AM - 6:00 PM"
    },
    staff: "15 specialists",
    established: "2008"
  },
  {
    id: 'edinburgh',
    city: "Edinburgh", 
    subtitle: "George Street Clinic",
    address: "45 George Street, Edinburgh EH2 2HT",
    phone: "+44 (131) 456 7890",
    email: "edinburgh@magispa.co.uk",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2233.678446141864!2d-3.194440922303394!3d55.954944976402295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766ac0abf29af5%3A0xe8c125ae82237941!2sBeyond%20Aesthetic%20Clinic%20by%20Beyond%20Medispa!5e0!3m2!1sen!2sza!4v1758541860806!5m2!1sen!2sza",
    description: "Located in Edinburgh's prestigious New Town, our Scottish clinic combines traditional elegance with modern aesthetic medicine.",
    features: [
      "8 treatment rooms",
      "Luxury wellness suite",
      "City center location",
      "Easy transport links"
    ],
    hours: {
      weekdays: "Monday - Friday: 9:00 AM - 7:00 PM",
      weekends: "Saturday - Sunday: 10:00 AM - 5:00 PM"
    },
    staff: "12 specialists",
    established: "2012"
  }
]

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[#111A19] via-[#284139] to-[#111A19] text-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl lg:text-6xl font-light mb-6">
                Our <span className="text-[#F8D794]">Locations</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience world-class aesthetic treatments at our premium clinics in London and Edinburgh. 
                Each location offers the complete MagiSpa experience with state-of-the-art facilities and expert care.
              </p>
            </div>
          </div>
        </section>

        {/* Locations Overview */}
        <section className="py-20 bg-[#F8D794]/10">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
                <div className="bg-[#284139] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-[#F8D794]" />
                </div>
                <h3 className="text-2xl font-semibold text-[#111A19] mb-3">2 Prime Locations</h3>
                <p className="text-gray-600">Strategically located in the heart of London and Edinburgh for your convenience.</p>
              </div>
              
              <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
                <div className="bg-[#284139] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-[#F8D794]" />
                </div>
                <h3 className="text-2xl font-semibold text-[#111A19] mb-3">Expert Teams</h3>
                <p className="text-gray-600">Highly qualified specialists at each location dedicated to your aesthetic goals.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Individual Location Details */}
        {locations.map((location, index) => (
          <section key={location.id} className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-[#284139] text-white'}`}>
            <div className="container mx-auto px-4">
              <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="mb-6">
                    <h2 className={`text-4xl font-light mb-2 ${index % 2 === 0 ? 'text-[#111A19]' : 'text-white'}`}>
                      <span className="text-[#F8D794]">{location.city}</span>
                    </h2>
                    <p className={`text-xl ${index % 2 === 0 ? 'text-[#284139]' : 'text-gray-300'}`}>
                      {location.subtitle}
                    </p>
                  </div>
                  
                  <p className={`text-lg leading-relaxed mb-8 ${index % 2 === 0 ? 'text-gray-700' : 'text-gray-300'}`}>
                    {location.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className={`font-semibold mb-3 ${index % 2 === 0 ? 'text-[#111A19]' : 'text-[#F8D794]'}`}>
                        Contact Information
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-start">
                          <MapPin className={`w-4 h-4 mr-2 mt-1 ${index % 2 === 0 ? 'text-[#284139]' : 'text-[#F8D794]'}`} />
                          <p className={`text-sm ${index % 2 === 0 ? 'text-gray-600' : 'text-gray-300'}`}>
                            {location.address}
                          </p>
                        </div>
                        <div className="flex items-center">
                          <Phone className={`w-4 h-4 mr-2 ${index % 2 === 0 ? 'text-[#284139]' : 'text-[#F8D794]'}`} />
                          <p className={`text-sm ${index % 2 === 0 ? 'text-gray-600' : 'text-gray-300'}`}>
                            {location.phone}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className={`font-semibold mb-3 ${index % 2 === 0 ? 'text-[#111A19]' : 'text-[#F8D794]'}`}>
                        Opening Hours
                      </h4>
                      <div className="space-y-1">
                        <p className={`text-sm ${index % 2 === 0 ? 'text-gray-600' : 'text-gray-300'}`}>
                          {location.hours.weekdays}
                        </p>
                        <p className={`text-sm ${index % 2 === 0 ? 'text-gray-600' : 'text-gray-300'}`}>
                          {location.hours.weekends}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className={`font-semibold mb-3 ${index % 2 === 0 ? 'text-[#111A19]' : 'text-[#F8D794]'}`}>
                      Clinic Features
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {location.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className={`w-2 h-2 rounded-full mr-2 ${index % 2 === 0 ? 'bg-[#284139]' : 'bg-[#F8D794]'}`}></div>
                          <span className={`text-sm ${index % 2 === 0 ? 'text-gray-600' : 'text-gray-300'}`}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6 mb-8">
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${index % 2 === 0 ? 'text-[#284139]' : 'text-[#F8D794]'}`}>
                        {location.staff}
                      </div>
                      <div className={`text-sm ${index % 2 === 0 ? 'text-gray-600' : 'text-gray-400'}`}>
                        Expert Staff
                      </div>
                    </div>
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${index % 2 === 0 ? 'text-[#284139]' : 'text-[#F8D794]'}`}>
                        {location.established}
                      </div>
                      <div className={`text-sm ${index % 2 === 0 ? 'text-gray-600' : 'text-gray-400'}`}>
                        Established
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <Button 
                      className={index % 2 === 0 
                        ? "bg-[#F8D794] hover:bg-[#B86330] text-[#111A19]"
                        : "bg-[#F8D794] hover:bg-[#B86330] text-[#111A19]"
                      }
                    >
                      Book Consultation
                    </Button>
                    <Button 
                      variant="outline" 
                      className={index % 2 === 0 
                        ? "border-[#284139] text-[#284139] hover:bg-[#284139] hover:text-white"
                        : "border-[#F8D794] text-[#F8D794] hover:bg-[#F8D794] hover:text-[#111A19]"
                      }
                    >
                      Get Directions
                    </Button>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
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
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="py-20 bg-[#F8D794]/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-light text-[#111A19] mb-6">
              Ready to Visit <span className="text-[#284139]">Us?</span>
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Choose your preferred location and book your consultation today. 
              Our expert teams are ready to help you achieve your aesthetic goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-[#284139] hover:bg-[#111A19] text-white px-8 py-4"
              >
                Book London Clinic
              </Button>
              <Button 
                size="lg" 
                className="bg-[#284139] hover:bg-[#111A19] text-white px-8 py-4"
              >
                Book Edinburgh Clinic
              </Button>
            </div>
          </div>
        </section>
      </div>
      
      <RussianFooter />
    </div>
  )
}