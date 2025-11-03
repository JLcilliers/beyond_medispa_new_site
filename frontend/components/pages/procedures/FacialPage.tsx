import Navigation from '../../Navigation'
import Footer from '../../Footer'
import Locations from '../../Locations'
import TestimonialsSection from '../../TestimonialsSection'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone, Sparkles, Droplets, Wand2, Radio, Scan, Sun } from 'lucide-react'
import { Link } from 'react-router-dom'

const facialTreatments = [
  {
    name: 'HydraFacial',
    description: 'Deeply cleanse, exfoliate, and infuse skin with results-driven serums for an instant glow.',
    route: 'procedures/facial/hydrafacial-london'
  },
  {
    name: 'Oxygen Facial',
    description: 'Revive dull, fatigued skin with pure oxygen and targeted actives for immediate radiance.',
    route: 'procedures/facial/oxygen-facial'
  },
  {
    name: 'ZO Facial',
    description: 'Clinical-grade ZO treatments to refine texture, clarify tone, and boost luminosity.',
    route: 'procedures/peels/zo-london'
  },
  {
    name: 'LED Light Therapy',
    description: 'Harness low-level light energy to calm, heal, and stimulate collagen production.',
    route: 'procedures/facial/led-facial'
  }
]

const advancedTreatments = [
  {
    name: 'Carboxytherapy',
    description: 'CO₂ infusion boosts circulation, softens stretch marks, and renews tired skin.',
    route: 'procedures/injectables/carboxy'
  },
  {
    name: 'Microneedling',
    description: 'Trigger natural collagen with precision needling for smoother, firmer texture.',
    route: 'procedures/facial/microneedling-london'
  },
  {
    name: 'Obagi Blue Radiance Peel',
    description: 'Brighten, exfoliate, and minimise downtime with medical-grade peeling technology.',
    route: 'procedures/peels/obagi'
  },
  {
    name: 'Exosomes',
    description: 'Next-generation regenerative therapy that accelerates cellular repair and glow.',
    route: 'procedures/facial/exosome'
  },
  {
    name: 'Electrolysis',
    description: 'Permanent hair removal for delicate areas with meticulous precision.',
    route: 'procedures/body/electrolysis'
  }
]

const tighteningTreatments = [
  {
    name: 'Radio Frequency',
    description: 'Heat-based collagen stimulation to lift, firm, and refine facial contours.',
    route: 'procedures/body/exilis'
  },
  {
    name: 'HiFu',
    description: 'High-intensity ultrasound reaches the SMAS layer for a non-surgical lift.',
    route: 'procedures/body/hifu'
  },
  {
    name: 'HydraTite Facial',
    description: 'HydraFacial meets Exilis Elite for deep hydration and targeted tightening.',
    route: 'procedures/facial/hydratite'
  }
]

const laserTreatments = [
  {
    name: 'Laser Hair Removal',
    description: 'Long-lasting reduction with medical-grade Elos Plus technology.',
    route: 'procedures/body/laser-hair-removal'
  },
  {
    name: 'Cool Laser',
    description: 'Gentle resurfacing that renews tone, smooths texture, and restores luminosity.',
    route: 'procedures/body/cool-laser'
  }
]

const iconHighlights = [
  {
    title: 'Specialist-Led Care',
    description: 'Every facial is delivered by highly trained aestheticians using medical-grade devices.',
    Icon: Sparkles
  },
  {
    title: 'Tailored to Your Skin',
    description: 'We personalise protocols to address dullness, congestion, pigmentation, and ageing concerns.',
    Icon: Droplets
  },
  {
    title: 'Results You Can Feel',
    description: 'Expect brighter tone, refined texture, and lasting hydration after every visit.',
    Icon: Wand2
  }
]

