import React from 'react';
import ProcedurePageTemplate from '../../../ProcedurePageTemplate';

export default function Medik8EdinburghPage() {
  const hero = {
    tagline: "MEDIK8 EDINBURGH",
    title: "Climate-Adaptive Chemical Peels",
    subtitle: "Scottish Skin Solutions",
    description: "Specially formulated Medik8 chemical peels adapted for Edinburgh's unique climate. Our treatments address the specific challenges of Scottish weather while delivering exceptional results for healthier, more resilient skin."
  };

  const treatmentInfo = {
    duration: "45-60 minutes",
    results: "Noticeable improvement in 10-14 days",
    price: "From £165",
    benefits: [
      "Adapted for Scottish climate",
      "Strengthens skin barrier",
      "Improves hydration levels",
      "Reduces weather-related damage",
      "Evens skin tone",
      "Minimizes sensitivity",
      "Enhances natural radiance",
      "Long-lasting protection"
    ]
  };

  return (
    <ProcedurePageTemplate
      hero={hero}
      treatmentInfo={treatmentInfo}
    />
  );
}
