import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function CoolLaserPage() {
  return (
    <ProcedurePageTemplate
      hero={{
        tagline: "Advanced Fat Reduction",
        title: "Cool Laser",
        subtitle: "Cold Laser Fat Reduction",
        description: "Innovative cold laser technology that safely penetrates skin to target fat cells, causing them to release their contents and shrink. A gentle, pain-free approach to body contouring with immediate results."
      }}
      treatmentInfo={{
        duration: "20-30 minutes",
        results: "Immediate inch loss, continued improvement over 2-4 weeks",
        price: "Starting at $200 per session",
        benefits: [
          "Immediate inch loss",
          "Pain-free treatment",
          "No side effects",
          "Quick treatment sessions",
          "No downtime required",
          "Safe for all skin types",
          "Targets stubborn fat areas",
          "Clinically proven results"
        ]
      }}
    />
  );
}
