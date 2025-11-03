import Navigation from '../../../Navigation'
import Footer from '../../../Footer'
import TestimonialsSection from '../../../TestimonialsSection'
import Locations from '../../../Locations'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone, Sparkles, Droplets, Flame, Shield, GaugeCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const heroHighlights = [
  {
    title: 'Professional Renewal',
    description: 'Reduce imperfections and reveal a naturally radiant complexion with medical-grade exfoliation.'
  },
  {
    title: 'Gentle Exfoliation',
    description: 'A carefully balanced formula refines while keeping your skin comfortable.'
  },
  {
    title: 'Progressive Enhancement',
    description: 'Each session builds on the last, delivering ongoing refinement and luminosity.'
  }
]

const iconHighlights = [
  {
    Icon: Sparkles,
    title: 'Deep Rejuvenation',
    description: '20% salicylic acid accelerates cellular renewal for firmer, smoother, brighter skin.'
  },
  {
    Icon: Droplets,
    title: 'Targeted Treatment',
    description: 'Address fine lines, uneven texture, breakouts, and photoageing with precision.'
  },
  {
    Icon: GaugeCircle,
    title: 'Visible Results',
    description: 'Enjoy noticeable improvements after your first peel, with amplified benefits through a series.'
  },
  {
    Icon: Shield,
    title: 'Expert Care',
    description: 'Every peel is customised by our specialists to match your skin tolerance and goals.'
  }
]

const faqs = [
  {
    question: 'What is the Obagi Blue Peel RADIANCE treatment?',
    answer:
      'A professional chemical peel using salicylic, lactic, and glycolic acids to exfoliate dead cells and reveal smoother, more even-toned skin beneath.'
  },
  {
    question: 'Which concerns can it address?',
    answer:
      'It targets uneven texture, blemishes, acne scarring, fine lines, wrinkles, oily skin, photo damage, and hyperpigmentation.'
  },
  {
    question: 'How should I prepare?',
    answer:
      'Avoid laser hair removal, depilatory creams, benzoyl peroxide, and other peels for at least a week. Use a gentle cleanser and share your medical history during consultation.'
  },
  {
    question: 'What happens during and after treatment?',
    answer:
      'The in-clinic procedure takes about 30 minutes. Expect light peeling for three to five days as new, smoother skin emerges.'
  },
  {
    question: 'How many treatments will I need?',
    answer:
      'Noticeable improvements follow one peel, but we recommend four to six sessions spaced several weeks apart for long-lasting transformation.'
  },
  {
    question: 'Who is suitable?',
    answer:
      'Most skin types can benefit, including dry or acne-prone skin. We avoid treatment during pregnancy, breastfeeding, or when active cold sores are present.'
  },
  {
    question: 'Can I combine this peel with other treatments?',
    answer:
      'Yes, but wait at least two weeks before other aesthetic procedures. We can design a comprehensive plan that safely layers treatments.'
  },
  {
    question: 'What sets this peel apart?',
    answer:
      'Obagi’s formulation delivers dramatic smoothing and brightening while remaining gentle enough for regular treatments under expert guidance.'
  }
]

export default function ObagiPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="pt-20">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1B1B1F] via-[#242329] to-[#1B1B1F] text-white">
          <div className="absolute inset-0 opacity-35">
            <img
              src="/Microneedling & Exosomes/pexels-shiny-diamond-3762882.jpg"
              alt="Obagi Blue Peel treatment"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#111]/80 to-transparent" />
          </div>
          <div className="relative container mx-auto px-4 py-32">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold tracking-[0.3em] text-[#C6A77D] uppercase mb-4">Renew • Brighten • Restore</p>
              <h1 className="text-4xl lg:text-6xl font-light leading-tight mb-6">
                Transform Your Complexion with <span className="text-[#C6A77D]">Obagi Blue Peel RADIANCE</span>
              </h1>
              <p className="text-lg text-white/85 leading-relaxed mb-10">
                Medical-grade acid peels gently resurface to unveil firmer, smoother, brighter skin. Target fine lines, uneven texture, or blemishes and see visible renewal from your very first session.
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
              <h2 className="text-4xl lg:text-5xl font-light text-[#2C2C2C] mb-6">Rediscover Your Glow, Reclaim Your Confidence</h2>
              <p className="text-lg text-[#555555] leading-relaxed">
                Each Obagi peel is precisely tailored to your skin, gently lifting away dull, damaged layers to reveal renewed luminosity and confidence.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {heroHighlights.map((item) => (
                <div key={item.title} className="rounded-3xl border border-[#E5E5E5] bg-[#FAF8F5] p-8 shadow-sm">
                  <h3 className="text-xl font-semibold text-[#2C2C2C] mb-3">{item.title}</h3>
                  <p className="text-sm text-[#666666] leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#777777] text-center mt-8">
              Some clients may experience mild redness post-treatment. Allow two weeks before scheduling other beauty treatments and avoid alcohol or smoking for 48 hours.
            </p>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-[#FDF8F2] via-[#FFFFFF] to-[#F5F1EC]">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#A38E78] mb-4">Advanced Skin Rejuvenation</h4>
              <h2 className="text-4xl lg:text-5xl font-light text-[#2C2C2C] mb-6">The Secret to <span className="text-[#A38E78]">Younger Looking Skin</span></h2>
              <p className="text-lg text-[#555555] leading-relaxed mb-6">
                Developed by Obagi Medical Skincare, this 20% salicylic acid formulation is available in light, medium, and medical-grade strengths. Peels penetrate multiple layers to stimulate regeneration and enhance collagen for comprehensive renewal.
              </p>
              <p className="text-sm text-[#666666]">
                • 4–6 sessions • 30 minutes each • Zero downtime required — mild peeling may appear between day three and five.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link to="/about">
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
                src="/Microneedling & Exosomes/pexels-shiny-diamond-3762463.jpg"
                alt="Obagi Blue Peel radiance"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        </section>

        <section className="py-20 bg-gradient-to-br from-[#1B1B1F] via-[#232327] to-[#1B1B1F] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl lg:text-5xl font-light mb-6">Professional Skin Renewal Starts Here</h2>
            <p className="text-lg text-white/85 max-w-3xl mx-auto leading-relaxed mb-8">
              Unlock a luminous complexion with our advanced Obagi chemical peel. Book your treatment today and experience the Beyond MediSpa difference.
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
              <h2 className="text-4xl lg:text-5xl font-light text-[#2C2C2C] mb-4">Obagi Blue Peel RADIANCE: <span className="text-[#A38E78]">FAQs</span></h2>
              <p className="text-lg text-[#555555]">
                Prepare for your peel with confidence. Our team is here to guide you at every step.
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
