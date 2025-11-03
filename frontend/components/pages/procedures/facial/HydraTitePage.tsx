import Navigation from '../../../Navigation'
import Footer from '../../../Footer'
import TestimonialsSection from '../../../TestimonialsSection'
import Locations from '../../../Locations'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone, Droplets, Sparkles, Waves, Gauge, Flame, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'

const heroBenefits = [
  {
    title: 'Firm & Lift',
    description: 'Reduce sagging in jowls, neck, and under-eye areas for a naturally youthful appearance.'
  },
  {
    title: 'Deep Hydration',
    description: 'Replenish moisture with antioxidant-rich serums delivered through HydraFacial technology.'
  },
  {
    title: 'Stimulate Collagen',
    description: 'Exilis Elite radio frequency tightens and tones, boosting elasticity for long-lasting smoothness.'
  }
]

const iconHighlights = [
  {
    Icon: Droplets,
    title: 'Cleanse & Exfoliate',
    description: 'Reveal a fresh complexion with thorough cleansing and gentle exfoliation to remove dull cells.'
  },
  {
    Icon: Flame,
    title: 'Painless Extraction',
    description: 'HydraFacial vortex technology clears pores while remaining comfortable for sensitive skin.'
  },
  {
    Icon: Droplets,
    title: 'Infuse Hydration',
    description: 'Saturate skin with advanced moisturisers, antioxidants, and peptides for lasting plumpness.'
  },
  {
    Icon: Sparkles,
    title: 'Tighten & Smooth',
    description: 'Radio frequency energy visibly tightens skin and reduces fine lines in a single session.'
  },
  {
    Icon: Gauge,
    title: 'Stimulate Collagen',
    description: 'Heat energy encourages collagen and elastin production, restoring bounce from within.'
  },
  {
    Icon: Shield,
    title: 'No Downtime',
    description: 'Enjoy a lifted glow and return to your day immediately following treatment.'
  }
]

const faqs = [
  {
    question: 'What is the HydraTite facial?',
    answer:
      'HydraTite combines HydraFacial and Exilis Elite technologies to deeply cleanse, hydrate, and tighten the skin while boosting collagen production.'
  },
  {
    question: 'How does the treatment work?',
    answer:
      'HydraTite layers gentle exfoliation, painless pore extraction, serum infusion, and radio frequency heat to address sagging skin, dullness, and fine lines.'
  },
  {
    question: 'Who is HydraTite suitable for?',
    answer:
      'Most skin types can benefit, including clients with dehydration, laxity, or uneven tone. Your practitioner will tailor the protocol to your needs.'
  },
  {
    question: 'Which areas can be treated?',
    answer:
      'HydraTite targets the face, neck, and décolletage—especially jowls, jawline, and under-eye areas.'
  },
  {
    question: 'How many sessions are recommended?',
    answer:
      'We typically recommend a course of six treatments, each lasting up to two hours, for transformative, long-lasting results.'
  },
  {
    question: 'When will I see results?',
    answer:
      'You’ll notice immediate radiance and lift after your first treatment, with collagen-driven improvements developing over the following weeks.'
  },
  {
    question: 'Is there any downtime?',
    answer:
      'HydraTite is non-invasive and carries virtually no downtime. Some clients may experience mild redness or swelling that quickly subsides.'
  },
  {
    question: 'Is the treatment safe?',
    answer:
      'Yes. HydraTite uses FDA-approved technologies, delivered by Beyond MediSpa’s trained aestheticians in a controlled clinical setting.'
  }
]

