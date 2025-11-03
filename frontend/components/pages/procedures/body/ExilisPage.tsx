import Navigation from '../../../Navigation'
import Footer from '../../../Footer'
import TestimonialsSection from '../../../TestimonialsSection'
import Locations from '../../../Locations'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone, Waves, Sparkles, GaugeCircle, HandHeart, Timer, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'

const exilisBenefits = [
  {
    title: 'Smooth wrinkles & tighten skin',
    description: 'Lift laxity across the face and body while refining lines for a brighter, fresher appearance.'
  },
  {
    title: 'Stimulate collagen & elastin',
    description: 'Advanced radiofrequency and ultrasound energy encourage long-term firmness and bounce.'
  },
  {
    title: 'Pain-free & downtime-free',
    description: 'Enjoy noticeable results from a relaxing treatment with minimal redness and zero scarring.'
  }
]

const featureHighlights = [
  {
    Icon: Waves,
    title: 'Totally non-invasive',
    description: 'Harnesses radiofrequency and ultrasound energy without the need for surgery or injectable support.'
  },
  {
    Icon: HandHeart,
    title: 'No needles, no scars',
    description: 'Experience skin tightening without bruising or marks – perfect for delicate areas including eyes.'
  },
  {
    Icon: GaugeCircle,
    title: 'Tailored 20–60 minute sessions',
    description: 'Most plans include four to six visits, each customised to the treatment area and your goals.'
  },
  {
    Icon: Sparkles,
    title: 'Visible lift after one visit',
    description: 'Many clients see a smoother, lifted look straight away with continued improvement in the weeks ahead.'
  },
  {
    Icon: Timer,
    title: 'Minimal downtime',
    description: 'Expect only mild warmth or redness that typically fades within minutes of leaving the clinic.'
  },
  {
    Icon: Shield,
    title: 'FDA-approved technology',
    description: 'Exilis Elite is a globally trusted device, delivered at Beyond MediSpa by advanced aesthetic practitioners.'
  }
]

const faqs = [
  {
    question: 'What is Exilis Elite and how does it work?',
    answer:
      'Exilis Elite is a non-invasive treatment that combines radiofrequency and ultrasound energy to heat the dermis, prompting collagen and elastin production. The result is tighter skin and reduced wrinkles without surgery.'
  },
  {
    question: 'Which areas can Exilis Elite treat?',
    answer:
      'It is suitable for the face, eye area, neck, chin, arms, abdomen, thighs, and anywhere experiencing laxity or textural change.'
  },
  {
    question: 'Is Exilis Elite safe for all skin types?',
    answer:
      'Yes. Treatments are customised by our practitioners to safely address a wide range of skin types and tones.'
  },
  {
    question: 'How many sessions will I need?',
    answer:
      'We typically recommend four to six sessions lasting 20–60 minutes depending on treatment area and desired outcome.'
  },
  {
    question: 'Will I need downtime?',
    answer:
      'Downtime is minimal. You may notice light redness immediately afterwards that settles quickly, allowing you to resume daily life.'
  },
  {
    question: 'How soon will I see results?',
    answer:
      'Many clients enjoy a visible lift after the first session, with optimal results developing over the following two to three months.'
  },
  {
    question: 'Is the procedure painful?',
    answer:
      'Treatments feel warm but comfortable. Exilis Elite is designed to be pain-free, with no bruising or scarring.'
  },
  {
    question: 'Who performs Exilis Elite treatments?',
    answer:
      'All sessions are delivered by Beyond MediSpa’s highly trained aesthetic practitioners to ensure precision and safety.'
  }
]

const blogCards = [
  {
    title: 'How Exilis Elite Fits Into Your Skin Tightening Journey',
    image: '/About - Clinic Pages/London.jpg'
  },
  {
    title: 'Collagen-Boosting Treatments Explained by Experts',
    image: '/About - Clinic Pages/Edinburgh.jpg'
  },
  {
    title: 'Preparing for Non-Invasive Body Contouring',
    image: '/About - Clinic Pages/Beyond Desk.webp'
  }
]

export default function ExilisPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="pt-20">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1C1C21] via-[#232327] to-[#1C1C21] text-white">
          <div className="absolute inset-0 opacity-35">
            <img
              src="/Hydrafacial/close-up-of-woman-getting-facial-hydro-microdermab-2024-10-22-03-10-28-utc (2).jpg"
              alt="Exilis Elite treatment at Beyond MediSpa"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[#111]/80 to-transparent" />
          </div>
          <div className="relative container mx-auto px-4 py-32">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold tracking-[0.3em] text-[#C6A77D] uppercase mb-4">
                Lift • Tighten • Redefine
              </p>
              <h1 className="text-4xl lg:text-6xl font-light leading-tight mb-6">
                Exilis Elite: Reduce Wrinkles &amp; <span className="text-[#C6A77D]">Tighten Sagging Skin</span>
              </h1>
              <p className="text-lg text-white/85 leading-relaxed mb-10">
                Experience the revolutionary power of Exilis Elite at Beyond MediSpa. This non-invasive, medically guided
                treatment effectively lifts and tightens sagging skin on the face and body – with no needles, no scarring, and no
                downtime.
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
                A Naturally Youthful Look <span className="text-[#A38E78]">Without Surgery</span>
              </h2>
              <p className="text-lg text-[#555555] leading-relaxed">
                Whether you are targeting fine lines, sagging skin, or body contouring, Exilis Elite delivers outstanding results
                without the need for invasive procedures. Treatments are comfortable, swift, and designed around you.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {exilisBenefits.map((item) => (
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
              <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#A38E78] mb-4">How It Works</h4>
              <h2 className="text-4xl lg:text-5xl font-light text-[#2C2C2C] mb-6">
                Lift, Tighten &amp; <span className="text-[#A38E78]">Redefine Your Skin</span>
              </h2>
              <p className="text-lg text-[#555555] leading-relaxed mb-6">
                Exilis Elite uses cutting-edge radiofrequency and ultrasound energy to deeply heat the skin’s layers, stimulating
                collagen and elastin production. This process naturally tightens sagging skin, reduces wrinkles, and contours the
                face and body with next-to-no downtime.
              </p>
              <p className="text-sm text-[#666666]">
                Please note: some clients experience mild redness immediately after treatment. We recommend waiting at least two
                weeks before scheduling further beauty treatments to keep skin calm and comfortable.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/About - Clinic Pages/skin-care-woman-beauty-face-happy-smile-2025-02-10-09-22-28-utc (1).jpg"
                alt="Results from Exilis Elite"
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
                The Benefits of <span className="text-[#A38E78]">Exilis Elite</span>
              </h2>
              <p className="text-lg text-[#555555] leading-relaxed">
                Discover why Exilis Elite is one of our most-loved non-invasive treatments for face and body confidence.
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
              Leave Sagging Skin Looking <span className="text-[#C6A77D]">Tighter &amp; Radiant</span>
            </h2>
            <p className="text-lg text-white/85 max-w-3xl mx-auto leading-relaxed mb-8">
              Achieve firmer, lifted skin with Exilis Elite at Beyond MediSpa. Book your consultation and experience the power of
              non-invasive skin rejuvenation today.
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
                Stay informed with expert insights about non-invasive skin tightening, treatment planning, and self-care.
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
                Exilis Elite: <span className="text-[#A38E78]">FAQs</span>
              </h2>
              <p className="text-lg text-[#555555]">
                Answers to the most common questions about this advanced tightening and contouring treatment.
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
