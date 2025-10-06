import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function HydrafacialEdinburghPage() {
  const hero = {
    tagline: "Edinburgh Excellence",
    title: "HydraFacial Edinburgh",
    subtitle: "Adapted Facial Treatment for Scotland's Capital",
    description: "Our Edinburgh HydraFacial treatment is specially adapted for Scotland's unique climate, addressing the specific skincare needs of Edinburgh residents. Combat the effects of harsh weather and seasonal changes with our expertly customized treatment protocols.",
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
