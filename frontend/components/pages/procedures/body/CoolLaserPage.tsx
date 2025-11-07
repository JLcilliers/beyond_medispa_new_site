import Navigation from '../../../Navigation'
import Footer from '../../../Footer'
import TestimonialsSection from '../../../TestimonialsSection'
import Locations from '../../../Locations'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone, Sparkles, Layers3, SunDim, Droplets, Shield, Timer } from 'lucide-react'
import { Link } from 'react-router-dom'

const expectations = [
  {
    title: 'Smooth Wrinkles & Fine Lines',
    description: 'Target expression lines and creasing for refreshed, youthful-looking skin.'
  },
  {
    title: 'Improve Tone & Clarity',
    description: 'Fade pigmentation, acne scarring, and age spots while minimising pore size.'
  },
  {
    title: 'Boost Collagen Production',
    description: 'Stimulate collagen for long-lasting firmness, elasticity, and luminosity.'
  }
]

const treatmentHighlights = [
  {
    Icon: Sparkles,
    title: 'Targets multiple concerns',
    description: 'Visibly softens lines, brightens pigmentation, and refines texture in a single protocol.'
  },
  {
    Icon: Layers3,
    title: 'Minimal downtime',
    description: 'Expect around four days of mild redness while fresh skin emerges.'
  },
  {
    Icon: SunDim,
    title: 'Suitable for all skin types',
    description: 'Comfortably treats a wide range of skin tones with precision and care.'
  },
  {
    Icon: Droplets,
    title: 'Comfort-focused experience',
    description: 'Patients typically describe only a gentle warmth throughout treatment.'
  },
  {
    Icon: Shield,
    title: 'Clinically proven technology',
    description: 'Novus Medical Cool Laser delivers consistent results backed by science.'
  },
  {
    Icon: Timer,
    title: 'Noticeable improvements fast',
    description: 'Enjoy a smoother, clearer complexion in as little as three weeks.'
  }
]

const faqs = [
  {
    question: 'What is Cool Laser resurfacing?',
    answer:
      'Cool Laser resurfacing is a non-invasive treatment that uses pulses of laser light to target wrinkles, acne scars, pigmentation, and skin texture, stimulating collagen production for smoother, youthful skin.'
  },
  {
    question: 'How many treatments are typically required?',
    answer:
      'We usually recommend a course of three sessions, each lasting 30–60 minutes depending on your skin concerns and treatment plan.'
  },
  {
    question: 'Is Cool Laser resurfacing painful?',
    answer:
      'Discomfort is minimal. Most patients feel a gentle warming sensation during treatment, and there is no need for extended downtime.'
  },
  {
    question: 'How long do the results last?',
    answer:
      'Visible improvements appear within three weeks. Collagen stimulation continues for several months, helping results last longer with good maintenance.'
  },
  {
    question: 'How soon can I return to my normal routine?',
    answer:
      'With only a few days of redness, you can resume daily life quickly. We advise avoiding direct sun exposure and keeping skin protected post-treatment.'
  },
  {
    question: 'Is Cool Laser resurfacing safe for all skin types?',
    answer:
      'Yes. Treatments are tailored to your skin tone and concerns, ensuring safe, effective rejuvenation for a wide range of complexions.'
  },
  {
    question: 'Which concerns does Cool Laser address?',
    answer:
      'Cool Laser effectively treats fine lines, wrinkles, pigmentation, age spots, acne scarring, and overall texture, giving you all-round complexion renewal.'
  },
  {
    question: 'Are there side effects?',
    answer:
      'Side effects are typically limited to temporary redness or mild swelling, which settle within four days as your skin reveals a clearer finish.'
  },
  {
    question: 'What aftercare should I follow?',
    answer:
      'Avoid heat treatments, strenuous exercise, and the gym for 48 hours after your appointment. Keep skin hydrated and protected with SPF.'
  },
  {
    question: 'How does Cool Laser compare to other lasers?',
    answer:
      'Cool Laser offers faster recovery and less discomfort compared to fractional or CO₂ lasers, while still delivering transformative resurfacing results.'
  },
  {
    question: 'Can I pair Cool Laser with other treatments?',
    answer:
      'Absolutely. Many clients combine Cool Laser with HydraFacial, chemical peels, or anti-wrinkle treatments for comprehensive rejuvenation.'
  }
]

const blogCards = [
  {
    title: 'How to Maintain Radiant Results After Laser Resurfacing',
    image: '/About - Clinic Pages/image-of-shirtless-asian-girl-smiling-and-looking-2025-02-14-00-28-56-utc (2).jpg'
  },
  {
    title: 'Five Signs Your Skin Is Ready for a Professional Refresh',
    image: '/About - Clinic Pages/female-at-cosmetic-beauty-spa-clinic-has-facial-ha-2024-10-18-17-49-09-utc (2).jpg'
  },
  {
    title: 'Why Personalised Treatment Plans Matter Most',
    image: '/About - Clinic Pages/night-view-from-calton-hill-to-edinburgh-2025-03-24-03-23-17-utc.jpg'
  }
]

