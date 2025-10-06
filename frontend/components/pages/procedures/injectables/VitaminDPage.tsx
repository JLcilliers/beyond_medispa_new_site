import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function VitaminDPage() {
  const hero = {
    tagline: "SUNSHINE VITAMIN",
    title: "Vitamin D Injections",
    subtitle: "Energy & Immune Support",
    description: "Support your energy, health, and immune system with vitamin D injections. Convenient dosing corrects deficiency and improves mood and wellbeing over weeks.",
  };

  const treatmentInfo = {
    duration: "10–15 minutes",
    results: "Levels improve over weeks",
    price: "Contact for pricing",
    benefits: [
      "Supports energy and health",
      "Immune support",
      "Improved mood & wellbeing",
      "Convenient dosing",
      "Corrects deficiency",
      "Quick injection"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero}
      treatmentInfo={treatmentInfo}
    />
  );
}
