import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function LaserHairRemovalPage() {
  return (
    <ProcedurePageTemplate
      hero={{
        tagline: "Permanent Hair Reduction",
        title: "Laser Hair Removal",
        subtitle: "Advanced Laser Technology",
        description: "State-of-the-art laser technology that targets hair follicles to provide long-lasting hair reduction. Our advanced systems work on all skin types and hair colors for safe, effective, and comfortable permanent hair removal."
      }}
      treatmentInfo={{
        duration: "15-60 minutes depending on area",
        results: "Hair reduction visible after 2-3 sessions, 85-95% reduction after 6-8 treatments",
        price: "Starting at $75 per session",
        benefits: [
          "Permanent hair reduction",
          "Works on all skin types",
          "Fast treatment sessions",
          "Minimal discomfort",
          "No ingrown hairs",
          "Smooth, silky skin",
          "Cost-effective long-term",
          "FDA-approved technology"
        ]
      }}
    />
  );
}
