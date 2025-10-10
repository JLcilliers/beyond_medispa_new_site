import Navigation from '../Navigation'
import Footer from '../Footer'
import TestimonialsSection from '../TestimonialsSection'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Mail, ArrowRight, Award, Users, Star, Shield, Clock, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const whyChoose = [
  { icon: Award, title: 'Medical-grade treatments by expert professionals' },
  { icon: MapPin, title: 'Conveniently located in Edinburgh city centre' },
  { icon: Heart, title: 'Personalised care tailored to your needs' },
  { icon: Shield, title: 'State-of-the-art technology and techniques' },
  { icon: Star, title: 'Trusted brand with exceptional results' }
]

const journey = [
  {
    icon: Users,
    title: '1. Personalised consultation',
    points: ['One-on-one expert beauty assessment', 'Tailored treatment recommendations']
  },
  {
    icon: Star,
    title: '2. Your treatment session',
    points: ['Performed in a calm, relaxing environment', 'State-of-the-art techniques']
  },
  {
    icon: Heart,
    title: '3. Aftercare & beauty maintenance',
    points: ['Dedicated support & skincare advice', 'Premium skincare products available']
  }
]

const treatments = [
  {
    tag: 'A GLOWING APPEARANCE',
    title: 'Facial Treatments',
    description: 'Our facial treatments target fine lines, wrinkles, acne scars, and skin laxity, leaving your skin looking refreshed and youthful. Popular treatments include dermal fillers, anti-wrinkle injections, and skin resurfacing therapies.',
    link: '/edinburgh/facial'
  },
  {
    tag: 'YOUR IDEAL SILHOUETTE',
    title: 'Body Contouring',
    description: 'Beyond Aesthetic Clinic Edinburgh offers non-invasive body sculpting treatments such as fat freezing, skin tightening, and cellulite reduction to help shape and tone your body for a sleek, contoured look.',
    link: '/edinburgh/body'
  },
  {
    tag: 'SMOOTH TO THE TOUCH',
    title: 'Skin Treatments',
    description: 'We provide medical-grade skin treatments to tackle concerns like uneven skin tone, acne, pigmentation, and skin aging. Our advanced laser technology and bespoke skincare plans ensure amazing results.',
    link: '/edinburgh/peels'
  },
  {
    tag: 'BOOST YOUR CONFIDENCE',
    title: 'Injectables',
    description: 'Enhance and rejuvenate your facial features with our expertly administered anti-wrinkle injections, dermal fillers, and fat loss injections for natural-looking, long-lasting results.',
    link: '/edinburgh/injectables'
  }
]

