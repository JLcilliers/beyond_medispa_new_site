import ProcedurePageTemplate from '../../../ProcedurePageTemplate'

export default function DermalFacialFillersPage() {
  const heroProps = {
    tagline: "FACIAL ENHANCEMENT",
    title: "Invest in Your Features with",
    subtitle: "Aesthetic Lab",
    description: "Enhance your natural beauty with our expertly administered dermal and facial fillers for volume restoration and facial contouring.",
    buttonText: "BOOK CONSULTATION"
  }

  const treatmentInfo = {
    duration: "30-60 minutes",
    results: "Immediate",
    price: "From £350",
    benefits: [
      "Instant volume restoration",
      "Natural-looking enhancement",
      "Long-lasting results",
      "Minimal downtime",
      "Customizable treatment",
      "FDA-approved products"
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