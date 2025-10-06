import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function DermalFillerPage() {
  const hero = {
    tagline: "VOLUME & CONTOUR",
    title: "Dermal Fillers",
    subtitle: "Natural Enhancement & Rejuvenation",
    description: "Restore volume and sculpt contours with our dermal filler treatments. Immediate, customizable results smooth folds and enhance features with dissolvable HA technology.",
    backgroundImage: "/dermal-fillers-hero.png"
  };

  const treatmentInfo = {
    duration: "30–60 minutes",
    results: "Immediate results; settles over 1–2 weeks",
    price: "Contact for pricing",
    benefits: [
      "Restores volume",
      "Sculpts contours",
      "Smooths folds",
      "Quick",
      "Customisable",
      "Dissolvable HA"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero}
      treatmentInfo={treatmentInfo}
    />
  );
}
