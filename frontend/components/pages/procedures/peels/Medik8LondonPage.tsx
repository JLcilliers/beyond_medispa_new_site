import Navigation from '../../../Navigation'
import Footer from '../../../Footer'
import TestimonialsSection from '../../../TestimonialsSection'
import Locations from '../../../Locations'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone, Sparkles, Droplets, Clock, Shield, Wand2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const quickFacts = [
  {
    title: 'Nourish & Revitalise',
    description: 'Tackle dullness, congestion, pigmentation, and early ageing with clinic-formulated acids.'
  },
  {
    title: 'Treatment Time',
    description: 'Medik8 peels take around 30–45 minutes including consultation, application, and aftercare.'
  },
  {
    title: 'Limited Downtime',
    description: 'Expect mild redness or light flaking. Most clients resume their day immediately after treatment.'
  },
  {
    title: 'Quick Results',
    description: 'Enjoy smoother, brighter skin from the very first appointment, with cumulative benefits over a course.'
  },
  {
    title: 'Tailored To You',
    description: 'Lactic, glycolic, and mandelic acid blends are precisely balanced for your skin type and goals.'
  },
  {
    title: 'Specialist Care',
    description: 'Delivered by trained practitioners inside Harvey Nichols, Knightsbridge, using Medik8 professional formulas.'
  }
]

const faqs = [
  {
    question: 'What concerns can a Medik8 Peel help with?',
    answer:
      'Medik8 peels target rough texture, dullness, congestion, blemishes, and uneven pigmentation by accelerating exfoliation and improving overall clarity.'
  },
  {
    question: 'Which acids are used?',
    answer:
      'Depending on your skin we may use single-acid or blended peels featuring glycolic, lactic, and mandelic acids—chosen during your consultation.'
  },
  {
    question: 'Will my skin peel afterwards?',
    answer:
      'Some clients notice light flaking after one to three days, while others do not peel visibly. Either way, resurfacing is happening beneath the surface.'
  },
  {
    question: 'Is a Medik8 peel painful?',
    answer:
      'Most clients feel warmth, tingling, or tightness that subsides quickly. Time Release delivery and controlled layering keep sensations comfortable.'
  },
  {
    question: 'Who is a Medik8 peel suitable for?',
    answer:
      'Most skin types, including sensitive skin, can benefit. Certain medications or conditions may require postponement, which your practitioner will discuss.'
  },
  {
    question: 'What aftercare should I follow?',
    answer:
      'Keep skin hydrated, avoid retinoids and scrubs for 3–5 days, wear SPF daily, and skip heat or intense workouts for 24–48 hours.'
  },
  {
    question: 'How much do Medik8 peels cost?',
    answer:
      'Treatments start from GBP 210. New clients enjoy 10% off single sessions or 20% off multi-treatment bookings.'
  },
  {
    question: 'Can I combine Medik8 with other treatments?',
    answer:
      'Yes. Medik8 pairs beautifully with LED therapy and hydrating facials. We can build a plan that complements your wider goals.'
  }
]

