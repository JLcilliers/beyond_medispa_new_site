import Navigation from '../Navigation'
import Footer from '../Footer'
import TestimonialsSection from '../TestimonialsSection'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Mail, ArrowRight, Award, Users, Star, Shield, Clock, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const whyChoose = [
  { icon: Award, title: 'Established in 2006, trusted for exceptional results' },
  { icon: MapPin, title: 'Located in Knightsbridge, London, a short walk from the tube' },
  { icon: Heart, title: 'Bespoke treatment plans tailored to your unique beauty needs' },
  { icon: Users, title: 'Expert team of doctors, nurse prescribers, and aestheticians' },
  { icon: Shield, title: 'State-of-the-art wellness & beauty technologies' }
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
    tag: 'REFINED & RADIANT',
    title: 'Facial Treatments',
    description: 'Discover the ultimate in facial rejuvenation with our advanced skincare solutions, including anti-aging facials, dermal fillers, and skin tightening treatments tailored to your skin\'s unique needs.',
    link: '/london/facial'
  },
  {
    tag: 'SCULPTED & YOUTHFUL',
    title: 'Body Contouring',
    description: 'Achieve a toned and sculpted physique with our non-invasive body contouring treatments, designed to redefine your silhouette and enhance your natural curves.',
    link: '/london/body'
  },
  {
    tag: 'SILKEN & GLOWING',
    title: 'Skin Treatments',
    description: 'From laser skin resurfacing to medical-grade peels, our skin treatments are designed to improve texture, tone, and overall skin health for a radiant, youthful glow.',
    link: '/london/peels'
  },
  {
    tag: 'TIGHT & TONED',
    title: 'Injectables',
    description: 'Smooth fine lines, restore lost volume, and achieve a refreshed appearance with our expertly administered anti-wrinkle injections and dermal fillers.',
    link: '/london/injectables'
  }
]

const faqs = [
  {
    question: 'Where is Beyond Aesthetic Clinic London located?',
    answer: 'Beyond Aesthetic Clinic London is situated on the fourth floor of Harvey Nichols in Knightsbridge, just a short walk from Knightsbridge tube station. Our luxury aesthetic clinic provides world-class beauty and skin treatments in a tranquil setting.'
  },
  {
    question: 'What treatments are available at Beyond MediSpa London?',
    answer: 'We offer a wide range of advanced aesthetic and medical-grade treatments, including skin tightening, dermal fillers, facial treatments, body contouring, laser hair removal, fat reduction and more. Our expert team provides tailored solutions to enhance your natural beauty.'
  },
  {
    question: 'Why should I choose Beyond MediSpa London beauty clinic?',
    answer: 'As a leading London beauty clinic, Beyond MediSpa has been trusted since 2006 for its exceptional results. We combine the latest medical aesthetics with a holistic approach to skincare, ensuring you achieve confidence-boosting, natural-looking results.'
  },
  {
    question: 'Are treatments at Beyond MediSpa performed by professionals?',
    answer: 'Yes, all treatments are performed by experienced doctors, nurse prescribers, and expert aestheticians. We are committed to safety, precision, and delivering outstanding patient care.'
  },
  {
    question: 'Can I book a beauty consultation at Beyond MediSpa London?',
    answer: 'Absolutely! We offer personalised consultations to assess your skincare needs, fine lines, facial treatments, and body sculpting goals. Our specialists will recommend the best treatments for you. Book an appointment online or call us today.'
  },
  {
    question: 'Do you offer non-invasive treatments?',
    answer: 'Yes, we specialise in non-invasive and minimally invasive treatments, including anti-wrinkle injections, laser skin treatments, dermal fillers, and body sculpting technologies that require little to no downtime.'
  },
  {
    question: 'How much do treatments cost at Beyond MediSpa London?',
    answer: 'Prices vary depending on the treatment and the personalised plan we create for you. Our team will discuss costs during your consultation. We offer a wide range of aesthetic treatments at competitive prices.'
  },
  {
    question: 'What skincare brands and products do you offer?',
    answer: 'We stock a curated selection of premium skincare products to complement your treatment plan, ensuring long-term skin health and beauty maintenance. Visit our online shop or speak to our experts for personalised recommendations.'
  },
  {
    question: 'How do I book an appointment at Beyond MediSpa London?',
    answer: 'You can book online, call our team at 0345 548 1151, or visit us at Harvey Nichols, Knightsbridge. Our expert team is ready to help you achieve your beauty goals with confidence.'
  }
]

