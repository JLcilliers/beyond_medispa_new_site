const services = [
  {
    id: 1,
    title: "Botox & Fillers",
    description: "Wrinkle reduction and natural facial volumization",
    image: "https://www.beyondmedispa.com/wp-content/uploads/2024/03/anti-wrinkle-injections-london-edinburgh-beyond-medispa.jpg",
    price: "From £350",
    features: ["Natural results", "No downtime", "Immediate effects"]
  },
  {
    id: 2,
    title: "Facial Treatments",
    description: "Deep hydration and skin regeneration",
    image: "https://www.beyondmedispa.com/wp-content/uploads/2024/03/HydraFacial-London-Edinburgh-Beyond-MediSpa.jpg",
    price: "From £200",
    features: ["Hydrated skin", "Natural glow", "Improved texture"]
  },
  {
    id: 3,
    title: "Laser Therapy",
    description: "Removal of imperfections and pore minimization",
    image: "https://www.beyondmedispa.com/wp-content/uploads/2024/03/laser-hair-removal-london-edinburgh-beyond-medispa.jpg",
    price: "From £400",
    features: ["Pain-free", "Maximum precision", "Long-lasting results"]
  },
  {
    id: 4,
    title: "Mesotherapy",
    description: "Revitalizing treatment with active substances",
    image: "https://www.beyondmedispa.com/wp-content/uploads/2024/03/dermal-filler-london-edinburgh-beyond-medispa.jpg",
    price: "From £300",
    features: ["Cellular nutrition", "Anti-aging effects", "Firm skin"]
  },
  {
    id: 5,
    title: "Chemical Peel",
    description: "Deep exfoliation for smooth skin",
    image: "https://www.beyondmedispa.com/wp-content/uploads/2024/03/Chemical-Peels-London-Edinburgh-Beyond-Medispa.jpg",
    price: "From £250",
    features: ["Fast regeneration", "Even tone", "Fine texture"]
  },
  {
    id: 6,
    title: "Non-Invasive Lifting",
    description: "Skin firming and toning without surgery",
    image: "https://www.beyondmedispa.com/wp-content/uploads/2024/03/Profhilo-Treatment-London-Edinburgh-Beyond-MediSpa.jpg",
    price: "From £500",
    features: ["No incisions", "Quick recovery", "Lifting effect"]
  }
]

export default function Services() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            Our <span className="text-[#284139]">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover our complete range of aesthetic treatments tailored to your needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="group bg-gray-800 rounded-2xl overflow-hidden hover:bg-gray-700 transition-all duration-300">
              <div className="relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-[#B86330] text-white px-3 py-1 rounded-full text-sm font-medium">
                  {service.price}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <div className="w-2 h-2 bg-[#B86330] rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-[#F8D794] hover:bg-[#B86330] text-[#111A19] py-3 rounded-lg font-medium transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
