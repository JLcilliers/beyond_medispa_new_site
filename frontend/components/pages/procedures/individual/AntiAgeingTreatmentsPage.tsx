import ProcedurePageTemplate from '../../../ProcedurePageTemplate'

export default function AntiAgeingTreatmentsPage() {
  const heroProps = {
    tagline: "TIMELESS BEAUTY",
    title: "Invest in Your Youth with",
    subtitle: "Aesthetic Lab",
    description: "Turn back time with our comprehensive anti-aging treatments designed to restore your youthful radiance and vitality.",
    buttonText: "BOOK CONSULTATION"
  }

  const treatmentInfo = {
    duration: "45-90 minutes",
    results: "2-4 weeks",
    price: "From £250",
    benefits: [
      "Reduced signs of aging",
      "Improved skin elasticity",
      "Enhanced radiance",
      "Comprehensive approach",
      "Customized treatments",
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