function TreatmentGrid({ title, subtitle, items }: { title: string; subtitle: string; items: typeof facialTreatments }) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-light text-[#2C2C2C] mb-4">
            {title} <span className="text-[#A38E78]">{subtitle}</span>
          </h2>
          <p className="text-lg text-[#555555]">
            Explore curated treatments that bring clinical-grade results together with the luxury experience you expect from Beyond MediSpa.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.name} className="rounded-3xl border border-[#E5E5E5] bg-[#FAF8F5] p-8 shadow-sm flex flex-col">
              <h3 className="text-2xl font-semibold text-[#2C2C2C] mb-3">{item.name}</h3>
              <p className="text-sm text-[#666666] leading-relaxed flex-1">{item.description}</p>
              <Link to={`/${item.route}`} className="mt-6 inline-flex items-center text-sm font-semibold text-[#A38E78] hover:text-[#8B7A67]">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function FacialPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="pt-20">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1F1F1F] via-[#2A2A2A] to-[#1F1F1F] text-white">
          <div className="absolute inset-0 opacity-35">
            <img
              src="/Microneedling & Exosomes/pexels-shiny-diamond-3762885.jpg"
              alt="Advanced facial treatments at Beyond MediSpa"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#111]/85 to-transparent" />
          </div>
          <div className="relative container mx-auto px-4 py-32">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold tracking-[0.3em] text-[#C6A77D] uppercase mb-4">Hydrate • Lift • Illuminate</p>
              <h1 className="text-4xl lg:text-6xl font-light leading-tight mb-6">
                Reveal Your Inner Radiance with Advanced <span className="text-[#C6A77D]">Facial Aesthetic Treatments</span>
              </h1>
              <p className="text-lg text-white/85 leading-relaxed mb-10">
                Rejuvenate your skin and rediscover your glow with expertly curated facial treatments designed to lift, hydrate, and transform. From instant-glow facials to high-performance resurfacing, every journey is personalised for luminous, healthy skin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/book-treatment">
                  <Button size="lg" className="bg-[#C6A77D] hover:bg-[#A38E78] text-white px-8 py-4 text-lg">
                    Contact Us Today
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
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-light text-[#2C2C2C] mb-6">Meet the Experts Behind Your Skin Glow</h2>
              <p className="text-lg text-[#555555] leading-relaxed">
                With years of clinical experience and artistic precision, our team delivers the highest standard of aesthetic care, blending medical-grade technology with a luxury experience from consultation to aftercare.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
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
            <div className="grid md:grid-cols-3 gap-8">
              {iconHighlights.map(({ title, description, Icon }) => (
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

        <TreatmentGrid title="Signature" subtitle="Facial Treatments" items={facialTreatments} />
        <TreatmentGrid title="Advanced" subtitle="Skin Solutions" items={advancedTreatments} />
        <TreatmentGrid title="Skin Tightening" subtitle="Treatments" items={tighteningTreatments} />
        <TreatmentGrid title="Laser" subtitle="Skin Technologies" items={laserTreatments} />

        <section className="py-20 bg-gradient-to-br from-[#1F1F1F] via-[#2A2A2A] to-[#1F1F1F] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl lg:text-5xl font-light mb-6">Your New Glow Awaits</h2>
            <p className="text-lg text-white/85 max-w-3xl mx-auto leading-relaxed mb-8">
              Whatever your goals—from hydration and luminosity to contouring and resurfacing—our expert aestheticians are ready to design a facial plan that brings your dream skin to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book-treatment">
                <Button size="lg" className="bg-[#C6A77D] hover:bg-[#A38E78] text-white px-8 py-4 text-lg">
                  Book Your Appointment Today
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

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8">
            <div className="rounded-3xl bg-[#FAF8F5] p-8 border border-[#E5E5E5] shadow-sm">
              <h3 className="text-sm uppercase tracking-[0.3em] text-[#A38E78] mb-3">Reach Out Now</h3>
              <h2 className="text-3xl font-light text-[#2C2C2C] mb-6">Get In Touch</h2>
              <p className="text-sm text-[#666666] leading-relaxed mb-4">
                Share your skin goals with our team and we’ll recommend a personalised pathway, complete with consultation and follow-up support.
              </p>
              <p className="text-sm text-[#555555]">
                <strong className="text-[#2C2C2C]">Phone:</strong>{' '}
                <a href="tel:03455481151" className="text-[#A38E78] hover:text-[#8B7A67]">
                  0345 548 1151
                </a>
              </p>
              <p className="text-sm text-[#555555] mt-2">
                <strong className="text-[#2C2C2C]">Email:</strong>{' '}
                <a href="mailto:info@beyondmedispa.com" className="text-[#A38E78] hover:text-[#8B7A67]">
                  info@beyondmedispa.com
                </a>
              </p>
            </div>
            <div className="rounded-3xl bg-[#FAF8F5] p-8 border border-[#E5E5E5] shadow-sm">
              <h3 className="text-sm uppercase tracking-[0.3em] text-[#A38E78] mb-3">Two Premium Clinics</h3>
              <h2 className="text-3xl font-light text-[#2C2C2C] mb-6">Where To Find Us</h2>
              <p className="text-sm text-[#555555] leading-relaxed">
                Knightsbridge, London (Fourth Floor, Harvey Nichols)<br />
                St Andrew Square, Edinburgh (Second Floor, Harvey Nichols)
              </p>
              <p className="text-sm text-[#666666] mt-4">
                Book ahead—facial appointments are limited each week to ensure every client receives meticulous care.
              </p>
            </div>
          </div>
        </section>

        <TestimonialsSection />
        <Locations />
      </div>

      <Footer />
    </div>
  )
}
