import ProcedurePageTemplate from "../../../ProcedurePageTemplate";
import { useEffect } from "react";

export default function ExilisPage() {
  useEffect(() => {
    document.title = "Exilis Elite | Non-Surgical Skin Tightening & Contouring | Beyond Medispa";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Transform your skin with Exilis Elite at Beyond Medispa. Non-invasive skin tightening and contouring for a firmer, youthful look without surgery.");
    }
  }, []);

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
