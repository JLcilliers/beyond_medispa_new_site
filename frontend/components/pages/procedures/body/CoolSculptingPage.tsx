import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function CoolSculptingPage() {
  const hero = {
    tagline: "NON-SURGICAL FAT REDUCTION",
    title: "CoolSculpting",
    subtitle: "FDA-Cleared Fat Freezing Technology",
    description: "Experience the world's leading non-invasive fat reduction treatment. CoolSculpting uses controlled cooling to eliminate stubborn fat cells permanently, helping you achieve your desired body contours without surgery or downtime.",
  };

  const treatmentInfo = {
    duration: "35–60 minutes per cycle",
    results: "Fat reduction visible in 8–12 weeks",
    price: "Contact for pricing",
    benefits: [
      "Non-surgical fat reduction",
      "Targets stubborn fat",
      "Minimal downtime",
      "Permanent fat-cell removal",
      "Contour improvement",
      "Clinically proven"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero}
      treatmentInfo={treatmentInfo}
    />
  );
}