export default function LondonPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20">
        <section className="py-20 bg-gradient-to-br from-[#2C2C2C] via-[#333333] to-[#2C2C2C] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl lg:text-6xl font-light mb-6">
                Discover the Premier <span className="text-[#C6A77D]">London Beauty Clinic</span> For Aesthetic Excellence
              </h1>
              <h3 className="text-2xl font-light text-white/80 mb-8">
                Advanced medical and aesthetic treatments in the heart of Knightsbridge
              </h3>
              <p className="text-xl text-white/90 leading-relaxed mb-12">
                At Beyond MediSpa in London, we blend science and artistry to offer next-generation aesthetic treatments tailored to your unique beauty goals. Located in Harvey Nichols, our state-of-the-art clinic provides a luxurious and relaxing environment where expert care meets cutting-edge technology.
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
              <h4 className="text-sm text-[#A38E78] font-semibold tracking-wider mb-4">ENHANCE YOUR NATURAL BEAUTY</h4>
              <h2 className="text-4xl lg:text-5xl font-light text-[#333333] mb-8">
                World-Class <span className="text-[#A38E78]">Aesthetic Care</span>
              </h2>
              <p className="text-xl text-[#777777] max-w-4xl mx-auto mb-8">
                Since 2006, Beyond MediSpa has been a leader in medical aesthetics, offering a comprehensive range of treatments designed to rejuvenate, restore, and enhance your natural beauty. From anti-aging solutions to skin-perfecting therapies, our expert team ensures that every treatment is delivered with precision and care.
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
                src="https://www.beyondmedispa.com/wp-content/uploads/2025/09/Gemini_Generated_Image_w7zyv8w7zyv8w7zy.png" 
                alt="World-Class Aesthetic Care"
                className="rounded-3xl shadow-xl w-full"
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-[#FAF8F5] via-[#FFFFFF] to-[#F5F1EC]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h4 className="text-sm text-[#A38E78] font-semibold tracking-wider mb-4">THE PREMIER LONDON BEAUTY CLINIC</h4>
              <h2 className="text-4xl lg:text-5xl font-light text-[#333333] mb-12">
                Why Choose <span className="text-[#A38E78]">Beyond MediSpa?</span>
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
                Aesthetic & Beauty Treatments for <span className="text-[#A38E78]">Face, Skin & Body</span>
              </h2>
              <p className="text-xl text-[#777777] max-w-4xl mx-auto">
                We specialise in a wide range of medical-grade aesthetic treatments. Whether you seek facial rejuvenation, skin tightening, or body sculpting, our advanced techniques ensure optimal results with minimal downtime. Experience the highest standards of care in a serene and sophisticated setting, right here in Knightsbridge.
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
                Welcome To Our <span className="text-[#A38E78]">London Beauty Clinic</span>
              </h2>
              <p className="text-xl text-[#777777] max-w-3xl mx-auto mb-8">
                At our Knightsbridge clinic, we prioritise your beauty and well-being with tailored aesthetic treatments designed to deliver visible, long-lasting results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/book-treatment">
                  <Button className="bg-[#A38E78] hover:bg-[#8B7A67] text-white px-6 py-3">
                    Book Now
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <a href="tel:03455481151">
                  <Button variant="outline" className="border-[#A38E78] text-[#A38E78] hover:bg-[#A38E78] hover:text-white px-6 py-3">
                    <Phone className="mr-2 w-4 h-4" />
                    03455 481151
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
                Inside <span className="text-[#A38E78]">Beyond MediSpa London Beauty Clinic</span>
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
                    src="https://www.beyondmedispa.com/wp-content/uploads/2025/09/Gemini_Generated_Image_w7zyv8w7zyv8w7zy.png" 
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
                Visit Our London Beauty Clinic Today
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                Experience the highest level of aesthetic expertise at Beyond MediSpa London beauty clinic. Book your consultation today.
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
              <h4 className="text-sm text-[#A38E78] font-semibold tracking-wider mb-4">IN THE HEART OF LONDON</h4>
              <h2 className="text-4xl lg:text-5xl font-light text-[#333333] mb-12">
                Where To <span className="text-[#A38E78]">Find Us</span>
              </h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-[#FAF8F5] via-[#FFFFFF] to-[#F5F1EC] rounded-3xl p-8 border border-[#E5E5E5]">
                <h3 className="text-2xl font-semibold text-[#333333] mb-6">London</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-[#A38E78] mr-3 mt-1" />
                    <div>
                      <p className="text-sm text-[#777777] mb-1">Email</p>
                      <a href="mailto:london@beyondmedispa.co.uk" className="text-[#333333] hover:text-[#A38E78]">
                        london@beyondmedispa.co.uk
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
                        Fourth Floor<br />
                        Harvey Nichols<br />
                        109-125 Knightsbridge, London<br />
                        SW1X 7RJ
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
                London Beauty Clinic: <span className="text-[#A38E78]">FAQs</span>
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
