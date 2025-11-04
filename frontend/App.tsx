import './global-styles.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import { MaintenancePage } from './components/pages/MaintenancePage'
import ScrollToTop from './components/ScrollToTop'
import Homepage from './components/Homepage'
import AboutPage from './components/pages/AboutPage'
import ContactPage from './components/pages/ContactPage'
import DoctorsPage from './components/pages/DoctorsPage'
import LocationsPage from './components/pages/LocationsPage'
import LondonPage from './components/pages/LondonPage'
import EdinburghPage from './components/pages/EdinburghPage'
import BookTreatmentPage from './components/pages/BookTreatmentPage'
import FillersLondonPage from './components/pages/locations/FillersLondonPage'
import FacialPage from './components/pages/procedures/FacialPage'
import InjectablesPage from './components/pages/procedures/InjectablesPage'
import BodyPage from './components/pages/procedures/BodyPage'
import PeelsPage from './components/pages/procedures/PeelsPage'
import HydrafacialEdinburghPage from './components/pages/procedures/facial/HydrafacialEdinburghPage'
import HydrafacialLondonPage from './components/pages/procedures/facial/HydrafacialLondonPage'
import MicroneedlingEdinburghPage from './components/pages/procedures/facial/MicroneedlingEdinburghPage'
import MicroneedlingLondonPage from './components/pages/procedures/facial/MicroneedlingLondonPage'
import DermaplaningPage from './components/pages/procedures/facial/DermaplaningPage'
import ExosomePage from './components/pages/procedures/facial/ExosomePage'
import HydraTitePage from './components/pages/procedures/facial/HydraTitePage'
import KeravivePage from './components/pages/procedures/facial/KeravivePage'
import LEDFacialPage from './components/pages/procedures/facial/LEDFacialPage'
import OxygenFacialPage from './components/pages/procedures/facial/OxygenFacialPage'
import SkinScannerPage from './components/pages/procedures/facial/SkinScannerPage'
import AntiWrinklePage from './components/pages/procedures/injectables/AntiWrinklePage'
import DermalFillerPage from './components/pages/procedures/injectables/DermalFillerPage'
import ProfhiloPage from './components/pages/procedures/injectables/ProfhiloPage'
import PolynucleotidesPage from './components/pages/procedures/injectables/PolynucleotidesPage'
import BiofillerEdinburghPage from './components/pages/procedures/injectables/BiofillerEdinburghPage'
import BiofillerLondonPage from './components/pages/procedures/injectables/BiofillerLondonPage'
import PRPPage from './components/pages/procedures/injectables/PRPPage'
import CarboxyPage from './components/pages/procedures/injectables/CarboxyPage'
import SclerotherapyPage from './components/pages/procedures/injectables/SclerotherapyPage'
import MoleRemovalPage from './components/pages/procedures/injectables/MoleRemovalPage'
import NeofoundPage from './components/pages/procedures/injectables/NeofoundPage'
import IVDripPage from './components/pages/procedures/injectables/IVDripPage'
import VitaminDPage from './components/pages/procedures/injectables/VitaminDPage'
import B12Page from './components/pages/procedures/injectables/B12Page'
import BiotinPage from './components/pages/procedures/injectables/BiotinPage'
import GlutathionePage from './components/pages/procedures/injectables/GlutathionePage'
import MagnesiumPage from './components/pages/procedures/injectables/MagnesiumPage'
import AllergyPage from './components/pages/procedures/injectables/AllergyPage'
import LaserHairRemovalPage from './components/pages/procedures/body/LaserHairRemovalPage'
import CoolSculptingPage from './components/pages/procedures/body/CoolSculptingPage'
import ExilisPage from './components/pages/procedures/body/ExilisPage'
import HifuPage from './components/pages/procedures/body/HifuPage'
import CoolLaserPage from './components/pages/procedures/body/CoolLaserPage'
import ElectrolysisPage from './components/pages/procedures/body/ElectrolysisPage'
import Medik8EdinburghPage from './components/pages/procedures/peels/Medik8EdinburghPage'
import Medik8LondonPage from './components/pages/procedures/peels/Medik8LondonPage'
import ZOEdinburghPage from './components/pages/procedures/peels/ZOEdinburghPage'
import ZOLondonPage from './components/pages/procedures/peels/ZOLondonPage'
import ObagiPage from './components/pages/procedures/peels/ObagiPage'
import LondonBodyPage from './components/pages/locations/LondonBodyPage'
import EdinburghBodyPage from './components/pages/locations/EdinburghBodyPage'
import LondonPeelsPage from './components/pages/locations/LondonPeelsPage'
import EdinburghPeelsPage from './components/pages/locations/EdinburghPeelsPage'
import LondonFacialPage from './components/pages/locations/LondonFacialPage'
import EdinburghFacialPage from './components/pages/locations/EdinburghFacialPage'
import LondonInjectablesPage from './components/pages/locations/LondonInjectablesPage'
import EdinburghInjectablesPage from './components/pages/locations/EdinburghInjectablesPage'

