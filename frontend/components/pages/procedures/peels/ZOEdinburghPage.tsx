import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function ZOEdinburghPage() {
  const hero = {
    tagline: "MEDICAL-GRADE SKIN TRANSFORMATION",
    title: "ZO Skin Health Edinburgh",
    subtitle: "Dr. Obagi's Revolutionary Treatments in Scotland's Capital",
    description: "Experience the transformative power of ZO Skin Health treatments at Beyond Aesthetics Edinburgh, located on the Second Floor of Harvey Nichols in St Andrew Square. ZO Skin Health, created by world-renowned dermatologist Dr. Zein Obagi, represents the pinnacle of medical-grade skincare with aggressive, results-driven protocols that deliver dramatic improvements in skin health and appearance. Our ZO treatments in Edinburgh are expertly customized to address Scotland's unique climate challenges, from weather-induced dehydration and dullness to seasonal skin sensitivity. The ZO philosophy centers on restoring skin health at the cellular level, not just treating symptoms, using potent concentrations of active ingredients including retinol, vitamin C, glycolic acid, and exclusive complexes that penetrate deep into the skin. Whether you're undergoing a ZO 3-Step Peel for intensive resurfacing, a stimulating peel for anti-aging benefits, or starting a comprehensive ZO skincare program, these treatments target stubborn pigmentation, rough texture, enlarged pores, acne, and visible aging with unmatched efficacy. Unlike gentler alternatives, ZO treatments embrace controlled inflammation to trigger profound cellular renewal, making them ideal for patients ready for serious results. Our experienced practitioners in Edinburgh's New Town provide thorough assessments to design your optimal ZO treatment protocol, whether a single transformative peel or a multi-month skincare journey for lasting transformation.",
  };

  const treatmentInfo = {
    duration: "30–60 minutes for treatments; ongoing for skincare programs",
    results: "Peels show visible improvements within 3-7 days with continued enhancement over weeks. ZO skincare programs deliver progressive transformation over 12-18 weeks",
    price: "From £150 per peel treatment - Contact for comprehensive ZO program consultations and pricing",
    benefits: [
      "Medical-grade treatments by renowned Dr. Zein Obagi",
      "Dramatically improves stubborn pigmentation and melasma",
      "Significantly refines skin texture and minimizes pores",
      "Powerful anti-aging effects targeting lines and laxity",
      "Effectively controls acne, breakouts, and excess oil",
      "Deeply hydrates while delivering active ingredients",
      "Calms inflammation with targeted soothing agents",
      "Professional-strength formulations for serious results",
      "Comprehensive programs for long-term transformation",
      "Expert administration in Edinburgh's New Town"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero}
      treatmentInfo={treatmentInfo}
    />
  );
}
