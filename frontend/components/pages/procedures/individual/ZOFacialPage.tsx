import ProcedurePageTemplate from '../../../ProcedurePageTemplate'

export default function ZOFacialPage() {
  const heroProps = {
    tagline: "MEDICAL-GRADE SKINCARE",
    title: "ZO Facial by Zein Obagi",
    subtitle: "Professional Skin Rejuvenation",
    description: "Experience the gold standard in medical-grade facials with ZO Skin Health protocols designed by renowned dermatologist Dr. Zein Obagi.",
    buttonText: "BOOK CONSULTATION"
  }

  const treatmentInfo = {
    duration: "75-90 minutes",
    results: "Immediate",
    price: "From £200",
    benefits: [
      "Medical-grade formulations",
      "Customized protocols",
      "Deep exfoliation",
      "Improved skin tone",
      "Enhanced texture",
      "Professional results"
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