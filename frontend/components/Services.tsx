const services = [
  {
    id: 1,
    title: "Botox & Fillers",
    description: "Reducerea ridurilor și volumizarea naturală a feței",
    image: "https://www.beyondmedispa.com/wp-content/uploads/2024/03/anti-wrinkle-injections-london-edinburgh-beyond-medispa.jpg",
    price: "De la 350 RON",
    features: ["Rezultate naturale", "Fără timp de recuperare", "Efecte imediate"]
  },
  {
    id: 2,
    title: "Tratamente Faciale",
    description: "Hidratare profundă și regenerarea pielii",
    image: "https://www.beyondmedispa.com/wp-content/uploads/2024/03/HydraFacial-London-Edinburgh-Beyond-MediSpa.jpg",
    price: "De la 200 RON",
    features: ["Piele hidratată", "Strălucire naturală", "Textura îmbunătățită"]
  },
  {
    id: 3,
    title: "Terapie Laser",
    description: "Eliminarea imperfecțiunilor și închiderea porilor",
    image: "https://www.beyondmedispa.com/wp-content/uploads/2024/03/laser-hair-removal-london-edinburgh-beyond-medispa.jpg",
    price: "De la 400 RON",
    features: ["Fără durere", "Precizie maximă", "Rezultate durabile"]
  },
  {
    id: 4,
    title: "Mezoterapia",
    description: "Tratament revitalizant cu substanțe active",
    image: "https://www.beyondmedispa.com/wp-content/uploads/2024/03/dermal-filler-london-edinburgh-beyond-medispa.jpg",
    price: "De la 300 RON",
    features: ["Nutriție celulară", "Efecte anti-aging", "Piele fermă"]
  },
  {
    id: 5,
    title: "Peeling Chimic",
    description: "Exfoliere profundă pentru o piele netedă",
    image: "https://www.beyondmedispa.com/wp-content/uploads/2024/03/Chemical-Peels-London-Edinburgh-Beyond-Medispa.jpg",
    price: "De la 250 RON",
    features: ["Regenerare rapidă", "Uniformizare ton", "Textură fină"]
  },
  {
    id: 6,
    title: "Lifting Non-Invaziv",
    description: "Întărirea și tonifierea pielii fără chirurgie",
    image: "https://www.beyondmedispa.com/wp-content/uploads/2024/03/Profhilo-Treatment-London-Edinburgh-Beyond-MediSpa.jpg",
    price: "De la 500 RON",
    features: ["Fără incizii", "Recuperare rapidă", "Efect lifting"]
  }
]

export default function Services() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            Serviciile <span className="text-[#284139]">Noastre</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Descoperă gama completă de tratamente estetice adaptate nevoilor tale
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
                  Rezervă Acum
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