const faqs = [
  {
    question: 'Where is Beyond Aesthetic Clinic Edinburgh located?',
    answer: 'Our Edinburgh clinic is conveniently located on the second floor of Harvey Nichols, 30-34 St Andrew Square, in the heart of the city. Easily accessible from Hanover Street and Easter Road, we offer world-class aesthetic treatments in a luxurious, professional setting.'
  },
  {
    question: 'What aesthetic treatments do you offer in Edinburgh?',
    answer: 'We provide a full range of medical aesthetics, including anti-wrinkle injections, dermal fillers, fat loss injections, HIFU skin tightening, laser hair removal, skin rejuvenation, and body contouring. Our expert team personalises every procedure to enhance your natural beauty with amazing results.'
  },
  {
    question: 'Who performs the treatments at Beyond Aesthetic Clinic Edinburgh?',
    answer: 'Our treatments are carried out by experienced consultants, leading aesthetic professionals, and our specialist medical aesthetics team. With many years of expertise, we ensure the highest standards of care, safety, and natural-looking results.'
  },
  {
    question: 'What makes Beyond Aesthetic Clinic different from other aesthetic clinics in Edinburgh?',
    answer: 'We combine science and artistry to deliver medical-grade treatments tailored to each patient. Our clinic is part of a trusted brand with locations in London and Edinburgh, known for providing exceptional patient care, innovative procedures, and real patient transformations.'
  },
  {
    question: 'Do you offer consultations for new patients?',
    answer: 'Yes! We offer personalised consultations where our experts assess your skin, face, and body to recommend the best aesthetic treatments. Whether you\'re considering anti-wrinkle injections, fat freezing, or skin rejuvenation, we tailor a treatment plan to meet your goals.'
  },
  {
    question: 'What skin rejuvenation treatments are available?',
    answer: 'We offer a range of skin rejuvenation procedures, including laser treatments, skin peels, and non-surgical facelifts. Whether you\'re looking to reduce fine lines, improve skin texture, or achieve a more youthful glow, we have options for every skin type.'
  },
  {
    question: 'Do you offer laser hair removal at Beyond Aesthetic Clinic Edinburgh?',
    answer: 'Yes! Our laser hair removal services deliver long-lasting results for smooth skin. This non-invasive procedure effectively removes unwanted hair on the face, body, and legs, helping you enjoy hair-free confidence.'
  },
  {
    question: 'What should I expect during my first visit?',
    answer: 'Your first visit will include a one-on-one consultation to assess your aesthetic goals and create a personalised treatment plan. Our team will explain every step of the process, ensuring a comfortable, relaxing experience.'
  },
  {
    question: 'Do you offer aftercare for your treatments?',
    answer: 'Yes. We provide comprehensive aftercare to ensure you achieve the best results. Our team offers skincare advice, premium aftercare products, and ongoing support for long-term beauty maintenance.'
  },
  {
    question: 'Is Beyond Aesthetic Clinic Edinburgh suitable for both men and women?',
    answer: 'Absolutely! We offer aesthetic procedures tailored for both women and men, including anti-wrinkle injections, skin treatments, and body contouring. Our team ensures natural, confidence-boosting results for every patient.'
  },
  {
    question: 'How do I book an appointment at Beyond Aesthetic Clinic Edinburgh?',
    answer: 'You can call us at 0345 548 1151, email edinburgh@beyondmedispa.co.uk, or use our online booking system. Our team is ready to assist you with expert advice and tailored treatment recommendations.'
  }
]

