import Navigation from '../../../Navigation'
import Footer from '../../../Footer'
import TestimonialsSection from '../../../TestimonialsSection'
import Locations from '../../../Locations'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone, Sparkles, Droplets, Clock, GaugeCircle, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'

const quickFacts = [
  {
    title: 'In-and-Out Treatment',
    description: '30–45 minute appointments fit effortlessly into your schedule.'
  },
  {
    title: 'Quick & Noticeable Results',
    description: 'Enjoy fresh radiance immediately, with full benefits emerging over several days.'
  },
  {
    title: 'No Downtime',
    description: 'Most clients experience little to no downtime—just a refined glow.'
  },
  {
    title: 'Ideal for First-Time Peels',
    description: 'Gentle yet effective, perfect for clients beginning their chemical peel journey.'
  },
  {
    title: 'Restores a Healthy Glow',
    description: 'Brightens, softens, and evens tone for luminous skin that lasts 4–6 weeks.'
  },
  {
    title: 'Calms Visible Redness',
    description: 'Advanced actives soothe irritation, leaving the complexion balanced and refreshed.'
  }
]

const faqs = [
  {
    question: 'How long does treatment take?',
    answer:
      'A ZO Chemical Peel in Edinburgh typically lasts 30–45 minutes, making it the perfect lunchtime facial with powerful results and minimal recovery.'
  },
  {
    question: 'Is there any downtime?',
    answer:
      'This superficial peel has minimal downtime. Makeup can usually be applied after 24 hours; we advise avoiding facials, saunas, and intense workouts for 24–48 hours.'
  },
  {
    question: 'Who is suitable for a ZO Chemical Peel?',
    answer:
      'Suitable for most skin types, including those experiencing acne, dullness, rough texture, uneven tone, or early ageing concerns. Your practitioner will tailor the plan during consultation.'
  },
  {
    question: 'How many sessions will I need?',
    answer:
      'We usually recommend 3–6 peels spaced 3–4 weeks apart. Maintenance peels every 6–8 weeks keep your complexion bright and refined.'
  },
  {
    question: 'How long do results last?',
    answer:
      'Expect your refreshed glow to last 4–6 weeks, especially when paired with a tailored ZO Skin Health routine at home.'
  },
  {
    question: 'Does the peel hurt?',
    answer:
      'Most clients feel mild tingling or warmth that quickly subsides. As a superficial to medium-depth peel, discomfort is minimal.'
  },
  {
    question: 'Can I combine it with other treatments?',
    answer:
      'Yes—ZO peels pair brilliantly with microneedling or advanced facials. We can design a plan that layers treatments safely for enhanced results.'
  },
  {
    question: 'How should I care for my skin after treatment?',
    answer:
      'Avoid active exfoliants and retinoids for five days, keep skin hydrated, wear SPF daily, and skip heat or high-intensity exercise for 24 hours.'
  }
]

export default function ZOEdinburghPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="pt-20">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1B1B1F] via-[#242329] to-[#1B1B1F] text-white">
          <div className="absolute inset-0 opacity-35">
            <img
              src="/Microneedling & Exosomes/pexels-anna-shvets-4586757.jpg"
              alt="ZO Chemical Peel Edinburgh"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#111]/80 to-transparent" />
          </div>
          <div className="relative container mx-auto px-4 py-32">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold tracking-[0.3em] text-[#C6A77D] uppercase mb-4">Resurface • Brighten • Renew</p>
              <h1 className="text-4xl lg:text-6xl font-light leading-tight mb-6">ZO Chemical Peel Edinburgh</h1>
              <p className="text-lg text-white/85 leading-relaxed mb-10">
                Beautiful skin is the ultimate confidence. Our industry-leading ZO Chemical Peel treatments in Edinburgh combine clinical expertise with luxury care, leaving your complexion brighter, smoother, and effortlessly radiant.
              </p>
              <p className="text-sm text-white/70 mb-10">Starting at GBP 91 per chemical peel session.</p>
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
                See visible results after just one session, with continued improvements as your skin regenerates. Suitable for all skin types—even if you’re new to chemical peels.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-3xl border border-[#E5E5E5] bg-[#FAF8F5] p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-[#2C2C2C] mb-3">What ZO Peels Deliver</h3>
                <ul className="space-y-3 text-sm text-[#666666] leading-relaxed">
                  <li>• Smooth uneven texture and refine pores for softer, luminous skin.</li>
                  <li>• Balance oil production to reduce breakouts and blemishes.</li>
                  <li>• Neutralise free radicals with powerful antioxidants.</li>
                  <li>• Boost collagen and elastin to improve firmness and elasticity.</li>
                </ul>
              </div>
              <div className="rounded-3xl border border-[#E5E5E5] bg-[#FAF8F5] p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-[#2C2C2C] mb-3">Why Clients Love ZO in Edinburgh</h3>
                <p className="text-sm text-[#666666] leading-relaxed">
                  Professional blends of AHAs deliver gentle yet effective resurfacing with no downtime. These peels amplify the absorption of your at-home ZO routine, maximising daily results.
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
            <h2 className="text-4xl lg:text-5xl font-light mb-6">Restore Healthy Luminosity</h2>
            <p className="text-lg text-white/85 max-w-3xl mx-auto leading-relaxed mb-8">
              Book your ZO Chemical Peel in Edinburgh and experience a brighter, more refined complexion with every visit.
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
              <h2 className="text-4xl lg:text-5xl font-light text-[#2C2C2C] mb-4">ZO Chemical Peel Edinburgh: <span className="text-[#A38E78]">FAQs</span></h2>
              <p className="text-lg text-[#555555]">Your guide to booking, preparation, and aftercare.</p>
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
