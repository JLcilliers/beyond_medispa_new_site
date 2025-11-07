import Navigation from '../../../Navigation'
import Footer from '../../../Footer'
import TestimonialsSection from '../../../TestimonialsSection'
import Locations from '../../../Locations'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Sparkles, Droplets, Clock, GaugeCircle, Shield, Wind } from 'lucide-react'

const quickFacts = [
  {
    title: 'In-and-Out Treatment',
    description: '30–45 minute appointments are ideal for a Knightsbridge schedule.'
  },
  {
    title: 'Quick & Noticeable Results',
    description: 'See brighter tone immediately with continued enhancement over several days.'
  },
  {
    title: 'No Downtime',
    description: 'Most London clients leave glowing with little to no downtime required.'
  },
  {
    title: 'Perfect for First-Time Peels',
    description: 'Gentle enough for new clients yet powerful enough for advanced concerns.'
  },
  {
    title: 'Restores Healthy Glow',
    description: 'Skin looks brighter, fresher, and more even for 4–6 weeks.'
  },
  {
    title: 'Calms Visible Redness',
    description: 'Target irritation while revealing a balanced, refreshed complexion.'
  }
]

const faqs = [
  {
    question: 'How long does treatment take?',
    answer:
      'A ZO Chemical Peel at our Knightsbridge clinic usually lasts 30–45 minutes—perfect for a high-performance “lunchtime peel”.'
  },
  {
    question: 'Is there any downtime?',
    answer:
      'Recovery is minimal compared to deeper peels. Avoid saunas, facials, and intense workouts for 24–48 hours and you can return to daily life immediately.'
  },
  {
    question: 'Who is suitable?',
    answer:
      'Suitable for most skin types, including those with acne, pigmentation, dullness, or early lines. Your practitioner will tailor the peel strength during consultation.'
  },
  {
    question: 'How many sessions will I need?',
    answer:
      'We recommend 3–6 treatments spaced 3–4 weeks apart, with maintenance peels every 6–8 weeks to sustain radiance.'
  },
  {
    question: 'How long do results last?',
    answer:
      'Expect a luminous finish that lasts 4–6 weeks, especially when paired with a bespoke ZO Skin Health regimen.'
  },
  {
    question: 'Does the peel hurt?',
    answer:
      'You may feel mild tingling or warmth that subsides quickly. Discomfort is minimal thanks to the controlled, superficial peel depth.'
  },
  {
    question: 'Can I combine it with other treatments?',
    answer:
      'Yes. ZO peels partner well with microneedling, LED, and hydrating facials. We’ll map out a strategic plan to enhance results safely.'
  },
  {
    question: 'How should I care for my skin afterwards?',
    answer:
      'Avoid active exfoliants for five days, keep skin hydrated, apply SPF daily, and skip heat or vigorous exercise for 24 hours.'
  }
]

export default function ZOLondonPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="pt-20">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1B1B1F] via-[#242329] to-[#1B1B1F] text-white">
          <div className="absolute inset-0 opacity-35">
            <img
              src="/Microneedling & Exosomes/pexels-anna-shvets-4586755.jpg"
              alt="ZO Chemical Peel London"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#111]/80 to-transparent" />
          </div>
          <div className="relative container mx-auto px-4 py-32">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold tracking-[0.3em] text-[#C6A77D] uppercase mb-4">Resurface • Brighten • Renew</p>
              <h1 className="text-4xl lg:text-6xl font-light leading-tight mb-6">ZO Chemical Peel London</h1>
              <p className="text-lg text-white/85 leading-relaxed mb-10">
                Expect the very best in advanced skincare. Our ZO peels combine clinical expertise with a Knightsbridge luxury experience, leaving skin brighter, smoother, and effortlessly radiant.
              </p>
              <p className="text-sm text-white/70 mb-10">Starting at GBP 190 per chemical peel session.</p>
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

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-light text-[#2C2C2C] mb-6">Refresh &amp; Rejuvenate with <span className="text-[#A38E78]">ZO Chemical Peels</span></h2>
              <p className="text-lg text-[#555555] leading-relaxed">
                Visible results after one session, lasting radiance for 4–6 weeks, and zero downtime. Suitable for all skin types—even first-time peel clients.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-3xl border border-[#E5E5E5] bg-[#FAF8F5] p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-[#2C2C2C] mb-3">What ZO Peels Deliver</h3>
                <ul className="space-y-3 text-sm text-[#666666] leading-relaxed">
                  <li>• Smooth uneven texture and refine pores for luminous skin.</li>
                  <li>• Balance oil to reduce breakouts and congestion.</li>
                  <li>• Flood the complexion with antioxidants to neutralise free radicals.</li>
                  <li>• Boost collagen and elastin for firmer, more resilient skin.</li>
                </ul>
              </div>
              <div className="rounded-3xl border border-[#E5E5E5] bg-[#FAF8F5] p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-[#2C2C2C] mb-3">How Our Peels Work</h3>
                <p className="text-sm text-[#666666] leading-relaxed">
                  ZO Skin Health combines medical expertise with advanced skin science. Professional acid concentrations exfoliate at varied depths—from refreshing surface peels to medium-depth protocols tackling pigmentation and fine lines.
                </p>
                <p className="text-sm text-[#666666] leading-relaxed mt-4">
                  Each peel enhances your at-home ZO routine, maximising absorption and daily results.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-[#FDF8F2] via-[#FFFFFF] to-[#F5F1EC]">
          <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quickFacts.map((fact) => (
              <div key={fact.title} className="rounded-3xl border border-[#E5E5E5] bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-[#2C2C2C] mb-3">{fact.title}</h3>
                <p className="text-sm text-[#666666] leading-relaxed">{fact.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-[#1B1B1F] via-[#232327] to-[#1B1B1F] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl lg:text-5xl font-light mb-6">Restore Healthy Luminosity in Knightsbridge</h2>
            <p className="text-lg text-white/85 max-w-3xl mx-auto leading-relaxed mb-8">
              Book your ZO Chemical Peel in London and experience brighter, smoother, more confident skin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book-treatment">
                <Button size="lg" className="bg-[#C6A77D] hover:bg-[#A38E78] text-white px-8 py-4 text-lg">
                  Book Your Consultation
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
              <h2 className="text-4xl lg:text-5xl font-light text-[#2C2C2C] mb-4">ZO Chemical Peel London: <span className="text-[#A38E78]">FAQs</span></h2>
              <p className="text-lg text-[#555555]">Your essential guide to booking, results, and aftercare.</p>
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
