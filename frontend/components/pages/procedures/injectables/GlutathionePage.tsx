import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

const GlutathionePage = () => {
  const hero = {
    tagline: "GLUTATHIONE INJECTIONS",
    title: "Glutathione Injection Therapy",
    subtitle: "Master Antioxidant for Skin Brightening",
    description: "Experience the powerful antioxidant benefits of glutathione injection therapy. Known as the body's master antioxidant, these injections help brighten skin, reduce oxidative stress, and support overall cellular health for a radiant glow."
  };

  const treatmentInfo = {
    duration: "15-20 minutes",
    results: "Skin brightening in 4-8 weeks",
    price: "From £85",
    benefits: [
      "Powerful antioxidant effects",
      "Brightens and evens skin tone",
      "Reduces oxidative stress",
      "Supports liver detoxification",
      "Anti-aging properties",
      "Boosts immune system"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero}
      treatmentInfo={treatmentInfo}
    />
  );
};

export default GlutathionePage;
