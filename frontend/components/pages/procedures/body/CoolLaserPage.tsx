import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function CoolLaserPage() {
  const hero = {
    tagline: "ADVANCED LASER REJUVENATION",
    title: "Cool Laser",
    subtitle: "Skin Resurfacing & Rejuvenation",
    description: "Transform your skin with Cool Laser technology. This innovative treatment reduces fine lines, improves texture and tone, targets pigmentation, and stimulates collagen production for comprehensive skin rejuvenation.",
  };

  const treatmentInfo = {
    duration: "30–60 minutes",
    results: "Immediate glow with continued improvement over several weeks",
    price: "Contact for pricing",
    benefits: [
      "Reduces fine lines",
      "Improves texture & tone",
      "Targets pigmentation",
      "Helps acne scarring",
      "Minimal downtime",
      "Stimulates collagen"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero}
      treatmentInfo={treatmentInfo}
    />
  );
}
