import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

const PolynucleotidesPage = () => {
  const heroData = {
    tagline: "POLYNUCLEOTIDES",
    title: "Polynucleotide Therapy",
    subtitle: "Advanced Bio-Regenerative Treatment",
    description: "Experience the revolutionary benefits of polynucleotide therapy. This advanced bio-regenerative treatment stimulates natural healing processes, improves skin quality, and promotes tissue regeneration for remarkable anti-aging results."
  };

  const treatmentInfo = {
    duration: "45-60 minutes",
    results: "Progressive improvement over 8-12 weeks",
    price: "From £450",
    benefits: [
      "Stimulates natural regeneration",
      "Improves skin texture and tone",
      "Reduces inflammation",
      "Promotes tissue healing",
      "Long-lasting anti-aging effects",
      "Scientifically proven treatment"
    ]
  };

  return (
    <ProcedurePageTemplate 
      heroData={heroData}
      treatmentInfo={treatmentInfo}
    />
  );
};

export default PolynucleotidesPage;
