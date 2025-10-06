import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function MicroneedlingEdinburghPage() {
  const hero = {
    tagline: "Edinburgh Expertise",
    title: "Microneedling Edinburgh",
    subtitle: "Precision Skin Renewal for Scotland's Capital",
    description: "Our Edinburgh microneedling service is expertly adapted for Scotland's unique climate challenges. Using advanced collagen induction therapy, we address weather-related skin damage while promoting natural healing and regeneration for resilient, beautiful skin.",
  };

  const treatmentInfo = {
    duration: "45–60 minutes",
    results: "Collagen remodeling over 4–6 weeks; course recommended",
    price: "Contact for pricing",
    benefits: [
      "Improves texture",
      "Softens scars",
      "Minimizes pores",
      "Reduces lines",
      "Evens tone",
      "Enhances absorption"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero} 
      treatmentInfo={treatmentInfo}
    />
  );
}
