import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function PRPPage() {
  const hero = {
    tagline: "PLATELET-RICH PLASMA",
    title: "PRP Treatment",
    subtitle: "Natural Skin & Hair Rejuvenation",
    description: "Harness your body's natural healing power with PRP treatment. Using your own platelets, this therapy stimulates collagen, improves texture, supports hair growth, and aids healing with minimal downtime.",
  };

  const treatmentInfo = {
    duration: "45–60 minutes",
    results: "Texture/quality improves over 4–8 weeks; hair over months",
    price: "Contact for pricing",
    benefits: [
      "Uses your own platelets",
      "Stimulates collagen",
      "Improves texture",
      "Supports hair growth",
      "Minimal downtime",
      "Aids healing"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero}
      treatmentInfo={treatmentInfo}
    />
  );
}
