import ProcedurePageTemplate from '../../../ProcedurePageTemplate'

export default function MicroneedlingPage() {
  const heroProps = {
    tagline: "SKIN REJUVENATION",
    title: "Invest in Your Skin with",
    subtitle: "Aesthetic Lab",
    description: "Stimulate natural collagen production and achieve smoother, more radiant skin with our advanced microneedling treatments.",
    buttonText: "BOOK CONSULTATION"
  }

  const treatmentInfo = {
    duration: "60-90 minutes",
    results: "2-4 weeks",
    price: "From £250",
    benefits: [
      "Improved skin texture",
      "Reduced fine lines",
      "Minimized pore size",
      "Enhanced skin tone",
      "Natural collagen boost",
      "Suitable for all skin types"
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