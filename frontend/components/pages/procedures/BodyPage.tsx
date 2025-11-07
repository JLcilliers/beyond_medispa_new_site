import Navigation from '../../Navigation'
import Footer from '../../Footer'
import Locations from '../../Locations'
import TestimonialsSection from '../../TestimonialsSection'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone, Sparkles, Droplets } from 'lucide-react'
import { Link } from 'react-router-dom'

const bodyContouringTreatments = [
  {
    name: 'CoolSculpting',
    description: 'Freeze away stubborn fat pockets for a more sculpted silhouette with FDA-cleared cryolipolysis technology.',
    route: 'procedures/body/coolsculpting'
  },
  {
    name: 'HiFu',
    description: 'Harness focused ultrasound energy to tighten and lift skin with no downtime for face or body areas.',
    route: 'procedures/body/hifu'
  },
  {
    name: 'Vanquish',
    description: 'Reduce larger areas of fat with contactless radiofrequency that targets adipose tissue efficiently.',
    route: 'procedures/body/vanquish'
  },
  {
    name: 'CM Slim',
    description: 'Build muscle and burn fat simultaneously with powerful electromagnetic stimulation sessions.',
    route: 'procedures/body/cm-slim'
  },
  {
    name: 'Unison',
    description: 'Smooth cellulite and improve skin laxity using combined radiofrequency and targeted massage.',
    route: 'procedures/body/unison'
  },
  {
    name: 'Radio Frequency Sculpt',
    description: 'Firm and tone skin through heat-based collagen stimulation for lasting contour refinement.',
    route: 'procedures/body/exilis'
  }
]

const bodyRejuvenationTreatments = [
  {
    name: 'Carboxytherapy',
    description: 'Improve circulation, stretch marks, and skin texture with precise CO₂ microinjections.',
    route: 'procedures/injectables/carboxy'
  },
  {
    name: 'HydraFacial Keravive',
    description: 'Deep cleanse and nourish the scalp to encourage fuller, healthier-looking hair growth.',
    route: 'procedures/facial/keravive'
  },
  {
    name: 'Cool Laser',
    description: 'Tighten skin, soften scars, and brighten tone with medical-grade non-ablative laser resurfacing.',
    route: 'procedures/body/cool-laser'
  },
  {
    name: 'Alidya',
    description: 'Target early-stage cellulite by addressing the root causes beneath the skin’s surface.',
    route: 'book-treatment'
  },
  {
    name: 'Laser Hair Removal',
    description: 'Enjoy long-lasting hair reduction with medical-grade precision across face and body areas.',
    route: 'procedures/body/laser-hair-removal'
  }
]

const iconHighlights = [
  {
    title: 'Award-winning Expertise',
    description: 'Doctor-led aesthetic medicine with decades of combined experience delivering confident results.',
    Icon: Sparkles
  },
  {
    title: 'Tailored Treatment Plans',
    description: 'Every programme is curated around your goals, lifestyle, and timeline so you feel supported from consultation to aftercare.',
    Icon: Droplets
  },
  {
    title: 'Advanced Technology',
    description: 'We invest in the latest medical devices to ensure your treatments remain effective, comfortable, and minimally invasive.',
    Icon: Sparkles
  }
]

