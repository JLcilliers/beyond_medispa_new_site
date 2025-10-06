import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function HydrafacialLondonPage() {
  const hero = {
    tagline: "London's Premier Treatment",
    title: "HydraFacial London",
    subtitle: "Customized Facial Rejuvenation in the Heart of London",
    description: "Experience London's most sought-after HydraFacial treatment, specifically customized for the unique environmental challenges of city living. Our expert practitioners deliver immediate, visible results using advanced vortex technology to cleanse, extract, and hydrate your skin.",
  };

  const treatmentInfo = {
    duration: "30–60 minutes",
    results: "Immediate glow; clearer, hydrated skin for days to weeks",
    price: "Contact for pricing",
    benefits: [
      "Cleanses, exfoliates, extracts, hydrates",
      "No downtime",
      "All skin types",
      "Improves tone & texture",
      "Reduces congestion",
      "Boosts radiance"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero} 
      treatmentInfo={treatmentInfo}
    />
  );
}
