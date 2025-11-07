import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function LEDFacialPage() {
  const hero = {
    tagline: "LIGHT THERAPY TREATMENT",
    title: "LED Facial",
    subtitle: "Advanced Light-Based Skin Therapy",
    description: "Harness the power of LED light therapy to reduce inflammation, combat acne, and stimulate collagen production. This gentle, non-invasive treatment speeds healing and improves skin tone with no downtime.",
  };

  const treatmentInfo = {
    duration: "20–30 minutes",
    results: "Cumulative benefits over 4–6 weeks",
    price: "Contact for pricing",
    benefits: [
      "Reduces inflammation",
      "Helps acne",
      "Stimulates collagen",
      "Speeds healing",
      "Improves tone",
      "No downtime"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero}
      treatmentInfo={treatmentInfo}
    />
  );
}
