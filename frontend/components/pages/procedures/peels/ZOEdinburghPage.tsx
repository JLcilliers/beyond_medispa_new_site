import React from 'react';
import ProcedurePageTemplate from '../../../ProcedurePageTemplate';

export default function ZOEdinburghPage() {
  const hero = {
    tagline: "ZO SKIN HEALTH EDINBURGH",
    title: "Climate-Adapted Peels",
    subtitle: "Scottish Weather Solutions",
    description: "ZO Skin Health's advanced chemical peels specially adapted for Edinburgh's variable climate. These treatments strengthen and protect your skin while addressing the unique challenges of Scottish weather patterns."
  };

  const treatmentInfo = {
    duration: "50-65 minutes",
    results: "Improvement visible in 1-2 weeks",
    price: "From £180",
    benefits: [
      "Climate-specific formulation",
      "Weather resistance building",
      "Moisture barrier enhancement",
      "Wind and cold protection",
      "Seasonal skin adaptation",
      "Improved texture and tone",
      "Reduced sensitivity",
      "Year-round skin health"
    ]
  };

  return (
    <ProcedurePageTemplate
      hero={hero}
      treatmentInfo={treatmentInfo}

    />
  );
}
