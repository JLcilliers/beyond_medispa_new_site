import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function HifuPage() {
  const hero = {
    tagline: "NON-SURGICAL LIFTING",
    title: "HIFU",
    subtitle: "High-Intensity Focused Ultrasound",
    description: "Experience the revolutionary HIFU treatment for non-invasive facial lifting and tightening. Using focused ultrasound technology, HIFU stimulates deep collagen production to lift, tighten, and rejuvenate your skin naturally.",
  };

  const treatmentInfo = {
    duration: "45–90 minutes",
    results: "Lifting and tightening develops over 8–12 weeks; results can last 12–18 months",
    price: "From £735",
    benefits: [
      "Non-invasive facial lifting",
      "Stimulates collagen & elastin",
      "Contours jawline/cheeks",
      "Softens wrinkles",
      "Minimal downtime",
      "Long-lasting results"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero}
      treatmentInfo={treatmentInfo}
    />
  );
}
