import Navigation from '../../../Navigation'
import Footer from '../../../Footer'
import TestimonialsSection from '../../../TestimonialsSection'
import Locations from '../../../Locations'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone, Shield, Sparkles, Clock, Wind, SunMoon, GaugeCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const heroHighlights = [
  {
    title: 'Safe for every skin tone',
    description: 'Elos Plus technology pairs optical energy with bi-polar radio frequency, making it effective on a broad spectrum of skin tones.'
  },
  {
    title: 'Long-lasting smoothness',
    description: 'Targets the follicle to disable regrowth, giving you silky, hair-free skin with fewer maintenance sessions.'
  },
  {
    title: 'Minimal discomfort',
    description: 'The Motif applicator cools as it treats, making sessions comfortable—even for sensitive areas.'
  }
]

const featureHighlights = [
  {
    Icon: Shield,
    title: 'No downtime necessary',
    description: 'Return to your day immediately after treatment with virtually no recovery time required.'
  },
  {
    Icon: Clock,
    title: 'Quick, convenient sessions',
    description: 'Most appointments take just 30–60 minutes, ideal for lunchtime or after-work visits.'
  },
  {
    Icon: SunMoon,
    title: 'For light & dark hair',
    description: 'Dual-energy technology treats both pigmented and minimally pigmented hair effectively.'
  },
  {
    Icon: Wind,
    title: 'Cooling comfort',
    description: 'Integrated cooling reduces irritation, keeping each pass gentle on the skin.'
  },
  {
    Icon: GaugeCircle,
    title: 'Customisable settings',
    description: 'Treat larger or smaller areas precisely, from legs and bikini line to the face or underarms.'
  },
  {
    Icon: Sparkles,
    title: 'Smooth, confidence-boosting results',
    description: 'Enjoy consistent, even results that keep skin flawless for longer between appointments.'
  }
]

const faqs = [
  {
    question: 'How does Elos Plus laser hair removal work?',
    answer:
      'Elos Plus combines optical energy with bi-polar radio frequency to heat and disable hair follicles while protecting the surrounding skin, leading to long-lasting hair reduction.'
  },
  {
    question: 'Is Elos Plus suitable for darker skin tones?',
    answer:
      'Yes. The technology is designed for all skin tones, including darker complexions, minimising risk while ensuring effective results.'
  },
  {
    question: 'How many sessions will I need?',
    answer:
      'A full course usually requires three to nine sessions spaced four weeks apart so the laser can treat follicles during their growth cycle.'
  },
  {
    question: 'Can I shave between treatments?',
    answer:
      'Absolutely. Shaving is encouraged, while plucking, waxing, or tweezing should be avoided because they remove the follicle the laser needs to target.'
  },
  {
    question: 'Which areas can be treated?',
    answer:
      'Elos Plus treats legs, bikini line, arms, face, neck, back, chest, underarms, and more. It is suitable for both men and women.'
  },
  {
    question: 'Are results permanent?',
    answer:
      'Elos Plus delivers permanent hair reduction. Annual touch-up sessions may be recommended based on hair colour and density.'
  },
  {
    question: 'How should I prepare for my appointment?',
    answer:
      'Shave the area 24 hours before your session, avoid sun exposure for 30 days, and skip waxing or plucking for up to two weeks. A patch test is required 48 hours in advance. Avoid paracetamol, ibuprofen, and antibiotics as directed by your practitioner.'
  },
  {
    question: 'Why choose Elos Plus over other laser technologies?',
    answer:
      'Elos Plus treats a wider range of skin tones and hair colours while keeping discomfort to a minimum—making it a versatile, comfortable choice for lasting smoothness.'
  }
]

const blogCards = [
  {
    title: 'How to Prepare for Your Laser Hair Removal Course',
    image: '/Microneedling & Exosomes/pexels-shvets-production-8413294.jpg'
  },
  {
    title: 'Laser Hair Removal vs. Traditional Methods',
    image: '/Microneedling & Exosomes/pexels-nicole-avagliano-2236703-2236703.jpg'
  },
  {
    title: 'Maintaining Silky Skin Between Sessions',
    image: '/About - Clinic Pages/Beyond Desk.webp'
  }
]

