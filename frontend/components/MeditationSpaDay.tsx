export default function MeditationSpaDay() {
  return (
    <section className="py-20 bg-[#111A19] text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-40 left-40 w-60 h-60 bg-[#284139]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#80907E]/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="/api/placeholder/500/600" 
              alt="Aesthetic treatment experience"
              className="rounded-3xl shadow-2xl w-full"
            />
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-light mb-4">
                <span className="text-[#F8D794]">SIGNATURE</span><br />
                TREATMENTS
              </h2>
              <div className="text-2xl text-[#B86330] font-light italic">
                Tailored Aesthetic Experiences
              </div>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              At Beyond MediSpa, we blend medical expertise with luxurious care 
              to create transformative experiences. Whether you're seeking subtle 
              enhancements or comprehensive rejuvenation, our treatments promote 
              natural beauty and wellbeing through personalized care.
            </p>
            
            <p className="text-gray-400">
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