import Navigation from '../../Navigation'
import Footer from '../../Footer'
import TestimonialsSection from '../../TestimonialsSection'
import Locations from '../../Locations'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

const fillerBenefits = [
  {
    title: 'Restore lost volume',
    description: 'Plump cheeks, lips, and other areas that have lost fullness for a naturally youthful look.'
  },
  {
    title: 'Reduce fine lines & wrinkles',
    description: 'Smooth away signs of ageing around the mouth, nose, and eyes with precision-targeted fillers.'
  },
  {
    title: 'Enhance facial balance',
    description: 'Achieve harmony and symmetry with artistic injector placement tailored to your features.'
  }
]

const treatmentCards = [
  {
    title: 'Under Eye Correction',
    description:
      'Brighten and refresh tired eyes by reducing hollows and shadows for a smooth, well-rested look.',
    route: 'book-treatment'
  },
  {
    title: 'Nose Enhancement',
    description:
      'Refine bumps or asymmetries with non-surgical filler techniques that sculpt and balance the profile.',
    route: 'book-treatment'
  },
  {
    title: 'Lip Enhancement',
    description:
      'Add soft volume and definition with hyaluronic acid fillers tailored to your desired shape and finish.',
    route: 'book-treatment'
  },
  {
    title: 'Cheek Enhancement',
    description:
      'Lift and contour with strategic filler placement that restores youthful structure and highlight.',
    route: 'book-treatment'
  },
  {
    title: 'Nasolabial Lines',
    description:
      'Soften folds running from the nose to mouth for a refreshed, natural-looking finish.',
    route: 'book-treatment'
  }
]

const faqs = [
  {
    question: 'What are dermal fillers and how do they work?',
    answer:
      'Dermal fillers are hyaluronic acid-based injectables that restore volume, reduce wrinkles, and enhance facial features. They attract moisture under the skin to give a smooth, youthful appearance.'
  },
  {
    question: 'How long do dermal fillers last?',
    answer:
      'Results typically last 6–18 months depending on the treatment area, filler type, and your individual metabolism.'
  },
  {
    question: 'Are dermal fillers safe?',
    answer:
      'When administered by experienced medical professionals, dermal fillers are very safe. Beyond MediSpa uses clinically tested hyaluronic acid fillers for reliable results.'
  },
  {
    question: 'Do dermal fillers require downtime?',
    answer:
      'Downtime is minimal. Mild swelling or bruising can occur but usually resolves quickly, allowing you to resume daily life almost immediately.'
  },
  {
    question: 'Are dermal filler treatments painful?',
    answer:
      'Most fillers contain lidocaine for comfort and our team uses advanced techniques to minimise discomfort. Treatments are generally well tolerated.'
  },
  {
    question: 'Can dermal fillers help with under-eye circles?',
    answer:
      'Yes. Tear-trough fillers are excellent for reducing hollows and dark shadows, brightening the under-eye area.'
  },
  {
    question: 'Can I combine fillers with other treatments?',
    answer:
      'Fillers pair well with anti-wrinkle injections, skin resurfacing, or chemical peels. We advise leaving 2–4 weeks between treatments for optimal healing.'
  },
  {
    question: 'Are dermal fillers suitable for all skin types?',
    answer:
      'Yes. Hyaluronic acid fillers hydrate and add volume across all skin types, offering a versatile solution for many concerns.'
  },
  {
    question: 'What should I avoid after filler treatments?',
    answer:
      'Avoid exercise, saunas, and touching the area for 24–48 hours to reduce swelling or bruising and allow fillers to settle.'
  },
  {
    question: 'How soon will I see results from dermal fillers?',
    answer:
      'Results are visible immediately, with the final finish appearing as any initial swelling subsides, typically within a few days.'
  }
]

const blogCards = [
  {
    title: 'Choosing the Right Filler for Your Features',
    image: '/team/azadeh-manesh-hq.png'
  },
  {
    title: 'Post-Filler Aftercare Tips from Our London Team',
    image: '/About - Clinic Pages/Beyond Desk.webp'
  },
  {
    title: 'Five Subtle Enhancements That Make a Big Impact',
    image: '/team/dr-sana-sadiq.jpg'
  }
]

