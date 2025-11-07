import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function ProfhiloPage() {
  const hero = {
    tagline: "BIO-REMODELLING",
    title: "Profhilo",
    subtitle: "Intense Hydration & Skin Quality",
    description: "Experience intense hydration and improved elasticity with Profhilo. This bio-remodelling treatment enhances skin quality in just 2 sessions, delivering a natural look with minimal downtime.",
    backgroundImage: "/profhilo-hero.png"
  };

  const treatmentInfo = {
    duration: "15–30 minutes",
    results: "Hydration/elasticity improve in 2–4 weeks; typically 2 sessions",
    price: "Contact for pricing",
    benefits: [
      "Intense hydration",
      "Improves elasticity",
      "Enhances skin quality",
      "Minimal downtime",
      "Natural look",
      "Bio-remodelling"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero}
      treatmentInfo={treatmentInfo}
    />
  );
}
