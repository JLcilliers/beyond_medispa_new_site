import ProcedurePageTemplate from '../../../ProcedurePageTemplate'

export default function ExosomesDecPage() {
  const heroProps = {
    tagline: "REGENERATIVE MEDICINE",
    title: "Exosomes / DEC",
    subtitle: "Advanced Skin Regeneration",
    description: "Revolutionary exosome therapy for skin regeneration, utilizing cutting-edge stem cell technology for ultimate anti-aging results.",
    buttonText: "BOOK CONSULTATION"
  }

  const treatmentInfo = {
    duration: "45-60 minutes",
    results: "2-6 weeks",
    price: "From £500",
    benefits: [
      "Stem cell regeneration",
      "Improved skin texture",
      "Reduced inflammation",
      "Enhanced healing",
      "Natural anti-aging",
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