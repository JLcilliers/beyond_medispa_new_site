import React from 'react';
import ProcedurePageTemplate from '../../ProcedurePageTemplate';

export default function ObagiPage() {
  const heroData = {
    tagline: "OBAGI PROFESSIONAL",
    title: "Physician-Strength Peels",
    subtitle: "Medical-Grade Transformation",
    description: "Harness the power of Obagi's physician-strength chemical peels for dramatic skin transformation. These medical-grade treatments are designed to address severe skin concerns and deliver professional results under expert supervision."
  };

  const treatmentInfo = {
    duration: "60-75 minutes",
    results: "Significant improvement in 2-4 weeks",
    price: "From £220",
    benefits: [
      "Medical-grade formulation",
      "Treats severe photoaging",
      "Reduces deep wrinkles",
      "Corrects melasma and age spots",
      "Improves acne scarring",
      "Stimulates cellular renewal",
      "Professional supervision",
      "Dramatic, lasting results"
    ]
  };

  return (
    <ProcedurePageTemplate
      heroData={heroData}
      treatmentInfo={treatmentInfo}
      procedureType="peel"
    />
  );
}