function AppRoutes() {
  const { isAuthenticated } = useAuth();

  // Show maintenance page if not authenticated
  if (!isAuthenticated) {
    return <MaintenancePage />;
  }

  // Show all routes if authenticated
  return (
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/london" element={<LondonPage />} />
        <Route path="/edinburgh" element={<EdinburghPage />} />
        <Route path="/book-treatment" element={<BookTreatmentPage />} />
        <Route path="/procedures/facial" element={<FacialPage />} />
        <Route path="/procedures/injectables" element={<InjectablesPage />} />
        <Route path="/procedures/body" element={<BodyPage />} />
        <Route path="/procedures/peels" element={<PeelsPage />} />
        <Route path="/procedures/facial/hydrafacial-edinburgh" element={<HydrafacialEdinburghPage />} />
        <Route path="/procedures/facial/hydrafacial-london" element={<HydrafacialLondonPage />} />
        <Route path="/procedures/facial/microneedling-edinburgh" element={<MicroneedlingEdinburghPage />} />
        <Route path="/procedures/facial/microneedling-london" element={<MicroneedlingLondonPage />} />
        <Route path="/procedures/facial/dermaplaning" element={<DermaplaningPage />} />
        <Route path="/procedures/facial/exosome" element={<ExosomePage />} />
        <Route path="/procedures/facial/hydratite" element={<HydraTitePage />} />
        <Route path="/procedures/facial/keravive" element={<KeravivePage />} />
        <Route path="/procedures/facial/led-facial" element={<LEDFacialPage />} />
        <Route path="/procedures/facial/oxygen-facial" element={<OxygenFacialPage />} />
        <Route path="/procedures/facial/skin-scanner" element={<SkinScannerPage />} />
        <Route path="/procedures/injectables/anti-wrinkle" element={<AntiWrinklePage />} />
        <Route path="/procedures/injectables/dermal-filler" element={<DermalFillerPage />} />
        <Route path="/procedures/injectables/profhilo" element={<ProfhiloPage />} />
        <Route path="/procedures/injectables/polynucleotides" element={<PolynucleotidesPage />} />
        <Route path="/procedures/injectables/biofiller-edinburgh" element={<BiofillerEdinburghPage />} />
        <Route path="/procedures/injectables/biofiller-london" element={<BiofillerLondonPage />} />
        <Route path="/procedures/injectables/prp" element={<PRPPage />} />
        <Route path="/procedures/injectables/carboxy" element={<CarboxyPage />} />
        <Route path="/procedures/injectables/sclerotherapy" element={<SclerotherapyPage />} />
        <Route path="/procedures/injectables/mole-removal" element={<MoleRemovalPage />} />
        <Route path="/procedures/injectables/neofound" element={<NeofoundPage />} />
        <Route path="/procedures/injectables/iv-drip" element={<IVDripPage />} />
        <Route path="/procedures/injectables/vitamin-d" element={<VitaminDPage />} />
        <Route path="/procedures/injectables/b12" element={<B12Page />} />
        <Route path="/procedures/injectables/biotin" element={<BiotinPage />} />
        <Route path="/procedures/injectables/glutathione" element={<GlutathionePage />} />
        <Route path="/procedures/injectables/magnesium" element={<MagnesiumPage />} />
        <Route path="/procedures/injectables/allergy" element={<AllergyPage />} />
        <Route path="/procedures/body/laser-hair-removal" element={<LaserHairRemovalPage />} />
        <Route path="/procedures/body/coolsculpting" element={<CoolSculptingPage />} />
        <Route path="/procedures/body/exilis" element={<ExilisPage />} />
        <Route path="/procedures/body/hifu" element={<HifuPage />} />
        <Route path="/procedures/body/cool-laser" element={<CoolLaserPage />} />
        <Route path="/procedures/body/electrolysis" element={<ElectrolysisPage />} />
        <Route path="/procedures/peels/medik8-edinburgh" element={<Medik8EdinburghPage />} />
        <Route path="/procedures/peels/medik8-london" element={<Medik8LondonPage />} />
        <Route path="/procedures/peels/zo-edinburgh" element={<ZOEdinburghPage />} />
        <Route path="/procedures/peels/zo-london" element={<ZOLondonPage />} />
        <Route path="/procedures/peels/obagi" element={<ObagiPage />} />
        <Route path="/london/body" element={<LondonBodyPage />} />
        <Route path="/edinburgh/body" element={<EdinburghBodyPage />} />
        <Route path="/london/peels" element={<LondonPeelsPage />} />
        <Route path="/edinburgh/peels" element={<EdinburghPeelsPage />} />
        <Route path="/london/facial" element={<LondonFacialPage />} />
        <Route path="/edinburgh/facial" element={<EdinburghFacialPage />} />
        <Route path="/london/injectables" element={<LondonInjectablesPage />} />
        <Route path="/london/fillers" element={<FillersLondonPage />} />
        <Route path="/edinburgh/injectables" element={<EdinburghInjectablesPage />} />
    </Routes>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <BrowserRouter>
          <ScrollToTop />
          <AppRoutes />
        </BrowserRouter>
      </LanguageProvider>
    </AuthProvider>
  );
}
