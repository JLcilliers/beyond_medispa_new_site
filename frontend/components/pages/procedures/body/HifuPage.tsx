import { useEffect, useState } from 'react'
import Navigation from '../../../Navigation'
import Footer from '../../../Footer'
import ContactForm from '../../../ContactForm'
import Locations from '../../../Locations'
import { Button } from '@/components/ui/button'
import { CheckCircle2, Shield, Zap, Users, Sparkles, Clock } from 'lucide-react'

export default function HifuPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    document.title = "HiFu London Treatment | Skin Lifting & Regeneration | Beyond Aesthetic Clinic"
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute("content", "Experience the transformative HiFu London treatment at Beyond Aesthetic Clinic. Lift, tighten, and regenerate your skin for a more youthful and radiant appearance.")
    } else {
      const meta = document.createElement("meta")
      meta.name = "description"
      meta.content = "Experience the transformative HiFu London treatment at Beyond Aesthetic Clinic. Lift, tighten, and regenerate your skin for a more youthful and radiant appearance."
      document.head.appendChild(meta)
    }
  }, [])

  const testimonials = [
    {
      text: "The HiFu treatment at Beyond MediSpa gave me incredible results without any surgery. My skin feels lifted and so much tighter. The team was professional and made me feel at ease.",
      client: "Rebecca H."
    },
    {
      text: "I was sceptical at first, but after seeing the results, I'm a true believer. The skin on my neck and face looks years younger. No downtime was a huge bonus!",
      client: "Michael P."
    },
    {
      text: "Beyond MediSpa's HiFu treatment exceeded all my expectations. The technology is amazing and the results speak for themselves. I feel so much more confident now.",
      client: "Sophie K."
    }
  ]

  const blogPosts = [
    {
      title: "HiFu vs Traditional Facelifts: Understanding Your Non-Surgical Options",
      image: "/api/placeholder/400/300"
    },
    {
      title: "How Ultrasound Technology Is Revolutionising Skin Tightening Treatments",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Preparing for Your HiFu Treatment: A Complete Guide to Maximum Results",
      image: "/api/placeholder/400/300"
    }
  ]

  const faqs = [
    {
      question: "What is HiFu and how does it work?",
      answer: "HiFu (High-Intensity Focused Ultrasound) is a non-surgical treatment that uses ultrasound energy to target deep layers of skin, stimulating collagen production and tightening skin. The UltraSkin II system is used for this procedure, targeting fat tissue and lifting areas like the face, neck, and body."
    },
    {
      question: "Is HiFu treatment safe for all skin types?",
      answer: "Yes, HiFu treatment is safe for all skin types. It works effectively on various skin tones and textures, ensuring a personalised and safe experience for every client at Beyond MediSpa."
    },
    {
      question: "What areas can HiFu treat?",
      answer: "HiFu is versatile and can treat multiple areas of the face and body, including the face, neck, stomach, arms, thighs, and buttocks, targeting stubborn fat and improving skin elasticity."
    },
    {
      question: "How many treatments are required for optimal results?",
      answer: "Typically, 2 treatments are recommended for HiFu, each lasting between 30-90 minutes. However, depending on the area and individual goals, your practitioner may suggest more sessions to achieve optimal skin lifting and tightening results."
    },
    {
      question: "Are the results from HiFu permanent?",
      answer: "HiFu provides long-lasting results, with some clients enjoying the benefits for up to 24 months. Collagen and elastin stimulation continues even after the treatment, keeping the skin looking youthful."
    },
    {
      question: "How soon will I see results from HiFu?",
      answer: "You may notice immediate lifting and tightening after the first treatment, with the full effect visible in 2-4 weeks. The results improve over time as collagen production continues."
    },
    {
      question: "Does HiFu require any downtime?",
      answer: "HiFu treatment requires very little downtime. Some clients experience swelling, bruising, tenderness or welts that will subside in 2 weeks or less. You can resume your daily activities immediately after your session, making it a convenient, non-invasive option for those with busy schedules. Our aestheticians recommend avoiding alcohol and smoking for 48 hours following treatment, as these can inhibit collagen production."
    },
    {
      question: "How does HiFu compare to a facelift?",
      answer: "HiFu offers a facelift-like effect without the need for surgery. It lifts and tightens the skin non-invasively, stimulating collagen production, which can give similar results to a facelift but without the risks or recovery time."
    }
  ]

  const handleNavigation = (route: string) => {
    if (window.navigateTo) {
      (window as any).navigateTo(route)
    }
  }

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20">
        <section className="relative min-h-screen bg-gradient-to-br from-[#2C2C2C] to-[#A38E78] text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C2C2C]/80 to-transparent"></div>
          
          <div className="relative container mx-auto px-4 py-32 flex items-center min-h-screen">
            <div className="max-w-2xl">
              <h1 className="text-5xl lg:text-7xl font-light leading-tight mb-8">
                Elevate Skin On Face, Neck, Stomach, & More With HiFu Treatment In London
              </h1>
              <p className="text-xl text-[#F5F1EC] mb-8 leading-relaxed">
                Achieve a more youthful, sculpted appearance with HiFu London treatments at Beyond MediSpa. Using advanced UltraSkin II technology, HiFu (High-Intensity Focused Ultrasound) targets deep skin layers and fat tissue to lift, tighten, and rejuvenate. Perfect for areas like the face, neck, stomach, and thighs, this non-surgical procedure stimulates collagen and elastin production for long-lasting results.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={() => handleNavigation('book-treatment')}
                  className="bg-[#A38E78] hover:bg-[#8B7355] text-white px-8 py-4 text-lg font-light"
                >
                  Book Now →
                </Button>
                <Button 
                  onClick={() => handleNavigation('contact')}
                  className="bg-transparent border-2 border-[#C6A77D] text-[#C6A77D] hover:bg-[#C6A77D] hover:text-[#2C2C2C] px-8 py-4 text-lg font-light"
                >
                  020 7201 8595 →
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-light text-[#2C2C2C]">
                Tried and Trusted By Top Aesthetic Professionals
              </h3>
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#F5F1EC]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-sm text-[#A38E78] tracking-widest mb-4">RECAPTURE VITALITY</p>
              <h2 className="text-4xl lg:text-5xl font-light text-[#2C2C2C] mb-8">
                Lifted, Tighter Skin That Shines
              </h2>
              <p className="text-lg text-[#555555] leading-relaxed mb-6">
                Experience the rejuvenating power of HiFu London treatments at Beyond MediSpa, designed to restore your skin's elasticity, smoothness, and youthful glow. This non-invasive solution works by stimulating collagen and elastin production deep within the skin, offering transformative results that can last up to 24 months. Whether you want to lift sagging skin, contour your body, or refresh your facial features, HiFu delivers outstanding results with little downtime.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#A38E78] mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#2C2C2C]">Non-Surgical Lift & Tightening:</strong>
                    <span className="text-[#555555]"> Achieve a natural facelift without the risks or recovery time of surgery.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#A38E78] mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#2C2C2C]">Targeted Rejuvenation:</strong>
                    <span className="text-[#555555]"> Treat areas like the face, neck, stomach, arms, and more with precision and care.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#A38E78] mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#2C2C2C]">Lasting Transformation:</strong>
                    <span className="text-[#555555]"> Enjoy smoother, firmer skin with results visible immediately and improving over time.</span>
                  </div>
                </li>
              </ul>
              <p className="text-sm text-[#777777] mb-8">
                Please note that some clients may experience slight swelling or redness after treatment which will subside within 2 weeks. Our professional aestheticians recommend waiting at least 2 weeks before undergoing further beauty treatments, as well as avoiding alcohol and smoking for 48 hours, as these can inhibit collagen production.
              </p>
              <Button 
                onClick={() => handleNavigation('book-treatment')}
                className="bg-[#A38E78] hover:bg-[#8B7355] text-white px-8 py-4 text-lg font-light"
              >
                Book Now →
              </Button>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="aspect-square bg-[#F5F1EC] rounded-2xl flex items-center justify-center">
                <div className="text-[#A38E78] text-xl">VIDEO</div>
              </div>
              <div>
                <p className="text-sm text-[#A38E78] tracking-widest mb-4">LIKE A FACELIFT WITHOUT SURGERY</p>
                <h2 className="text-4xl lg:text-5xl font-light text-[#2C2C2C] mb-8">
                  Target Stubborn Fat Tissue Without Harming Skin
                </h2>
                <p className="text-lg text-[#555555] leading-relaxed mb-8">
                  HiFu treatments use high-intensity focused ultrasound (HIFU) technology to penetrate deep into the SMAS layer - the structure targeted in surgical facelifts - stimulating collagen production and tightening skin. This non-invasive procedure targets fat tissue without harming surrounding skin, delivering noticeable results on areas like the face, neck, stomach, and more. Achieve a natural lift with improved elasticity and long-lasting effects.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="text-xl font-light text-[#2C2C2C] mb-2">
                      2 Treatments Of 30-90 Minutes
                    </h3>
                    <p className="text-[#555555]">
                      Each session is tailored to your needs, providing targeted treatment with no discomfort and quick appointments.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-[#2C2C2C] mb-2">
                      Instant Results With Minimal Downtime
                    </h3>
                    <p className="text-[#555555]">
                      Enjoy visible improvements immediately after treatment, and get back to your daily activities. We recommend avoiding alcohol and nicotine for 48 hours.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button 
                    onClick={() => handleNavigation('about')}
                    className="bg-transparent border-2 border-[#A38E78] text-[#A38E78] hover:bg-[#A38E78] hover:text-white px-6 py-3"
                  >
                    Learn More About Us →
                  </Button>
                  <Button 
                    onClick={() => handleNavigation('products')}
                    className="bg-transparent border-2 border-[#A38E78] text-[#A38E78] hover:bg-[#A38E78] hover:text-white px-6 py-3"
                  >
                    Explore Our Shop →
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#A38E78] text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-sm text-[#C6A77D] tracking-widest mb-4">BOOK YOUR APPOINTMENT</p>
              <h2 className="text-4xl lg:text-5xl font-light mb-8">
                Visit Us For HiFu London Treatment Today
              </h2>
              <p className="text-xl text-[#F5F1EC] mb-8 max-w-2xl mx-auto">
                Experience transformative results with our expert team. Book your consultation today to get started.
              </p>
              <Button 
                onClick={() => handleNavigation('book-treatment')}
                className="bg-white text-[#A38E78] hover:bg-[#F5F1EC] px-8 py-4 text-lg font-light"
              >
                Book Now →
              </Button>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-sm text-[#A38E78] tracking-widest mb-4">TESTIMONIALS</p>
              <h2 className="text-4xl lg:text-5xl font-light text-[#2C2C2C]">
                What People Say
              </h2>
            </div>

            <div className="max-w-4xl mx-auto relative">
              <div className="bg-[#F5F1EC] rounded-3xl p-12">
                <p className="text-xl text-[#2C2C2C] mb-6 italic">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <p className="text-[#A38E78] font-semibold">
                  {testimonials[currentTestimonial].client}
                </p>
              </div>
              
              <div className="flex justify-center gap-4 mt-8">
                <button 
                  onClick={prevTestimonial}
                  className="bg-[#A38E78] text-white w-12 h-12 rounded-full hover:bg-[#8B7355] transition-colors"
                >
                  ←
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="bg-[#A38E78] text-white w-12 h-12 rounded-full hover:bg-[#8B7355] transition-colors"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#2C2C2C] text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-sm text-[#C6A77D] tracking-widest mb-4">FOR THE FACE & BODY</p>
              <h2 className="text-4xl lg:text-5xl font-light mb-8">
                Our Clients Love HiFu
              </h2>
              <p className="text-xl text-[#F5F1EC] mb-8 max-w-2xl mx-auto">
                Achieve firmer, lifted skin on the face, neck, and body with HiFu. Experience visible results and long-lasting confidence in your natural beauty.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  onClick={() => handleNavigation('book-treatment')}
                  className="bg-[#A38E78] hover:bg-[#8B7355] text-white px-8 py-4 text-lg font-light"
                >
                  Book Now →
                </Button>
                <Button 
                  onClick={() => handleNavigation('contact')}
                  className="bg-transparent border-2 border-[#C6A77D] text-[#C6A77D] hover:bg-[#C6A77D] hover:text-[#2C2C2C] px-8 py-4 text-lg font-light"
                >
                  020 7201 8595 →
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mt-16">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="aspect-square bg-[#A38E78]/20 rounded-2xl flex items-center justify-center">
                  <span className="text-[#A38E78]">IMAGE</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="flex gap-4">
                <Shield className="w-8 h-8 text-[#A38E78] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-light text-[#2C2C2C] mb-2">
                    Non-surgical skin lifting
                  </h3>
                  <p className="text-[#555555]">
                    Experience visible lifting and tightening effects without the need for invasive surgery, giving your skin a rejuvenated, youthful appearance.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Zap className="w-8 h-8 text-[#A38E78] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-light text-[#2C2C2C] mb-2">
                    Targets stubborn fat
                  </h3>
                  <p className="text-[#555555]">
                    HiFu focuses on fat cells beneath the skin's surface, reducing localised fat without harming surrounding tissues. Perfect for areas like the stomach and thighs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Sparkles className="w-8 h-8 text-[#A38E78] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-light text-[#2C2C2C] mb-2">
                    Stimulates collagen & elastin
                  </h3>
                  <p className="text-[#555555]">
                    The high-intensity ultrasound energy encourages collagen and elastin production, improving skin texture, elasticity, and tightness for long-lasting, youthful results.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Users className="w-8 h-8 text-[#A38E78] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-light text-[#2C2C2C] mb-2">
                    Ideal for face, neck, & body
                  </h3>
                  <p className="text-[#555555]">
                    Treat multiple areas including the face, neck, stomach, and more, with targeted precision, for a complete rejuvenation from head to toe.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="w-8 h-8 text-[#A38E78] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-light text-[#2C2C2C] mb-2">
                    Minimal downtime
                  </h3>
                  <p className="text-[#555555]">
                    Enjoy the benefits of a non-invasive treatment with little recovery time needed, allowing you to return to your normal activities immediately. Any redness or swelling will subside in 2 weeks or less.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-8 h-8 text-[#A38E78] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-light text-[#2C2C2C] mb-2">
                    Visible results after just one session
                  </h3>
                  <p className="text-[#555555]">
                    Experience noticeable lifting and tightening after your first treatment, with optimal results appearing in the weeks following for enhanced skin vitality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-sm text-[#A38E78] tracking-widest mb-4">THE BEYOND JOURNAL</p>
              <h2 className="text-4xl lg:text-5xl font-light text-[#2C2C2C]">
                Explore Our Blog
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {blogPosts.map((post, index) => (
                <div key={index} className="group">
                  <div className="aspect-[4/3] bg-[#F5F1EC] rounded-2xl mb-4 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-light text-[#2C2C2C] mb-3">
                    {post.title}
                  </h3>
                  <button className="text-[#A38E78] hover:text-[#8B7355] font-light">
                    Read More →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#2C2C2C] text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-sm text-[#C6A77D] tracking-widest mb-4">FOR YOUR PERFECT LOOK</p>
              <h2 className="text-4xl lg:text-5xl font-light mb-8">
                Book Your Appointment Or Explore Our Shop
              </h2>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  onClick={() => handleNavigation('book-treatment')}
                  className="bg-[#A38E78] hover:bg-[#8B7355] text-white px-8 py-4 text-lg font-light"
                >
                  Book Now →
                </Button>
                <Button 
                  onClick={() => handleNavigation('products')}
                  className="bg-transparent border-2 border-[#C6A77D] text-[#C6A77D] hover:bg-[#C6A77D] hover:text-[#2C2C2C] px-8 py-4 text-lg font-light"
                >
                  Explore Our Shop →
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Locations />

        <section className="py-24 bg-[#F5F1EC]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-light text-[#2C2C2C] mb-12 text-center">
                HiFu London Treatment: FAQs
              </h2>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <details key={index} className="group bg-white rounded-xl p-6">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <h3 className="text-xl font-light text-[#2C2C2C] pr-8">
                        {faq.question}
                      </h3>
                      <span className="text-[#A38E78] text-2xl group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="text-[#555555] mt-4 leading-relaxed">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>

              <div className="text-center mt-12">
                <p className="text-sm text-[#A38E78] tracking-widest mb-4">Still have a question?</p>
                <Button 
                  onClick={() => handleNavigation('contact')}
                  className="bg-[#A38E78] hover:bg-[#8B7355] text-white px-8 py-4 text-lg font-light"
                >
                  Contact Us Now →
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  )
}
