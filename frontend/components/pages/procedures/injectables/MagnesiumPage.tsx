import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function MagnesiumPage() {
  const hero = {
    tagline: "MUSCLE & NERVE SUPPORT",
    title: "Magnesium Injections",
    subtitle: "Relief & Recovery",
    description: "Relieve muscle cramps and support nerve function with magnesium injections. This quick treatment may aid sleep, addresses deficiency, and provides relief within days.",
  };

  const treatmentInfo = {
    duration: "10–15 minutes",
    results: "Muscle/nerve benefits may be felt over days",
    price: "Contact for pricing",
    benefits: [
      "Relieves cramps",
      "Supports nerve function",
      "May aid sleep",
      "Quick session",
      "Addresses deficiency",
      "Minimal downtime"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero}
      treatmentInfo={treatmentInfo}
    />
  );
}
