import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function GlutathionePage() {
  const hero = {
    tagline: "MASTER ANTIOXIDANT",
    title: "Glutathione",
    subtitle: "Antioxidant & Skin Brightening",
    description: "Harness the power of glutathione for antioxidant protection and skin brightening. Support detox, boost immunity, and achieve a radiant glow with IV/IM administration.",
  };

  const treatmentInfo = {
    duration: "15–30 minutes",
    results: "Skin/antioxidant benefits accrue over weeks",
    price: "Contact for pricing",
    benefits: [
      "Antioxidant",
      "Brightens skin",
      "Detox support",
      "Immune support",
      "Minimal downtime",
      "IV/IM administration"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero}
      treatmentInfo={treatmentInfo}
    />
  );
}
