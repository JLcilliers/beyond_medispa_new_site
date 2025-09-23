import ProcedurePageTemplate from '../../../ProcedurePageTemplate'

export default function UnderEyeCorrectionPage() {
  const heroProps = {
    tagline: "EYE REJUVENATION",
    title: "Invest in Your Eyes with",
    subtitle: "Aesthetic Lab",
    description: "Correct under-eye concerns including dark circles, hollows, and bags with our specialized eye area treatments for a refreshed appearance.",
    buttonText: "BOOK CONSULTATION"
  }

  const treatmentInfo = {
    duration: "30-45 minutes",
    results: "Immediate",
    price: "From £450",
    benefits: [
      "Reduced dark circles",
      "Corrected under-eye hollows",
      "Brightened eye area",
      "Refreshed appearance",
      "Natural-looking results",
      "Minimal bruising"
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