import Navigation from '../../Navigation'
import RussianFooter from '../../RussianFooter'
import { Button } from '@/components/ui/button'
import { Clock, Award, Users, Star } from 'lucide-react'

const bodyTreatments = [
  {
    name: "Body Contouring",
    description: "Advanced non-surgical body sculpting to target stubborn fat areas",
    duration: "60-90 minutes",
    price: "From £450",
    image: "/api/placeholder/400/300",
    benefits: ["Fat reduction", "Skin tightening", "Improved contours", "Non-invasive"]
  },
  {
    name: "Cellulite Treatment",
    description: "Comprehensive cellulite reduction using cutting-edge technology", 
    duration: "45-60 minutes",
    price: "From £300",
    image: "/api/placeholder/400/300",
    benefits: ["Smoother skin", "Improved texture", "Enhanced circulation", "Long-lasting results"]
  },
  {
    name: "Body Wraps & Scrubs",
    description: "Luxurious detoxifying treatments for soft, radiant skin",
    duration: "90 minutes",
    price: "From £200",
    image: "/api/placeholder/400/300", 
    benefits: ["Deep moisturizing", "Detoxification", "Skin renewal", "Relaxation"]
  },
  {
    name: "Stretch Mark Reduction",
    description: "Advanced laser treatments to minimize stretch mark appearance",
    duration: "30-45 minutes", 
    price: "From £250",
    image: "/api/placeholder/400/300",
    benefits: ["Reduced visibility", "Improved texture", "Skin regeneration", "Confidence boost"]
  }
]

export default function BodyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[#111A19] via-[#284139] to-[#111A19] text-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl lg:text-6xl font-light mb-6">
                Body <span className="text-[#F8D794]">Treatments</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your body with our comprehensive range of non-surgical treatments. 
                From body contouring to skin rejuvenation, achieve your ideal silhouette with confidence.
              </p>
            </div>
          </div>
        </section>

        {/* Treatments Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {bodyTreatments.map((treatment, index) => (
                <div key={index} className={`${index % 2 === 1 ? 'lg:mt-16' : ''}`}>
                  <div className="bg-[#F8D794]/10 rounded-3xl overflow-hidden shadow-lg">
                    <img 
                      src={treatment.image} 
                      alt={treatment.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-semibold text-[#111A19]">{treatment.name}</h3>
                        <span className="text-[#284139] font-bold text-lg">{treatment.price}</span>
                      </div>
                      
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {treatment.description}
                      </p>
                      
                      <div className="flex items-center text-sm text-gray-600 mb-6">
                        <Clock className="w-4 h-4 mr-2 text-[#284139]" />
                        <span>{treatment.duration}</span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {treatment.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center">
                            <div className="w-2 h-2 bg-[#284139] rounded-full mr-2"></div>
                            <span className="text-sm text-gray-600">{benefit}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex space-x-3">
                        <Button 
                          className="flex-1 bg-[#F8D794] hover:bg-[#B86330] text-[#111A19]"
                        >
                          Book Consultation
                        </Button>
                        <Button 
                          variant="outline" 
                          className="border-[#284139] text-[#284139] hover:bg-[#284139] hover:text-white"
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-[#284139] text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light mb-4">
                Your Body Transformation <span className="text-[#F8D794]">Journey</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our comprehensive approach ensures optimal results and your complete satisfaction.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Consultation", desc: "Detailed assessment and treatment planning" },
                { step: "2", title: "Preparation", desc: "Pre-treatment care and preparation guidance" },
                { step: "3", title: "Treatment", desc: "Professional treatment with advanced technology" },
                { step: "4", title: "Aftercare", desc: "Follow-up support and maintenance advice" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-[#F8D794] text-[#111A19] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-[#F8D794]">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#F8D794]/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-light text-[#111A19] mb-6">
              Ready to Transform <span className="text-[#284139]">Your Body?</span>
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Book your consultation today and take the first step towards the body you've always wanted.
            </p>
            
            <Button 
              size="lg" 
              className="bg-[#284139] hover:bg-[#111A19] text-white px-8 py-4"
            >
              Book Free Consultation
            </Button>
          </div>
        </section>
      </div>
      
      <RussianFooter />
    </div>
  )
}