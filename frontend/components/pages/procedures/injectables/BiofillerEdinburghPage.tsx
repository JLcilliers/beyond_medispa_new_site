import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

const BiofillerEdinburghPage = () => {
  const hero = {
    tagline: "BIOFILLER EDINBURGH",
    title: "Advanced Biofiller Treatments",
    subtitle: "Premium Bio-Remodeling in Edinburgh",
    description: "Experience our cutting-edge biofiller treatments at our Edinburgh clinic. Our specialized approach combines innovative bio-compatible materials with expert technique to deliver exceptional facial enhancement and skin improvement."
  };

  const treatmentInfo = {
    duration: "60-90 minutes",
    results: "Immediate enhancement, optimal results in 4-6 weeks",
    price: "From £350",
    benefits: [
      "Bio-compatible and safe materials",
      "Natural-looking enhancement",
      "Stimulates natural collagen",
      "Long-lasting results",
      "Minimal recovery time",
      "Expert Edinburgh practitioners"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero}
      treatmentInfo={treatmentInfo}
    />
  );
};

export default BiofillerEdinburghPage;
