import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  { id: 1, src: "/api/placeholder/600/400", title: "Купальный зал", category: "main" },
  { id: 2, src: "/api/placeholder/300/200", title: "Зона отдыха", category: "small" },
  { id: 3, src: "/api/placeholder/300/200", title: "Массажная комната", category: "small" },
  { id: 4, src: "/api/placeholder/300/200", title: "Ресепшн", category: "small" },
  { id: 5, src: "/api/placeholder/300/200", title: "Фитобочка", category: "small" },
  { id: 6, src: "/api/placeholder/300/200", title: "Релакс зона", category: "small" }
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
            <span className="text-[#F8D794]">ЧАРУЮЩАЯ</span> АТМОСФЕРА
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Мы создали уникальную атмосферу в Азия стиле, 
            где обязательно получите лучший и мягкий опыт в тишь места. Современное
            постройки MagiSpa заставят вас позабыть о суете и стрессе современного
            мира и погрузиться в атмосферу спокойствия и релаксации.
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