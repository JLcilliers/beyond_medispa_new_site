import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

const B12Page = () => {
  const heroData = {
    tagline: "VITAMIN B12 INJECTIONS",
    title: "Vitamin B12 Injection Therapy",
    subtitle: "Boost Energy & Mental Clarity",
    description: "Revitalize your energy levels and mental clarity with our vitamin B12 injection therapy. These powerful injections provide essential nutrients directly into your system for optimal absorption and immediate benefits to your overall wellbeing."
  };

  const treatmentInfo = {
    duration: "10-15 minutes",
    results: "Increased energy within 24-48 hours",
    price: "From £45",
    benefits: [
      "Boosts energy levels",
      "Improves mental clarity",
      "Supports nervous system",
      "Enhances metabolism",
      "Quick and convenient",
      "Better than oral supplements"
    ]
  };

  return (
    <ProcedurePageTemplate 
      heroData={heroData}
      treatmentInfo={treatmentInfo}
    />
  );
};

export default B12Page;
