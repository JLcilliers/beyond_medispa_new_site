import ProcedurePageTemplate from '../../../ProcedurePageTemplate'

export default function FatDissolvingInjectablesPage() {
  const heroProps = {
    tagline: "NON-SURGICAL CONTOURING",
    title: "Fat Dissolving",
    subtitle: "Injectable Treatments",
    description: "Eliminate stubborn fat deposits with our advanced fat dissolving injectable treatments for precise body contouring.",
    buttonText: "BOOK CONSULTATION",
    backgroundImage: "/fat-dissolving-hero.png"
  }

  const treatmentInfo = {
    duration: "30-45 minutes",
    results: "4-6 weeks",
    price: "From £200",
    benefits: [
      "Targeted fat reduction",
      "Non-surgical approach",
      "Minimal downtime",
      "Precise contouring",
      "Long-lasting results",
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