import ProcedurePageTemplate from '../../../ProcedurePageTemplate'

export default function HydroPeptidePage() {
  const heroProps = {
    tagline: "ADVANCED PEPTIDE THERAPY",
    title: "Hydro Peptide",
    subtitle: "Anti-Aging Treatment",
    description: "Experience revolutionary anti-aging with our Hydro Peptide treatment, combining hydration with powerful peptides for youthful skin.",
    buttonText: "BOOK CONSULTATION"
  }

  const treatmentInfo = {
    duration: "60 minutes",
    results: "Immediate",
    price: "From £180",
    benefits: [
      "Stimulates collagen production",
      "Deep hydration",
      "Reduces fine lines",
      "Improves skin texture",
      "Enhanced elasticity",
      "Immediate glow"
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