import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function MicroneedlingEdinburghPage() {
  const hero = {
    tagline: "Edinburgh Expertise",
    title: "Microneedling Edinburgh",
    subtitle: "Precision Skin Renewal for Scotland's Capital",
    description: "Our Edinburgh microneedling service is expertly adapted for Scotland's unique climate challenges. Using advanced collagen induction therapy, we address weather-related skin damage while promoting natural healing and regeneration for resilient, beautiful skin.",
  };

  const treatmentInfo = {
    duration: "60-90 minutes",
    results: "Noticeable improvement in 2-4 weeks",
    price: "From £260",
    benefits: [
      "Climate-adapted microneedling for Scottish conditions",
      "Professional collagen induction therapy",
      "Repairs weather-damaged and sensitive skin",
      "Reduces scarring and skin texture irregularities",
      "Enhances skin resilience and barrier function",
      "Improves hydration and moisture retention",
      "Customized treatment depth for skin sensitivity",
      "Professional aftercare for optimal healing"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero} 
      treatmentInfo={treatmentInfo}
    />
  );
}
