import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

const ProfhiloPage = () => {
  const heroData = {
    tagline: "PROFHILO TREATMENT",
    title: "Profhilo Bio-Remodeling",
    subtitle: "Revolutionary Skin Bio-Remodeling",
    description: "Transform your skin with Profhilo, the revolutionary bio-remodeling treatment. This innovative injectable treatment stimulates collagen and elastin production, providing deep hydration and skin remodeling for a naturally youthful appearance."
  };

  const treatmentInfo = {
    duration: "30-45 minutes",
    results: "Visible improvement in 4 weeks, optimal results in 8 weeks",
    price: "From £320",
    benefits: [
      "Deep skin hydration",
      "Stimulates collagen and elastin",
      "Improves skin laxity",
      "Natural bio-remodeling",
      "Minimal injection points",
      "Long-lasting skin improvement"
    ]
  };

  return (
    <ProcedurePageTemplate 
      heroData={heroData}
      treatmentInfo={treatmentInfo}
    />
  );
};

export default ProfhiloPage;