export default function FillersLondonPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="pt-20">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1D1C21] via-[#242329] to-[#1D1C21] text-white">
          <div className="absolute inset-0 opacity-35">
            <img
              src="/Microneedling & Exosomes/pexels-shiny-diamond-3762889.jpg"
              alt="Dermal filler treatment in London"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[#111]/80 to-transparent" />
          </div>
          <div className="relative container mx-auto px-4 py-32">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold tracking-[0.3em] text-[#C6A77D] uppercase mb-4">
                Plump • Define • Illuminate
              </p>
              <h1 className="text-4xl lg:text-6xl font-light leading-tight mb-6">
                Elevate Your Skin Quality with <span className="text-[#C6A77D]">Age-Restoring Dermal Fillers</span> in London
              </h1>
              <p className="text-lg text-white/85 leading-relaxed mb-10">
                Reveal a naturally rejuvenated you with Beyond MediSpa’s dermal fillers in London. Our hyaluronic acid-based
                fillers enhance volume, restore youthful contours, and soften fine lines—crafted to bring out your inner confidence
                without downtime.
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
                Transform Your Skin &amp; <span className="text-[#A38E78]">Rediscover Your Glow</span>
              </h2>
              <p className="text-lg text-[#555555] leading-relaxed">
                Every filler appointment at Beyond MediSpa is bespoke. From subtle refinement to full contour restoration, our
                practitioners shape results that feel authentically you.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {fillerBenefits.map((item) => (
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
                Dermal Fillers with <span className="text-[#A38E78]">Expert Precision</span>
              </h2>
              <p className="text-lg text-[#555555] leading-relaxed mb-6">
                Here at Beyond MediSpa, dermal fillers go beyond quick enhancements. Our experienced injectors create tailored
                results using hyaluronic acid-based products that hydrate, lift, and illuminate. Expect artistry, safety, and a
                finish that reflects your natural beauty.
              </p>
              <p className="text-sm text-[#666666]">
                Please leave 2–4 weeks between dermal filler appointments and other treatments to give your skin time to settle
                comfortably.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/Microneedling & Exosomes/pexels-shiny-diamond-3762886.jpg"
                alt="Dermal filler results"
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
                Our Most Loved <span className="text-[#A38E78]">Filler Treatments</span>
              </h2>
              <p className="text-lg text-[#555555] leading-relaxed">
                Refine specific features with confidence. Each treatment below is tailored by our practitioners to suit your
                anatomy and goals.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {treatmentCards.map((card) => (
                <div key={card.title} className="rounded-3xl border border-[#E5E5E5] bg-[#FAF8F5] p-8 shadow-sm">
                  <h3 className="text-xl font-semibold text-[#2C2C2C] mb-3">{card.title}</h3>
                  <p className="text-sm text-[#666666] leading-relaxed">{card.description}</p>
                  <Link
                    to={`/${card.route}`}
                    className="mt-6 inline-flex items-center text-sm font-semibold text-[#A38E78] hover:text-[#8B7A67]"
                  >
                    Find Out More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-[#1D1C21] via-[#242329] to-[#1D1C21] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl lg:text-5xl font-light mb-6">
              Look &amp; Feel Your Best with <span className="text-[#C6A77D]">Natural Fillers</span>
            </h2>
            <p className="text-lg text-white/85 max-w-3xl mx-auto leading-relaxed mb-8">
              Reveal your best self with Beyond MediSpa’s creative, confidence-boosting filler artistry. Book today to explore
              personalised treatment plans with our London experts.
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

        <section className="py-20 bg-[#FAF8F5]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#A38E78] mb-4">The Beyond Journal</h4>
              <h2 className="text-4xl lg:text-5xl font-light text-[#2C2C2C] mb-6">
                Explore Our <span className="text-[#A38E78]">Blog</span>
              </h2>
              <p className="text-lg text-[#555555] max-w-3xl mx-auto">
                Stay inspired with expert insights on volume restoration, subtle enhancements, and bespoke beauty.
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
                Dermal Fillers London: <span className="text-[#A38E78]">FAQs</span>
              </h2>
              <p className="text-lg text-[#555555]">
                Get answers to the most common questions before you visit Beyond MediSpa.
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
