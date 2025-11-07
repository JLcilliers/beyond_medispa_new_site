import Navigation from '../Navigation'
import Footer from '../Footer'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone, Award, Heart, Shield, Users, Sparkles, BookOpenCheck, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

const expertiseHighlights = [
  {
    icon: Award,
    title: 'Specialist in clinical trichology',
    description:
      'Bridgeen brings more than 20 years of hands-on experience supporting hair and scalp health for men and women across the UK.'
  },
  {
    icon: Heart,
    title: 'Compassionate, discreet guidance',
    description:
      'Every consultation is private, empathetic, and focused on restoring confidence with solutions that respect your lifestyle.'
  },
  {
    icon: Shield,
    title: 'Advanced regenerative options',
    description:
      'From PRP and polynucleotides to biofiller and bespoke integration systems, each plan blends science and artistry for long-term results.'
  },
  {
    icon: Users,
    title: 'Support for every journey',
    description:
      'Whether you are noticing early thinning, recovering post-illness, or managing alopecia, your treatment path is personalised from day one.'
  },
  {
    icon: Sparkles,
    title: 'Results that feel like you',
    description:
      'Bridgeen focuses on natural-looking density, scalp comfort, and healthy regrowth so you leave feeling like yourself again.'
  }
]

const journeySteps = [
  {
    title: '30-minute private consultation',
    description:
      'A focused one-to-one appointment at Beyond MediSpa Edinburgh that combines scalp analysis, diagnostic insight, and tailored recommendations. Investment: GBP 100.'
  },
  {
    title: 'Personalised treatment planning',
    description:
      'Bridgeen maps the right pathway for your goals, from regenerative injectables and integration systems to at-home programmes crafted just for you.'
  },
  {
    title: 'Ongoing support and aftercare',
    description:
      'You will leave with clear next steps, maintenance guidance, and continued access to Bridgeen’s expertise so your results keep progressing.'
  }
]

const clarityPoints = [
  'Understand the root causes of your hair loss with expert diagnostics.',
  'Explore non-surgical solutions including PRP, polynucleotides, and biofiller.',
  'Build a confident plan with realistic timelines, maintenance, and long-term support.'
]

const galleryImages = [
  {
    src: '/About - Clinic Pages/Beyond Desk.webp',
    alt: 'Bridgeen King consultation area inside Beyond MediSpa Edinburgh'
  },
  {
    src: '/About - Clinic Pages/Edinburgh.jpg',
    alt: 'Beyond MediSpa Edinburgh exterior at Harvey Nichols'
  },
  {
    src: '/About - Clinic Pages/skin-care-woman-beauty-face-happy-smile-2025-02-10-09-22-28-utc (1).jpg',
    alt: 'Relaxing treatment space inside Beyond MediSpa'
  },
  {
    src: '/About - Clinic Pages/London.jpg',
    alt: 'Beyond MediSpa London Knightsbridge interior'
  }
]

const testimonials = [
  {
    quote:
      '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean arcu mauris, cursus laoreet mi ac, sollicitudin tincidunt felis.”',
    name: 'Client Name'
  },
  {
    quote:
      '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean arcu mauris, cursus laoreet mi ac, sollicitudin tincidunt felis.”',
    name: 'Client Name'
  },
  {
    quote:
      '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean arcu mauris, cursus laoreet mi ac, sollicitudin tincidunt felis.”',
    name: 'Client Name'
  }
]

const blogPosts = [
  {
    image: '/About - Clinic Pages/night-view-from-calton-hill-to-edinburgh-2025-03-24-03-23-17-utc.jpg',
    title: 'Lorem ipsum dolor sit amet consectetur',
    href: '#'
  },
  {
    image: '/About - Clinic Pages/tower-bridge-the-shard-and-city-hall-wapping-lo-2024-10-22-13-11-09-utc.jpg',
    title: 'Lorem ipsum dolor sit amet consectetur',
    href: '#'
  },
  {
    image: '/About - Clinic Pages/image-of-shirtless-asian-girl-smiling-and-looking-2025-02-14-00-28-56-utc (2).jpg',
    title: 'Lorem ipsum dolor sit amet consectetur',
    href: '#'
  }
]

