import { Award, Zap, Heart, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: 'Award-Winning, Doctor-Led Medical Aesthetic Clinic',
    description: 'Our clinic is led by highly qualified doctors, nurse prescribers, and experienced aestheticians who have successfully provided revitalising beauty treatments to thousands of patients worldwide. Recognised for excellence in aesthetic medicine, we combine medical expertise with a commitment to natural, safe, and effective results.'
  },
  {
    icon: Zap,
    title: 'Cutting-Edge Technology & Medical-Grade Products',
    description: 'We routinely invest in the latest aesthetic technologies and use only medical-grade, clinically proven products. This ensures every treatment is safe, comfortable, and results-driven; never compromising on quality, innovation, or your wellbeing.'
  },
  {
    icon: Heart,
    title: 'Treatment Plans for Natural-Looking Results',
    description: 'Every patient is unique, which is why we create bespoke treatment plans tailored to your goals, skin type, and lifestyle. Our approach is focused on enhancing your natural beauty, delivering results that are subtle, balanced, and long-lasting.'
  }
]

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#FFFFFF] via-[#FAF8F5] to-[#F5F1EC]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-[#333333] mb-6">
            Aesthetic Excellence Redefined: <span className="text-[#A38E78]">It's Who We Are</span>
          </h2>
          <p className="text-xl text-[#777777] max-w-3xl mx-auto">
            At Beyond Aesthetic Clinic, we're redefining aesthetic excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-[#A38E78]/10 rounded-full w-20 h-20 flex items-center justify-center mb-6 group-hover:bg-[#A38E78]/20 transition-colors duration-300">
                  <Icon className="w-10 h-10 text-[#A38E78]" />
                </div>
                <h3 className="text-xl font-semibold text-[#333333] mb-4">{feature.title}</h3>
                <p className="text-[#777777] leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-16 bg-[#A38E78]/5 rounded-2xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-light text-[#333333] mb-6">
                Two Premium Locations
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-[#A38E78] font-semibold text-lg mb-2">London Clinic</h4>
                  <p className="text-[#777777]">
                    Located in the heart of London, our flagship clinic offers the full range of treatments 
                    in a luxurious, modern setting with the latest aesthetic technologies.
                  </p>
                </div>
                <div>
                  <h4 className="text-[#A38E78] font-semibold text-lg mb-2">Edinburgh Clinic</h4>
                  <p className="text-[#777777]">
                    Our Edinburgh location brings the same high standards of care and expertise to Scotland, 
                    serving clients with personalized treatments in an elegant environment.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#A38E78]/10 rounded-lg p-6 text-center">
                  <div className="text-2xl font-bold text-[#A38E78] mb-1">500+</div>
                  <div className="text-sm text-[#777777]">Monthly Treatments</div>
                </div>
                <div className="bg-[#A38E78]/10 rounded-lg p-6 text-center">
                  <div className="text-2xl font-bold text-[#A38E78] mb-1">98%</div>
                  <div className="text-sm text-[#777777]">Client Retention</div>
                </div>
                <div className="bg-[#A38E78]/10 rounded-lg p-6 text-center">
                  <div className="text-2xl font-bold text-[#A38E78] mb-1">15+</div>
                  <div className="text-sm text-[#777777]">Expert Practitioners</div>
                </div>
                <div className="bg-[#A38E78]/10 rounded-lg p-6 text-center">
                  <div className="text-2xl font-bold text-[#A38E78] mb-1">2</div>
                  <div className="text-sm text-[#777777]">Premium Locations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}