import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

const PRPPage = () => {
  const heroData = {
    tagline: "PRP THERAPY",
    title: "Platelet-Rich Plasma Treatment",
    subtitle: "Harness Your Body's Natural Healing",
    description: "Unlock your skin's natural regenerative potential with PRP therapy. Using your own platelet-rich plasma, this innovative treatment stimulates collagen production, improves skin texture, and promotes natural healing for a radiant complexion."
  };

  const treatmentInfo = {
    duration: "60-90 minutes",
    results: "Progressive improvement over 3-6 months",
    price: "From £380",
    benefits: [
      "Uses your own natural healing factors",
      "Stimulates collagen production",
      "Improves skin texture and tone",
      "Reduces fine lines and scars",
      "Natural and safe treatment",
      "Long-lasting results"
    ]
  };

  return (
    <ProcedurePageTemplate 
      heroData={heroData}
      treatmentInfo={treatmentInfo}
    />
  );
};

export default PRPPage;
