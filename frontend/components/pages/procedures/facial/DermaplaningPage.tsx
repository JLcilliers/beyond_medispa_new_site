import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function DermaplaningPage() {
  const hero = {
    tagline: "Instant Smoothness",
    title: "Professional Dermaplaning",
    subtitle: "Expert Physical Exfoliation Treatment",
    description: "Reveal instantly smoother, brighter skin with our professional dermaplaning treatment. Using precise surgical-grade tools, we gently remove dead skin cells and vellus hair, creating the perfect canvas for skincare products and makeup application.",
  };

  const treatmentInfo = {
    duration: "45-60 minutes",
    results: "Immediate smooth skin",
    price: "From £140",
    benefits: [
      "Professional-grade surgical dermaplaning technique",
      "Immediate removal of dead skin cells and vellus hair",
      "Instantly smoother and brighter skin texture",
      "Enhanced product absorption and effectiveness",
      "Perfect makeup application base",
      "Stimulates cellular turnover naturally",
      "No downtime with immediate results",
      "Suitable for most skin types and concerns"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero} 
      treatmentInfo={treatmentInfo}
    />
  );
}
