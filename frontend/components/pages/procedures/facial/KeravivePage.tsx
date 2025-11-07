import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function KeravivePage() {
  const hero = {
    tagline: "SCALP HEALTH TREATMENT",
    title: "Keravive",
    subtitle: "Scalp Rejuvenation Therapy",
    description: "Improve your scalp health and promote fuller-looking hair with Keravive. This specialized treatment removes buildup, hydrates the scalp, reduces flaking, and enhances circulation to support healthier hair growth.",
  };

  const treatmentInfo = {
    duration: "45 minutes",
    results: "Scalp quality improves in 1–4 weeks after series",
    price: "Contact for pricing",
    benefits: [
      "Removes dead skin build-up",
      "Hydrates scalp",
      "Reduces flaking",
      "Promotes fuller-looking hair",
      "Improves circulation",
      "Complements hair-loss programs"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero}
      treatmentInfo={treatmentInfo}
    />
  );
}
