import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function ElectrolysisPage() {
  const hero = {
    tagline: "PERMANENT HAIR REMOVAL",
    title: "Electrolysis",
    subtitle: "FDA-Approved Permanent Solution",
    description: "Experience permanent hair removal with electrolysis. This medically certified treatment works on all hair and skin types, including blonde and white hairs, delivering highly precise, long-term results ideal for small areas.",
  };

  const treatmentInfo = {
    duration: "15–60 minutes",
    results: "Permanent hair removal achieved over a series",
    price: "Contact for pricing",
    benefits: [
      "Works on all hair/skin types",
      "Treats blonde/white hairs",
      "Highly precise",
      "Medically Certified",
      "Great for small areas",
      "Long-term results"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero}
      treatmentInfo={treatmentInfo}
    />
  );
}
