import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function KeravivePage() {
  const hero = {
    tagline: "Scalp Revitalization",
    title: "Keravive Treatment",
    subtitle: "Advanced Scalp and Hair Follicle Therapy",
    description: "Transform your scalp health with Keravive, the only FDA-cleared treatment that cleanses, stimulates, and nourishes the scalp and hair follicles. This revolutionary three-step treatment promotes healthier, fuller-looking hair from the roots up.",
  };

  const treatmentInfo = {
    duration: "45-60 minutes",
    results: "Progressive improvement over 3 months",
    price: "From £250 per session",
    benefits: [
      "FDA-cleared scalp treatment technology",
      "Deep cleansing to remove impurities and buildup",
      "Stimulation of hair follicles for improved circulation",
      "Nourishing growth factor infusion",
      "Improved scalp health and comfort",
      "Enhanced hair thickness and fullness",
      "Suitable for all hair types and concerns",
      "Progressive results with recommended treatment series"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero} 
      treatmentInfo={treatmentInfo}
    />
  );
}
