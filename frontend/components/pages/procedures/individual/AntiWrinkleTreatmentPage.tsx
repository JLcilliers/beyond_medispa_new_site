import ProcedurePageTemplate from '../../../ProcedurePageTemplate'

export default function AntiWrinkleTreatmentPage() {
  const heroProps = {
    tagline: "ANTI-AGING EXCELLENCE",
    title: "Invest in Your Youth with",
    subtitle: "Aesthetic Lab",
    description: "Advanced anti-wrinkle treatments using precision techniques to restore your skin's youthful smoothness.",
    buttonText: "BOOK CONSULTATION",
    heroImage: "/anti-wrinkle-hero.png"
  }

  const treatmentInfo = {
    duration: "15-30 minutes",
    results: "3-7 days",
    price: "From £200",
    benefits: [
      "Reduces fine lines and wrinkles",
      "Natural-looking results",
      "Quick treatment time",
      "Minimal discomfort",
      "No downtime required",
      "Long-lasting effects"
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