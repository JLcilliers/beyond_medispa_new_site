import ProcedurePageTemplate from '../../../ProcedurePageTemplate'

export default function B12InjectionsPage() {
  const heroProps = {
    tagline: "WELLNESS BOOST",
    title: "Invest in Your Energy with",
    subtitle: "Aesthetic Lab",
    description: "Boost your energy levels and overall wellness with our vitamin B12 injections for enhanced vitality and improved well-being.",
    buttonText: "BOOK CONSULTATION"
  }

  const treatmentInfo = {
    duration: "15 minutes",
    results: "1-3 days",
    price: "From £50",
    benefits: [
      "Increased energy levels",
      "Improved metabolism",
      "Enhanced mood",
      "Better sleep quality",
      "Supports immune system",
      "Quick and easy treatment"
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