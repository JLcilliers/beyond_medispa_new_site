import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function ObagiPage() {
  const hero = {
    tagline: "MEDICAL-GRADE SKINCARE",
    title: "Obagi Treatments",
    subtitle: "Professional Skin Transformation",
    description: "Transform your skin with medical-grade Obagi treatments. Target hyperpigmentation, improve texture and tone, support acne control, and achieve anti-aging benefits with brightening formulations.",
  };

  const treatmentInfo = {
    duration: "30–60 minutes",
    results: "Improvements in 1–4 weeks for peels; ongoing with homecare",
    price: "Contact for pricing",
    benefits: [
      "Targets hyperpigmentation",
      "Improves texture & tone",
      "Supports acne control",
      "Anti-ageing",
      "Brightens",
      "Medical-grade formulations"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero}
      treatmentInfo={treatmentInfo}
    />
  );
}
