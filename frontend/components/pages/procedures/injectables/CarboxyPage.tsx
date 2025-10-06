import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function CarboxyPage() {
  const hero = {
    tagline: "CIRCULATION & REJUVENATION",
    title: "Carboxy Therapy",
    subtitle: "CO2 Skin Revitalization",
    description: "Improve circulation and brighten your complexion with carboxy therapy. This innovative treatment reduces dark circles, stimulates collagen, and helps cellulite with minimal downtime.",
  };

  const treatmentInfo = {
    duration: "30–45 minutes",
    results: "Brighter, firmer look develops over 2–4 weeks",
    price: "Contact for pricing",
    benefits: [
      "Improves circulation",
      "Brightens",
      "Reduces dark circles",
      "Stimulates collagen",
      "Helps cellulite",
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
