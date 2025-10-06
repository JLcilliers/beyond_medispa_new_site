import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function LaserHairRemovalPage() {
  const hero = {
    tagline: "LONG-TERM HAIR REDUCTION",
    title: "Laser Hair Removal",
    subtitle: "Smooth, Hair-Free Skin",
    description: "Achieve long-term hair reduction with our precision laser hair removal treatment. Fast, effective treatments deliver smooth skin results with fewer ingrown hairs, making it a cost-effective solution for permanent hair reduction.",
  };

  const treatmentInfo = {
    duration: "15–60 minutes",
    results: "Long-term hair reduction after 6–8 sessions",
    price: "Contact for pricing",
    benefits: [
      "Long-term reduction",
      "Precision targeting",
      "Fast treatments",
      "Less ingrown hairs",
      "Smooth skin",
      "Cost-effective"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero}
      treatmentInfo={treatmentInfo}
    />
  );
}
