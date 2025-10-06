import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function MicroneedlingLondonPage() {
  const hero = {
    tagline: "London's Advanced Treatment",
    title: "Microneedling London",
    subtitle: "Professional Collagen Induction Therapy",
    description: "Experience London's most advanced microneedling treatment designed to combat the effects of urban living. Our precision technique stimulates natural collagen production while addressing pollution damage, scarring, and signs of aging with professional-grade equipment.",
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
