import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function CMSlimPage() {
  const hero = {
    tagline: "MUSCLE BUILDING & FAT REDUCTION",
    title: "CM Slim",
    subtitle: "Body Sculpting & Contouring",
    description: "Transform your shape with CM Slim advanced body contouring. Gentle sculpting that reduces fat while enhancing muscle tone. Available in London & Edinburgh.",
  };

  const treatmentInfo = {
    duration: "30 minutes",
    results: "Improved tone/definition appears 2–4 weeks after a series",
    price: "From £263",
    benefits: [
      "Builds muscle via EMS",
      "Helps reduce fat",
      "Strengthens core/glutes/thighs/arms",
      "No downtime",
      "Quick sessions",
      "Non-invasive"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero}
      treatmentInfo={treatmentInfo}
    />
  );
}
