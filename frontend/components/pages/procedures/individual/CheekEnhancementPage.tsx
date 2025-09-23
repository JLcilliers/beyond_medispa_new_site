import ProcedurePageTemplate from '../../../ProcedurePageTemplate'

export default function CheekEnhancementPage() {
  const heroProps = {
    tagline: "FACIAL CONTOURING",
    title: "Invest in Your Cheeks with",
    subtitle: "Aesthetic Lab",
    description: "Achieve beautifully sculpted and defined cheekbones with our expert cheek enhancement treatments for natural-looking facial contouring.",
    buttonText: "BOOK CONSULTATION"
  }

  const treatmentInfo = {
    duration: "30-45 minutes",
    results: "Immediate",
    price: "From £400",
    benefits: [
      "Enhanced facial definition",
      "Restored volume",
      "Natural-looking results",
      "Improved facial balance",
      "Long-lasting effects",
      "Minimal recovery time"
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