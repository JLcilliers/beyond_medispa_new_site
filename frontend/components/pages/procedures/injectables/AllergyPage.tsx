import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

const AllergyPage = () => {
  const heroData = {
    tagline: "ALLERGY INJECTIONS",
    title: "Allergy Treatment Injections",
    subtitle: "Relief from Seasonal & Environmental Allergies",
    description: "Find relief from troublesome allergies with our professional allergy injection treatments. Our carefully administered immunotherapy helps reduce allergic reactions and improve your quality of life through personalized treatment plans."
  };

  const treatmentInfo = {
    duration: "15-30 minutes",
    results: "Gradual improvement over several months",
    price: "From £120",
    benefits: [
      "Reduces allergic reactions",
      "Long-term allergy relief",
      "Personalized treatment plan",
      "Professional administration",
      "Improves quality of life",
      "Safe and effective"
    ]
  };

  return (
    <ProcedurePageTemplate 
      heroData={heroData}
      treatmentInfo={treatmentInfo}
    />
  );
};

export default AllergyPage;
