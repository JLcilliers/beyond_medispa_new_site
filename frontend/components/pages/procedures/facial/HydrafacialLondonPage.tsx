import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function HydrafacialLondonPage() {
  const hero = {
    tagline: "KNIGHTSBRIDGE LUXURY",
    title: "HydraFacial London",
    subtitle: "Premium Facial Treatment in the Heart of Knightsbridge",
    description: "Discover London's most sought-after HydraFacial treatment at Beyond Aesthetics, situated on the Fourth Floor of Harvey Nichols in prestigious Knightsbridge. Our HydraFacial service is expertly tailored to combat the specific challenges of London living, from urban pollution and stress to the demands of city life on your skin. This revolutionary facial treatment uses patented vortex-fusion delivery technology to perform a comprehensive multi-step process: deep cleansing, gentle exfoliation, painless extraction, and intense hydration infusion. Ideal for London's fast-paced professionals, this treatment delivers instant, noticeable results with absolutely no downtime, allowing you to return to your day immediately with visibly glowing, refreshed skin. Located moments from Harrods and easily accessible from the West End and City, our Knightsbridge clinic offers a luxurious sanctuary where advanced skincare technology meets personalized expert care. Whether you're addressing concerns like fine lines, uneven texture, congestion, or dehydration, our skilled practitioners customize each HydraFacial to your unique skin profile, ensuring optimal results for all skin types and tones.",
  };

  const treatmentInfo = {
    duration: "30–60 minutes",
    results: "Instant luminosity and smoothness; continued improvements in skin quality, clarity, and hydration for 2-4 weeks",
    price: "From £150 - Contact for bespoke treatment packages",
    benefits: [
      "Advanced cleansing & exfoliation for London skin",
      "Gentle extraction of impurities and blackheads",
      "Deep hydration with medical-grade serums",
      "Instant results with no recovery time needed",
      "Combats urban pollution and stress effects",
      "Fully customizable for every skin type",
      "Enhances radiance and smooths texture",
      "Minimizes fine lines and refines pores",
      "Ideal pre-event glow for London engagements",
      "Prime Knightsbridge location near Harrods"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero} 
      treatmentInfo={treatmentInfo}
    />
  );
}
