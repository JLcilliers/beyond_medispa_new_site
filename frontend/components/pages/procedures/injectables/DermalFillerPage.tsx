import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

const DermalFillerPage = () => {
  const heroData = {
    tagline: "DERMAL FILLERS",
    title: "Premium Dermal Filler Treatments",
    subtitle: "Restore Volume & Enhance Features",
    description: "Transform your appearance with our premium dermal filler treatments. Our expert practitioners use high-quality hyaluronic acid fillers to restore facial volume, enhance features, and achieve natural-looking results."
  };

  const treatmentInfo = {
    duration: "45-75 minutes",
    results: "Immediate results, lasting 6-18 months",
    price: "From £280",
    benefits: [
      "Restores facial volume",
      "Enhances natural features",
      "Smooths wrinkles and lines",
      "Immediate visible results",
      "Reversible treatment",
      "Minimal downtime required"
    ]
  };

  return (
    <ProcedurePageTemplate 
      heroData={heroData}
      treatmentInfo={treatmentInfo}
    />
  );
};

export default DermalFillerPage;
