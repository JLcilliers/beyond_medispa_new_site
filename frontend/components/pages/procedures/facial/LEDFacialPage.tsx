import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function LEDFacialPage() {
  const hero = {
    tagline: "Light Therapy Innovation",
    title: "LED Light Facial",
    subtitle: "Advanced Phototherapy for Skin Rejuvenation",
    description: "Harness the power of medical-grade LED light therapy to stimulate cellular regeneration, reduce inflammation, and promote healing. Our multi-wavelength LED treatment addresses various skin concerns using scientifically proven light frequencies.",
  };

  const treatmentInfo = {
    duration: "30-45 minutes",
    results: "Progressive improvement over 4-6 weeks",
    price: "From £120",
    benefits: [
      "Medical-grade LED light therapy technology",
      "Multi-wavelength treatment for comprehensive results",
      "Stimulates collagen and elastin production",
      "Reduces inflammation and accelerates healing",
      "Improves acne and blemish-prone skin",
      "Enhances overall skin tone and texture",
      "Completely non-invasive with no downtime",
      "Suitable for all skin types and ages"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero} 
      treatmentInfo={treatmentInfo}
    />
  );
}