export default function BridgeenKingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="pt-20">
        <section className="py-20 bg-gradient-to-br from-[#1D1D20] via-[#2E2E33] to-[#1D1D20] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl lg:text-6xl font-light mb-6">
                Bridgeen King <span className="text-[#C6A77D]">at Beyond MediSpa</span>
              </h1>
              <h3 className="text-2xl font-light text-white/80 mb-8">
                Real solutions for hair loss, backed by expertise and compassion
              </h3>
              <p className="text-xl text-white/90 leading-relaxed mb-12">
                Struggling with hair thinning, scalp irritation, or alopecia? Book a private consultation with award-winning
                trichologist Bridgeen King &mdash; available exclusively at Beyond MediSpa Edinburgh. Every appointment combines
                scientific insight with thoughtful care so you can move forward with clarity and confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/book-treatment">
                  <Button className="bg-[#C6A77D] hover:bg-[#A38E78] text-white px-8 py-4 text-lg">
                    Book Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <a href="tel:02072018595">
                  <Button
                    variant="outline"
                    className="border-2 border-[#C6A77D] text-[#C6A77D] hover:bg-[#C6A77D] hover:text-white px-8 py-4 text-lg"
                  >
                    <Phone className="mr-2 w-5 h-5" />
                    020 7201 8595
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-[#FAF8F5] via-[#FFFFFF] to-[#F5F1EC]">
          <div className="container mx-auto px-4">
            <h3 className="text-center text-xl text-[#777777] mb-8">
              Tried and Trusted By Top Aesthetic Professionals
            </h3>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h4 className="text-sm text-[#A38E78] font-semibold tracking-wider mb-4">EXPERT-LED HAIR LOSS SUPPORT</h4>
                <h2 className="text-4xl lg:text-5xl font-light text-[#333333] mb-6">
                  Meet <span className="text-[#A38E78]">Bridgeen King</span> at Beyond MediSpa
                </h2>
                <p className="text-lg text-[#777777] leading-relaxed mb-4">
                  Bridgeen King is an award-winning trichologist with decades of experience helping clients reclaim confidence
                  through personalised hair and scalp care. From stress-related shedding to alopecia and post-treatment thinning,
                  every consultation blends clinical precision with compassionate support.
                </p>
                <p className="text-lg text-[#777777] leading-relaxed">
                  Her clinic days at Beyond MediSpa Edinburgh provide 30-minute, one-to-one consultations that combine scalp
                  analysis, diagnostic insight, and tailored treatment planning. Many journeys include regenerative therapies such
                  as PRP, polynucleotides, or bespoke integration systems designed to match your lifestyle.
                </p>
                <div className="mt-6 grid gap-3 text-[#555555]">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-[#A38E78]" />
                    <span>30-minute private consultation &mdash; GBP 100</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-[#A38E78]" />
                    <span>Custom plans may include PRP, polynucleotides, biofiller, or integration systems</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-[#A38E78]" />
                    <span>Limited availability, exclusively at our Edinburgh clinic</span>
                  </div>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link to="/book-treatment">
                    <Button className="bg-[#A38E78] hover:bg-[#8B7A67] text-white px-6 py-3">Book Now</Button>
                  </Link>
                  <a
                    href="tel:02072018595"
                    className="inline-flex items-center justify-center rounded-lg border border-[#A38E78] px-6 py-3 text-[#A38E78] hover:bg-[#A38E78] hover:text-white transition-colors"
                  >
                    Call 020 7201 8595
                  </a>
                </div>
              </div>
              <div>
                <div className="overflow-hidden rounded-3xl shadow-xl">
                  <img
                    src="/About - Clinic Pages/skin-care-woman-beauty-face-happy-smile-2025-02-10-09-22-28-utc (1).jpg"
                    alt="Bridgeen King consultation at Beyond MediSpa"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-[#FAF8F5] via-[#FFFFFF] to-[#F5F1EC]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h4 className="text-sm text-[#A38E78] font-semibold tracking-wider mb-4">
                PERSONAL PLANS. PROVEN SOLUTIONS.
              </h4>
              <h2 className="text-4xl lg:text-5xl font-light text-[#333333] mb-6">
                Your Journey Starts <span className="text-[#A38E78]">with Insight &amp; Support</span>
              </h2>
              <p className="text-lg text-[#777777] max-w-3xl mx-auto">
                From identifying the root cause of hair loss to mapping advanced regenerative options, Bridgeen’s mission is to
                restore your confidence with solutions that genuinely fit your life.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {journeySteps.map((step) => (
                <div
                  key={step.title}
                  className="bg-white rounded-2xl border border-[#E5E5E5] p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-[#333333] mb-3">{step.title}</h3>
                  <p className="text-[#777777] leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h4 className="text-sm text-[#A38E78] font-semibold tracking-wider mb-4">
                SPECIALIST IN HAIR LOSS
              </h4>
              <h2 className="text-4xl lg:text-5xl font-light text-[#333333] mb-6">
                Expertise You Can <span className="text-[#A38E78]">Trust</span>
              </h2>
              <p className="text-lg text-[#777777] max-w-3xl mx-auto">
                Every consultation is private, supportive, and rooted in clinical expertise. Explore your options with clarity,
                from regenerative therapies to bespoke integration systems designed for lasting results.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {expertiseHighlights.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="bg-gradient-to-br from-[#FAF8F5] to-[#FFFFFF] rounded-2xl p-8 border border-[#E5E5E5]">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#A38E78]/15">
                      <Icon className="h-6 w-6 text-[#A38E78]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#333333] mb-3">{item.title}</h3>
                    <p className="text-[#777777] leading-relaxed text-sm">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-[#A38E78] to-[#8B7A67] text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h4 className="text-sm text-white/80 font-semibold tracking-wider mb-4">BOOK YOUR APPOINTMENT TODAY</h4>
              <h2 className="text-4xl lg:text-5xl font-light mb-6">
                Secure Your Consultation with <span className="text-white font-medium">Bridgeen King</span>
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                Appointments fill quickly. Take the first step toward healthier hair, scalp comfort, and a long-term plan that
                restores your confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/book-treatment">
                  <Button size="lg" className="bg-white text-[#A38E78] hover:bg-white/90 px-8 py-4 text-lg">
                    Book Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <a href="tel:02072018595">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-[#A38E78] px-8 py-4 text-lg"
                  >
                    <Phone className="mr-2 w-5 h-5" />
                    Call 020 7201 8595
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h4 className="text-sm text-[#A38E78] font-semibold tracking-wider mb-4">SEE THE DIFFERENCE</h4>
              <h2 className="text-4xl lg:text-5xl font-light text-[#333333] mb-6">Gallery</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {galleryImages.map((image) => (
                <div key={image.alt} className="overflow-hidden rounded-3xl shadow-lg">
                  <img src={image.src} alt={image.alt} className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-[#FAF8F5] via-[#FFFFFF] to-[#F5F1EC]">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h4 className="text-sm text-[#A38E78] font-semibold tracking-wider mb-4">
                  UNDERSTANDING HAIR LOSS
                </h4>
                <h2 className="text-4xl lg:text-5xl font-light text-[#333333] mb-6">
                  Clarity, <span className="text-[#A38E78]">Not Guesswork</span>
                </h2>
                <p className="text-lg text-[#777777] leading-relaxed mb-6">
                  Hair loss can feel overwhelming, especially when the cause is not obvious. Working in collaboration with
                  Beyond MediSpa, Bridgeen combines advanced scalp analysis with a compassionate, clinical approach so you leave
                  with answers and a plan that makes sense.
                </p>
                <ul className="space-y-3 text-[#555555]">
                  {clarityPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <BookOpenCheck className="w-5 h-5 text-[#A38E78] mt-1" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link to="/book-treatment">
                    <Button className="bg-[#A38E78] hover:bg-[#8B7A67] text-white px-6 py-3">
                      Book Your Consultation Today
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="overflow-hidden rounded-3xl shadow-xl">
                <img
                  src="/About - Clinic Pages/kkuhg-14-2025-02-10-05-08-22-utc (1).jpg"
                  alt="Hair loss consultation at Beyond MediSpa"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="mt-10">
              <a
                href="https://www.instagram.com/beyondmedispa/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#A38E78] hover:text-[#8B7A67] transition-colors"
              >
                Follow Bridgeen &amp; Beyond MediSpa on Instagram
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="overflow-hidden rounded-3xl shadow-xl">
                  <img
                    src="/About - Clinic Pages/female-at-cosmetic-beauty-spa-clinic-has-facial-ha-2024-10-18-17-49-09-utc (2).jpg"
                    alt="Bridgeen King supporting hair confidence"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div>
                <h4 className="text-sm text-[#A38E78] font-semibold tracking-wider mb-4">
                  AWARD-WINNING TRICHOLOGIST
                </h4>
                <h2 className="text-4xl lg:text-5xl font-light text-[#333333] mb-6">
                  Meet <span className="text-[#A38E78]">Bridgeen King</span>
                </h2>
                <p className="text-lg text-[#777777] leading-relaxed mb-6">
                  Bridgeen has built her reputation on one goal: helping people feel like themselves again. With over two
                  decades of experience in hair loss, scalp health, and integration systems, her work blends science, artistry,
                  and empathy. Clinic days at Beyond MediSpa offer more than a quick fix; they deliver meaningful answers,
                  tailor-made treatment plans, and care that sees the whole person.
                </p>
                <Link to="/book-treatment">
                  <Button className="bg-[#A38E78] hover:bg-[#8B7A67] text-white px-6 py-3">
                    Book Your Consultation Today
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-[#FAF8F5] via-[#FFFFFF] to-[#F5F1EC]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h4 className="text-sm text-[#A38E78] font-semibold tracking-wider mb-4">TESTIMONIALS</h4>
              <h2 className="text-4xl lg:text-5xl font-light text-[#333333] mb-6">
                What People <span className="text-[#A38E78]">Say About Bridgeen</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-3xl border border-[#E5E5E5] p-6 shadow-sm">
                  <p className="text-[#555555] italic leading-relaxed mb-4">{testimonial.quote}</p>
                  <span className="text-sm font-semibold text-[#A38E78]">{testimonial.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h4 className="text-sm text-[#A38E78] font-semibold tracking-wider mb-4">BOOK YOUR APPOINTMENT TODAY</h4>
            <h2 className="text-4xl lg:text-5xl font-light text-[#333333] mb-6">
              Secure Your Consultation with <span className="text-[#A38E78]">Bridgeen King</span>
            </h2>
            <p className="text-xl text-[#777777] max-w-3xl mx-auto mb-8">
              Appointments fill quickly. Take the first step toward healthier hair and discover a plan that truly supports your
              goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book-treatment">
                <Button size="lg" className="bg-[#A38E78] hover:bg-[#8B7A67] text-white px-8 py-4 text-lg">
                  Book Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a
                href="tel:02072018595"
                className="inline-flex items-center justify-center rounded-lg border border-[#A38E78] px-8 py-4 text-lg text-[#A38E78] hover:bg-[#A38E78] hover:text-white transition-colors"
              >
                Call 020 7201 8595
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-[#FAF8F5] via-[#FFFFFF] to-[#F5F1EC]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h4 className="text-sm text-[#A38E78] font-semibold tracking-wider mb-4">THE BEYOND JOURNAL</h4>
              <h2 className="text-4xl lg:text-5xl font-light text-[#333333] mb-6">
                Explore Our <span className="text-[#A38E78]">Blog</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <a
                  key={post.title}
                  href={post.href}
                  className="group bg-white rounded-3xl border border-[#E5E5E5] overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-[#333333] group-hover:text-[#A38E78] transition-colors">
                      {post.title}
                    </h3>
                    <span className="mt-3 inline-flex items-center gap-2 text-sm text-[#A38E78]">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16">
              <div className="bg-gradient-to-br from-[#FAF8F5] via-[#FFFFFF] to-[#F5F1EC] rounded-3xl p-8 border border-[#E5E5E5]">
                <h4 className="text-sm text-[#A38E78] font-semibold tracking-wider mb-4">REACH OUT NOW</h4>
                <h2 className="text-3xl lg:text-4xl font-light text-[#333333] mb-6">
                  Get In <span className="text-[#A38E78]">Touch</span>
                </h2>
                <div className="space-y-4 text-[#555555]">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#A38E78] mt-1" />
                    <div>
                      <p className="text-sm text-[#777777] mb-1">Phone</p>
                      <a href="tel:02072018595" className="text-[#333333] hover:text-[#A38E78]">
                        020 7201 8595
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#A38E78] mt-1" />
                    <div>
                      <p className="text-sm text-[#777777] mb-1">Email</p>
                      <a href="mailto:edinburgh@beyondmedispa.co.uk" className="text-[#333333] hover:text-[#A38E78]">
                        edinburgh@beyondmedispa.co.uk
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#FAF8F5] via-[#FFFFFF] to-[#F5F1EC] rounded-3xl p-8 border border-[#E5E5E5]">
                <h4 className="text-sm text-[#A38E78] font-semibold tracking-wider mb-4">OUR LOCATIONS</h4>
                <h2 className="text-3xl lg:text-4xl font-light text-[#333333] mb-6">
                  Visit Beyond <span className="text-[#A38E78]">MediSpa</span>
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-[#333333] mb-2">London</h3>
                    <p className="text-sm text-[#777777]">
                      Fourth Floor, Harvey Nichols, 109-125 Knightsbridge, London SW1X 7RJ<br />
                      Phone: 0345 548 1151<br />
                      Email: london@beyondmedispa.co.uk
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#333333] mb-2">Edinburgh</h3>
                    <p className="text-sm text-[#777777]">
                      Second Floor, Harvey Nichols, 30-34 St Andrew Square, Edinburgh EH2 2AD<br />
                      Phone: 0345 548 1151<br />
                      Email: edinburgh@beyondmedispa.co.uk
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
