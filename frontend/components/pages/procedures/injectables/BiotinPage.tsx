import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

const BiotinPage = () => {
  const heroData = {
    tagline: "BIOTIN INJECTIONS",
    title: "Biotin Injection Therapy",
    subtitle: "Strengthen Hair, Skin & Nails",
    description: "Enhance your natural beauty from within with biotin injection therapy. These targeted injections provide essential biotin directly to your system, promoting stronger hair, healthier skin, and more resilient nails for a radiant appearance."
  };

  const treatmentInfo = {
    duration: "10-15 minutes",
    results: "Improvements visible in 4-6 weeks",
    price: "From £55",
    benefits: [
      "Strengthens hair and nails",
      "Improves skin health",
      "Supports metabolic function",
      "Better absorption than oral",
      "Quick treatment",
      "Natural beauty enhancement"
    ]
  };

  return (
    <ProcedurePageTemplate 
      heroData={heroData}
      treatmentInfo={treatmentInfo}
    />
  );
};

export default BiotinPage;
