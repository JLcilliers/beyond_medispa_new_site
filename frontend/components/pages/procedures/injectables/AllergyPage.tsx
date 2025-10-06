import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function AllergyPage() {
  const hero = {
    tagline: "ALLERGY TESTING",
    title: "Allergy Testing",
    subtitle: "Comprehensive Allergy Assessment",
    description: "Identify your allergy triggers with comprehensive testing. Get quick results, clinician supervision, and a personalized plan for long-term control within days.",
  };

  const treatmentInfo = {
    duration: "30–60 minutes",
    results: "Results within days",
    price: "Contact for pricing",
    benefits: [
      "Identify triggers",
      "Personalised plan",
      "Quick tests",
      "Clinician supervised",
      "Actionable advice",
      "Long-term control"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero}
      treatmentInfo={treatmentInfo}
    />
  );
}
