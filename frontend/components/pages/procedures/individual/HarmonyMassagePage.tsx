import ProcedurePageTemplate from '../../../ProcedurePageTemplate'

export default function HarmonyMassagePage() {
  const heroProps = {
    tagline: "WELLNESS & RELAXATION",
    title: "Invest in Your Well-being with",
    subtitle: "Aesthetic Lab",
    description: "Experience ultimate relaxation and therapeutic benefits with our signature Harmony massage treatments for mind and body wellness.",
    buttonText: "BOOK CONSULTATION"
  }

  const treatmentInfo = {
    duration: "60-90 minutes",
    results: "Immediate",
    price: "From £150",
    benefits: [
      "Deep relaxation",
      "Stress relief",
      "Improved circulation",
      "Muscle tension release",
      "Enhanced well-being",
      "Therapeutic benefits"
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