export default function EdinburghPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20">
        <section className="py-20 bg-gradient-to-br from-[#2C2C2C] via-[#333333] to-[#2C2C2C] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl lg:text-6xl font-light mb-6">
                Discover a World-Class <span className="text-[#C6A77D]">Aesthetic Clinic In Edinburgh,</span> For Transformative Beauty Treatments
              </h1>
              <h3 className="text-2xl font-light text-white/80 mb-8">
                State-of-the-art medical and aesthetic treatments in Edinburgh
              </h3>
              <p className="text-xl text-white/90 leading-relaxed mb-12">
                Welcome to Beyond Aesthetic Clinic, the premier aesthetic clinic in Edinburgh, located on the second floor of Harvey Nichols. Our expert doctors and aesthetic specialists provide cutting-edge beauty treatments designed to enhance your natural beauty with tailored, medical-grade solutions. Achieve your desired look with our advanced skincare, body sculpting, and rejuvenation therapies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/book-treatment">
                  <Button className="bg-[#C6A77D] hover:bg-[#A38E78] text-white px-8 py-4 text-lg">
                    Make a Booking Today
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <a href="tel:03455481151">
                  <Button variant="outline" className="border-2 border-[#C6A77D] text-[#C6A77D] hover:bg-[#C6A77D] hover:text-white px-8 py-4 text-lg">
                    <Phone className="mr-2 w-5 h-5" />
                    03455 481151
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-[#FAF8F5] via-[#FFFFFF] to-[#F5F1EC]">
          <div className="container mx-auto px-4">
            <h3 className="text-center text-xl text-[#777777] mb-8">
              Tried and Trusted By Top Aesthetic Professionals
            </h3>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h4 className="text-sm text-[#A38E78] font-semibold tracking-wider mb-4">LET YOUR NATURAL BEAUTY SHINE</h4>
              <h2 className="text-4xl lg:text-5xl font-light text-[#333333] mb-8">
                The Gold Standard In <span className="text-[#A38E78]">Medical Aesthetics</span>
              </h2>
              <p className="text-xl text-[#777777] max-w-4xl mx-auto mb-8">
                At Beyond Aesthetic Clinic Edinburgh, we blend science and artistry to offer advanced aesthetic treatments with a personalised approach. From anti-wrinkle injections and dermal fillers to skin rejuvenation and non-invasive body contouring, our treatments help you achieve youthful, radiant skin while maintaining natural-looking results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/about">
                  <Button className="bg-[#A38E78] hover:bg-[#8B7A67] text-white px-6 py-3">
                    Learn More About Us
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="max-w-4xl mx-auto">
              <img
                src="https://www.beyondmedispa.com/wp-content/uploads/2024/10/Azadeh-Manesh.png"
                alt="Gold Standard Medical Aesthetics"
                className="rounded-3xl shadow-xl w-full"
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-[#FAF8F5] via-[#FFFFFF] to-[#F5F1EC]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h4 className="text-sm text-[#A38E78] font-semibold tracking-wider mb-4">THE PREMIER AESTHETIC CLINIC IN EDINBURGH</h4>
              <h2 className="text-4xl lg:text-5xl font-light text-[#333333] mb-12">
                Why Choose <span className="text-[#A38E78]">Beyond Aesthetic Clinic?</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto mb-12">
              {whyChoose.map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="text-center">
                    <div className="bg-[#A38E78]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-[#A38E78]" />
                    </div>
                    <h4 className="text-sm font-medium text-[#333333]">{item.title}</h4>
                  </div>
                )
              })}
            </div>
            <div className="text-center">
              <Link to="/book-treatment">
                <Button className="bg-[#A38E78] hover:bg-[#8B7A67] text-white px-8 py-4 text-lg">
                  Book Your Appointment Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h4 className="text-sm text-[#A38E78] font-semibold tracking-wider mb-4">COMBINING SCIENCE & ARTISTRY</h4>
              <h2 className="text-4xl lg:text-5xl font-light text-[#333333] mb-6">
                World-Class Treatments for <span className="text-[#A38E78]">Face, Skin & Body</span>
              </h2>
              <p className="text-xl text-[#777777] max-w-4xl mx-auto">
                We specialise in advanced medical aesthetics, offering treatments such as dermal fillers, anti-wrinkle injections, skin rejuvenation, laser skin therapy, and body contouring. Our highly trained professionals use cutting-edge techniques to deliver exceptional results with minimal downtime.
              </p>
            </div>
          </div>
        </section>

        <TestimonialsSection />

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h4 className="text-sm text-[#A38E78] font-semibold tracking-wider mb-4">FOR THE LOOK YOU WANT</h4>
              <h2 className="text-4xl lg:text-5xl font-light text-[#333333] mb-6">
                Welcome To Our <span className="text-[#A38E78]">Aesthetic Clinic In Edinburgh</span>
              </h2>
              <p className="text-xl text-[#777777] max-w-3xl mx-auto mb-8">
                Experience the best in medical aesthetics and skincare at Beyond Aesthetic Clinic Edinburgh. Our specialists provide tailored treatments for skin rejuvenation, body contouring, and facial aesthetics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/book-treatment">
                  <Button className="bg-[#A38E78] hover:bg-[#8B7A67] text-white px-6 py-3">
                    Book Now
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <a href="tel:02072018595">
                  <Button variant="outline" className="border-[#A38E78] text-[#A38E78] hover:bg-[#A38E78] hover:text-white px-6 py-3">
                    <Phone className="mr-2 w-4 h-4" />
                    020 7201 8595
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-[#FAF8F5] via-[#FFFFFF] to-[#F5F1EC]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h4 className="text-sm text-[#A38E78] font-semibold tracking-wider mb-4">GALLERY</h4>
              <h2 className="text-4xl lg:text-5xl font-light text-[#333333] mb-6">
                Inside <span className="text-[#A38E78]">Beyond Aesthetic Clinic In Edinburgh</span>
              </h2>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h4 className="text-sm text-[#A38E78] font-semibold tracking-wider mb-4">YOUR JOURNEY TO CONFIDENCE</h4>
              <h2 className="text-4xl lg:text-5xl font-light text-[#333333] mb-12">
                What To <span className="text-[#A38E78]">Expect</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {journey.map((step, index) => {
                const Icon = step.icon
                return (
                  <div key={index}>
                    <div className="bg-[#A38E78]/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-[#A38E78]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#333333] mb-4">{step.title}</h3>
                    <ul className="space-y-2">
                      {step.points.map((point, idx) => (
                        <li key={idx} className="text-[#777777] flex items-start">
                          <span className="text-[#A38E78] mr-2">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {treatments.map((treatment, index) => (
          <section 
            key={index} 
            className={`py-20 ${index % 2 === 0 ? 'bg-gradient-to-br from-[#FAF8F5] via-[#FFFFFF] to-[#F5F1EC]' : 'bg-white'}`}
          >
            <div className="container mx-auto px-4">
              <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'order-2' : ''}>
                  <h4 className="text-sm text-[#A38E78] font-semibold tracking-wider mb-4">{treatment.tag}</h4>
                  <h2 className="text-4xl lg:text-5xl font-light text-[#333333] mb-6">
                    {treatment.title}
                  </h2>
                  <p className="text-lg text-[#777777] leading-relaxed mb-8">
                    {treatment.description}
                  </p>
                  <Link to={treatment.link}>
                    <Button className="bg-[#A38E78] hover:bg-[#8B7A67] text-white px-6 py-3">
                      Explore {treatment.title}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
                <div className={index % 2 === 1 ? 'order-1' : ''}>
                  <img
                    src="https://i.ibb.co/Kj4wWGcD/beauty-salon-beautician-applies-cooling-gel-to-cli-2025-01-09-05-05-23-utc-1.webp"
                    alt={treatment.title}
                    className="rounded-3xl shadow-xl w-full"
                  />
                </div>
              </div>
            </div>
          </section>
        ))}

        <section className="py-20 bg-gradient-to-br from-[#A38E78] to-[#8B7A67] text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h4 className="text-sm text-white/80 font-semibold tracking-wider mb-4">BOOK YOUR APPOINTMENT</h4>
              <h2 className="text-4xl lg:text-5xl font-light mb-6">
                Visit Our Aesthetic Clinic In Edinburgh Today
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                Begin your beauty transformation at Beyond Aesthetic Clinic Edinburgh. Our expert practitioners are ready to help you achieve your skincare and body goals with tailored aesthetic treatments.
              </p>
              <Link to="/book-treatment">
                <Button size="lg" className="bg-white text-[#A38E78] hover:bg-white/90 px-8 py-4 text-lg">
                  Book Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h4 className="text-sm text-[#A38E78] font-semibold tracking-wider mb-4">IN THE HEART OF EDINBURGH</h4>
              <h2 className="text-4xl lg:text-5xl font-light text-[#333333] mb-12">
                Where To <span className="text-[#A38E78]">Find Us</span>
              </h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-[#FAF8F5] via-[#FFFFFF] to-[#F5F1EC] rounded-3xl p-8 border border-[#E5E5E5]">
                <h3 className="text-2xl font-semibold text-[#333333] mb-6">Edinburgh</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-[#A38E78] mr-3 mt-1" />
                    <div>
                      <p className="text-sm text-[#777777] mb-1">Email</p>
                      <a href="mailto:edinburgh@beyondmedispa.co.uk" className="text-[#333333] hover:text-[#A38E78]">
                        edinburgh@beyondmedispa.co.uk
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-[#A38E78] mr-3 mt-1" />
                    <div>
                      <p className="text-sm text-[#777777] mb-1">Phone</p>
                      <a href="tel:03455481151" className="text-[#333333] hover:text-[#A38E78]">
                        0345 548 1151
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-[#A38E78] mr-3 mt-1" />
                    <div>
                      <p className="text-sm text-[#777777] mb-1">Address</p>
                      <p className="text-[#333333]">
                        Second Floor<br />
                        Harvey Nichols<br />
                        30-34 St Andrew Square, Edinburgh<br />
                        EH2 2AD
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-[#FAF8F5] via-[#FFFFFF] to-[#F5F1EC]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-light text-[#333333] mb-6">
                Aesthetic Clinic Edinburgh: <span className="text-[#A38E78]">FAQs</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white border border-[#E5E5E5] rounded-xl overflow-hidden transition-all duration-300 hover:bg-white/80"
                  >
                    <button
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                      className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none"
                    >
                      <h3 className="text-lg font-semibold text-[#333333] pr-4">
                        {faq.question}
                      </h3>
                      <div className="flex-shrink-0">
                        {openFAQ === index ? (
                          <ChevronUp className="w-6 h-6 text-[#A38E78]" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-[#A38E78]" />
                        )}
                      </div>
                    </button>
                    
                    {openFAQ === index && (
                      <div className="px-6 pb-6">
                        <div className="pt-2 border-t border-[#E5E5E5]">
                          <p className="text-[#777777] leading-relaxed mt-4">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  )
}
