import ProcedurePageTemplate from '../../../ProcedurePageTemplate'

export default function CoolSculptingMenPage() {
  const heroProps = {
    tagline: "MEN'S BODY CONTOURING",
    title: "CoolSculpting for Men",
    subtitle: "Targeted Fat Reduction",
    description: "Specialized CoolSculpting treatments designed specifically for men's body contouring needs, targeting stubborn fat areas effectively.",
    buttonText: "BOOK CONSULTATION"
  }

  const treatmentInfo = {
    duration: "35-60 minutes",
    results: "2-4 months",
    price: "From £600",
    benefits: [
      "FDA-approved technology",
      "Targets stubborn fat",
      "No surgery required",
      "Minimal downtime",
      "Natural-looking results",
      "Permanent fat reduction"
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