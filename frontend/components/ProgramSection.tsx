const programs = [
  {
    id: 1,
    title: "Consultation",
    image: "https://www.beyondmedispa.com/wp-content/uploads/2025/09/consultation.png",
    description: "Personalized assessment by our medical experts"
  },
  {
    id: 2,
    title: "Customization",
    image: "https://www.beyondmedispa.com/wp-content/uploads/2025/09/web-design.png", 
    description: "Tailored treatment plan for your goals"
  },
  {
    id: 3,
    title: "Treatment",
    image: "https://www.beyondmedispa.com/wp-content/uploads/2025/09/laser.png",
    description: "Safe, advanced procedures for natural results"
  },
  {
    id: 4,
    title: "Aftercare",
    image: "https://www.beyondmedispa.com/wp-content/uploads/2025/09/solidarity.png",
    description: "Ongoing support for lasting beauty"
  }
]

const details = [
  {
    title: "Comprehensive Consultation",
    description: "Every journey begins with a detailed consultation where our medical experts assess your skin, understand your goals, and discuss your medical history. We take time to educate you about available options and ensure you feel confident about your treatment plan."
  },
  {
    title: "Personalized Treatment Plan",
    description: "Based on your consultation, we create a bespoke treatment plan that may include injectables, skin therapies, or body contouring. Our approach considers your lifestyle, budget, and desired timeline to achieve optimal results naturally."
  },
  {
    title: "Expert Treatment Delivery",
    description: "Our qualified doctors and practitioners use the latest techniques and premium products to deliver your treatment safely and effectively. We prioritize your comfort throughout the process while maintaining the highest medical standards."
  },
  {
    title: "Comprehensive Aftercare",
    description: "Your journey doesn't end with treatment. We provide detailed aftercare instructions, follow-up appointments, and ongoing support to ensure optimal healing and long-lasting results. Our team is always available for any questions or concerns."
  }
]

export default function ProgramSection() {
  return (
    <section className="py-20 bg-[#F5F1EC] text-[#333333]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-[#A38E78] mb-8">
            OUR TREATMENT JOURNEY
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {programs.map((program) => (
              <div key={program.id} className="text-center group">
                <div className="relative mb-4">
                  <div className="w-24 h-24 rounded-full mx-auto bg-[#A38E78]/10 border-4 border-[#A38E78]/30 group-hover:border-[#A38E78] transition-colors flex items-center justify-center">
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <div className="absolute -top-1 -left-1 bg-[#A38E78] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {program.id}
                  </div>
                </div>
                <h3 className="text-sm font-medium mb-2 text-[#333333]">{program.title}</h3>
                <p className="text-xs text-[#777777]">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {details.map((detail, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-semibold text-[#A38E78]">{detail.title}</h3>
              <p className="text-[#777777] leading-relaxed text-sm">{detail.description}</p>
            </div>
          ))}
        </div>
        
        <div className="flex items-center justify-center mt-16 space-x-16">
          <div className="text-center">
            <div className="text-sm text-[#777777] mb-2">Experience</div>
            <div className="text-3xl font-light text-[#A38E78]">15+ Years</div>
          </div>
          <div className="w-px h-12 bg-[#E5E5E5]"></div>
          <div className="text-center">
            <div className="text-sm text-[#777777] mb-2">Treatments Start From</div>
            <div className="text-3xl font-light text-[#A38E78]">£200</div>
          </div>
        </div>
      </div>
    </section>
  )
}