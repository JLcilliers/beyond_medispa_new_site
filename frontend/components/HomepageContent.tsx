"use client";
import { useTina } from "tinacms/dist/react";
import Navigation from './Navigation'
import HeroSectionTina from './HeroSectionTina'
import WhyChooseUsSectionTina from './WhyChooseUsSectionTina'
import ServicesOverviewTina from './ServicesOverviewTina'
import GetMoreSectionTina from './GetMoreSectionTina'
import ProgramSectionTina from './ProgramSectionTina'
import ExpertMedicineSectionTina from './ExpertMedicineSectionTina'
import LocationsTina from './LocationsTina'
import FAQSectionTina from './FAQSectionTina'
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

  const whyChooseUsData = {
    title: homepage.whyChooseUs?.title || '',
    subtitle: homepage.whyChooseUs?.subtitle || '',
    features: homepage.whyChooseUs?.features || [],
    stats: homepage.whyChooseUs?.stats || [],
  };

  const servicesData = {
    treatments: homepage.services?.treatments || [],
  };

  const getMoreData = {
    title: homepage.getMore?.title || '',
    benefits: homepage.getMore?.benefits || [],
  };

  const programData = {
    tagline: homepage.program?.tagline || '',
    title: homepage.program?.title || '',
    description: homepage.program?.description || '',
    description2: homepage.program?.description2 || '',
    images: homepage.program?.images || [],
  };

  const expertMedicineData = {
    title: homepage.expertMedicine?.title || '',
    titleHighlight: homepage.expertMedicine?.titleHighlight || '',
    subtitle: homepage.expertMedicine?.subtitle || '',
    points: homepage.expertMedicine?.points || [],
    buttonText: homepage.expertMedicine?.buttonText || '',
    buttonLink: homepage.expertMedicine?.buttonLink || '',
  };

  const locationsData = {
    title: homepage.locations?.title || '',
    subtitle: homepage.locations?.subtitle || '',
  };

  const faqData = {
    title: homepage.faq?.title || '',
    questions: homepage.faq?.questions || [],
    ctaTitle: homepage.faq?.ctaTitle || '',
    ctaDescription: homepage.faq?.ctaDescription || '',
    ctaPhone: homepage.faq?.ctaPhone || '',
    ctaPhoneText: homepage.faq?.ctaPhoneText || '',
    ctaBookText: homepage.faq?.ctaBookText || '',
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSectionTina hero={heroData} />
      <WhyChooseUsSectionTina data={whyChooseUsData} />
      <ServicesOverviewTina data={servicesData} />
      <GetMoreSectionTina data={getMoreData} />
      <ProgramSectionTina data={programData} />
      <ExpertMedicineSectionTina data={expertMedicineData} />
      <LocationsTina data={locationsData} />
      <FAQSectionTina data={faqData} />
      <Footer />
    </div>
  );
}
