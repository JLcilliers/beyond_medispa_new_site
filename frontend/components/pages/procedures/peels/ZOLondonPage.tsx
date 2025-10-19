import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function ZOLondonPage() {
  const hero = {
    tagline: "REVOLUTIONARY DERMATOLOGICAL SCIENCE",
    title: "ZO Skin Health London",
    subtitle: "Dr. Obagi's Advanced Clinical Protocols in Prestigious Knightsbridge",
    description: "Discover unparalleled skin transformation with ZO Skin Health treatments at Beyond Aesthetics London, situated on the Fourth Floor of Harvey Nichols in the heart of Knightsbridge. ZO Skin Health, the innovation of legendary dermatologist Dr. Zein Obagi, represents cutting-edge medical-grade skincare that delivers aggressive, clinically proven results for patients serious about skin health. Our ZO treatments in London are meticulously tailored to address the dermatological challenges of urban living, from pollution-induced damage and oxidative stress to premature aging and persistent pigmentation. The ZO approach is revolutionary: rather than merely concealing imperfections, these treatments fundamentally restore optimal skin function at the cellular level using high-potency active ingredients including prescription-strength retinol, ascorbic acid, exfoliating acids, and proprietary complexes that penetrate beyond the surface. Whether you're experiencing a ZO 3-Step Peel for dramatic resurfacing, a controlled-depth peel for rejuvenation, or embarking on a transformative ZO skincare regimen, these protocols tackle severe pigmentation disorders, significant textural irregularities, stubborn acne, enlarged pores, and advanced aging signs with remarkable efficacy. Unlike conservative treatments, ZO embraces therapeutic inflammation to stimulate profound cellular renewal, making it the choice for discerning London clients ready for powerful transformation. Our expert practitioners near Harrods provide comprehensive skin analysis to architect your personalized ZO journey, whether a standalone intensive peel or an extended therapeutic program for lasting, dramatic results.",
  };

  const treatmentInfo = {
    duration: "30–60 minutes for peel treatments; continuous for comprehensive programs",
    results: "Peel treatments deliver visible transformation within 3-7 days with ongoing improvements for weeks. Complete ZO programs achieve dramatic, lasting results over 12-18 weeks",
    price: "From £150 per clinical peel - Contact for personalized ZO program design and comprehensive pricing",
    benefits: [
      "Clinical-strength treatments by legendary Dr. Zein Obagi",
      "Aggressively corrects resistant hyperpigmentation and melasma",
      "Dramatically refines coarse texture and contracts pores",
      "Potent anti-aging protocols targeting deep lines and sagging",
      "Effectively treats chronic acne, breakouts, and sebum issues",
      "Intensive hydration delivery alongside active ingredients",
      "Soothes and calms with advanced anti-inflammatory technology",
      "Prescription-strength formulations for transformative outcomes",
      "Holistic programs for comprehensive skin health restoration",
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
