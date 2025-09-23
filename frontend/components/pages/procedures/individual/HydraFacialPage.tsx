import ProcedurePageTemplate from '../../../ProcedurePageTemplate'

export default function HydraFacialPage() {
  const heroProps = {
    tagline: "ULTIMATE HYDRATION",
    title: "Invest in Your Skin with",
    subtitle: "Aesthetic Lab",
    description: "Experience instant transformation with our signature HydraFacial treatment for immediate, visible results with zero downtime.",
    buttonText: "BOOK CONSULTATION"
  }

  const treatmentInfo = {
    duration: "45-60 minutes",
    results: "Immediate",
    price: "From £150",
    benefits: [
      "Immediate visible results",
      "Deep cleansing and exfoliation",
      "Intense hydration",
      "No downtime required",
      "Suitable for all skin types",
      "Pain-free treatment"
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