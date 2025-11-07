import Navigation from '../../../Navigation'
import Footer from '../../../Footer'
import TestimonialsSection from '../../../TestimonialsSection'
import Locations from '../../../Locations'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone, Sparkles, Target, Clock10, Waves, Activity, Gauge } from 'lucide-react'
import { Link } from 'react-router-dom'

const hifuBenefits = [
  {
    title: 'Non-surgical lift & tightening',
    description: 'Enjoy a natural facelift effect without incisions, anaesthetic, or lengthy recovery.'
  },
  {
    title: 'Targeted rejuvenation',
    description: 'Treat areas like the face, neck, stomach, arms, and thighs with pinpoint accuracy.'
  },
  {
    title: 'Long-lasting transformation',
    description: 'Stimulated collagen and elastin production keeps skin lifted and smooth for up to 24 months.'
  }
]

const featureHighlights = [
  {
    Icon: Sparkles,
    title: 'Non-surgical skin lifting',
    description: 'See firmer, more sculpted contours without the risks associated with invasive procedures.'
  },
  {
    Icon: Target,
    title: 'Targets stubborn fat',
    description: 'Precisely focuses on fat cells beneath the skin to refine body areas while tightening the surface.'
  },
  {
    Icon: Activity,
    title: 'Stimulates collagen & elastin',
    description: 'Promotes resilient, supple skin by jump-starting natural collagen and elastin production.'
  },
  {
    Icon: Waves,
    title: 'Ideal for face, neck & body',
    description: 'UltraSkin II technology adapts seamlessly for delicate and larger treatment zones alike.'
  },
  {
    Icon: Clock10,
    title: 'Minimal downtime',
    description: 'Return to day-to-day life immediately; any redness or swelling typically subsides within two weeks.'
  },
  {
    Icon: Gauge,
    title: 'Visible results after one session',
    description: 'Notice lift and definition straight away, with optimal results building over the following weeks.'
  }
]

const faqs = [
  {
    question: 'What is HiFu and how does it work?',
    answer:
      'High-Intensity Focused Ultrasound (HiFu) delivers targeted energy deep into the SMAS layer— the structure addressed during surgical facelifts. This stimulates collagen, tightens skin, and refines contours without surgery.'
  },
  {
    question: 'Is HiFu treatment safe for all skin types?',
    answer:
      'Yes. HiFu is safe and effective for a wide range of skin types and tones. Each treatment is customised by our aestheticians to suit your needs.'
  },
  {
    question: 'Which areas can HiFu treat?',
    answer:
      'HiFu can lift and tighten the face, neck, stomach, arms, thighs, buttocks, and other areas that benefit from contouring or skin rejuvenation.'
  },
  {
    question: 'How many treatments will I need?',
    answer:
      'Most clients opt for two sessions lasting 30–90 minutes depending on the areas treated. Your practitioner may recommend a personalised schedule for optimal results.'
  },
  {
    question: 'Are the results permanent?',
    answer:
      'Results can last up to 24 months. Collagen stimulation continues after your appointment, and annual maintenance helps keep skin firm.'
  },
  {
    question: 'How soon will I notice results?',
    answer:
      'Lift and definition are often visible immediately. The full effect becomes more apparent within two to four weeks as collagen production accelerates.'
  },
  {
    question: 'Does HiFu require downtime?',
    answer:
      'Downtime is minimal. You may experience temporary swelling, redness, or tenderness that resolves within two weeks. Avoid alcohol and smoking for 48 hours to support collagen formation.'
  },
  {
    question: 'How does HiFu compare to a facelift?',
    answer:
      'HiFu offers facelift-like results without incisions or anaesthesia. It targets deep tissues in a similar way but without the recovery time associated with surgery.'
  }
]

const blogCards = [
  {
    title: 'Five Reasons HiFu Is the Ultimate Skin-Lifting Treatment',
    image: '/About - Clinic Pages/tower-bridge-the-shard-and-city-hall-wapping-lo-2024-10-22-13-11-09-utc.jpg'
  },
  {
    title: 'Maintaining Collagen After Your HiFu Session',
    image: '/About - Clinic Pages/Edinburgh.jpg'
  },
  {
    title: 'Body Contouring: HiFu vs Other Technologies',
    image: '/About - Clinic Pages/London.jpg'
  }
]

