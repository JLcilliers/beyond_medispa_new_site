import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function BiotinPage() {
  const hero = {
    tagline: "HAIR, SKIN & NAILS",
    title: "Biotin Injections",
    subtitle: "Beauty Vitamin Support",
    description: "Support healthy hair, skin, and nails with biotin injections. This quick treatment addresses deficiency and supports healthy metabolism with minimal downtime.",
  };

  const treatmentInfo = {
    duration: "10–15 minutes",
    results: "Benefits typically seen over several weeks",
    price: "Contact for pricing",
    benefits: [
      "Supports hair/skin/nails",
      "Healthy metabolism",
      "Quick",
      "Adjunct for deficiency",
      "Minimal downtime",
      "Simple injection"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero}
      treatmentInfo={treatmentInfo}
    />
  );
}
