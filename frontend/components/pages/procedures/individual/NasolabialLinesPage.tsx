import ProcedurePageTemplate from '../../../ProcedurePageTemplate'

export default function NasolabialLinesPage() {
  const heroProps = {
    tagline: "FACIAL SMOOTHING",
    title: "Invest in Your Smoothness with",
    subtitle: "Aesthetic Lab",
    description: "Soften nasolabial lines and restore youthful facial contours with our expert dermal filler treatments for natural-looking results.",
    buttonText: "BOOK CONSULTATION"
  }

  const treatmentInfo = {
    duration: "30-45 minutes",
    results: "Immediate",
    price: "From £350",
    benefits: [
      "Reduced nasolabial lines",
      "Restored facial volume",
      "Natural-looking results",
      "Immediate improvement",
      "Long-lasting effects",
      "Minimal downtime"
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