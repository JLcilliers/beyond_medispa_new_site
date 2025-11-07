import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function OxygenFacialPage() {
  const hero = {
    tagline: "INSTANT RADIANCE",
    title: "Oxygen Facial",
    subtitle: "Hydrating & Soothing Treatment",
    description: "Boost your skin's radiance with an oxygen facial. This gentle treatment hydrates and soothes, perfect for sensitive skin, while softening fine lines and improving product absorption with no downtime.",
  };

  const treatmentInfo = {
    duration: "45–60 minutes",
    results: "Instant plump/glow; cumulative with a course",
    price: "Contact for pricing",
    benefits: [
      "Boosts radiance",
      "Hydrates & soothes",
      "Great for sensitive skin",
      "Softens fine lines",
      "Improves absorption",
      "No downtime"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero}
      treatmentInfo={treatmentInfo}
    />
  );
}
