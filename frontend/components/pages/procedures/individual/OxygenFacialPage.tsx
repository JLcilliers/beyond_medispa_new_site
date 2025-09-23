import ProcedurePageTemplate from '../../../ProcedurePageTemplate'

export default function OxygenFacialPage() {
  const heroProps = {
    tagline: "BREATHE NEW LIFE",
    title: "Invest in Your Radiance with",
    subtitle: "Aesthetic Lab",
    description: "Revitalize your skin with our oxygen facial treatments that deliver instant hydration and radiance for a glowing complexion.",
    buttonText: "BOOK CONSULTATION"
  }

  const treatmentInfo = {
    duration: "60 minutes",
    results: "Immediate",
    price: "From £100",
    benefits: [
      "Instant hydration boost",
      "Improved skin radiance",
      "Enhanced circulation",
      "Gentle exfoliation",
      "Suitable for sensitive skin",
      "No downtime required"
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