import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

const NeofoundPage = () => {
  const hero = {
    tagline: "NEOFOUND TREATMENT",
    title: "Neofound Skin Rejuvenation",
    subtitle: "Next-Generation Skin Enhancement",
    description: "Discover the benefits of Neofound treatment, an advanced skin rejuvenation therapy that combines cutting-edge technology with proven ingredients to enhance skin quality, texture, and overall appearance for remarkable results."
  };

  const treatmentInfo = {
    duration: "45-60 minutes",
    results: "Noticeable improvement in 2-4 weeks",
    price: "From £280",
    benefits: [
      "Advanced skin rejuvenation",
      "Improves skin texture",
      "Enhances skin radiance",
      "Reduces signs of aging",
      "Minimal downtime",
      "Innovative treatment approach"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero}
      treatmentInfo={treatmentInfo}
    />
  );
};

export default NeofoundPage;
