import ProcedurePageTemplate from '../../../ProcedurePageTemplate'

export default function LEDLightTherapyPage() {
  const heroProps = {
    tagline: "LIGHT HEALING",
    title: "Invest in Your Glow with",
    subtitle: "Aesthetic Lab",
    description: "Harness the power of LED light therapy for skin rejuvenation, acne treatment, and anti-aging benefits with our advanced light technology.",
    buttonText: "BOOK CONSULTATION"
  }

  const treatmentInfo = {
    duration: "30-45 minutes",
    results: "4-6 sessions",
    price: "From £100",
    benefits: [
      "Reduces acne and inflammation",
      "Stimulates collagen production",
      "Improves skin texture",
      "Non-invasive treatment",
      "No downtime required",
      "Safe for all skin types"
    ]
  }

  return (
    <ProcedurePageTemplate 
      hero={heroProps}
      treatmentInfo={treatmentInfo}
      showStandardSections={true}
    />
  )
}