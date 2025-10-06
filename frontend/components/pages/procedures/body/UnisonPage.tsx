import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function UnisonPage() {
  const hero = {
    tagline: "CELLULITE REDUCTION",
    title: "Unison",
    subtitle: "Advanced Cellulite Treatment",
    description: "Reduce the appearance of cellulite and improve skin elasticity with Unison treatment. This comfortable, non-invasive solution enhances circulation, smooths texture, and treats all skin types with minimal downtime.",
  };

  const treatmentInfo = {
    duration: "20–30 minutes per area",
    results: "Cellulite appearance improves over 2–8 weeks",
    price: "Contact for pricing",
    benefits: [
      "Reduces cellulite",
      "Improves elasticity",
      "Enhances circulation",
      "Comfortable, no downtime",
      "Treats all skin types",
      "Smooths texture"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero}
      treatmentInfo={treatmentInfo}
    />
  );
}
