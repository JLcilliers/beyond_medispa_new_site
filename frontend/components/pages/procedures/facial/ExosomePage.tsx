import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function ExosomePage() {
  const hero = {
    tagline: "REGENERATIVE THERAPY",
    title: "Exosome Therapy",
    subtitle: "Advanced Skin Regeneration",
    description: "Experience cutting-edge exosome therapy for enhanced healing and visible improvements. This innovative treatment reduces redness, improves texture and tone, brightens, boosts collagen, and calms inflammation.",
  };

  const treatmentInfo = {
    duration: "45–60 minutes",
    results: "Faster recovery and visible quality improvements in 1–4 weeks",
    price: "Contact for pricing",
    benefits: [
      "Enhances healing",
      "Reduces redness",
      "Improves texture & tone",
      "Brightens",
      "Boosts collagen",
      "Calms inflammation"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero}
      treatmentInfo={treatmentInfo}
    />
  );
}
