import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function SclerotherapyPage() {
  const hero = {
    tagline: "VEIN TREATMENT",
    title: "Sclerotherapy",
    subtitle: "Spider Vein Removal",
    description: "Eliminate spider veins with minimally invasive sclerotherapy. This proven outpatient technique targets veins to improve leg appearance with high patient satisfaction.",
  };

  const treatmentInfo = {
    duration: "30–60 minutes",
    results: "Spider veins fade over 4–12 weeks",
    price: "Contact for pricing",
    benefits: [
      "Minimally invasive",
      "Targets veins",
      "Improves leg appearance",
      "Outpatient",
      "Proven technique",
      "High satisfaction"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero}
      treatmentInfo={treatmentInfo}
    />
  );
}
