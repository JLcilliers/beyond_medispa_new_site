import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function HydraTitePage() {
  const hero = {
    tagline: "Hydration + Lifting",
    title: "HydraTite Treatment",
    subtitle: "Dual-Action Hydrating and Tightening Facial",
    description: "Experience the perfect combination of intense hydration and skin tightening in one revolutionary treatment. HydraTite addresses multiple signs of aging while delivering deep moisture for plump, firm, and radiant skin that looks years younger.",
  };

  const treatmentInfo = {
    duration: "60-75 minutes",
    results: "Immediate lift, lasting 2-3 weeks",
    price: "From £220",
    benefits: [
      "Dual-action hydration and skin tightening technology",
      "Immediate lifting effect with long-lasting results",
      "Deep moisture infusion with advanced hyaluronic acid",
      "Collagen stimulation for improved skin elasticity",
      "Reduction in fine lines and wrinkles",
      "Firmer, more toned facial contours",
      "Enhanced skin texture and smoothness",
      "No downtime with progressive improvements"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero} 
      treatmentInfo={treatmentInfo}
    />
  );
}
