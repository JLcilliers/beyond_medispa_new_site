"use client";
import { useTina } from "tinacms/dist/react";
import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

interface AntiWrinkleContentProps {
  data: any;
}

export default function AntiWrinkleContent({ data }: AntiWrinkleContentProps) {
  // Use the useTina hook for visual editing
  const { data: tinaData } = useTina({
    data: data.data,
    query: data.query,
    variables: data.variables,
  });

  // Extract treatment data from TinaCMS
  const treatment = tinaData.treatment;

  // Map TinaCMS data to ProcedurePageTemplate format
  const hero = {
    tagline: treatment.hero?.tagline || "",
    title: treatment.hero?.title || treatment.title,
    subtitle: treatment.hero?.subtitle || "",
    description: treatment.hero?.description || "",
    backgroundImage: treatment.hero?.backgroundImage || undefined,
  };

  const treatmentInfo = treatment.treatmentInfo ? {
    duration: treatment.treatmentInfo.duration || undefined,
    results: treatment.treatmentInfo.results || undefined,
    price: treatment.treatmentInfo.price || undefined,
    benefits: treatment.treatmentInfo.benefits || undefined,
  } : undefined;

  return (
    <ProcedurePageTemplate
      hero={hero}
      treatmentInfo={treatmentInfo}
      translations={treatment.translations}
    />
  );
}
