import React from 'react';
import ProcedurePageTemplate from '../../ProcedurePageTemplate';

export default function ZOLondonPage() {
  const heroData = {
    tagline: "ZO SKIN HEALTH LONDON",
    title: "Environmental Protection Peels",
    subtitle: "Urban Skin Defense",
    description: "ZO Skin Health's innovative chemical peels specifically designed for London's demanding urban environment. These treatments combine powerful resurfacing with environmental protection for optimal skin health in the city."
  };

  const treatmentInfo = {
    duration: "50-65 minutes",
    results: "Visible changes in 1-2 weeks",
    price: "From £195",
    benefits: [
      "Environmental damage protection",
      "Anti-pollution technology",
      "Improves skin resilience",
      "Reduces urban stress signs",
      "Enhances natural glow",
      "Targets multiple concerns",
      "Scientifically proven",
      "Customizable intensity"
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
