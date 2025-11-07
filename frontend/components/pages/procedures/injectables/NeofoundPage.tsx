import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function NeofoundPage() {
  const hero = {
    tagline: "SKIN BRIGHTENING",
    title: "Neofound",
    subtitle: "Advanced Skin Enhancement",
    description: "Brighten and smooth your skin with Neofound. This advanced treatment reduces lines, improves elasticity, hydrates, and evens tone with minimal downtime. Course recommended for optimal results.",
  };

  const treatmentInfo = {
    duration: "15–30 minutes",
    results: "Brighter, smoother skin in 2–4 weeks; course recommended",
    price: "Contact for pricing",
    benefits: [
      "Brightens",
      "Reduces lines",
      "Improves elasticity",
      "Hydrates",
      "Evens tone",
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
