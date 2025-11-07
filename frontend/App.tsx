import './global-styles.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import { MaintenancePage } from './components/pages/MaintenancePage'
import ScrollToTop from './components/ScrollToTop'
import Homepage from './components/Homepage'
import HomepageTina from './components/HomepageTina'
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
import HydrafacialEdinburghTinaPage from './components/pages/procedures/facial/hydrafacial-edinburgh/HydrafacialEdinburghTinaPage'
import HydrafacialLondonTinaPage from './components/pages/procedures/facial/hydrafacial-london/HydrafacialLondonTinaPage'
import MicroneedlingEdinburghTinaPage from './components/pages/procedures/facial/microneedling-edinburgh/MicroneedlingEdinburghTinaPage'
import MicroneedlingLondonTinaPage from './components/pages/procedures/facial/microneedling-london/MicroneedlingLondonTinaPage'
import DermaplaningTinaPage from './components/pages/procedures/facial/dermaplaning/DermaplaningTinaPage'
import ExosomeTinaPage from './components/pages/procedures/facial/exosome/ExosomeTinaPage'
import HydraTiteTinaPage from './components/pages/procedures/facial/hydra-tite/HydraTiteTinaPage'
import KeraviveTinaPage from './components/pages/procedures/facial/keravive/KeraviveTinaPage'
import LEDFacialTinaPage from './components/pages/procedures/facial/led-facial/LEDFacialTinaPage'
import OxygenFacialTinaPage from './components/pages/procedures/facial/oxygen-facial/OxygenFacialTinaPage'
import SkinScannerTinaPage from './components/pages/procedures/facial/skin-scanner/SkinScannerTinaPage'
import AntiWrinkleTinaPage from './components/pages/procedures/injectables/AntiWrinkleTinaPage'
import DermalFillerTinaPage from './components/pages/procedures/injectables/DermalFillerTinaPage'
import ProfhiloTinaPage from './components/pages/procedures/injectables/ProfhiloTinaPage'
import PolynucleotidesTinaPage from './components/pages/procedures/injectables/PolynucleotidesTinaPage'
import BiofillerEdinburghTinaPage from './components/pages/procedures/injectables/BiofillerEdinburghTinaPage'
import BiofillerLondonTinaPage from './components/pages/procedures/injectables/BiofillerLondonTinaPage'
import PRPTinaPage from './components/pages/procedures/injectables/PRPTinaPage'
import CarboxyTinaPage from './components/pages/procedures/injectables/CarboxyTinaPage'
import SclerotherapyTinaPage from './components/pages/procedures/injectables/SclerotherapyTinaPage'
import MoleRemovalTinaPage from './components/pages/procedures/injectables/MoleRemovalTinaPage'
import NeofoundTinaPage from './components/pages/procedures/injectables/NeofoundTinaPage'
import IVDripTinaPage from './components/pages/procedures/injectables/IVDripTinaPage'
import VitaminDTinaPage from './components/pages/procedures/injectables/VitaminDTinaPage'
import B12TinaPage from './components/pages/procedures/injectables/B12TinaPage'
import BiotinTinaPage from './components/pages/procedures/injectables/BiotinTinaPage'
import GlutathioneTinaPage from './components/pages/procedures/injectables/GlutathioneTinaPage'
import MagnesiumTinaPage from './components/pages/procedures/injectables/MagnesiumTinaPage'
import AllergyTinaPage from './components/pages/procedures/injectables/AllergyTinaPage'
import LaserHairRemovalTinaPage from './components/pages/procedures/body/LaserHairRemovalTinaPage'
import CoolSculptingTinaPage from './components/pages/procedures/body/CoolSculptingTinaPage'
import ExilisTinaPage from './components/pages/procedures/body/ExilisTinaPage'
import HifuTinaPage from './components/pages/procedures/body/HifuTinaPage'
import CoolLaserTinaPage from './components/pages/procedures/body/CoolLaserTinaPage'
import ElectrolysisTinaPage from './components/pages/procedures/body/ElectrolysisTinaPage'
import Medik8EdinburghTinaPage from './components/pages/procedures/peels/Medik8EdinburghTinaPage'
import Medik8LondonTinaPage from './components/pages/procedures/peels/Medik8LondonTinaPage'
import ZOEdinburghTinaPage from './components/pages/procedures/peels/ZOEdinburghTinaPage'
import ZOLondonTinaPage from './components/pages/procedures/peels/ZOLondonTinaPage'
import ObagiTinaPage from './components/pages/procedures/peels/ObagiTinaPage'
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
        <Route path="/" element={<HomepageTina />} />
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
        <Route path="/procedures/facial/hydrafacial-edinburgh" element={<HydrafacialEdinburghTinaPage />} />
        <Route path="/procedures/facial/hydrafacial-london" element={<HydrafacialLondonTinaPage />} />
        <Route path="/procedures/facial/microneedling-edinburgh" element={<MicroneedlingEdinburghTinaPage />} />
        <Route path="/procedures/facial/microneedling-london" element={<MicroneedlingLondonTinaPage />} />
        <Route path="/procedures/facial/dermaplaning" element={<DermaplaningTinaPage />} />
        <Route path="/procedures/facial/exosome" element={<ExosomeTinaPage />} />
        <Route path="/procedures/facial/hydratite" element={<HydraTiteTinaPage />} />
        <Route path="/procedures/facial/keravive" element={<KeraviveTinaPage />} />
        <Route path="/procedures/facial/led-facial" element={<LEDFacialTinaPage />} />
        <Route path="/procedures/facial/oxygen-facial" element={<OxygenFacialTinaPage />} />
        <Route path="/procedures/facial/skin-scanner" element={<SkinScannerTinaPage />} />
        <Route path="/procedures/injectables/anti-wrinkle" element={<AntiWrinkleTinaPage />} />
        <Route path="/procedures/injectables/dermal-filler" element={<DermalFillerTinaPage />} />
        <Route path="/procedures/injectables/profhilo" element={<ProfhiloTinaPage />} />
        <Route path="/procedures/injectables/polynucleotides" element={<PolynucleotidesTinaPage />} />
        <Route path="/procedures/injectables/biofiller-edinburgh" element={<BiofillerEdinburghTinaPage />} />
        <Route path="/procedures/injectables/biofiller-london" element={<BiofillerLondonTinaPage />} />
        <Route path="/procedures/injectables/prp" element={<PRPTinaPage />} />
        <Route path="/procedures/injectables/carboxy" element={<CarboxyTinaPage />} />
        <Route path="/procedures/injectables/sclerotherapy" element={<SclerotherapyTinaPage />} />
        <Route path="/procedures/injectables/mole-removal" element={<MoleRemovalTinaPage />} />
        <Route path="/procedures/injectables/neofound" element={<NeofoundTinaPage />} />
        <Route path="/procedures/injectables/iv-drip" element={<IVDripTinaPage />} />
        <Route path="/procedures/injectables/vitamin-d" element={<VitaminDTinaPage />} />
        <Route path="/procedures/injectables/b12" element={<B12TinaPage />} />
        <Route path="/procedures/injectables/biotin" element={<BiotinTinaPage />} />
        <Route path="/procedures/injectables/glutathione" element={<GlutathioneTinaPage />} />
        <Route path="/procedures/injectables/magnesium" element={<MagnesiumTinaPage />} />
        <Route path="/procedures/injectables/allergy" element={<AllergyTinaPage />} />
        <Route path="/procedures/body/laser-hair-removal" element={<LaserHairRemovalTinaPage />} />
        <Route path="/procedures/body/coolsculpting" element={<CoolSculptingTinaPage />} />
        <Route path="/procedures/body/exilis" element={<ExilisTinaPage />} />
        <Route path="/procedures/body/hifu" element={<HifuTinaPage />} />
        <Route path="/procedures/body/cool-laser" element={<CoolLaserTinaPage />} />
        <Route path="/procedures/body/electrolysis" element={<ElectrolysisTinaPage />} />
        <Route path="/procedures/peels/medik8-edinburgh" element={<Medik8EdinburghTinaPage />} />
        <Route path="/procedures/peels/medik8-london" element={<Medik8LondonTinaPage />} />
        <Route path="/procedures/peels/zo-edinburgh" element={<ZOEdinburghTinaPage />} />
        <Route path="/procedures/peels/zo-london" element={<ZOLondonTinaPage />} />
        <Route path="/procedures/peels/obagi" element={<ObagiTinaPage />} />
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
