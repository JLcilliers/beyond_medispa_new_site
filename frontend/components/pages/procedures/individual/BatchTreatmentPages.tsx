import Navigation from '../../../Navigation'
import RussianFooter from '../../../RussianFooter'
import { Button } from '@/components/ui/button'

const treatments = [
  { name: 'Under Eye Correction', route: 'under-eye-correction', title: 'Under Eye Perfection', subtitle: 'Bright Eyes', price: '£450', duration: '45 minutes' },
  { name: 'Facial Balancing', route: 'facial-balancing', title: 'Facial Harmony', subtitle: 'Perfect Balance', price: '£500', duration: '60 minutes' },
  { name: 'Nucleofill', route: 'nucleofill', title: 'Cellular Renewal', subtitle: 'Advanced Regeneration', price: '£350', duration: '30 minutes' },
  { name: 'Fat Dissolving Injectables', route: 'fat-dissolving-injectables', title: 'Targeted Fat Reduction', subtitle: 'Sculpted Contours', price: '£400', duration: '30 minutes' },
  { name: 'Hydratite Facial', route: 'hydratite-facial', title: 'Deep Hydration', subtitle: 'Moisture Infusion', price: '£120', duration: '60 minutes' },
  { name: 'Hydro Peptide', route: 'hydro-peptide', title: 'Peptide Renewal', subtitle: 'Age Defense', price: '£130', duration: '75 minutes' },
  { name: 'PRP for Hair Growth', route: 'prp-hair-growth', title: 'Hair Restoration', subtitle: 'Natural Regrowth', price: '£400', duration: '90 minutes' },
  { name: 'Exosomes / DEC Exosomes', route: 'exosomes-dec', title: 'Regenerative Medicine', subtitle: 'Cellular Healing', price: '£500', duration: '60 minutes' },
  { name: 'ZO Facial by Zein Obagi', route: 'zo-facial-zein-obagi', title: 'Medical Grade Skincare', subtitle: 'Professional Results', price: '£200', duration: '75 minutes' },
  { name: 'Obagi Blue Radiance Peel', route: 'obagi-blue-radiance-peel', title: 'Chemical Resurfacing', subtitle: 'Radiant Transformation', price: '£180', duration: '45 minutes' }
]

const createTreatmentPage = (treatment: any) => `import Navigation from '../../../Navigation'
import RussianFooter from '../../../RussianFooter'
import { Button } from '@/components/ui/button'

const handleNavigation = (route: string) => {
  if ((window as any).navigateTo) {
    (window as any).navigateTo(route)
  }
}

export default function ${treatment.name.replace(/\s+/g, '').replace(/[^a-zA-Z0-9]/g, '')}Page() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20">
        <section className="relative min-h-screen bg-gradient-to-br from-[#111A19] to-[#284139] text-white overflow-hidden">
          <div className="absolute inset-0">
            <img src="/api/placeholder/1920/1080" alt="${treatment.name}" className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#111A19]/80 to-transparent"></div>
          </div>
          
          <div className="relative container mx-auto px-4 py-32 flex items-center min-h-screen">
            <div className="max-w-2xl">
              <p className="text-[#F8D794] text-lg mb-4 tracking-wider">WELCOME TO MAGISPA</p>
              <h1 className="text-5xl lg:text-7xl font-light leading-tight mb-8">
                Your Sanctuary of<br />
                ${treatment.title} and<br />
                <span className="text-[#F8D794]">${treatment.subtitle}</span>
              </h1>
              <Button 
                onClick={() => handleNavigation('book-treatment')}
                className="bg-transparent border-2 border-[#F8D794] text-[#F8D794] hover:bg-[#F8D794] hover:text-[#111A19] px-8 py-4 text-lg font-light tracking-wide transition-all duration-300"
              >
                BOOK CONSULTATION
              </Button>
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#80907E] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-light mb-8">Indulge in ${treatment.title}</h2>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto opacity-90">
              Step into a realm of advanced treatment technology, where ${treatment.name.toLowerCase()} delivers exceptional results. 
              At MagiSpa, we provide the finest ${treatment.name.toLowerCase()} treatments for optimal rejuvenation.
            </p>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-light text-[#111A19] mb-4">Treatment Details</h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center bg-[#F8D794]/10 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-[#111A19] mb-3">Duration</h3>
                  <p className="text-2xl font-light text-[#284139] mb-2">${treatment.duration}</p>
                  <p className="text-gray-600 text-sm">Professional treatment</p>
                </div>
                
                <div className="text-center bg-[#F8D794]/10 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-[#111A19] mb-3">Results</h3>
                  <p className="text-2xl font-light text-[#284139] mb-2">Excellent</p>
                  <p className="text-gray-600 text-sm">Visible improvement</p>
                </div>
                
                <div className="text-center bg-[#F8D794]/10 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-[#111A19] mb-3">Pricing</h3>
                  <p className="text-2xl font-light text-[#284139] mb-2">From ${treatment.price}</p>
                  <p className="text-gray-600 text-sm">Per treatment</p>
                </div>
              </div>
              
              <div className="text-center">
                <Button 
                  onClick={() => handleNavigation('book-treatment')}
                  className="bg-[#284139] hover:bg-[#111A19] text-white px-8 py-4 text-lg font-light tracking-wide"
                >
                  BOOK YOUR ${treatment.name.toUpperCase()}
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <RussianFooter />
    </div>
  )
}`

// Create individual files for each treatment
treatments.forEach(treatment => {
  const content = createTreatmentPage(treatment)
  // Note: In a real environment, these would be written to separate files
})