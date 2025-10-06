const products = [
  {
    id: 1,
    name: "Ser Anti-Aging Premium",
    brand: "Aesthetic Lab",
    image: "https://www.beyondmedispa.com/wp-content/uploads/2024/03/dermal-filler-london-edinburgh-beyond-medispa.jpg",
    price: "299 RON",
    description: "Ser concentrat cu acid hialuronic și peptide"
  },
  {
    id: 2,
    name: "Cremă Hidratantă Intensivă",
    brand: "Aesthetic Lab",
    image: "https://www.beyondmedispa.com/wp-content/uploads/2024/03/HydraFacial-London-Edinburgh-Beyond-MediSpa.jpg",
    price: "189 RON",
    description: "Hidratare profundă pentru toate tipurile de piele"
  },
  {
    id: 3,
    name: "Protecție Solară SPF 50",
    brand: "Aesthetic Lab",
    image: "https://www.beyondmedispa.com/wp-content/uploads/2024/03/Profhilo-Treatment-London-Edinburgh-Beyond-MediSpa.jpg",
    price: "149 RON",
    description: "Protecție maximă cu textura ușoară"
  },
  {
    id: 4,
    name: "Masca Regenerantă",
    brand: "Aesthetic Lab",
    image: "https://www.beyondmedispa.com/wp-content/uploads/2024/03/Chemical-Peels-London-Edinburgh-Beyond-Medispa.jpg",
    price: "219 RON",
    description: "Tratament intensiv pentru regenerarea celulară"
  }
]

export default function Products() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Produse <span className="text-[#284139]">Profesionale</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Gama noastră exclusivă de produse cosmetice pentru îngrijirea pielii acasă
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
              <div className="mb-6">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="text-center">
                <div className="text-sm text-[#B86330] font-medium mb-2">{product.brand}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <div className="text-2xl font-bold text-gray-900 mb-4">{product.price}</div>
                
                <button className="w-full bg-[#F8D794] hover:bg-[#B86330] text-[#111A19] py-3 rounded-lg font-medium transition-colors">
                  Adaugă în Coș
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-medium">
            Vezi Toate Produsele
          </button>
        </div>
      </div>
    </section>
  )
}
