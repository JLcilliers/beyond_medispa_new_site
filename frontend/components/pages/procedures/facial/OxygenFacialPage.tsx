import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function OxygenFacialPage() {
  const hero = {
    tagline: "Breathe New Life",
    title: "Oxygen Infusion Facial",
    subtitle: "Revitalizing Oxygen-Infused Treatment",
    description: "Revitalize your skin with our oxygen infusion facial that delivers pure, pressurized oxygen directly to your skin cells. This celebrity-favorite treatment promotes cellular regeneration, boosts collagen production, and creates an immediate healthy glow.",
  };

  const treatmentInfo = {
    duration: "50-60 minutes",
    results: "Instant glow, lasting 1-2 weeks",
    price: "From £190",
    benefits: [
      "Pure oxygen infusion for cellular revitalization",
      "Immediate brightening and radiance boost",
      "Enhanced circulation for healthy skin tone",
      "Accelerated healing and skin repair",
      "Reduction in fine lines and wrinkles",
      "Deep hydration with vitamin-enriched serums",
      "Suitable for sensitive and all skin types",
      "No downtime with instant visible results"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero} 
      treatmentInfo={treatmentInfo}
    />
  );
}
