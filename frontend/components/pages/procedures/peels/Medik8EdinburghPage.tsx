import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function Medik8EdinburghPage() {
  const hero = {
    tagline: "PROFESSIONAL CHEMICAL PEELS",
    title: "Medik8 Peels Edinburgh",
    subtitle: "Scientifically Advanced Skin Resurfacing in Scotland's Capital",
    description: "Transform your skin with Medik8 professional chemical peels at Beyond Aesthetics Edinburgh, located on the Second Floor of Harvey Nichols in St Andrew Square. Medik8 is a scientifically advanced British skincare brand renowned for creating some of the most effective, gentle professional peels available. Our Medik8 peel treatments are specifically customized to address the unique skincare challenges faced by Edinburgh residents, from weather-related dullness and dehydration to uneven texture and pigmentation concerns. These medical-grade chemical peels use precise concentrations of active ingredients like lactic acid, salicylic acid, mandelic acid, and glycolic acid to gently dissolve the bonds between dead skin cells, revealing the fresh, radiant skin beneath. Unlike harsh traditional peels, Medik8 formulations are designed to resurface while simultaneously hydrating and soothing, making them suitable even for sensitive skin types. Each treatment is fully customizable to your specific concerns, whether you're targeting fine lines, acne, hyperpigmentation, enlarged pores, or overall skin dullness. Our experienced practitioners in Edinburgh's New Town provide thorough consultations to select the ideal peel strength and formulation for your skin, ensuring optimal results with minimal downtime. With immediate radiance and progressive improvements through a treatment course, Medik8 peels represent the gold standard in professional exfoliation.",
  };

  const treatmentInfo = {
    duration: "30–60 minutes including consultation and post-peel care",
    results: "Immediate brightening and glow; continued improvements in texture, tone, and clarity over 2-4 weeks. Optimal results with a course of 4-6 treatments",
    price: "From £100 per peel - Contact for personalized course packages and pricing",
    benefits: [
      "Medical-grade exfoliation with scientifically proven ingredients",
      "Resurfaces skin to reveal fresh, radiant complexion",
      "Hydrates deeply while exfoliating - no excessive dryness",
      "Brightens and evens skin tone effectively",
      "Minimizes enlarged pores and refines texture",
      "Highly customizable to individual skin concerns",
      "Suitable for sensitive skin with gentle formulations",
      "Addresses acne, pigmentation, aging, and dullness",
      "Minimal downtime with progressive results",
      "Expert treatment in Edinburgh's St Andrew Square"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero}
      treatmentInfo={treatmentInfo}
    />
  );
}
