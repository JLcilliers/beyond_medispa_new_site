import ProcedurePageTemplate from '../../../ProcedurePageTemplate'

export default function FacialBalancingPage() {
  const heroProps = {
    tagline: "FACIAL HARMONY",
    title: "Facial Balancing",
    subtitle: "Complete Aesthetic Enhancement",
    description: "Achieve perfect facial harmony with our comprehensive facial balancing treatments, designed to enhance your natural features proportionally.",
    buttonText: "BOOK CONSULTATION",
    backgroundImage: "/facial-balancing-hero.png"
  }

  const treatmentInfo = {
    duration: "45-60 minutes",
    results: "Immediate",
    price: "From £500",
    benefits: [
      "Enhanced facial symmetry",
      "Improved proportions",
      "Natural-looking results",
      "Boosted confidence",
      "Long-lasting effects",
      "Comprehensive approach"
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