import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

const MagnesiumPage = () => {
  const heroData = {
    tagline: "MAGNESIUM INJECTIONS",
    title: "Magnesium Injection Therapy",
    subtitle: "Essential Mineral for Muscle & Nerve Function",
    description: "Support your body's essential functions with magnesium injection therapy. These targeted injections provide this crucial mineral directly to your system, helping to reduce muscle tension, support nervous system function, and promote overall wellness."
  };

  const treatmentInfo = {
    duration: "10-15 minutes",
    results: "Relief within hours, lasting several days",
    price: "From £65",
    benefits: [
      "Reduces muscle tension",
      "Supports nervous system",
      "Improves sleep quality",
      "Reduces stress and anxiety",
      "Better than oral absorption",
      "Quick and effective"
    ]
  };

  return (
    <ProcedurePageTemplate 
      heroData={heroData}
      treatmentInfo={treatmentInfo}
    />
  );
};

export default MagnesiumPage;
