import { useState, useEffect } from 'react'
import Homepage from './components/Homepage'
import AboutPage from './components/pages/AboutPage'
import ContactPage from './components/pages/ContactPage'
import LocationsPage from './components/pages/LocationsPage'
import LondonPage from './components/pages/LondonPage'
import DoctorsPage from './components/pages/DoctorsPage'
import BookTreatmentPage from './components/pages/BookTreatmentPage'
import BodyPage from './components/pages/procedures/BodyPage'
import ProceduresPage from './components/ProceduresPage'
import InjectablesPage from './components/pages/procedures/InjectablesPage'
import SkinTreatmentsPage from './components/pages/procedures/SkinTreatmentsPage'
import BodyContouringPage from './components/pages/procedures/BodyContouringPage'
import SkinConcernsPage from './components/pages/procedures/SkinConcernsPage'
import WellbeingPage from './components/pages/procedures/WellbeingPage'

// Individual treatment pages
import AntiWrinkleTreatmentPage from './components/pages/procedures/individual/AntiWrinkleTreatmentPage'
import LipEnhancementPage from './components/pages/procedures/individual/LipEnhancementPage'
import HydraFacialPage from './components/pages/procedures/individual/HydraFacialPage'
import DermalFacialFillersPage from './components/pages/procedures/individual/DermalFacialFillersPage'
import ProfhiloPage from './components/pages/procedures/individual/ProfhiloPage'
import MicroneedlingPage from './components/pages/procedures/individual/MicroneedlingPage'
import CoolSculptingPage from './components/pages/procedures/individual/CoolSculptingPage'
import LEDLightTherapyPage from './components/pages/procedures/individual/LEDLightTherapyPage'
import B12InjectionsPage from './components/pages/procedures/individual/B12InjectionsPage'
import CheekEnhancementPage from './components/pages/procedures/individual/CheekEnhancementPage'
import OxygenFacialPage from './components/pages/procedures/individual/OxygenFacialPage'
import FatFreezingPage from './components/pages/procedures/individual/FatFreezingPage'
import AntiAgeingTreatmentsPage from './components/pages/procedures/individual/AntiAgeingTreatmentsPage'
import HarmonyMassagePage from './components/pages/procedures/individual/HarmonyMassagePage'
import VanquishPage from './components/pages/procedures/individual/VanquishPage'
import NasolabialLinesPage from './components/pages/procedures/individual/NasolabialLinesPage'
import UnderEyeCorrectionPage from './components/pages/procedures/individual/UnderEyeCorrectionPage'

const routes = {
  'home': Homepage,
  'about': AboutPage,
  'contact': ContactPage,
  'locations': LocationsPage,
  'london': LondonPage,
  'doctors': DoctorsPage,
  'book-treatment': BookTreatmentPage,
  
  // Main procedure category pages
  'procedures-injectables': InjectablesPage,
  'procedures-skin-treatments': SkinTreatmentsPage,
  'procedures-body-contouring': BodyContouringPage,
  'procedures-skin-concerns': SkinConcernsPage,
  'procedures-wellbeing': WellbeingPage,
  
  // Legacy routes
  'procedures-body': BodyPage,
  'procedures-face': ProceduresPage,
  
  // Individual Injectable treatments
  'anti-wrinkle-treatment': AntiWrinkleTreatmentPage,
  'dermal-facial-fillers': DermalFacialFillersPage,
  'lip-enhancement': LipEnhancementPage,
  'cheek-enhancement': CheekEnhancementPage,
  'nasolabial-lines': NasolabialLinesPage,
  'under-eye-correction': UnderEyeCorrectionPage,
  'facial-balancing': InjectablesPage, // TODO: Create individual page
  'profhilo': ProfhiloPage,
  'nucleofill': InjectablesPage, // TODO: Create individual page
  'fat-dissolving-injectables': InjectablesPage, // TODO: Create individual page
  'b12-injections': B12InjectionsPage,
  
  // Individual Skin treatments
  'hydrafacial': HydraFacialPage,
  'hydratite-facial': SkinTreatmentsPage, // TODO: Create individual page
  'oxygen-facial': OxygenFacialPage,
  'hydro-peptide': SkinTreatmentsPage, // TODO: Create individual page
  'led-light-therapy-facial': LEDLightTherapyPage,
  'microneedling': MicroneedlingPage,
  'prp-hair-growth': SkinTreatmentsPage, // TODO: Create individual page
  'exosomes-dec': SkinTreatmentsPage, // TODO: Create individual page
  'zo-facial-zein-obagi': SkinTreatmentsPage, // TODO: Create individual page
  'obagi-blue-radiance-peel': SkinTreatmentsPage, // TODO: Create individual page
  'exilis-elite-facial': SkinTreatmentsPage, // TODO: Create individual page
  'cool-laser': SkinTreatmentsPage, // TODO: Create individual page
  'elos-ipl-skin-rejuvenation': SkinTreatmentsPage, // TODO: Create individual page
  
  // Individual Body Contouring treatments
  'coolsculpting': CoolSculptingPage,
  'coolsculpting-men': BodyContouringPage, // TODO: Create individual page
  'fat-freezing': FatFreezingPage,
  'cm-slim': BodyContouringPage, // TODO: Create individual page
  'exilis-elite-body': BodyContouringPage, // TODO: Create individual page
  'vanquish': VanquishPage,
  'buttocks-enhancement': BodyContouringPage, // TODO: Create individual page
  
  // Individual Skin Concerns treatments
  'treatments-anti-ageing': AntiAgeingTreatmentsPage,
  'treatments-acne-scarring': SkinConcernsPage, // TODO: Create individual page
  'treatments-sun-damage-pigmentation': SkinConcernsPage, // TODO: Create individual page
  'treatments-sensitive-skin': SkinConcernsPage, // TODO: Create individual page
  'mole-skin-tag-removal': SkinConcernsPage, // TODO: Create individual page
  
  // Individual Wellbeing treatments
  'anti-cellulite-alidya': WellbeingPage, // TODO: Create individual page
  'intuitive-healing': WellbeingPage, // TODO: Create individual page
  'harmony-massage': HarmonyMassagePage,
  'mesotherapy': WellbeingPage, // TODO: Create individual page
  'sarah-carolides-nutritionist': WellbeingPage, // TODO: Create individual page
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')
  
  useEffect(() => {
    // Make navigation function globally available
    (window as any).navigateTo = setCurrentPage
  }, [])
  
  const CurrentPageComponent = routes[currentPage as keyof typeof routes] || Homepage
  
  return <CurrentPageComponent />
}