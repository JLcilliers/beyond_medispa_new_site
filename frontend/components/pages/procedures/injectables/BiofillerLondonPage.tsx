import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

const BiofillerLondonPage = () => {
  const heroData = {
    tagline: "BIOFILLER LONDON",
    title: "Advanced Biofiller Treatments",
    subtitle: "Premium Bio-Remodeling in London",
    description: "Discover our exclusive biofiller treatments available at our London clinic. Using innovative bio-compatible materials, we enhance facial volume and improve skin quality for natural, long-lasting results."
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
      "Expert London practitioners"
    ]
  };

  return (
    <ProcedurePageTemplate 
      heroData={heroData}
      treatmentInfo={treatmentInfo}
    />
  );
};

export default BiofillerLondonPage;
