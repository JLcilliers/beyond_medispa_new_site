import ProcedurePageTemplate from '../../../ProcedurePageTemplate'

export default function HydratiteFacialPage() {
  const heroProps = {
    tagline: "ADVANCED SKINCARE",
    title: "Hydratite Facial",
    subtitle: "Deep Hydration & Rejuvenation",
    description: "Experience the ultimate in skin hydration with our signature Hydratite Facial, designed to deeply moisturize and revitalize your complexion.",
    buttonText: "BOOK CONSULTATION"
  }

  const treatmentInfo = {
    duration: "60-75 minutes",
    results: "Immediate",
    price: "From £150",
    benefits: [
      "Deep skin hydration",
      "Improved skin texture",
      "Enhanced radiance",
      "Reduced fine lines",
      "Restored skin barrier",
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