export default function BodyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="pt-20">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1F1F1F] via-[#2E2E2E] to-[#1F1F1F] text-white">
          <div className="absolute inset-0 opacity-30">
            <img
              src="/treatment-categories/body-sculpting.png"
              alt="Body treatments at Beyond MediSpa"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#111]/80 to-transparent" />
          </div>
          <div className="relative container mx-auto px-4 py-32">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold tracking-[0.3em] text-[#C6A77D] uppercase mb-4">
                Sculpt • Tone • Rejuvenate
              </p>
              <h1 className="text-4xl lg:text-6xl font-light leading-tight mb-6">
                Sculpt Your Body Profile For a Youthful, <span className="text-[#C6A77D]">More Confident Look</span>
              </h1>
              <p className="text-lg text-white/85 leading-relaxed mb-10">
                Feel empowered in your skin with bespoke body treatments designed to contour, tone, and revitalise – all
                performed by leading aesthetic professionals using medical-grade technology.
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
              <h2 className="text-4xl lg:text-5xl font-light text-[#2C2C2C] mb-6">
                Your Journey to Body Confidence Starts Here
              </h2>
              <p className="text-lg text-[#555555] leading-relaxed mb-6">
                Experience world-class care, cutting-edge technology, and tailor-made treatment plans designed around your
                unique body goals. From consultation to aftercare, every step is guided by medical expertise and a commitment
                to natural-looking transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/about">
                  <Button className="bg-[#C6A77D] hover:bg-[#A38E78] text-white px-8 py-3">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/book-treatment">
                  <Button variant="outline" className="border-[#C6A77D] text-[#C6A77D] hover:bg-[#C6A77D] hover:text-white px-8 py-3">
                    Book Consultation
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {iconHighlights.map(({ title, description, Icon }) => (
                <div key={title} className="rounded-3xl border border-[#EEE] bg-[#FAF8F5] p-8 text-center shadow-sm">
                  <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#C6A77D]/15">
                    <Icon className="h-6 w-6 text-[#A38E78]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#2C2C2C] mb-3">{title}</h3>
                  <p className="text-sm text-[#666666] leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#FAF8F5]">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-4xl lg:text-5xl font-light text-[#2C2C2C] mb-4">
                Body <span className="text-[#A38E78]">Contouring</span>
              </h2>
              <p className="text-lg text-[#555555] max-w-3xl mx-auto">
                Define your silhouette with non-invasive and clinically proven body sculpting treatments tailored to every
                stage of your journey.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
              {bodyContouringTreatments.map((item) => (
                <div key={item.name} className="rounded-3xl bg-white p-8 shadow-lg border border-[#E5E5E5] flex flex-col">
                  <h3 className="text-2xl font-semibold text-[#2C2C2C] mb-3">{item.name}</h3>
                  <p className="text-sm text-[#666666] flex-1 leading-relaxed">{item.description}</p>
                  <Link
                    to={`/${item.route}`}
                    className="mt-6 inline-flex items-center text-sm font-semibold text-[#A38E78] hover:text-[#8B7A67]"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-4xl lg:text-5xl font-light text-[#2C2C2C] mb-4">
                Body <span className="text-[#A38E78]">Rejuvenation</span>
              </h2>
              <p className="text-lg text-[#555555] max-w-3xl mx-auto">
                Revive tired skin, treat problem areas, and reveal a smoother, more youthful appearance with targeted
                treatments designed to refresh and renew.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
              {bodyRejuvenationTreatments.map((item) => (
                <div key={item.name} className="rounded-3xl bg-[#FAF8F5] p-8 border border-[#E5E5E5] shadow-sm flex flex-col">
                  <h3 className="text-2xl font-semibold text-[#2C2C2C] mb-3">{item.name}</h3>
                  <p className="text-sm text-[#666666] flex-1 leading-relaxed">{item.description}</p>
                  <Link
                    to={`/${item.route}`}
                    className="mt-6 inline-flex items-center text-sm font-semibold text-[#A38E78] hover:text-[#8B7A67]"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-[#1F1F1F] via-[#2E2E2E] to-[#1F1F1F] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-4xl lg:text-5xl font-light mb-6">
                Discover the Power of <span className="text-[#C6A77D]">Personalised Body Care</span>
              </h2>
              <p className="text-lg text-white/85 leading-relaxed mb-8">
                From sculpting to rejuvenation, we help you look and feel your best on your own terms, in your own time. Our
                medical practitioners tailor every detail for confidence that lasts.
              </p>
              <Link to="/book-treatment">
                <Button size="lg" className="bg-[#C6A77D] hover:bg-[#A38E78] text-white px-10 py-4 text-lg">
                  Book Your Appointment Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <TestimonialsSection />

        <section className="py-20 bg-[#FAF8F5]">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="rounded-3xl bg-white p-8 shadow-sm border border-[#E5E5E5]">
                <h3 className="text-sm uppercase tracking-[0.2em] text-[#A38E78] mb-3">Reach Out Now</h3>
                <h2 className="text-3xl font-light text-[#2C2C2C] mb-6">Get In Touch</h2>
                <p className="text-sm text-[#666666] leading-relaxed mb-4">
                  Share your goals with our team and we’ll guide you toward a bespoke treatment plan designed around your
                  timelines and comfort.
                </p>
                <div className="space-y-3 text-sm text-[#555555]">
                  <p>
                    <span className="font-semibold text-[#2C2C2C]">Phone:</span>{' '}
                    <a className="text-[#A38E78] hover:text-[#8B7A67]" href="tel:03455481151">
                      0345 548 1151
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold text-[#2C2C2C]">Email:</span>{' '}
                    <a className="text-[#A38E78] hover:text-[#8B7A67]" href="mailto:info@beyondmedispa.com">
                      info@beyondmedispa.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="rounded-3xl bg-white p-8 shadow-sm border border-[#E5E5E5]">
                <h3 className="text-sm uppercase tracking-[0.2em] text-[#A38E78] mb-3">Visit Our Clinics</h3>
                <h2 className="text-3xl font-light text-[#2C2C2C] mb-6">Two Premium Locations</h2>
                <div className="space-y-6 text-sm text-[#555555]">
                  <div>
                    <h4 className="text-lg font-semibold text-[#2C2C2C] mb-1">London</h4>
                    <p>
                      Fourth Floor, Harvey Nichols<br />
                      109-125 Knightsbridge, London SW1X 7RJ
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#2C2C2C] mb-1">Edinburgh</h4>
                    <p>
                      Second Floor, Harvey Nichols<br />
                      30-34 St Andrew Square, Edinburgh EH2 2AD
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Locations />
      </div>

      <Footer />
    </div>
  )
}
