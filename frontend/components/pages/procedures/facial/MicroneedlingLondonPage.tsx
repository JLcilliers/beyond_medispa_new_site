import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function MicroneedlingLondonPage() {
  const hero = {
    tagline: "London's Advanced Treatment",
    title: "Microneedling London",
    subtitle: "Professional Collagen Induction Therapy",
    description: "Experience London's most advanced microneedling treatment designed to combat the effects of urban living. Our precision technique stimulates natural collagen production while addressing pollution damage, scarring, and signs of aging with professional-grade equipment.",
  };

  const treatmentInfo = {
    duration: "60-90 minutes",
    results: "Visible improvement in 2-4 weeks",
    price: "From £280",
    benefits: [
      "Professional-grade microneedling for optimal results",
      "Stimulates natural collagen and elastin production",
      "Reduces appearance of scars and skin texture issues",
      "Minimizes fine lines and wrinkles",
      "Improves skin tone and radiance",
      "Enhances product absorption for better results",
      "Addresses urban pollution and environmental damage",
      "Customized depth settings for individual skin needs"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero} 
      treatmentInfo={treatmentInfo}
    />
  );
}
