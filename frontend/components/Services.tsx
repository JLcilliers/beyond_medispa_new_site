const services = [
  {
    id: 1,
    title: "Botox & Fillers",
    description: "Wrinkle reduction and natural facial volumization",
    image: "https://i.ibb.co/4R2SfBpq/beautician-applying-facial-mask-at-cosmetic-clinic-2024-10-31-01-14-38-utc.webp",
    price: "From £350",
    features: ["Natural results", "No downtime", "Immediate effects"]
  },
  {
    id: 2,
    title: "Facial Treatments",
    description: "Deep hydration and skin regeneration",
    image: "https://i.ibb.co/Kj4wWGcD/beauty-salon-beautician-applies-cooling-gel-to-cli-2025-01-09-05-05-23-utc-1.webp",
    price: "From £200",
    features: ["Hydrated skin", "Natural glow", "Improved texture"]
  },
  {
    id: 3,
    title: "Laser Therapy",
    description: "Removal of imperfections and pore minimization",
    image: "https://i.ibb.co/RTZVYtGm/leg-waxing-procedure-in-a-top-notch-beauty-center-2024-10-21-09-02-09-utc.webp",
    price: "From £400",
    features: ["Pain-free", "Maximum precision", "Long-lasting results"]
  },
  {
    id: 4,
    title: "Mesotherapy",
    description: "Revitalizing treatment with active substances",
    image: "https://i.ibb.co/Zz6VZvZS/a-drop-of-gel-pours-from-a-syringe-for-cosmetic-pr-2025-03-16-09-14-11-utc.webp",
    price: "From £300",
    features: ["Cellular nutrition", "Anti-aging effects", "Firm skin"]
  },
  {
    id: 5,
    title: "Chemical Peel",
    description: "Deep exfoliation for smooth skin",
    image: "https://i.ibb.co/nqqyz2vP/a-beautician-wearing-gloves-vacuum-cleans-and-poli-2024-12-02-09-41-13-utc.webp",
    price: "From £250",
    features: ["Fast regeneration", "Even tone", "Fine texture"]
  },
  {
    id: 6,
    title: "Non-Invasive Lifting",
    description: "Skin firming and toning without surgery",
    image: "https://i.ibb.co/zVSjQZPg/female-at-cosmetic-beauty-spa-clinic-has-facial-ha-2024-10-18-17-49-09-utc-1.webp",
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
