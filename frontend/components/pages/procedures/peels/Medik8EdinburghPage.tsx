import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function Medik8EdinburghPage() {
  const hero = {
    tagline: "PROFESSIONAL SKINCARE",
    title: "Medik8 Peels Edinburgh",
    subtitle: "Advanced Chemical Peels",
    description: "Experience Medik8 professional peels in Edinburgh. Exfoliate, resurface, and hydrate your skin for immediate glow with progressive results. Customizable treatments suitable for sensitive skin.",
  };

  const treatmentInfo = {
    duration: "30–60 minutes",
    results: "Immediate glow; progressive results with a course",
    price: "Contact for pricing",
    benefits: [
      "Exfoliates & resurfaces",
      "Hydrates and soothes",
      "Brightens",
      "Minimizes pores",
      "Customisable",
      "Suitable for sensitive skin"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero}
      treatmentInfo={treatmentInfo}
    />
  );
}
