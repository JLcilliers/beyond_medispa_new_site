import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

const VitaminDPage = () => {
  const heroData = {
    tagline: "VITAMIN D INJECTIONS",
    title: "Vitamin D Injection Therapy",
    subtitle: "Essential Sunshine Vitamin Support",
    description: "Optimize your vitamin D levels with our professional injection therapy. These high-potency injections provide essential vitamin D directly to your system, supporting bone health, immune function, and overall wellbeing, especially during darker months."
  };

  const treatmentInfo = {
    duration: "10-15 minutes",
    results: "Improved levels within 24-48 hours",
    price: "From £75",
    benefits: [
      "Supports bone health",
      "Boosts immune system",
      "Improves mood and energy",
      "Better than oral supplements",
      "Quick treatment",
      "Essential for overall health"
    ]
  };

  return (
    <ProcedurePageTemplate 
      heroData={heroData}
      treatmentInfo={treatmentInfo}
    />
  );
};

export default VitaminDPage;
