const products = [
  {
    id: 1,
    name: "Premium Anti-Aging Serum",
    brand: "Beyond Aesthetic Clinic",
    image: "https://i.ibb.co/Zz6VZvZS/a-drop-of-gel-pours-from-a-syringe-for-cosmetic-pr-2025-03-16-09-14-11-utc.webp",
    price: "£299",
    description: "Concentrated serum with hyaluronic acid and peptides"
  },
  {
    id: 2,
    name: "Intensive Hydrating Cream",
    brand: "Beyond Aesthetic Clinic",
    image: "https://i.ibb.co/Kj4wWGcD/beauty-salon-beautician-applies-cooling-gel-to-cli-2025-01-09-05-05-23-utc-1.webp",
    price: "£189",
    description: "Deep hydration for all skin types"
  },
  {
    id: 3,
    name: "Sun Protection SPF 50",
    brand: "Beyond Aesthetic Clinic",
    image: "https://i.ibb.co/zVSjQZPg/female-at-cosmetic-beauty-spa-clinic-has-facial-ha-2024-10-18-17-49-09-utc-1.webp",
    price: "£149",
    description: "Maximum protection with lightweight texture"
  },
  {
    id: 4,
    name: "Regenerating Mask",
    brand: "Beyond Aesthetic Clinic",
    image: "https://i.ibb.co/nqqyz2vP/a-beautician-wearing-gloves-vacuum-cleans-and-poli-2024-12-02-09-41-13-utc.webp",
    price: "£219",
    description: "Intensive treatment for cellular regeneration"
  }
]

export default function Products() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Professional <span className="text-[#284139]">Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our exclusive range of cosmetic products for skincare at home
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
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-medium">
            View All Products
          </button>
        </div>
      </div>
    </section>
  )
}
