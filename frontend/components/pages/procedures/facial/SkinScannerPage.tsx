import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function SkinScannerPage() {
  const hero = {
    tagline: "Advanced Technology",
    title: "Skin Scanner Analysis",
    subtitle: "Precision Skin Diagnostics for Optimal Results",
    description: "Our state-of-the-art skin scanning technology provides comprehensive analysis of your skin's condition, revealing underlying issues invisible to the naked eye. This advanced diagnostic tool creates a personalized treatment roadmap for optimal skin health and beauty.",
  };

  const treatmentInfo = {
    duration: "30-45 minutes",
    results: "Immediate detailed analysis",
    price: "From £150",
    benefits: [
      "Comprehensive skin analysis using advanced imaging technology",
      "Detection of underlying skin conditions and concerns",
      "UV damage assessment and sun protection recommendations",
      "Personalized skincare routine development",
      "Track treatment progress with before and after comparisons",
      "Professional product recommendations based on skin type",
      "Early detection of potential skin issues",
      "Customized treatment plan creation"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero} 
      treatmentInfo={treatmentInfo}
    />
  );
}
