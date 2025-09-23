import ProcedurePageTemplate from '../../../ProcedurePageTemplate'

export default function CoolSculptingPage() {
  const heroProps = {
    tagline: "BODY TRANSFORMATION",
    title: "Invest in Your Body with",
    subtitle: "Aesthetic Lab",
    description: "Revolutionary CoolSculpting technology for permanent fat reduction without surgery or downtime.",
    buttonText: "BOOK CONSULTATION"
  }

  const treatmentInfo = {
    duration: "45-90 minutes",
    results: "2-4 months",
    price: "From £450",
    benefits: [
      "Permanent fat reduction",
      "No surgery required",
      "Zero downtime",
      "FDA-approved technology",
      "Natural-looking results",
      "Comfortable treatment"
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