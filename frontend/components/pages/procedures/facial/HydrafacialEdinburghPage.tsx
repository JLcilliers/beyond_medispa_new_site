import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function HydrafacialEdinburghPage() {
  const hero = {
    tagline: "Edinburgh Excellence",
    title: "HydraFacial Edinburgh",
    subtitle: "Adapted Facial Treatment for Scotland's Capital",
    description: "Our Edinburgh HydraFacial treatment is specially adapted for Scotland's unique climate, addressing the specific skincare needs of Edinburgh residents. Combat the effects of harsh weather and seasonal changes with our expertly customized treatment protocols.",
  };

  const treatmentInfo = {
    duration: "45-60 minutes",
    results: "Immediate radiance, 1-2 weeks duration",
    price: "From £165",
    benefits: [
      "Climate-adapted treatment for Edinburgh's weather conditions",
      "Deep moisture replenishment for wind and cold damage",
      "Protection against seasonal skin sensitivity",
      "Customized serums for Scottish environmental factors",
      "Gentle exfoliation suitable for reactive skin",
      "Barrier repair for harsh weather exposure",
      "Immediate hydration and comfort",
      "Professional aftercare for optimal results"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero} 
      treatmentInfo={treatmentInfo}
    />
  );
}
