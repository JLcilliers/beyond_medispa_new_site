import ProcedurePageTemplate from '../../../ProcedurePageTemplate'

export default function NucleofillPage() {
  const heroProps = {
    tagline: "ADVANCED BIOREVITALIZATION",
    title: "Nucleofill",
    subtitle: "Skin Regeneration Therapy",
    description: "Revolutionary bio-revitalization treatment using polynucleotides to stimulate natural skin regeneration and repair.",
    buttonText: "BOOK CONSULTATION",
    backgroundImage: "/nucleofill-hero.png"
  }

  const treatmentInfo = {
    duration: "30-45 minutes",
    results: "2-4 weeks",
    price: "From £300",
    benefits: [
      "Stimulates collagen production",
      "Improves skin elasticity",
      "Reduces fine lines",
      "Enhanced skin hydration",
      "Natural regeneration",
      "Long-lasting results"
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