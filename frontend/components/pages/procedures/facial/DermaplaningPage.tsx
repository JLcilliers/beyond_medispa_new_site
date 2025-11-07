import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function DermaplaningPage() {
  const hero = {
    tagline: "GENTLE EXFOLIATION",
    title: "Dermaplaning",
    subtitle: "Smooth, Radiant Skin",
    description: "Reveal brighter, smoother skin with dermaplaning. This gentle exfoliation technique removes vellus hair and dead skin cells, improving makeup application and giving you an instant glow with no downtime.",
  };

  const treatmentInfo = {
    duration: "30–45 minutes",
    results: "Immediate smoothness and brightness",
    price: "Contact for pricing",
    benefits: [
      "Removes vellus hair",
      "Gentle exfoliation",
      "Improves makeup application",
      "Brighter skin",
      "No downtime",
      "Suitable for most types"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero}
      treatmentInfo={treatmentInfo}
    />
  );
}
