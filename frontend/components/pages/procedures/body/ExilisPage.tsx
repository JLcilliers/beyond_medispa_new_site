import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function ExilisPage() {
  return (
    <ProcedurePageTemplate
      hero={{
        tagline: "Body Contouring Excellence",
        title: "Exilis",
        subtitle: "Radiofrequency Body Sculpting",
        description: "Advanced radiofrequency technology that safely heats tissue to stimulate collagen production, tighten skin, and reduce fat. Exilis delivers precise energy to target areas for comprehensive body contouring without surgery or downtime."
      }}
      treatmentInfo={{
        duration: "45-60 minutes",
        results: "Visible after 2-3 sessions, optimal after 4-6 treatments",
        price: "Starting at $350 per session",
        benefits: [
          "Non-invasive fat reduction",
          "Skin tightening and lifting",
          "Cellulite improvement",
          "Collagen stimulation",
          "No downtime required",
          "Comfortable treatment experience",
          "FDA-approved technology",
          "Gradual, natural-looking results"
        ]
      }}
    />
  );
}