export default function HifuPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="pt-20">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1B1B1F] via-[#212125] to-[#1B1B1F] text-white">
          <div className="absolute inset-0 opacity-35">
            <img
              src="/Microneedling & Exosomes/aesthetician-at-skin-care-clinic-applying-facial-2024-10-22-17-46-55-utc.jpg"
              alt="HiFu treatment in London"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[#111]/80 to-transparent" />
          </div>
          <div className="relative container mx-auto px-4 py-32">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold tracking-[0.3em] text-[#C6A77D] uppercase mb-4">
                Lift • Tighten • Sculpt
              </p>
              <h1 className="text-4xl lg:text-6xl font-light leading-tight mb-6">
                Elevate Skin on Face, Neck, Stomach &amp; More with <span className="text-[#C6A77D]">HiFu Treatment in London</span>
              </h1>
              <p className="text-lg text-white/85 leading-relaxed mb-10">
                Achieve a more youthful, sculpted appearance with HiFu treatments at Beyond MediSpa London. UltraSkin II
                technology targets deep skin layers to lift, tighten, and rejuvenate with results that can last up to two years.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/book-treatment">
                  <Button size="lg" className="bg-[#C6A77D] hover:bg-[#A38E78] text-white px-8 py-4 text-lg">
                    Book Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href="tel:02072018595">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-[#C6A77D] text-[#C6A77D] hover:bg-[#C6A77D] hover:text-white px-8 py-4 text-lg"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    020 7201 8595
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-[#FAF8F5]">
          <div className="container mx-auto px-4">
            <h3 className="text-center text-lg tracking-[0.3em] text-[#777777] uppercase">
              Tried and Trusted By Top Aesthetic Professionals
            </h3>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-light text-[#2C2C2C] mb-6">
                Lifted, Tighter Skin That <span className="text-[#A38E78]">Shines</span>
              </h2>
              <p className="text-lg text-[#555555] leading-relaxed">
                HiFu delivers targeted collagen stimulation to restore your skin’s elasticity, smoothness, and youthful glow.
                Perfect for busy lifestyles, it offers impressive results with minimal disruption.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {hifuBenefits.map((item) => (
                <div key={item.title} className="rounded-3xl border border-[#E5E5E5] bg-[#FAF8F5] p-8 shadow-sm">
                  <h3 className="text-xl font-semibold text-[#2C2C2C] mb-3">{item.title}</h3>
                  <p className="text-sm text-[#666666] leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-[#FDF8F2] via-[#FFFFFF] to-[#F5F1EC]">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#A38E78] mb-4">
                Like a Facelift Without Surgery
              </h4>
              <h2 className="text-4xl lg:text-5xl font-light text-[#2C2C2C] mb-6">
                Target Stubborn Fat Tissue Without <span className="text-[#A38E78]">Harming Skin</span>
              </h2>
              <p className="text-lg text-[#555555] leading-relaxed mb-6">
                HiFu uses precise ultrasound energy to reach the SMAS layer—the same structure addressed during surgical
                facelifts. By heating deep tissues it contracts existing collagen fibres and stimulates new production, leading to
                lifted contours and noticeable tightening.
              </p>
              <p className="text-sm text-[#666666]">
                Please note: slight swelling or redness can appear post-treatment and usually settles within two weeks. Avoid
                alcohol and smoking for 48 hours to support collagen production, and wait two weeks before additional aesthetic
                treatments.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/Microneedling & Exosomes/pexels-cottonbro-3997984.jpg"
                alt="HiFu results on the face"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-light text-[#2C2C2C] mb-6">
                Why Clients Love <span className="text-[#A38E78]">HiFu London</span>
              </h2>
              <p className="text-lg text-[#555555] leading-relaxed">
                From face and neck rejuvenation to waistline refinement, HiFu creates tailored results designed to enhance your
                natural beauty.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featureHighlights.map(({ Icon, title, description }) => (
                <div key={title} className="rounded-3xl border border-[#E5E5E5] bg-[#FAF8F5] p-8 shadow-sm">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#C6A77D]/15">
                    <Icon className="h-6 w-6 text-[#A38E78]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#2C2C2C] mb-3">{title}</h3>
                  <p className="text-sm text-[#666666] leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-[#1B1B1F] via-[#212125] to-[#1B1B1F] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl lg:text-5xl font-light mb-6">
              Say Hello to Lifted, <span className="text-[#C6A77D]">Confident Skin</span>
            </h2>
            <p className="text-lg text-white/85 max-w-3xl mx-auto leading-relaxed mb-8">
              Achieve firmer, lifted skin on the face and body with HiFu. Book your consultation today and experience enhanced
              definition that lasts.
            </p>
            <Link to="/book-treatment">
              <Button size="lg" className="bg-[#C6A77D] hover:bg-[#A38E78] text-white px-10 py-4 text-lg">
                Book Your Appointment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        <TestimonialsSection />

        <section className="py-20 bg-[#FAF8F5]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#A38E78] mb-4">The Beyond Journal</h4>
              <h2 className="text-4xl lg:text-5xl font-light text-[#2C2C2C] mb-6">
                Explore Our <span className="text-[#A38E78]">Blog</span>
              </h2>
              <p className="text-lg text-[#555555] max-w-3xl mx-auto">
                Learn how HiFu fits into holistic rejuvenation plans and discover expert-led advice on skin maintenance.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {blogCards.map((card) => (
                <div key={card.title} className="rounded-3xl overflow-hidden border border-[#E5E5E5] bg-white shadow-sm">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-[#2C2C2C] mb-2">{card.title}</h3>
                    <span className="inline-flex items-center text-sm font-semibold text-[#A38E78]">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-light text-[#2C2C2C] mb-4">
                HiFu London Treatment: <span className="text-[#A38E78]">FAQs</span>
              </h2>
              <p className="text-lg text-[#555555]">Everything you need to feel prepared for your HiFu appointment.</p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="group rounded-2xl border border-[#E5E5E5] bg-[#FAF8F5] p-6">
                  <summary className="cursor-pointer list-none text-lg font-semibold text-[#2C2C2C] flex items-center justify-between">
                    {faq.question}
                    <span className="ml-3 text-[#A38E78] transition-transform group-open:rotate-180">⌄</span>
                  </summary>
                  <p className="mt-4 text-sm text-[#666666] leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link to="/contact">
                <Button variant="outline" className="border-[#C6A77D] text-[#C6A77D] hover:bg-[#C6A77D] hover:text-white px-8 py-3">
                  Still have a question? Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <Locations />
      </div>

      <Footer />
    </div>
  )
}
