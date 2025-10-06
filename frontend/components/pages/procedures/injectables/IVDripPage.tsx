import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function IVDripPage() {
  const hero = {
    tagline: "HYDRATION & WELLNESS",
    title: "IV Drip Therapy",
    subtitle: "Rapid Nutrient Replenishment",
    description: "Experience rapid rehydration and energy support with IV drip therapy. Customizable blends deliver immediate hydration and nutrient replenishment with professional administration.",
  };

  const treatmentInfo = {
    duration: "30–60 minutes",
    results: "Immediate hydration/energy; recovery in hours to days",
    price: "Contact for pricing",
    benefits: [
      "Rapid rehydration",
      "Replenishes nutrients",
      "Energy support",
      "Customisable blends",
      "Professional administration",
      "Fast absorption"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero}
      treatmentInfo={treatmentInfo}
    />
  );
}
