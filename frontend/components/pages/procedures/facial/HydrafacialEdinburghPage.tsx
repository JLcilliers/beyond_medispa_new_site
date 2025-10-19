import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function HydrafacialEdinburghPage() {
  const hero = {
    tagline: "EDINBURGH EXCELLENCE",
    title: "HydraFacial Edinburgh",
    subtitle: "Advanced Facial Rejuvenation in Scotland's Capital",
    description: "Experience the transformative power of HydraFacial at Beyond Aesthetics Edinburgh, located in the prestigious Harvey Nichols on St Andrew Square. Our HydraFacial treatment is specifically customized to address the unique skincare challenges faced by Edinburgh residents, from combating the effects of Scotland's changeable climate to protecting against environmental stressors. Using advanced vortex-fusion technology, this medical-grade facial delivers immediate, visible results through a multi-step process that cleanses, exfoliates, extracts impurities, and deeply hydrates your skin. Perfect for busy professionals in Edinburgh's business district, this no-downtime treatment fits seamlessly into your schedule while delivering professional-grade results. Whether you're preparing for a special event or maintaining your skincare regimen, our expert practitioners at our Second Floor clinic combine cutting-edge technology with personalized care to reveal your skin's natural radiance. Suitable for all skin types and concerns, from fine lines and congestion to dullness and dehydration.",
  };

  const treatmentInfo = {
    duration: "30–60 minutes",
    results: "Immediate radiance and glow; progressive improvements in skin clarity, texture, and hydration over 2-4 weeks",
    price: "From £150 - Contact for personalized package pricing",
    benefits: [
      "Deep cleansing & gentle exfoliation tailored for Edinburgh's climate",
      "Painless extractions of blackheads and congestion",
      "Intensive hydration with hyaluronic acid serums",
      "Immediate visible results with zero downtime",
      "Addresses pollution and environmental damage",
      "Customizable for all skin types and concerns",
      "Boosts radiance and evens skin tone",
      "Reduces appearance of fine lines and pores",
      "Perfect pre-event treatment for Edinburgh occasions",
      "Located in prestigious St Andrew Square, New Town"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero} 
      treatmentInfo={treatmentInfo}
    />
  );
}
