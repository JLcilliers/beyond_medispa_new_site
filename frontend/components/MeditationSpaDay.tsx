export default function MeditationSpaDay() {
  return (
    <section className="py-20 bg-[#FFFFFF] text-[#333333] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-40 left-40 w-60 h-60 bg-[#A38E78]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#B5A68B]/8 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src="https://i.ibb.co/Kj4wWGcD/beauty-salon-beautician-applies-cooling-gel-to-cli-2025-01-09-05-05-23-utc-1.webp"
              alt="Signature aesthetic treatment experience"
              className="rounded-3xl shadow-2xl w-full h-96 object-cover"
              loading="lazy"
            />
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-light mb-4">
                <span className="text-[#A38E78]">SIGNATURE</span><br />
                TREATMENTS
              </h2>
              <div className="text-2xl text-[#8B7A67] font-light italic">
                Tailored Aesthetic Experiences
              </div>
            </div>
            
            <p className="text-lg text-[#777777] leading-relaxed">
              At Beyond Aesthetic Clinic, we blend medical expertise with luxurious care 
              to create transformative experiences. Whether you're seeking subtle 
              enhancements or comprehensive rejuvenation, our treatments promote 
              natural beauty and wellbeing through personalized care.
            </p>
            
            <p className="text-[#888888]">
              Our signature approach combines advanced medical techniques with 
              holistic wellness principles, ensuring every treatment not only 
              enhances your appearance but also promotes your overall sense of confidence and wellbeing.
            </p>
            
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#F8D794]">15+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#F8D794]">50+</div>
                <div className="text-sm text-gray-400">Treatments</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#F8D794]">100%</div>
                <div className="text-sm text-gray-400">Natural Results</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}