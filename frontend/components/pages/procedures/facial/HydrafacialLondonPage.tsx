import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function HydrafacialLondonPage() {
  const hero = {
    tagline: "London's Premier Treatment",
    title: "HydraFacial London",
    subtitle: "Customized Facial Rejuvenation in the Heart of London",
    description: "Experience London's most sought-after HydraFacial treatment, specifically customized for the unique environmental challenges of city living. Our expert practitioners deliver immediate, visible results using advanced vortex technology to cleanse, extract, and hydrate your skin.",
  };

  const treatmentInfo = {
    duration: "45-60 minutes",
    results: "Immediate glow, lasting 1-2 weeks",
    price: "From £180",
    benefits: [
      "Deep cleansing to remove urban pollution and impurities",
      "Gentle extraction of blackheads and congestion",
      "Intense hydration with hyaluronic acid infusion",
      "Customized serums for London's climate conditions",
      "No downtime - perfect for busy London lifestyle",
      "Antioxidant protection against environmental damage",
      "Improved skin texture and radiance",
      "Suitable for all skin types and concerns"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero} 
      treatmentInfo={treatmentInfo}
    />
  );
}
