import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

const IVDripPage = () => {
  const heroData = {
    tagline: "IV VITAMIN DRIPS",
    title: "IV Vitamin Therapy",
    subtitle: "Ultimate Hydration & Nutrient Delivery",
    description: "Rejuvenate your body with our premium IV vitamin drip therapy. These customized nutrient infusions deliver essential vitamins, minerals, and hydration directly into your bloodstream for maximum absorption and immediate benefits."
  };

  const treatmentInfo = {
    duration: "45-90 minutes",
    results: "Immediate hydration and energy boost",
    price: "From £180",
    benefits: [
      "Immediate hydration",
      "100% nutrient absorption",
      "Boosts energy levels",
      "Supports immune system",
      "Customizable formulations",
      "Relaxing treatment experience"
    ]
  };

  return (
    <ProcedurePageTemplate 
      heroData={heroData}
      treatmentInfo={treatmentInfo}
    />
  );
};

export default IVDripPage;
