import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function ExilisPage() {
  const hero = {
    tagline: "SKIN TIGHTENING EXCELLENCE",
    title: "Exilis",
    subtitle: "Radio Frequency Body & Skin Contouring",
    description: "Discover the power of Exilis radiofrequency technology for non-surgical body contouring and skin tightening. Our advanced treatment stimulates collagen production, reduces cellulite, and sculpts your natural contours with precision and comfort.",
  };

  const treatmentInfo = {
    duration: "30–60 minutes",
    results: "Progressive improvement over 4–12 weeks after a course",
    price: "From £420",
    benefits: [
      "Skin tightening",
      "Stimulates collagen",
      "Cellulite improvement",
      "Body contouring in targeted areas",
      "Minimal downtime",
      "Suitable for multiple body areas"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero}
      treatmentInfo={treatmentInfo}
    />
  );
}
