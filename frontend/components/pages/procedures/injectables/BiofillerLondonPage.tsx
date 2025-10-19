import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function BiofillerLondonPage() {
  const hero = {
    tagline: "ADVANCED REGENERATIVE AESTHETICS",
    title: "Biofiller London",
    subtitle: "Cutting-Edge Autologous Plasma Therapy in Knightsbridge",
    description: "Experience the future of facial rejuvenation with biofiller at Beyond Aesthetics London, situated on the Fourth Floor of Harvey Nichols in prestigious Knightsbridge. Biofiller is a groundbreaking aesthetic treatment that harnesses the regenerative power of your own blood plasma to restore facial volume naturally while triggering profound skin rejuvenation from within. This autologous therapy extracts and concentrates your platelets and plasma proteins, which are then precisely injected to add volume to areas such as tear troughs, cheeks, lips, and fine lines, while simultaneously delivering powerful growth factors that stimulate collagen synthesis and tissue regeneration. Unlike conventional synthetic dermal fillers, biofiller is derived entirely from your own blood, eliminating any possibility of allergic reactions or foreign body responses. The treatment delivers dual benefits: immediate volumizing effects that sculpt and enhance your features, coupled with progressive improvements in skin texture, elasticity, and overall quality over the following weeks. Perfect for discerning London clients who prioritize natural, biocompatible treatments, biofiller excels in sensitive areas where traditional fillers may be less suitable. Our expert practitioners near Harrods combine advanced injection techniques with personalized aesthetic vision to achieve beautifully natural, refreshed results that honor your unique facial characteristics.",
  };

  const treatmentInfo = {
    duration: "60–90 minutes including blood collection and plasma processing",
    results: "Immediate volumizing effect with continued skin regeneration and quality enhancement over 4-8 weeks. Longevity of 12-18 months typical",
    price: "From £500 per treatment zone - Contact for bespoke consultation and package pricing",
    benefits: [
      "Autologous treatment using your own plasma - completely natural",
      "Instant volume addition to targeted facial areas",
      "Triggers natural collagen synthesis for lasting improvement",
      "Zero risk of allergic reactions or rejection",
      "Enhances skin texture, tone, and overall quality",
      "Perfect for sensitive areas including tear troughs and lips",
      "Combines immediate enhancement with regenerative benefits",
      "Creates soft, natural-looking results that feel genuine",
      "Brief recovery period with natural healing process",
      "Prestigious Knightsbridge location near Harrods"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero}
      treatmentInfo={treatmentInfo}
    />
  );
}
