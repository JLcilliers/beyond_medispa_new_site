import { useEffect, useState } from 'react'
import Navigation from '../../../Navigation'
import Footer from '../../../Footer'
import ContactForm from '../../../ContactForm'
import Locations from '../../../Locations'
import { Button } from '@/components/ui/button'
import { CheckCircle2, Shield, Eye, Users, Sparkles, Clock } from 'lucide-react'

export default function ExilisPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    document.title = "Exilis Elite: Reduce Wrinkles & Tighten Sagging Skin | Beyond Medispa"
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute("content", "Experience revolutionary Exilis Elite at Beyond MediSpa. Non-invasive treatment to lift and tighten sagging skin. No needles, no scarring, no downtime. Book today.")
    } else {
      const meta = document.createElement("meta")
      meta.name = "description"
      meta.content = "Experience revolutionary Exilis Elite at Beyond MediSpa. Non-invasive treatment to lift and tighten sagging skin. No needles, no scarring, no downtime. Book today."
      document.head.appendChild(meta)
    }
  }, [])

  const testimonials = [
    {
      text: "The Exilis treatment exceeded my expectations. My skin feels tighter and looks more youthful. The team at Beyond MediSpa made me feel comfortable throughout the entire process.",
      client: "Sarah M."
    },
    {
      text: "I noticed visible results after just a few sessions. The non-invasive approach was exactly what I was looking for, and there was absolutely no downtime. Highly recommend!",
      client: "James T."
    },
    {
      text: "After trying various treatments, Exilis Elite has given me the best results for skin tightening. The professionalism and expertise at Beyond MediSpa are outstanding.",
      client: "Emma L."
    }
  ]

  const blogPosts = [
    {
      title: "The Science Behind Radiofrequency Skin Tightening: What You Need to Know",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Non-Surgical Face Lifts: How Modern Technology Transforms Ageing Skin",
      image: "/api/placeholder/400/300"
    },
    {
      title: "5 Signs Your Skin Could Benefit from Professional Tightening Treatments",
      image: "/api/placeholder/400/300"
    }
  ]

  const faqs = [
    {
      question: "What is Exilis Elite, and how does it work?",
      answer: "Exilis Elite is a revolutionary, non-invasive treatment that uses radiofrequency energy to lift, tighten, and contour sagging skin. It penetrates deep into the dermis, stimulating collagen and elastin production to restore firmness and elasticity naturally."
    },
    {
      question: "What areas of the body can Exilis Elite treat?",
      answer: "Exilis Elite can treat various areas, including the face, eyes, neck, chin, arms, thighs, and other areas with sagging skin. Its versatility makes it ideal for facial contouring and full-body skin rejuvenation."
    },
    {
      question: "Is Exilis Elite suitable for all skin types?",
      answer: "Yes, Exilis Elite is a safe and effective treatment for all skin types and tones. Our experienced practitioners customize treatments based on individual needs and skin concerns."
    },
    {
      question: "How many treatments are recommended for the best results?",
      answer: "Most patients require 4-6 sessions of 20-60 minutes, depending on the area and desired results. Visible improvements can often be seen after just one session."
    },
    {
      question: "Is there any downtime after Exilis Elite treatments?",
      answer: "Exilis Elite requires next-to-no downtime. Some clients may experience slight redness, which typically resolves within 15-30 minutes, allowing you to return to daily activities."
    },
    {
      question: "How long does it take to see results?",
      answer: "You may notice tighter and smoother skin after the first treatment. Optimal results develop over 2-3 months as collagen and elastin production continues."
    },
    {
      question: "Is Exilis Elite painful?",
      answer: "No, Exilis Elite is a pain-free procedure. Clients often describe it as a warm, relaxing sensation during the treatment. No needles, scarring, or bruising are involved."
    },
    {
      question: "Who performs the Exilis Elite treatments?",
      answer: "All treatments are performed by our highly trained aesthetic practitioners, ensuring expert care and customised solutions tailored to your skin's unique needs."
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
        <section className="relative min-h-[90vh] bg-gradient-to-br from-[#2C2C2C] to-[#A38E78] text-white overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/api/placeholder/1920/1080" 
              alt="Exilis Elite Treatment"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#2C2C2C]/90 to-transparent"></div>
          </div>
          
          <div className="relative container mx-auto px-4 py-24 flex items-center min-h-[90vh]">
            <div className="max-w-3xl">
              <h1 className="text-5xl lg:text-6xl font-light leading-tight mb-6">
                Exilis Elite: Reduce Wrinkles & Tighten Sagging Skin
              </h1>
              <p className="text-xl text-[#F5F1EC] mb-8 leading-relaxed">
                Experience the revolutionary power of Exilis Elite at Beyond MediSpa. This non-invasive, medically-guided treatment effectively lifts and tightens sagging skin on the face and body – no needles, no scarring, no downtime.
              </p>
              <p className="text-lg text-[#F5F1EC] mb-8">
                Achieve visibly smoother, firmer skin after just one session and rediscover a youthful, radiant look. Book yours today.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={() => handleNavigation('book-treatment')}
                  className="bg-[#A38E78] hover:bg-[#8B7355] text-white px-8 py-4 text-lg font-light"
                >
                  Book Now →
                </Button>
                <Button 
                  onClick={() => window.location.href = 'tel:02072018595'}
                  className="bg-transparent border-2 border-[#C6A77D] text-[#C6A77D] hover:bg-[#C6A77D] hover:text-[#2C2C2C] px-8 py-4 text-lg font-light"
                >
                  020 7201 8595 →
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#F5F1EC]">
          <div className="container mx-auto px-4">
            <h3 className="text-xl font-light text-[#2C2C2C] text-center mb-8">
              Tried and Trusted By Top Aesthetic Professionals
            </h3>
            <div className="flex justify-center gap-12 flex-wrap opacity-60">
              <div className="text-3xl font-light text-[#2C2C2C]">LOGO</div>
              <div className="text-3xl font-light text-[#2C2C2C]">LOGO</div>
              <div className="text-3xl font-light text-[#2C2C2C]">LOGO</div>
              <div className="text-3xl font-light text-[#2C2C2C]">LOGO</div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-sm text-[#A38E78] tracking-widest mb-4">EXILIS ELITE</p>
              <h2 className="text-4xl lg:text-5xl font-light text-[#2C2C2C] mb-8">
                A Naturally Youthful Look
              </h2>
              <p className="text-lg text-[#555555] mb-6 leading-relaxed">
                Experience the transformative power of Exilis Elite, a revolutionary non-invasive treatment that redefines your skin's appearance. Whether targeting fine lines, sagging skin, or contouring the face and body, Exilis Elite delivers outstanding results without the need for surgery.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#A38E78] mr-3 flex-shrink-0 mt-1" />
                  <span className="text-[#555555]">Smooths wrinkles and tightens sagging skin, leaving your face and body looking naturally youthful and lifted.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#A38E78] mr-3 flex-shrink-0 mt-1" />
                  <span className="text-[#555555]">Uses advanced radiofrequency technology to stimulate collagen and elastin production, enhancing skin elasticity and firmness.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#A38E78] mr-3 flex-shrink-0 mt-1" />
                  <span className="text-[#555555]">Pain-free, with no needles, scarring, or downtime – perfect for those seeking an effective solution with minimal disruption.</span>
                </li>
              </ul>
              <p className="text-sm text-[#777777] mb-8 italic">
                Please note that some clients may experience slight redness after treatment. Our professional aestheticians recommend waiting at least 2 weeks before undergoing further beauty treatments.
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

        <section className="py-16 bg-[#F5F1EC]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video bg-[#2C2C2C] rounded-2xl flex items-center justify-center">
                <div className="text-white text-xl">VIDEO PLACEHOLDER</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="aspect-square bg-[#F5F1EC] rounded-2xl flex items-center justify-center">
                  <div className="text-[#A38E78] text-xl">IMAGE</div>
                </div>
              </div>
              <div>
                <p className="text-sm text-[#A38E78] tracking-widest mb-4">HOW IT WORKS</p>
                <h2 className="text-4xl lg:text-5xl font-light text-[#2C2C2C] mb-6">
                  Lift, Tighten, & Redefine Your Skin
                </h2>
                <p className="text-lg text-[#555555] leading-relaxed">
                  Exilis Elite uses cutting-edge radiofrequency and ultrasound energy to deeply heat the skin's layers, stimulating collagen and elastin production. This process naturally tightens sagging skin, reduces wrinkles, and contours the face and body. The treatment is entirely non-invasive, pain-free, and FDA-approved, offering an advanced solution to rejuvenate your skin without surgery or lengthy recovery times.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              <div className="bg-[#F5F1EC] rounded-2xl p-8">
                <h3 className="text-2xl font-light text-[#2C2C2C] mb-4">
                  4-6 Treatments Of 20-60 Minutes
                </h3>
                <p className="text-[#555555]">
                  Sessions are tailored to your needs, with quick treatments that fit seamlessly into your schedule.
                </p>
              </div>
              <div className="bg-[#F5F1EC] rounded-2xl p-8">
                <h3 className="text-2xl font-light text-[#2C2C2C] mb-4">
                  Immediate Results. Next-to-No Downtime
                </h3>
                <p className="text-[#555555]">
                  Visible improvements after just one session, with just a few minutes of downtime – return to your daily life looking and feeling refreshed.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                onClick={() => handleNavigation('about')}
                className="bg-transparent border-2 border-[#A38E78] text-[#A38E78] hover:bg-[#A38E78] hover:text-white px-8 py-4 text-lg font-light"
              >
                Learn More About Us →
              </Button>
              <Button 
                onClick={() => handleNavigation('products')}
                className="bg-transparent border-2 border-[#A38E78] text-[#A38E78] hover:bg-[#A38E78] hover:text-white px-8 py-4 text-lg font-light"
              >
                Explore Our Shop →
              </Button>
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#2C2C2C] text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-sm text-[#C6A77D] tracking-widest mb-4">BOOK YOUR APPOINTMENT</p>
              <h2 className="text-4xl lg:text-5xl font-light mb-8">
                Visit Us For Exilis Elite Treatment Today
              </h2>
              <p className="text-lg text-[#F5F1EC] mb-8 max-w-2xl mx-auto">
                Experience transformative results with our expert team. Book your consultation today to get started.
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
            <div className="text-center mb-12">
              <p className="text-sm text-[#A38E78] tracking-widest mb-4">TESTIMONIALS</p>
              <h2 className="text-4xl lg:text-5xl font-light text-[#2C2C2C]">
                What People Say
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative bg-[#F5F1EC] rounded-2xl p-12">
                <div className="text-center">
                  <p className="text-xl text-[#2C2C2C] mb-6 italic">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  <p className="text-[#A38E78] font-light">
                    {testimonials[currentTestimonial].client}
                  </p>
                </div>
                
                <div className="flex justify-center gap-4 mt-8">
                  <button 
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-full border-2 border-[#A38E78] text-[#A38E78] hover:bg-[#A38E78] hover:text-white transition-colors flex items-center justify-center"
                  >
                    ←
                  </button>
                  <button 
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-full border-2 border-[#A38E78] text-[#A38E78] hover:bg-[#A38E78] hover:text-white transition-colors flex items-center justify-center"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#A38E78] text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-sm text-[#F5F1EC] tracking-widest mb-4">TRY THE REVOLUTIONARY NON-INVASIVE TREATMENT</p>
              <h2 className="text-4xl lg:text-5xl font-light mb-8">
                Leave Sagging Skin Looking Tighter & Radiant
              </h2>
              <p className="text-lg text-[#F5F1EC] mb-8 max-w-2xl mx-auto">
                Experience the transformative power of Exilis Elite at Beyond MediSpa. Achieve firmer, lifted skin with no surgery, no scarring, and remarkable results.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  onClick={() => handleNavigation('book-treatment')}
                  className="bg-white text-[#A38E78] hover:bg-[#F5F1EC] px-8 py-4 text-lg font-light"
                >
                  Book Now →
                </Button>
                <Button 
                  onClick={() => window.location.href = 'tel:02072018595'}
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#A38E78] px-8 py-4 text-lg font-light"
                >
                  020 7201 8595 →
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="aspect-square bg-[#F5F1EC] rounded-xl flex items-center justify-center">
                  <div className="text-[#A38E78]">IMAGE</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#F5F1EC]">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="aspect-video bg-[#2C2C2C] rounded-2xl flex items-center justify-center">
                <div className="text-white text-xl">VIDEO</div>
              </div>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <Shield className="w-8 h-8 text-[#A38E78] flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-light text-[#2C2C2C] mb-2">
                      Totally non-invasive treatment
                    </h3>
                    <p className="text-[#555555]">
                      Exilis Elite uses advanced radiofrequency energy to tighten and contour skin without surgery. This non-invasive solution provides effective results with no downtime or discomfort.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckCircle2 className="w-8 h-8 text-[#A38E78] flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-light text-[#2C2C2C] mb-2">
                      No needles, no scars, no bruises
                    </h3>
                    <p className="text-[#555555]">
                      Enjoy a pain-free skin rejuvenation experience. Exilis Elite offers a safe, gentle treatment that avoids the risks of scarring, bruising, or needles entirely.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Eye className="w-8 h-8 text-[#A38E78] flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-light text-[#2C2C2C] mb-2">
                      Facial contour & eyes
                    </h3>
                    <p className="text-[#555555]">
                      Enhance your natural beauty with targeted treatments for facial contours and the delicate eye area. Exilis Elite delivers smoother, firmer, and more youthful skin.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex gap-4">
                <Users className="w-8 h-8 text-[#A38E78] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-light text-[#2C2C2C] mb-2">
                    Neck & chin
                  </h3>
                  <p className="text-[#555555]">
                    Reduce sagging and redefine your jawline with precision treatments for the neck and chin, achieving a tighter, more sculpted look.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Sparkles className="w-8 h-8 text-[#A38E78] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-light text-[#2C2C2C] mb-2">
                    Sagging skin across the body
                  </h3>
                  <p className="text-[#555555]">
                    From arms to thighs, Exilis Elite effectively tightens loose skin, restoring elasticity and radiance to various areas of the body.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="w-8 h-8 text-[#A38E78] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-light text-[#2C2C2C] mb-2">
                    Visible results after one treatment
                  </h3>
                  <p className="text-[#555555]">
                    See noticeable improvements after just one session, with optimal tightening and rejuvenation results developing over the following weeks.
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

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="aspect-square bg-[#F5F1EC] rounded-2xl flex items-center justify-center">
                <div className="text-[#A38E78] text-xl">IMAGE</div>
              </div>
              <div>
                <p className="text-sm text-[#A38E78] tracking-widest mb-4">REACH OUT NOW</p>
                <h2 className="text-4xl lg:text-5xl font-light text-[#2C2C2C] mb-8">
                  Get In Touch
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#F5F1EC]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-light text-[#2C2C2C] mb-12 text-center">
                Exilis Elite: FAQs
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