export default function Medik8LondonPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="pt-20">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1B1B1F] via-[#242329] to-[#1B1B1F] text-white">
          <div className="absolute inset-0 opacity-35">
            <img
              src="/Microneedling & Exosomes/pexels-nick-wehrli-5282362.jpg"
              alt="Medik8 peel treatment in Knightsbridge"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#111]/80 to-transparent" />
          </div>
          <div className="relative container mx-auto px-4 py-32">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold tracking-[0.3em] text-[#C6A77D] uppercase mb-4">Resurface • Brighten • Refine</p>
              <h1 className="text-4xl lg:text-6xl font-light leading-tight mb-6">
                Medik8 Facial Peel in <span className="text-[#C6A77D]">London</span>
              </h1>
              <p className="text-lg text-white/85 leading-relaxed mb-10">
                Reveal brighter, clearer, smoother skin with a Medik8 peel at Beyond MediSpa Knightsbridge. Our medical-grade peels combine precisely balanced acids with comfort-focused Time Release technology to tackle dullness, congestion, pigmentation, and fine lines.
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
              <h2 className="text-4xl lg:text-5xl font-light text-[#2C2C2C] mb-6">Achieve Flawless, Clinic-Level Results</h2>
              <p className="text-lg text-[#555555] leading-relaxed">
                Medik8 peels are ideal for first-time clients and seasoned skincare enthusiasts alike. Expect refined texture, even tone, and a refreshed glow—delivered by trained professionals in Harvey Nichols, Knightsbridge.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  Icon: Sparkles,
                  title: 'Scientifically Balanced Acids',
                  description: 'Time Release delivery maximises efficacy while keeping sensation gentle.'
                },
                {
                  Icon: Droplets,
                  title: 'Free Skin Analysis Included',
                  description: 'Every appointment starts with a consultation to select the perfect peel strength.'
                },
                {
                  Icon: Shield,
                  title: 'CQC Registered Clinic',
                  description: 'Enjoy peace of mind with medical oversight and gold-standard hygiene.'
                }
              ].map(({ Icon, title, description }) => (
                <div key={title} className="rounded-3xl border border-[#E5E5E5] bg-[#FAF8F5] p-8 shadow-sm text-center">
                  <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#C6A77D]/15">
                    <Icon className="h-6 w-6 text-[#A38E78]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#2C2C2C] mb-3">{title}</h3>
                  <p className="text-sm text-[#666666] leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-[#FDF8F2] via-[#FFFFFF] to-[#F5F1EC]">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-light text-[#2C2C2C] mb-6">
                Why Choose a <span className="text-[#A38E78]">Medik8 Peel</span> at Beyond MediSpa?
              </h2>
              <p className="text-lg text-[#555555] leading-relaxed mb-6">
                Medik8’s professional range blends potent exfoliating acids with comfort-driven technology. Each peel is handpicked to refine texture, brighten uneven tone, and restore a healthy glow—while minimising downtime.
              </p>
              <ul className="space-y-3 text-sm text-[#666666] leading-relaxed">
                <li>• Tailored acid blends selected for your skin goals</li>
                <li>• Visible results after just one session</li>
                <li>• Course recommendations to maximise transformation</li>
                <li>• Exclusive Knightsbridge setting with new client offers</li>
              </ul>
              <p className="text-sm text-[#777777] mt-6">
                New clients receive 10% off single treatments or 20% off multiple bookings. Medik8 peels start from GBP 210.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/Microneedling & Exosomes/pexels-shiny-diamond-3762453.jpg"
                alt="Medik8 chemical peel application"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quickFacts.map((fact) => (
              <div key={fact.title} className="rounded-3xl border border-[#E5E5E5] bg-[#FAF8F5] p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-[#2C2C2C] mb-3">{fact.title}</h3>
                <p className="text-sm text-[#666666] leading-relaxed">{fact.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-[#1B1B1F] via-[#232327] to-[#1B1B1F] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl lg:text-5xl font-light mb-6">Ready for Refreshed, Radiant Skin?</h2>
            <p className="text-lg text-white/85 max-w-3xl mx-auto leading-relaxed mb-8">
              Appointments are limited each week. Book your Medik8 peel in Knightsbridge today and experience the difference of expertly delivered chemical resurfacing.
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
              <h2 className="text-4xl lg:text-5xl font-light text-[#2C2C2C] mb-4">Medik8 Peels in London: <span className="text-[#A38E78]">FAQs</span></h2>
              <p className="text-lg text-[#555555]">
                Everything you need to know about booking, preparation, and results.
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
              <Link to="/book-treatment">
                <Button variant="outline" className="border-[#C6A77D] text-[#C6A77D] hover:bg-[#C6A77D] hover:text-white px-8 py-3">
                  Still have a question? Book a Consultation
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
