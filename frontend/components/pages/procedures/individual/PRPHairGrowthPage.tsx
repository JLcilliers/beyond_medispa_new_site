import ProcedurePageTemplate from '../../../ProcedurePageTemplate'

export default function PRPHairGrowthPage() {
  const heroProps = {
    tagline: "HAIR RESTORATION",
    title: "PRP for Hair Growth",
    subtitle: "Natural Hair Regeneration",
    description: "Stimulate natural hair growth with Platelet-Rich Plasma therapy, a cutting-edge treatment for hair restoration and density improvement.",
    buttonText: "BOOK CONSULTATION"
  }

  const treatmentInfo = {
    duration: "60-90 minutes",
    results: "3-6 months",
    price: "From £400",
    benefits: [
      "Stimulates hair follicles",
      "Improves hair density",
      "Natural hair growth",
      "Reduced hair loss",
      "Enhanced scalp health",
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