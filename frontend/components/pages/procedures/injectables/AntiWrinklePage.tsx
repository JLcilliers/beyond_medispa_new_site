import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function AntiWrinklePage() {
  const hero = {
    tagline: "WRINKLE REDUCTION",
    title: "Anti Wrinkle Injections",
    subtitle: "Smooth, Youthful Skin",
    description: "Soften lines and prevent new ones with our anti-wrinkle treatments. Quick, targeted procedures with no downtime deliver natural-looking results in 3-5 days, lasting 3-4 months.",
    backgroundImage: "/anti-wrinkle-hero-new.png"
  };

  const treatmentInfo = {
    duration: "15–30 minutes",
    results: "Onset 3–5 days; full effect 10–14 days; lasts ~3–4 months",
    price: "Contact for pricing",
    benefits: [
      "Softens lines",
      "Prevents new ones",
      "Quick",
      "No downtime",
      "Targeted",
      "Treats multiple areas"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero}
      treatmentInfo={treatmentInfo}
    />
  );
}