export default function CoolLaserPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="pt-20">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1E1E22] via-[#25252A] to-[#1E1E22] text-white">
          <div className="absolute inset-0 opacity-40">
            <img
              src="/Microneedling & Exosomes/people-beauty-spa-healthy-lifestyle-and-relaxat-2025-10-03-18-17-22-utc.jpg"
              alt="Cool Laser resurfacing treatment"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[#111]/80 to-transparent" />
          </div>
          <div className="relative container mx-auto px-4 py-32">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold tracking-[0.3em] text-[#C6A77D] uppercase mb-4">
                Renew • Rejuvenate • Radiate
              </p>
              <h1 className="text-4xl lg:text-6xl font-light leading-tight mb-6">
                Cool Laser Resurfacing: Smooth Wrinkles &amp; Improve Your <span className="text-[#C6A77D]">Skin’s Appearance</span>
              </h1>
              <p className="text-lg text-white/85 leading-relaxed mb-10">
                Reveal fresh, youthful skin with Novus Medical Cool Laser resurfacing at Beyond MediSpa. This advanced,
                non-invasive treatment targets fine lines, pigmentation, acne scars, and age spots, renewing your skin’s clarity
                and texture with minimal downtime.
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
                Cool Laser Resurfacing Results <span className="text-[#A38E78]">You’ll Love</span>
              </h2>
              <p className="text-lg text-[#555555] leading-relaxed">
                Experience visible skin improvements that transform the way you feel in your complexion. Smoother texture,
                clearer tone, and long-lasting luminosity are only a treatment away.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {expectations.map((item) => (
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
                The Beyond MediSpa Difference
              </h4>
              <h2 className="text-4xl lg:text-5xl font-light text-[#2C2C2C] mb-6">
                Dermal-Grade Laser Expertise <span className="text-[#A38E78]">In Safe Hands</span>
              </h2>
              <p className="text-lg text-[#555555] leading-relaxed mb-6">
                Our expert practitioners utilise Novus Medical Cool Laser technology to deliver precision resurfacing that
                renews your skin without compromising comfort. From pigmentation to fine lines, every appointment is tailored
                with meticulous care for results that feel authentically you.
              </p>
              <p className="text-sm text-[#666666]">
                Please note that downtime can vary depending on the intensity of your treatment. Our team will guide you through
                preparation, aftercare, and future maintenance to keep your complexion glowing.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/Microneedling & Exosomes/a-cosmetologist-preparing-for-facial-care-treatment-2024-11-12-20-12-33-utc.jpg"
                alt="Cool laser treatment in action"
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
                How Cool Laser Works <span className="text-[#A38E78]">For You</span>
              </h2>
              <p className="text-lg text-[#555555] leading-relaxed">
                Cool Laser resurfacing utilises controlled pulses of light to exfoliate surface concerns while stimulating
                deeper collagen renewal. Expect visible improvements after your very first session with little interruption to
                your routine.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="rounded-3xl bg-[#FAF8F5] border border-[#E5E5E5] p-8 text-center shadow-sm">
                <h3 className="text-xl font-semibold text-[#2C2C2C] mb-3">30–60 Minutes</h3>
                <p className="text-sm text-[#666666] leading-relaxed">
                  Appointments are swift and tailored to the area being treated, fitting seamlessly into your schedule.
                </p>
              </div>
              <div className="rounded-3xl bg-[#FAF8F5] border border-[#E5E5E5] p-8 text-center shadow-sm">
                <h3 className="text-xl font-semibold text-[#2C2C2C] mb-3">Minimal Downtime</h3>
                <p className="text-sm text-[#666666] leading-relaxed">
                  Enjoy results with only a few days of redness while collagen rebuilds and skin clarity improves.
                </p>
              </div>
              <div className="rounded-3xl bg-[#FAF8F5] border border-[#E5E5E5] p-8 text-center shadow-sm">
                <h3 className="text-xl font-semibold text-[#2C2C2C] mb-3">Advanced Safety</h3>
                <p className="text-sm text-[#666666] leading-relaxed">
                  Cool Laser is a clinically proven solution suitable for diverse skin types with a strong safety profile.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-[#1E1E22] via-[#25252A] to-[#1E1E22] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl lg:text-5xl font-light mb-6">
              Leave Your Skin Looking <span className="text-[#C6A77D]">Fresh and Luminous</span>
            </h2>
            <p className="text-lg text-white/85 max-w-3xl mx-auto leading-relaxed mb-8">
              Book your Cool Laser resurfacing consultation today and experience smoother texture, brighter tone, and renewed
              confidence without invasive downtime.
            </p>
            <Link to="/book-treatment">
              <Button size="lg" className="bg-[#C6A77D] hover:bg-[#A38E78] text-white px-10 py-4 text-lg">
                Book Your Appointment Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {treatmentHighlights.map(({ Icon, title, description }) => (
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

        <TestimonialsSection />

        <section className="py-20 bg-[#FAF8F5]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#A38E78] mb-4">The Beyond Journal</h4>
              <h2 className="text-4xl lg:text-5xl font-light text-[#2C2C2C] mb-6">
                Explore Our <span className="text-[#A38E78]">Blog</span>
              </h2>
              <p className="text-lg text-[#555555] max-w-3xl mx-auto">
                Stay inspired with expert tips, treatment education, and the latest insights from Beyond MediSpa.
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
                Cool Laser Resurfacing: <span className="text-[#A38E78]">FAQs</span>
              </h2>
              <p className="text-lg text-[#555555]">
                Everything you need to know before, during, and after your Cool Laser appointment.
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
