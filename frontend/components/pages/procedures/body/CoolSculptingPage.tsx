import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function CoolSculptingPage() {
  return (
    <ProcedurePageTemplate
      hero={{
        tagline: "Fat Freezing Technology",
        title: "CoolSculpting",
        subtitle: "Cryolipolysis Fat Reduction",
        description: "FDA-cleared fat reduction treatment that freezes stubborn fat cells to eliminate them naturally. CoolSculpting targets specific areas of unwanted fat without surgery, needles, or downtime for lasting body contouring results."
      }}
      treatmentInfo={{
        duration: "35-60 minutes per area",
        results: "Initial results at 3 weeks, full results at 2-3 months",
        price: "Starting at $600 per cycle",
        benefits: [
          "FDA-cleared treatment",
          "Permanent fat cell elimination",
          "Non-surgical procedure",
          "Targets stubborn fat areas",
          "No downtime required",
          "Natural-looking results",
          "Multiple areas can be treated",
          "Proven clinical efficacy"
        ]
      }}
    />
  );
}
