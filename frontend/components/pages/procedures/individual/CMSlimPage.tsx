import ProcedurePageTemplate from '../../../ProcedurePageTemplate'

export default function CMSlimPage() {
  const heroProps = {
    tagline: "ELECTROMAGNETIC SCULPTING",
    title: "CM Slim",
    subtitle: "Muscle Building & Fat Reduction",
    description: "Advanced electromagnetic technology that simultaneously builds muscle and burns fat for effective body contouring and toning.",
    buttonText: "BOOK CONSULTATION"
  }

  const treatmentInfo = {
    duration: "30 minutes",
    results: "2-4 weeks",
    price: "From £150",
    benefits: [
      "Builds muscle mass",
      "Reduces fat",
      "Non-invasive treatment",
      "No downtime required",
      "Targeted sculpting",
      "Visible results"
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