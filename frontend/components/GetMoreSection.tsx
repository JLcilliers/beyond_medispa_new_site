import { Star, Users, Stethoscope } from 'lucide-react'

const benefits = [
  {
    icon: Star,
    title: '4.7 Stars Across 110+ Google Reviews',
  },
  {
    icon: Users,
    title: 'Refer a Friend Discounts',
  },
  {
    icon: Stethoscope,
    title: 'Optional Free Skin Consultation with Every Appointment',
  }
]

export default function GetMoreSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-[#A38E78] to-[#8B7A67]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-white mb-4">
            Get More With <span className="font-semibold">Beyond</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="text-center group"
              >
                <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-medium text-white">{benefit.title}</h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
