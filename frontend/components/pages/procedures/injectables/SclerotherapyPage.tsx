import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

const SclerotherapyPage = () => {
  const hero = {
    tagline: "SCLEROTHERAPY",
    title: "Spider Vein Treatment",
    subtitle: "Effective Varicose & Spider Vein Removal",
    description: "Eliminate unsightly spider veins and small varicose veins with sclerotherapy. This proven treatment involves injecting a solution directly into the veins, causing them to collapse and fade away for clearer, more confident skin."
  };

  const treatmentInfo = {
    duration: "30-45 minutes",
    results: "Gradual fading over 3-6 weeks",
    price: "From £220",
    benefits: [
      "Eliminates spider veins",
      "Improves leg appearance",
      "Minimal discomfort",
      "Quick treatment sessions",
      "Proven effective method",
      "Boosts confidence"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero}
      treatmentInfo={treatmentInfo}
    />
  );
};

export default SclerotherapyPage;
