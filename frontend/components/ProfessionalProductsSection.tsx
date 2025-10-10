import { Button } from '@/components/ui/button'
import { Star, Award, Shield, Sparkles } from 'lucide-react'

const products = [
  {
    title: "Advanced Skincare",
    description: "Medical-grade skincare products for optimal results",
    image: "https://i.ibb.co/Kj4wWGcD/beauty-salon-beautician-applies-cooling-gel-to-cli-2025-01-09-05-05-23-utc-1.webp",
    features: ["Clinical strength", "Dermatologist approved", "Visible results"]
  },
  {
    title: "Injectable Treatments",
    description: "Premium injectables for natural enhancement",
    image: "https://i.ibb.co/4R2SfBpq/beautician-applying-facial-mask-at-cosmetic-clinic-2024-10-31-01-14-38-utc.webp",
    features: ["FDA approved", "Long-lasting", "Minimal downtime"]
  }
]

export default function ProfessionalProductsSection() {
  const handleNavigation = (route: string) => {
    if (window.navigateTo) {
      (window as any).navigateTo(route)
    }
  }

  return (
    <section className="py-20 bg-[#FFFFFF] text-[#333333]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light mb-6">
            Professional Products from <span className="text-[#A38E78]">Premium Partners</span>
          </h2>
          <p className="text-xl text-[#777777] max-w-3xl mx-auto leading-relaxed">
            We use only the highest quality products and treatments, partnering with leading 
            brands to ensure exceptional results and safety for every client.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {products.map((product, index) => (
            <div key={index} className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={product.image}
                  alt={product.title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-semibold text-white mb-3">{product.title}</h3>
                  <p className="text-white/90 mb-4">{product.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="bg-[#A38E78]/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Large Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://i.ibb.co/Zz6VZvZS/a-drop-of-gel-pours-from-a-syringe-for-cosmetic-pr-2025-03-16-09-14-11-utc.webp"
                alt="Professional treatment application"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
              
              <div className="absolute top-8 left-8">
                <div className="bg-[#A38E78] text-white px-4 py-2 rounded-full font-semibold">
                  Premium Quality
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <h3 className="text-3xl font-light mb-8">
              Premium-Grade Professional <span className="text-[#A38E78]">Beauty Care</span>
            </h3>
            
            <p className="text-xl text-[#777777] leading-relaxed mb-10">
              Our carefully curated selection of professional products ensures that every 
              treatment delivers optimal results. We partner with industry-leading brands 
              known for their innovation, safety, and effectiveness.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start space-x-4">
                <div className="bg-[#A38E78]/10 p-3 rounded-full">
                  <Star className="w-6 h-6 text-[#A38E78]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-[#333333]">Premium Brands</h4>
                  <p className="text-[#777777]">
                    Partnerships with world-renowned aesthetic and skincare companies
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-[#A38E78]/10 p-3 rounded-full">
                  <Shield className="w-6 h-6 text-[#A38E78]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-[#333333]">Safety Certified</h4>
                  <p className="text-[#777777]">
                    All products undergo rigorous testing and regulatory approval
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-[#A38E78]/10 p-3 rounded-full">
                  <Award className="w-6 h-6 text-[#A38E78]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-[#333333]">Proven Results</h4>
                  <p className="text-[#777777]">
                    Clinically tested formulations with documented effectiveness
                  </p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              onClick={() => handleNavigation('book-treatment')}
              className="bg-[#A38E78] hover:bg-[#8B7A67] text-white px-8 py-4"
            >
              Learn About Our Products
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}