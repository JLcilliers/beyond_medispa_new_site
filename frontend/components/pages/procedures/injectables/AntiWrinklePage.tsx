import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function AntiWrinklePage() {
  const hero = {
    tagline: "ANTI-WRINKLE TREATMENT",
    title: "Anti-Wrinkle Injections",
    subtitle: "Smooth Away Fine Lines & Wrinkles",
    description: "Reduce the appearance of fine lines and wrinkles with our premium anti-wrinkle injection treatments. Our skilled practitioners use proven techniques to help you achieve a naturally refreshed and youthful appearance."
  };

  const treatmentInfo = {
    duration: "30-45 minutes",
    results: "Visible within 3-7 days, lasting 3-4 months",
    price: "From £180",
    benefits: [
      "Reduces fine lines and wrinkles",
      "Prevents formation of new lines",
      "Natural-looking results",
      "Minimal downtime required",
      "Quick and convenient treatment",
      "FDA-approved treatment"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero}
      treatmentInfo={treatmentInfo}
    />
  );
}
