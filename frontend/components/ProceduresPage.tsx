import Hero from './Hero'
import Testimonials from './Testimonials'
import SpaWelcome from './SpaWelcome'
import Services from './Services'
import Products from './Products'
import TreatmentJourney from './TreatmentJourney'
import SpecialOffers from './SpecialOffers'
import About from './About'
import ContactForm from './ContactForm'
import Locations from './Locations'
import FAQ from './FAQ'
import Footer from './Footer'

export default function ProceduresPage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Testimonials />
      <SpaWelcome />
      <Services />
      <Products />
      <TreatmentJourney />
      <SpecialOffers />
      <About />
      <ContactForm />
      <Locations />
      <FAQ />
      <Footer />
    </div>
  )
}