import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function HifuPage() {
  return (
    <ProcedurePageTemplate
      hero={{
        tagline: "Precision Body Sculpting",
        title: "HIFU",
        subtitle: "High-Intensity Focused Ultrasound",
        description: "Revolutionary non-invasive treatment that uses focused ultrasound energy to target and destroy fat cells while simultaneously tightening skin. HIFU delivers precise energy at multiple depths for comprehensive body contouring."
      }}
      treatmentInfo={{
        duration: "60-90 minutes",
        results: "Initial results at 4-6 weeks, full results at 12-16 weeks",
        price: "Starting at $450 per session",
        benefits: [
          "Permanent fat cell destruction",
          "Skin tightening and lifting",
          "Non-surgical body contouring",
          "Precise energy delivery",
          "No needles or incisions",
          "Minimal to no downtime",
          "Long-lasting results",
          "Safe for all skin types"
        ]
      }}
    />
  );
}