export default function LaserHairRemovalPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="pt-20">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1C1C21] via-[#232327] to-[#1C1C21] text-white">
          <div className="absolute inset-0 opacity-35">
            <img
              src="/Microneedling & Exosomes/woman-in-white-bodysuit-having-lasertreatment-on-h-2024-10-24-09-11-03-utc.jpg"
              alt="Laser hair removal treatment in London"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[#111]/80 to-transparent" />
          </div>
          <div className="relative container mx-auto px-4 py-32">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold tracking-[0.3em] text-[#C6A77D] uppercase mb-4">
                Smooth • Confident • Carefree
              </p>
              <h1 className="text-4xl lg:text-6xl font-light leading-tight mb-6">
                Laser Hair Removal London: <span className="text-[#C6A77D]">Smooth Skin That Lasts</span>
              </h1>
              <p className="text-lg text-white/85 leading-relaxed mb-10">
                Experience long-lasting hair reduction with medical-grade Elos Plus technology at Beyond MediSpa London. Enjoy
                smoother skin, reduced regrowth, and confidence that shines in every season.
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
                Why Clients Choose <span className="text-[#A38E78]">Beyond MediSpa</span> for Laser Hair Removal
              </h2>
              <p className="text-lg text-[#555555] leading-relaxed">
                Tailored treatment plans, advanced technology, and highly trained practitioners ensure every session is safe,
                effective, and designed around your lifestyle.
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
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-[#FDF8F2] via-[#FFFFFF] to-[#F5F1EC]">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#A38E78] mb-4">
                Advanced Elos Plus Technology
              </h4>
              <h2 className="text-4xl lg:text-5xl font-light text-[#2C2C2C] mb-6">
                Gentle, Precise &amp; <span className="text-[#A38E78]">Effortlessly Smooth</span>
              </h2>
              <p className="text-lg text-[#555555] leading-relaxed mb-6">
                Elos Plus combines optical and radio frequency energy to disable hair follicles while protecting your skin. The
                result is incredibly smooth skin with fewer sessions—plus peace of mind knowing every pass is performed by trained
                aestheticians.
              </p>
              <p className="text-sm text-[#666666]">
                Sessions are quick, comfortable, and designed for lasting smoothness. Our team will guide you through preparation,
                aftercare, and maintenance to ensure exceptional results.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/Microneedling & Exosomes/pexels-shiny-diamond-3373744.jpg"
                alt="Laser hair removal results"
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
                Benefits of <span className="text-[#A38E78]">Laser Hair Removal</span> at Beyond
              </h2>
              <p className="text-lg text-[#555555] leading-relaxed">
                Discover why clients return to Beyond MediSpa for low-maintenance, confidence-boosting smoothness year round.
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

        <section className="py-20 bg-gradient-to-br from-[#1C1C21] via-[#232327] to-[#1C1C21] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl lg:text-5xl font-light mb-6">
              Say Goodbye to Unwanted Hair <span className="text-[#C6A77D]">for Good</span>
            </h2>
            <p className="text-lg text-white/85 max-w-3xl mx-auto leading-relaxed mb-8">
              Experience the confidence of silky-smooth skin with Elos Plus laser hair removal. Book your consultation today and
              embrace lasting results you’ll love.
            </p>
            <Link to="/book-treatment">
              <Button size="lg" className="bg-[#C6A77D] hover:bg-[#A38E78] text-white px-10 py-4 text-lg">
                Book Now
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
                Practical advice and lifestyle inspiration to help you maintain smooth skin between sessions.
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
                Laser Hair Removal London: <span className="text-[#A38E78]">FAQs</span>
              </h2>
              <p className="text-lg text-[#555555]">Your essential guide to getting the most from every treatment.</p>
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
