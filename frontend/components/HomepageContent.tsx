"use client";
import { useTina } from "tinacms/dist/react";
import Navigation from './Navigation'
import HeroSectionTina from './HeroSectionTina'
import WhyChooseUsSection from './WhyChooseUsSection'
import ServicesOverview from './ServicesOverview'
import GetMoreSection from './GetMoreSection'
import ProgramSection from './ProgramSection'
import ExpertMedicineSection from './ExpertMedicineSection'
import Locations from './Locations'
import FAQSection from './FAQSection'
import Footer from './Footer'

interface HomepageContentProps {
  data: any;
}

export default function HomepageContent({ data }: HomepageContentProps) {
  // Use the useTina hook for visual editing
  const { data: tinaData } = useTina({
    data: data.data,
    query: data.query,
    variables: data.variables,
  });

  // Extract homepage data from TinaCMS
  const homepage = tinaData.homepage;

  // Map TinaCMS data to component format
  const heroData = {
    title: homepage.hero?.title || '',
    titleHighlight: homepage.hero?.titleHighlight || '',
    subtitle: homepage.hero?.subtitle || '',
    description: homepage.hero?.description || '',
    videoUrl: homepage.hero?.videoUrl || '/hero-video.mp4',
    features: homepage.hero?.features || [],
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSectionTina hero={heroData} />
      <WhyChooseUsSection />
      <ServicesOverview />
      <GetMoreSection />
      <ProgramSection />
      <ExpertMedicineSection />
      <Locations />
      <FAQSection />
      <Footer />
    </div>
  );
}
