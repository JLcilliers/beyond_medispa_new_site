import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function PolynucleotidesPage() {
  const hero = {
    tagline: "NATURAL REVITALIZATION",
    title: "Polynucleotides",
    subtitle: "Advanced Skin Regeneration",
    description: "Naturally revitalize your skin with polynucleotides. This innovative treatment improves elasticity, hydrates, reduces lines, and brightens, with excellent safety for delicate areas.",
  };

  const treatmentInfo = {
    duration: "30–45 minutes",
    results: "Skin quality improves in 2–6 weeks; course advised",
    price: "Contact for pricing",
    benefits: [
      "Naturally revitalises",
      "Improves elasticity",
      "Hydrates & smooths",
      "Reduces lines",
      "Brightens",
      "Safe for delicate areas"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero}
      treatmentInfo={treatmentInfo}
    />
  );
}
