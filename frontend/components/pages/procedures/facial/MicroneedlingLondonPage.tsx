import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function MicroneedlingLondonPage() {
  const hero = {
    tagline: "KNIGHTSBRIDGE PRECISION",
    title: "Microneedling London",
    subtitle: "Expert Collagen Induction Therapy in Prestigious Knightsbridge",
    description: "Experience London's most advanced microneedling treatment at Beyond Aesthetics, located on the Fourth Floor of Harvey Nichols in the heart of Knightsbridge. Our professional microneedling service harnesses your skin's natural regenerative power to combat the visible effects of urban living, from pollution damage to stress-related aging. This scientifically proven collagen induction therapy uses precision micro-needling technology to create controlled channels in the skin, triggering a powerful healing response that floods the area with fresh collagen and elastin. Ideal for London professionals seeking non-surgical solutions to acne scarring, enlarged pores, fine lines, uneven texture, and pigmentation issues, this treatment delivers transformative results through your body's own repair mechanisms. Our highly trained practitioners near Harrods customize each microneedling session to address your specific concerns, whether you're targeting stubborn scars, age-related changes, or overall skin quality improvement. The treatment dramatically boosts the efficacy of topical skincare by increasing absorption rates, making it a cornerstone treatment for optimal skin health. With a brief recovery period and results that continue improving for months, microneedling represents the cutting edge of aesthetic dermatology in London.",
  };

  const treatmentInfo = {
    duration: "45–60 minutes including numbing cream application",
    results: "Immediate post-treatment glow; continued collagen remodeling and skin improvement over 4-12 weeks. Best results with a series of 3-6 sessions",
    price: "From £200 per treatment - Contact for customized course pricing",
    benefits: [
      "Triggers natural collagen & elastin regeneration",
      "Dramatically improves overall skin texture and feel",
      "Reduces acne scars and post-surgical scarring",
      "Refines enlarged pores for smoother appearance",
      "Diminishes fine lines and early wrinkles",
      "Improves skin tone and reduces dark spots",
      "Boosts skincare product absorption dramatically",
      "Safe and effective for all skin types",
      "Quick recovery with minimal social downtime",
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
