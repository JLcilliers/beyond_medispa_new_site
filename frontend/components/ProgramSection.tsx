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
    title: "1. Consult & Assess",
    description: "We offer a personalised consultation to assess your goals and recommend the best skin, body, or facial aesthetic treatments for you. Through initial consulting and assessment, our expert team ensures every treatment enhances your natural beauty while delivering real, noticeable results."
  },
  {
    title: "2. Bespoke Treatment Plan",
    description: "Following your consultation, we create a tailored treatment plan designed around your unique treatment preferences, lifestyle, and goals. Whether you're looking to refresh your skin, sculpt your body, or achieve subtle facial enhancements, your plan is personalised to deliver safe, effective, and lasting results."
  },
  {
    title: "3. Cutting Edge Treatments",
    description: "We combine advanced techniques with the latest aesthetic technology to ensure your treatments are both innovative and results-driven. From Carboxytherapy and Biofiller to HydraFacial and Microneedling with Exosomes, we stay on the cutting edge of aesthetics to ensure you always get the best treatment options. Our clinically proven injectables to medical-grade skin therapies mean every procedure is carried out with precision, safety, and artistry by our highly trained professionals."
  },
  {
    title: "4. Results & Aftercare",
    description: "Your journey doesn't end after treatment. We provide ongoing support and aftercare to maximise and maintain your results. Our team offers expert guidance on recovery, skincare, and follow-up sessions, ensuring you feel confident, comfortable, and fully supported at every stage."
  }
]

export default function ProgramSection() {
  return (
    <section className="py-20 bg-[#F5F1EC] text-[#333333]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-[#333333] mb-8">
            A Personalised Approach to <span className="text-[#A38E78]">Aesthetics</span>
          </h2>
          
          <div className="flex items-center justify-center mb-16">
            {programs.map((program, index) => (
              <>
                <div key={program.id} className="text-center group">
                  <div className="relative mb-4">
                    <div className="w-24 h-24 rounded-full mx-auto bg-[#A38E78]/10 border-4 border-[#A38E78]/30 group-hover:border-[#A38E78] transition-colors flex items-center justify-center">
                      <img 
                        src={program.image} 
                        alt={program.title}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-sm font-medium mb-2 text-[#333333]">{program.title}</h3>
                  <p className="text-xs text-[#777777]">{program.description}</p>
                </div>
                {index < programs.length - 1 && (
                  <div className="flex items-center justify-center mx-8">
                    <svg className="w-8 h-8 text-[#A38E78]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </>
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