import { useEffect, useState } from 'react'
import Navigation from '../../../Navigation'
import Footer from '../../../Footer'
import ContactForm from '../../../ContactForm'
import Locations from '../../../Locations'
import { Button } from '@/components/ui/button'
import { CheckCircle2, Zap, Activity, Target, Heart, TrendingUp } from 'lucide-react'

export default function CMSlimPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    document.title = "CM Slim Body Sculpting & Contouring | Beyond Medispa"
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute("content", "Transform your shape with CM Slim advanced body contouring. Gentle sculpting that reduces fat while enhancing muscle tone. Available in London & Edinburgh.")
    } else {
      const meta = document.createElement("meta")
      meta.name = "description"
      meta.content = "Transform your shape with CM Slim advanced body contouring. Gentle sculpting that reduces fat while enhancing muscle tone. Available in London & Edinburgh."
      document.head.appendChild(meta)
    }
  }, [])

  const testimonials = [
    {
      text: "CM Slim has transformed my confidence completely. I've gained muscle definition I never thought possible without spending hours at the gym. The results are truly remarkable.",
      client: "Laura W."
    },
    {
      text: "After just six sessions, my abdomen looks more toned and sculpted. The electromagnetic technology is incredible - you can actually feel it working during the treatment!",
      client: "David R."
    },
    {
      text: "I was amazed at how comfortable the treatment was. No pain, no downtime, and visible results that keep improving. CM Slim is a game-changer for body sculpting.",
      client: "Hannah B."
    }
  ]

  const blogPosts = [
    {
      title: "Electromagnetic Muscle Stimulation: The Science Behind CM Slim Technology",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Building Muscle Without Exercise: How CM Slim Transforms Your Body",
      image: "/api/placeholder/400/300"
    },
    {
      title: "CM Slim vs Traditional Workouts: Understanding the Benefits of Body Sculpting",
      image: "/api/placeholder/400/300"
    }
  ]

  const faqs = [
    {
      question: "What is CM Slim?",
      answer: "CM (contour master) Slim is a body contouring treatment that uses High-Intensity Electromagnetic Technology (HI-EMT) to sculpt your body. The treatment delivers focused electromagnetic energy that penetrates your muscle layers, triggering powerful contractions while simultaneously breaking down fat cells. This dual-action approach builds muscle and reduces fat in one efficient treatment."
    },
    {
      question: "Which areas can be treated with CM Slim?",
      answer: "CM Slim effectively targets major muscle groups, including the stomach, buttocks, arms, and legs. Each area receives precisely focused treatment to enhance muscle tone and reduce localised fat deposits."
    },
    {
      question: "How many treatments will I need?",
      answer: "For optimal results, we recommend 4 to 6 sessions scheduled 2 to 3 times per week. Your specialist will create a personalised treatment plan based on your goals. Maintenance sessions help preserve and enhance your results."
    },
    {
      question: "When will I see results?",
      answer: "You'll notice improvements after your first session, with results continuing to develop throughout your treatment course. Clinical studies show an average 18% increase in muscle mass and 21% reduction in localised fat, with enhancement continuing for up to 6 months."
    },
    {
      question: "Is there any downtime?",
      answer: "No downtime is required after CM Slim treatments. You can return to your normal activities immediately following each 30-minute session."
    },
    {
      question: "Who is CM Slim suitable for?",
      answer: "CM Slim is ideal for anyone looking to build muscle, reduce fat, and enhance body definition. It's particularly effective for those seeking to strengthen and tone specific areas without intensive exercise or surgical intervention."
    },
    {
      question: "Is CM Slim treatment comfortable?",
      answer: "The treatment is non-invasive and generally comfortable. You'll feel strong muscle contractions, similar to an intensive workout, but without the physical strain or fatigue."
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
                CM Slim Body Sculpting: Advanced Body Contouring
              </h1>
              <p className="text-xl text-[#F5F1EC] mb-8 leading-relaxed">
                Transform your body with CM Slim, the revolutionary non-invasive treatment that simultaneously builds muscle and reduces fat. Using advanced electromagnetic technology, this innovative solution delivers remarkable sculpting results without surgery or downtime. Experience gentle transformation at our London and Edinburgh clinics.
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
              <p className="text-sm text-[#A38E78] tracking-widest mb-4">TRANSFORM YOUR PHYSIQUE</p>
              <h2 className="text-4xl lg:text-5xl font-light text-[#2C2C2C] mb-8">
                Reveal Your Best Shape With CM Slim Body Contouring
              </h2>
              <p className="text-lg text-[#555555] leading-relaxed mb-6">
                Reveal your body's natural beauty with our advanced CM Slim treatment. Whether you're seeking to slim your waistline, enhance your curves, or simply feel more confident, our proven solution helps you achieve the refined silhouette you deserve. With CM Slim, you can reveal the shape that reflects your authentic self, boosting your self-confidence every step of the way.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#A38E78] mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#2C2C2C]">Refined silhouette:</strong>
                    <span className="text-[#555555]"> Watch your body become more sculpted and toned with each gentle session.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#A38E78] mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#2C2C2C]">Natural enhancement:</strong>
                    <span className="text-[#555555]"> Achieve the beautiful, natural look you desire without strict dieting or intense workouts.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#A38E78] mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#2C2C2C]">Lasting confidence:</strong>
                    <span className="text-[#555555]"> Watch your self-esteem grow as you see continuous improvements in your body shape.</span>
                  </div>
                </li>
              </ul>
              <p className="text-sm text-[#777777] mb-8">
                Please note that some clients may experience slight swelling or redness after treatment. Our professional aestheticians recommend waiting at least 2 weeks before undergoing further beauty treatments, as well as avoiding alcohol and smoking.
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
                <div className="text-[#A38E78] text-xl">IMAGE</div>
              </div>
              <div>
                <p className="text-sm text-[#A38E78] tracking-widest mb-4">ADVANCED BODY SCIENCE</p>
                <h2 className="text-4xl lg:text-5xl font-light text-[#2C2C2C] mb-8">
                  CM Slim: An Innovation in Body Sculpting
                </h2>
                <p className="text-lg text-[#555555] leading-relaxed mb-8">
                  CM (contour master) Slim uses sophisticated electromagnetic technology to gently reshape and refine your silhouette. The treatment delivers precise energy pulses that create thousands of natural muscle contractions while encouraging your body's own fat-reduction process. This innovative dual approach helps build and tone muscle while reducing fat, revealing more defined curves and contours. By working in harmony with your body's natural rhythms, CM Slim delivers visible results in a way that feels comfortable and natural.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="text-xl font-light text-[#2C2C2C] mb-2">
                      4 to 6 Sessions, 30 Minutes Each
                    </h3>
                    <p className="text-[#555555]">
                      Transform your body through quick, powerful treatments scheduled 2 to 3 times per week.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-[#2C2C2C] mb-2">
                      Zero Downtime Required
                    </h3>
                    <p className="text-[#555555]">
                      Return to your daily activities immediately after treatment - perfect for busy lifestyles.
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
                Visit Us For CM Slim Treatment Today
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
              <p className="text-sm text-[#C6A77D] tracking-widest mb-4">START YOUR TRANSFORMATION</p>
              <h2 className="text-4xl lg:text-5xl font-light mb-8">
                Experience CM Slim at Beyond Aesthetic Clinic
              </h2>
              <p className="text-xl text-[#F5F1EC] mb-8 max-w-2xl mx-auto">
                Begin your journey to a stronger, more sculpted you. Book your consultation today and discover the power of CM Slim.
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
                <TrendingUp className="w-8 h-8 text-[#A38E78] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-light text-[#2C2C2C] mb-2">
                    Refined Results
                  </h3>
                  <p className="text-[#555555]">
                    Simultaneously increase muscle mass by 18% and reduce localised fat by 21% through advanced electromagnetic technology.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Target className="w-8 h-8 text-[#A38E78] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-light text-[#2C2C2C] mb-2">
                    Targeted Sculpting
                  </h3>
                  <p className="text-[#555555]">
                    Our precision-focused treatment transforms multiple areas of the body, including the stomach, buttocks, arms, and legs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Activity className="w-8 h-8 text-[#A38E78] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-light text-[#2C2C2C] mb-2">
                    Effortless Transformation
                  </h3>
                  <p className="text-[#555555]">
                    Achieve thousands of muscle contractions effortlessly - equivalent to 30,000 sit-ups in just 30 minutes.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Zap className="w-8 h-8 text-[#A38E78] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-light text-[#2C2C2C] mb-2">
                    Progressive Enhancement
                  </h3>
                  <p className="text-[#555555]">
                    Experience visible improvements from your first session, with results continuing to develop over six months.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Heart className="w-8 h-8 text-[#A38E78] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-light text-[#2C2C2C] mb-2">
                    Complete Comfort
                  </h3>
                  <p className="text-[#555555]">
                    Enjoy peaceful, non-invasive sessions that fit seamlessly into your schedule, with no downtime or recovery period needed.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-8 h-8 text-[#A38E78] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-light text-[#2C2C2C] mb-2">
                    Expert Guidance
                  </h3>
                  <p className="text-[#555555]">
                    Our specially trained aestheticians deliver premium results with precision and care.
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
                CM Slim Treatment: FAQs
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
