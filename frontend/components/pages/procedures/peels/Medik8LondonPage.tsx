import React from 'react';
import ProcedurePageTemplate from '../../ProcedurePageTemplate';

export default function Medik8LondonPage() {
  const heroData = {
    tagline: "MEDIK8 LONDON",
    title: "Professional Chemical Peels",
    subtitle: "Advanced Skin Resurfacing",
    description: "Experience the transformative power of Medik8's professional-grade chemical peels, designed specifically for London's urban environment. Our scientifically formulated treatments target multiple skin concerns while protecting against city pollutants."
  };

  const treatmentInfo = {
    duration: "45-60 minutes",
    results: "Visible improvement in 7-14 days",
    price: "From £180",
    benefits: [
      "Reduces fine lines and wrinkles",
      "Improves skin texture and tone",
      "Minimizes pore appearance",
      "Targets hyperpigmentation",
      "Stimulates collagen production",
      "Protects against environmental damage",
      "Suitable for all skin types",
      "Minimal downtime required"
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
