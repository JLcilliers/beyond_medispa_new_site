import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

const MoleRemovalPage = () => {
  const heroData = {
    tagline: "MOLE REMOVAL",
    title: "Professional Mole Removal",
    subtitle: "Safe & Effective Removal Procedures",
    description: "Remove unwanted moles safely and effectively with our professional mole removal services. Our qualified practitioners use advanced techniques to ensure minimal scarring and optimal healing results."
  };

  const treatmentInfo = {
    duration: "15-30 minutes per mole",
    results: "Immediate removal, healing in 2-4 weeks",
    price: "From £180",
    benefits: [
      "Safe and effective removal",
      "Minimal scarring techniques",
      "Professional assessment",
      "Quick procedure",
      "Comprehensive aftercare",
      "Peace of mind"
    ]
  };

  return (
    <ProcedurePageTemplate 
      heroData={heroData}
      treatmentInfo={treatmentInfo}
    />
  );
};

export default MoleRemovalPage;
