import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function CMSlimPage() {
  return (
    <ProcedurePageTemplate
      hero={{
        tagline: "Muscle Building Revolution",
        title: "CM Slim",
        subtitle: "Electromagnetic Muscle Stimulation",
        description: "Advanced electromagnetic technology that induces powerful muscle contractions equivalent to thousands of crunches or squats in a single session. Build muscle mass, burn fat, and sculpt your body without breaking a sweat."
      }}
      treatmentInfo={{
        duration: "30 minutes",
        results: "Muscle definition improves after 2-4 sessions, optimal after 6-8 treatments",
        price: "Starting at $275 per session",
        benefits: [
          "Build muscle mass naturally",
          "Burn fat simultaneously",
          "No exercise required",
          "Enhance muscle definition",
          "Improve core strength",
          "Quick 30-minute sessions",
          "No recovery time needed",
          "Suitable for all fitness levels"
        ]
      }}
    />
  );
}
