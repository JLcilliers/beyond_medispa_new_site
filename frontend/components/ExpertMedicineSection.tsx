import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const points = [
  'We never compromise on quality, using only trusted products, proven technologies, and advanced techniques to achieve the best possible beauty results.',
  "We're constantly progressing. Our team trains in the latest aesthetic techniques and international standards of care, while we also invest in brand new devices and proven technologies to ensure treatments are safe, comfortable and results driven.",
  'We specialise in non-invasive, non-surgical aesthetic treatments. This means low risk, no-downtime treatments that provide immediate and long-lasting results.'
]

export default function ExpertMedicineSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-light text-[#333333] mb-6">
              We Only Offer Expert <span className="text-[#A38E78]">Aesthetic Medicine & Beauty</span>
            </h2>
            <p className="text-xl text-[#777777]">
              At Beyond Aesthetic Clinic, your care is always led by experts who combine medical knowledge with a passion for excellence. We believe in safe, effective and natural results through expert treatments and the latest aesthetic care.
            </p>
          </div>

          <div className="space-y-6 mb-12">
            {points.map((point, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-[#A38E78]" />
                </div>
                <p className="text-[#777777] leading-relaxed">{point}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/doctors">
              <Button 
                size="lg" 
                className="bg-[#A38E78] hover:bg-[#8B7A67] text-white px-8 py-4 text-lg"
              >
                Meet the Team
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
