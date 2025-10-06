import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function SkinScannerPage() {
  const hero = {
    tagline: "ADVANCED SKIN ANALYSIS",
    title: "Skin Scanner",
    subtitle: "Comprehensive Skin Assessment",
    description: "Get a complete understanding of your skin's health with our advanced skin scanner. Identify pigmentation, UV damage, and track your progress with objective analysis and personalized treatment recommendations.",
  };

  const treatmentInfo = {
    duration: "15–30 minutes",
    results: "Immediate analysis and recommendations",
    price: "Contact for pricing",
    benefits: [
      "Objective assessment",
      "Identifies pigmentation/UV damage",
      "Tracks progress",
      "Personalised plan",
      "Baseline photography",
      "Highlights concerns"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero}
      treatmentInfo={treatmentInfo}
    />
  );
}
