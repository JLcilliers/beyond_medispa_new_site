import ProcedurePageTemplate from '../../../ProcedurePageTemplate'

export default function ProfhiloPage() {
  const heroProps = {
    tagline: "SKIN HYDRATION",
    title: "Invest in Your Hydration with",
    subtitle: "Aesthetic Lab",
    description: "Experience the revolutionary Profhilo treatment for deep skin hydration and bio-remodeling that improves skin quality from within.",
    buttonText: "BOOK CONSULTATION",
    backgroundImage: "/profhilo-hero.png"
  }

  const treatmentInfo = {
    duration: "30 minutes",
    results: "4-6 weeks",
    price: "From £450",
    benefits: [
      "Deep skin hydration",
      "Improved skin elasticity",
      "Natural bio-remodeling",
      "Slow-release hyaluronic acid",
      "Minimal injection points",
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