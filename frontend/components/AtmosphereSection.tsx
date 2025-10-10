import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  { id: 1, src: "https://i.ibb.co/4R2SfBpq/beautician-applying-facial-mask-at-cosmetic-clinic-2024-10-31-01-14-38-utc.webp", title: "Treatment Room", category: "main" },
  { id: 2, src: "https://i.ibb.co/Kj4wWGcD/beauty-salon-beautician-applies-cooling-gel-to-cli-2025-01-09-05-05-23-utc-1.webp", title: "Relaxation Zone", category: "small" },
  { id: 3, src: "https://i.ibb.co/Zz6VZvZS/a-drop-of-gel-pours-from-a-syringe-for-cosmetic-pr-2025-03-16-09-14-11-utc.webp", title: "Massage Room", category: "small" },
  { id: 4, src: "https://i.ibb.co/nqqyz2vP/a-beautician-wearing-gloves-vacuum-cleans-and-poli-2024-12-02-09-41-13-utc.webp", title: "Reception", category: "small" },
  { id: 5, src: "https://i.ibb.co/zVSjQZPg/female-at-cosmetic-beauty-spa-clinic-has-facial-ha-2024-10-18-17-49-09-utc-1.webp", title: "Private Suite", category: "small" },
  { id: 6, src: "https://i.ibb.co/RTZVYtGm/leg-waxing-procedure-in-a-top-notch-beauty-center-2024-10-21-09-02-09-utc.webp", title: "Wellness Area", category: "small" }
]

export default function AtmosphereSection() {
  const [currentImage, setCurrentImage] = useState(0)
  const mainImages = images.filter(img => img.category === "main")
  const smallImages = images.filter(img => img.category === "small")

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % mainImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + mainImages.length) % mainImages.length)
  }

  return (
    <section className="py-20 bg-[#284139] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light mb-4">
            <span className="text-[#F8D794]">Enchanting</span> Atmosphere
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We have created a unique atmosphere in an Asian style,
            where you will definitely get the best and softest experience in the quiet of the place. The modern
            building of Beyond Aesthetic Clinic will make you forget about the hustle and stress of the modern
            world and immerse yourself in an atmosphere of calm and relaxation.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={mainImages[currentImage]?.src} 
                alt={mainImages[currentImage]?.title}
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111A19]/50 to-transparent"></div>
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#111A19]/70 backdrop-blur-sm text-white p-3 rounded-full hover:bg-[#F8D794] hover:text-[#111A19] transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#111A19]/70 backdrop-blur-sm text-white p-3 rounded-full hover:bg-[#F8D794] hover:text-[#111A19] transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-light text-white">{mainImages[currentImage]?.title}</h3>
                <div className="text-sm text-[#F8D794] mt-1">
                  {currentImage + 1}/{mainImages.length}
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
            {smallImages.map((image, index) => (
              <div key={image.id} className="relative group cursor-pointer">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-32 lg:h-36 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-[#111A19]/0 group-hover:bg-[#111A19]/30 transition-all duration-300"></div>
                </div>
                <div className="absolute bottom-3 left-3">
                  <div className="text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
