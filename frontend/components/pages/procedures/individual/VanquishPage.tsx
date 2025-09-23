import ProcedurePageTemplate from '../../../ProcedurePageTemplate'

export default function VanquishPage() {
  const heroProps = {
    tagline: "BODY TRANSFORMATION",
    title: "Invest in Your Shape with",
    subtitle: "Aesthetic Lab",
    description: "Transform your body with Vanquish ME technology for non-contact fat reduction and body contouring without surgery or downtime.",
    buttonText: "BOOK CONSULTATION"
  }

  const treatmentInfo = {
    duration: "45 minutes",
    results: "4-6 weeks",
    price: "From £350",
    benefits: [
      "Non-contact fat reduction",
      "No downtime required",
      "Comfortable treatment",
      "Large area coverage",
      "Gradual natural results",
      "Safe and effective"
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