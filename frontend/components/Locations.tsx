import { MapPin, Phone, Clock, Car } from 'lucide-react'

const locations = [
  {
    id: 1,
    city: "London",
    address: "Premium Location, Central London",
    phone: "+44 (20) 7123 4567",
    hours: "Monday - Friday: 9:00 - 18:00\nSaturday: 9:00 - 17:00\nSunday: Closed",
    parking: "Street parking available",
    image: "/api/placeholder/600/400",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.628183492772!2d-0.1624627224548056!3d51.50169031111937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487605397680ad09%3A0x68bb8e672eb273a1!2sBeyond%20Aesthetic%20Clinic%20by%20Beyond%20MediSpa!5e0!3m2!1sen!2sza!4v1758541805476!5m2!1sen!2sza"
  },
  {
    id: 2,
    city: "Edinburgh", 
    address: "Premium Location, Edinburgh Centre",
    phone: "+44 (131) 123 4567",
    hours: "Monday - Friday: 9:00 - 18:00\nSaturday: 9:00 - 16:00\nSunday: Closed",
    parking: "Nearby parking available",
    image: "/api/placeholder/600/400",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2233.678446141864!2d-3.194440922303394!3d55.954944976402295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766ac0abf29af5%3A0xe8c125ae82237941!2sBeyond%20Aesthetic%20Clinic%20by%20Beyond%20Medispa!5e0!3m2!1sen!2sza!4v1758541860806!5m2!1sen!2sza"
  }
]

const handleNavigation = (route: string) => {
  if ((window as any).navigateTo) {
    (window as any).navigateTo(route)
  }
}

export default function Locations() {
  return (
    <section className="py-20 bg-[#111A19]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            Our <span className="text-[#F8D794]">Locations</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Visit our premium clinics in London and Edinburgh for expert aesthetic treatments
          </p>
        </div>
        
        <div className="space-y-16">
          {locations.map((location, index) => (
            <div key={location.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Location Info */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="mb-8">
                  <h3 className="text-3xl font-semibold text-white mb-4">{location.city}</h3>
                  <div className="w-20 h-1 bg-[#F8D794] mb-6"></div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-[#F8D794]/20 p-3 rounded-full mr-4 mt-1">
                      <MapPin className="w-5 h-5 text-[#F8D794]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Address</h4>
                      <p className="text-gray-300">{location.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#F8D794]/20 p-3 rounded-full mr-4 mt-1">
                      <Phone className="w-5 h-5 text-[#F8D794]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Phone</h4>
                      <p className="text-gray-300">{location.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#F8D794]/20 p-3 rounded-full mr-4 mt-1">
                      <Clock className="w-5 h-5 text-[#F8D794]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Hours</h4>
                      <p className="text-gray-300 whitespace-pre-line">{location.hours}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#F8D794]/20 p-3 rounded-full mr-4 mt-1">
                      <Car className="w-5 h-5 text-[#F8D794]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Parking</h4>
                      <p className="text-gray-300">{location.parking}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => handleNavigation('book-treatment')}
                    className="bg-[#F8D794] hover:bg-[#B86330] text-[#111A19] px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Book Appointment
                  </button>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=Beyond+Aesthetic+Clinic+${location.city}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#F8D794] text-[#F8D794] hover:bg-[#F8D794] hover:text-[#111A19] px-6 py-3 rounded-lg font-medium transition-colors text-center"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
              
              {/* Map & Image */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                {/* Clinic Image */}
                <div className="relative">
                  <img 
                    src={location.image} 
                    alt={`Beyond MediSpa ${location.city}`}
                    className="w-full h-64 object-cover rounded-2xl shadow-lg"
                  />
                  <div className="absolute top-4 left-4 bg-[#F8D794] bg-opacity-90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-[#111A19] font-medium">{location.city}</span>
                  </div>
                </div>
                
                {/* Google Maps Embed */}
                <div className="relative h-64 rounded-2xl overflow-hidden">
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
