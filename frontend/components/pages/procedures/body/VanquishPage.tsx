import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function VanquishPage() {
  return (
    <ProcedurePageTemplate
      hero={{
        tagline: "Contactless Body Sculpting",
        title: "Vanquish",
        subtitle: "Contactless Radiofrequency",
        description: "Revolutionary contactless radiofrequency technology that treats the entire abdominal area without touching the skin. Vanquish selectively targets fat cells while leaving surrounding tissue unharmed for safe, effective body contouring."
      }}
      treatmentInfo={{
        duration: "45 minutes",
        results: "Gradual improvement over 2-3 months, optimal after 4-6 treatments",
        price: "Starting at $375 per session",
        benefits: [
          "Contactless treatment",
          "Large area coverage",
          "Selective fat targeting",
          "Comfortable experience",
          "No skin contact needed",
          "FDA-cleared technology",
          "No downtime required",
          "Safe for all skin types"
        ]
      }}
    />
  );
}
