import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function ElectrolysisPage() {
  return (
    <ProcedurePageTemplate
      hero={{
        tagline: "100% Permanent Hair Removal",
        title: "Electrolysis",
        subtitle: "FDA-Approved Permanent Solution",
        description: "The only FDA-approved method for permanent hair removal. Electrolysis works on all hair colors and skin types by targeting individual hair follicles with precise electrical current for complete, permanent hair elimination."
      }}
      treatmentInfo={{
        duration: "15-60 minutes depending on area",
        results: "Permanent removal after completing treatment series",
        price: "Starting at $65 per session",
        benefits: [
          "100% permanent hair removal",
          "FDA-approved method",
          "Works on all hair colors",
          "Safe for all skin types",
          "Precise individual targeting",
          "No regrowth after completion",
          "Suitable for sensitive areas",
          "Time-tested effectiveness"
        ]
      }}
    />
  );
}
