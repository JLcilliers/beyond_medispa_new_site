import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function HydraTitePage() {
  const hero = {
    tagline: "DEEP CLEANSING & TIGHTENING",
    title: "HydraTite",
    subtitle: "Advanced Hydration & Firming Treatment",
    description: "Experience the ultimate combination of deep cleansing, hydration, and skin tightening. HydraTite delivers immediate results with a clean glow and firmer feel, while stimulating collagen for long-term benefits.",
  };

  const treatmentInfo = {
    duration: "60 minutes",
    results: "Immediate clean glow with firmer feel; collagen builds over weeks",
    price: "Contact for pricing",
    benefits: [
      "Deep cleansing & hydration",
      "Tightening",
      "Stimulates collagen",
      "Refines pores",
      "Improves firmness",
      "Minimal downtime"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero}
      treatmentInfo={treatmentInfo}
    />
  );
}
