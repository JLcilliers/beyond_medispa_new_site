import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function UnisonPage() {
  return (
    <ProcedurePageTemplate
      hero={{
        tagline: "Multi-Technology Platform",
        title: "Unison",
        subtitle: "Comprehensive Body Transformation",
        description: "Revolutionary multi-technology platform combining radiofrequency, ultrasound, and vacuum therapy in one treatment. Unison delivers comprehensive body contouring, skin tightening, and cellulite reduction for complete transformation."
      }}
      treatmentInfo={{
        duration: "60-75 minutes",
        results: "Progressive improvement over 6-8 weeks, optimal after 6-10 sessions",
        price: "Starting at $400 per session",
        benefits: [
          "Multi-technology treatment",
          "Fat reduction and skin tightening",
          "Cellulite improvement",
          "Lymphatic drainage",
          "Enhanced circulation",
          "Comfortable treatment",
          "No downtime required",
          "Comprehensive body contouring"
        ]
      }}
    />
  );
}
