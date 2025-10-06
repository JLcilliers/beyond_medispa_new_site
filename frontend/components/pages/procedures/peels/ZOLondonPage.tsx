import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function ZOLondonPage() {
  const hero = {
    tagline: "PROFESSIONAL-STRENGTH SKINCARE",
    title: "ZO Skin Health London",
    subtitle: "Advanced Skin Solutions",
    description: "Experience ZO Skin Health professional treatments in London. Improve pigmentation, refine texture and pores, achieve anti-aging results, and control acne/oil with hydrating, calming formulations.",
  };

  const treatmentInfo = {
    duration: "30–60 minutes",
    results: "Peel/facial results in days to weeks; longer-term with program use",
    price: "Contact for pricing",
    benefits: [
      "Improves pigmentation",
      "Refines texture & pores",
      "Anti-ageing",
      "Supports acne/oil control",
      "Hydrates & calms",
      "Professional-strength"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero}
      treatmentInfo={treatmentInfo}
    />
  );
}
