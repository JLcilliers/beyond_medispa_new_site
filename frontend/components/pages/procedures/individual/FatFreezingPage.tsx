import ProcedurePageTemplate from '../../../ProcedurePageTemplate'

export default function FatFreezingPage() {
  const heroProps = {
    tagline: "BODY SCULPTING",
    title: "Invest in Your Contours with",
    subtitle: "Aesthetic Lab",
    description: "Transform your body with our advanced fat freezing technology for permanent fat reduction in stubborn areas without surgery.",
    buttonText: "BOOK CONSULTATION"
  }

  const treatmentInfo = {
    duration: "45-90 minutes",
    results: "2-4 months",
    price: "From £400",
    benefits: [
      "Permanent fat reduction",
      "Non-surgical treatment",
      "No downtime required",
      "Targets stubborn fat areas",
      "Natural-looking results",
      "FDA-approved technology"
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