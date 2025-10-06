import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function BiofillerLondonPage() {
  const hero = {
    tagline: "NATURAL VOLUME RESTORATION",
    title: "Biofiller London",
    subtitle: "Autologous Plasma Treatment",
    description: "Experience natural volume restoration with biofiller using your own plasma. This innovative treatment provides immediate results with biostimulation benefits, low allergy risk, and suitability for delicate areas.",
  };

  const treatmentInfo = {
    duration: "60–90 minutes",
    results: "Immediate volume with biostimulation over weeks",
    price: "Contact for pricing",
    benefits: [
      "Autologous (uses plasma)",
      "Restores volume",
      "Stimulates collagen",
      "Low allergy risk",
      "Improves texture",
      "Suitable for delicate areas"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero}
      treatmentInfo={treatmentInfo}
    />
  );
}
