import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function BiofillerEdinburghPage() {
  const hero = {
    tagline: "NATURAL REJUVENATION",
    title: "Biofiller Edinburgh",
    subtitle: "Autologous Plasma Volume Restoration in Scotland's Capital",
    description: "Discover the revolutionary biofiller treatment at Beyond Aesthetics Edinburgh, located on the Second Floor of Harvey Nichols in St Andrew Square. Biofiller represents a breakthrough in natural aesthetic medicine, using your own blood plasma (autologous therapy) to restore facial volume while simultaneously stimulating your skin's natural regenerative processes. Unlike traditional synthetic fillers, biofiller is created from your own platelets and plasma proteins, making it completely biocompatible with virtually no risk of allergic reactions or adverse effects. This innovative treatment provides immediate volume enhancement to areas like under-eyes, cheeks, lips, and nasolabial folds, while the growth factors within your plasma work over the following weeks to stimulate collagen production and improve skin quality from within. Ideal for Edinburgh patients seeking natural, safe aesthetic enhancement, biofiller is particularly effective for delicate areas around the eyes and mouth where traditional fillers may not be suitable. The treatment combines the immediate gratification of volume restoration with the long-term benefits of biostimulation, making it a uniquely holistic approach to facial rejuvenation. Our skilled practitioners in Edinburgh's New Town provide personalized consultations to determine if biofiller is the ideal solution for your aesthetic goals.",
  };

  const treatmentInfo = {
    duration: "60–90 minutes including blood draw and preparation",
    results: "Immediate volume enhancement with progressive skin quality improvements over 4-8 weeks. Effects can last 12-18 months",
    price: "From £500 per treatment area - Contact for comprehensive consultation and pricing",
    benefits: [
      "Uses your own plasma - 100% natural and biocompatible",
      "Immediate volume restoration to treated areas",
      "Stimulates natural collagen and elastin production",
      "Virtually no risk of allergic reactions or rejection",
      "Improves overall skin texture and quality",
      "Ideal for delicate areas like under-eyes and lips",
      "Dual action: instant results plus long-term biostimulation",
      "Natural-looking, soft results that feel authentic",
      "Minimal downtime with natural healing",
      "Expert treatment in Edinburgh's prestigious New Town"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero}
      treatmentInfo={treatmentInfo}
    />
  );
}
