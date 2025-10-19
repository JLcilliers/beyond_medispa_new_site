import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function MicroneedlingEdinburghPage() {
  const hero = {
    tagline: "EDINBURGH SKIN RENEWAL",
    title: "Microneedling Edinburgh",
    subtitle: "Advanced Collagen Induction Therapy in Scotland's Capital",
    description: "Transform your skin with professional microneedling at Beyond Aesthetics Edinburgh, conveniently located on the Second Floor of Harvey Nichols in St Andrew Square. Our microneedling treatment, also known as collagen induction therapy, is specifically tailored to address the unique skincare challenges faced by Edinburgh residents, from weather-related damage to seasonal skin changes. Using state-of-the-art precision needling technology, this minimally invasive treatment creates controlled micro-injuries that stimulate your skin's natural healing response, triggering increased collagen and elastin production. Perfect for addressing acne scars, surgical scars, enlarged pores, fine lines, and uneven texture, microneedling delivers remarkable results through your body's own regenerative processes. Our experienced practitioners in Edinburgh's prestigious New Town customize each treatment to your individual skin concerns and goals, ensuring optimal results while maintaining the highest safety standards. The treatment also enhances the absorption of skincare products by up to 300%, making it an ideal complement to your existing skincare routine. With minimal downtime and progressive improvements visible over several weeks, microneedling is the gold standard for non-surgical skin rejuvenation in Edinburgh.",
  };

  const treatmentInfo = {
    duration: "45–60 minutes including numbing time",
    results: "Initial glow within days; progressive collagen remodeling over 4-12 weeks. Optimal results achieved with a course of 3-6 treatments",
    price: "From £200 per session - Contact for course packages and pricing",
    benefits: [
      "Stimulates natural collagen & elastin production",
      "Significantly improves skin texture and smoothness",
      "Reduces appearance of acne scars and surgical scars",
      "Minimizes enlarged pores for refined skin",
      "Softens fine lines and wrinkles naturally",
      "Evens skin tone and reduces hyperpigmentation",
      "Enhances product absorption by up to 300%",
      "Suitable for all skin types and tones",
      "Minimal downtime with natural healing process",
      "Expert treatment in Edinburgh's New Town location"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero} 
      treatmentInfo={treatmentInfo}
    />
  );
}
