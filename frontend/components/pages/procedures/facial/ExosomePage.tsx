import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function ExosomePage() {
  const hero = {
    tagline: "Cutting-Edge Science",
    title: "Exosome Therapy",
    subtitle: "Revolutionary Regenerative Skin Treatment",
    description: "Experience the future of skin rejuvenation with our advanced exosome therapy. These powerful cellular messengers promote rapid healing, regeneration, and renewal at the deepest levels, delivering transformative results for aging, damaged, or problematic skin.",
  };

  const treatmentInfo = {
    duration: "75-90 minutes",
    results: "Progressive improvement over 4-8 weeks",
    price: "From £450",
    benefits: [
      "Revolutionary exosome technology for skin regeneration",
      "Promotes rapid cellular healing and renewal",
      "Stimulates natural growth factors and stem cells",
      "Addresses advanced signs of aging and damage",
      "Improves skin texture, tone, and elasticity",
      "Reduces inflammation and accelerates recovery",
      "Long-lasting regenerative effects",
      "Suitable for complex skin concerns and conditions"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero} 
      treatmentInfo={treatmentInfo}
    />
  );
}