export default function HydraTitePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="pt-20">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1B1B1F] via-[#232327] to-[#1B1B1F] text-white">
          <div className="absolute inset-0 opacity-35">
            <img
              src="/Microneedling & Exosomes/pexels-shiny-diamond-3762877.jpg"
              alt="HydraTite facial at Beyond MediSpa"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#111]/80 to-transparent" />
          </div>
          <div className="relative container mx-auto px-4 py-32">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold tracking-[0.3em] text-[#C6A77D] uppercase mb-4">Hydrate • Tighten • Glow</p>
              <h1 className="text-4xl lg:text-6xl font-light leading-tight mb-6">
                The HydraTite Facial: Achieve Hydrated, Firmer Skin with <span className="text-[#C6A77D]">Natural Radiance</span>
              </h1>
              <p className="text-lg text-white/85 leading-relaxed mb-10">
                HydraTite combines the deep exfoliation of HydraFacial with the collagen-boosting power of Exilis Elite. Address sagging jowls, loose skin, and hard-to-reach areas while enjoying immediate results and zero downtime.
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
              <h2 className="text-4xl lg:text-5xl font-light text-[#2C2C2C] mb-6">Recapture Your Confidence &amp; a Youthful Glow</h2>
              <p className="text-lg text-[#555555] leading-relaxed">
                Say goodbye to sagging and loose skin with HydraTite: a revolutionary treatment designed to hydrate, firm, and rejuvenate. Immediate radiance meets long-lasting firmness—without surgery or downtime.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {heroBenefits.map((item) => (
                <div key={item.title} className="rounded-3xl border border-[#E5E5E5] bg-[#FAF8F5] p-8 shadow-sm">
                  <h3 className="text-xl font-semibold text-[#2C2C2C] mb-3">{item.title}</h3>
                  <p className="text-sm text-[#666666] leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#777777] text-center mt-8">
              Some clients may experience slight redness post-treatment. We recommend waiting at least two weeks before further beauty treatments and avoiding alcohol for 48 hours.
            </p>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-[#FDF8F2] via-[#FFFFFF] to-[#F5F1EC]">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#A38E78] mb-4">The HydraTite Facial</h4>
              <h2 className="text-4xl lg:text-5xl font-light text-[#2C2C2C] mb-6">HydraFacial Meets <span className="text-[#A38E78]">Exilis Elite</span></h2>
              <p className="text-lg text-[#555555] leading-relaxed mb-6">
                HydraTite layers two powerhouse technologies. HydraFacial delivers meticulous exfoliation and hydration, while Exilis Elite tightens skin through radio frequency and heat. Together they target sagging skin, stimulate collagen, and rejuvenate from surface to deeper layers.
              </p>
              <p className="text-sm text-[#666666]">
                We recommend a course of six treatments, each up to two hours, for comprehensive care. Visible improvements appear after the first session with virtually no downtime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link to="/book-treatment">
                  <Button className="bg-[#A38E78] hover:bg-[#8B7A67] text-white px-6 py-3">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/shop">
                  <Button variant="outline" className="border-[#A38E78] text-[#A38E78] hover:bg-[#A38E78] hover:text-white px-6 py-3">
                    Explore Our Shop
                  </Button>
                </Link>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/Microneedling & Exosomes/pexels-shiny-diamond-3762876.jpg"
                alt="HydraTite combination treatment"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {iconHighlights.map(({ Icon, title, description }) => (
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

        <section className="py-20 bg-gradient-to-br from-[#1B1B1F] via-[#232327] to-[#1B1B1F] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl lg:text-5xl font-light mb-6">Let Your Natural Beauty Shine</h2>
            <p className="text-lg text-white/85 max-w-3xl mx-auto leading-relaxed mb-8">
              Transform your skin with HydraTite. Hydrate, tighten, and rejuvenate for a radiant, youthful glow—then step straight back into your day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                  className="border-2 border-white text-white hover:bg-white hover:text-[#A38E78] px-8 py-4 text-lg"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  020 7201 8595
                </Button>
              </a>
            </div>
          </div>
        </section>

        <TestimonialsSection />

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-light text-[#2C2C2C] mb-4">HydraTite Facial: <span className="text-[#A38E78]">FAQs</span></h2>
              <p className="text-lg text-[#555555]">
                Everything you need to know before, during, and after your HydraTite appointment.
              </p>
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
