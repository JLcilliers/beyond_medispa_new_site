import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function Medik8LondonPage() {
  const hero = {
    tagline: "ADVANCED SKIN RESURFACING",
    title: "Medik8 Peels London",
    subtitle: "Professional-Grade Chemical Peels in Prestigious Knightsbridge",
    description: "Experience the transformative power of Medik8 professional chemical peels at Beyond Aesthetics London, situated on the Fourth Floor of Harvey Nichols in the heart of Knightsbridge. Medik8 represents British excellence in cosmeceutical science, offering professional-strength chemical peels that combine exceptional efficacy with remarkable gentleness. Our Medik8 peel treatments are expertly tailored to combat the specific skincare challenges of London living, from pollution-induced dullness and congestion to stress-related aging and uneven complexion. These advanced medical-grade peels utilize precisely calibrated blends of alpha-hydroxy acids (AHAs), beta-hydroxy acids (BHAs), and other active ingredients to dissolve the intercellular bonds holding dead skin cells together, revealing luminous, rejuvenated skin underneath. What sets Medik8 apart is their unique formulation philosophy: aggressive exfoliation combined with intensive hydration and soothing agents, making these peels suitable even for reactive and sensitive skin types. Each peel is bespoke to your individual needs, whether addressing acne and breakouts, hyperpigmentation and sun damage, fine lines and texture, or overall radiance enhancement. Our skilled practitioners near Harrods provide comprehensive skin analysis to recommend the perfect peel protocol, strength, and treatment frequency for your goals. With instant visible results and cumulative benefits through a treatment series, Medik8 peels are the sophisticated solution for discerning London clients.",
  };

  const treatmentInfo = {
    duration: "30–60 minutes including skin analysis and aftercare protocol",
    results: "Instant luminosity and radiance; progressive enhancements in skin quality, tone, and texture over 2-4 weeks. Best results achieved with a series of 4-6 treatments",
    price: "From £100 per treatment - Contact for customized course pricing and consultation",
    benefits: [
      "Professional-strength formulations with scientifically validated actives",
      "Effectively resurfaces to unveil fresh, glowing skin",
      "Simultaneously hydrates and soothes - prevents excessive dryness",
      "Brightens complexion and reduces dark spots significantly",
      "Refines enlarged pores and smooths rough texture",
      "Fully customizable to target specific skin concerns",
      "Gentle enough for sensitive and reactive skin types",
      "Treats acne, sun damage, aging signs, and dullness",
      "Quick treatment with minimal social downtime",
      "Premium Knightsbridge location near Harrods"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero}
      treatmentInfo={treatmentInfo}
    />
  );
}
