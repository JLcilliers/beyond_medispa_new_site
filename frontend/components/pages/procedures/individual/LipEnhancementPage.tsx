import ProcedurePageTemplate from '../../../ProcedurePageTemplate'

export default function LipEnhancementPage() {
  const heroProps = {
    tagline: "LIP PERFECTION",
    title: "Invest in Your Lips with",
    subtitle: "Aesthetic Lab",
    description: "Enhance your natural lip beauty with our expert lip enhancement treatments for fuller, more defined lips.",
    buttonText: "BOOK CONSULTATION",
    backgroundImage: "/lip-enhancement-hero.png"
  }

  const treatmentInfo = {
    duration: "30-45 minutes",
    results: "Immediate",
    price: "From £300",
    benefits: [
      "Fuller, more defined lips",
      "Natural-looking results",
      "Immediate visible improvement",
      "Minimal discomfort",
      "Quick recovery time",
      "Customizable enhancement"
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