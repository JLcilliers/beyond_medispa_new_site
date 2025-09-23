import CategoryPageTemplate from '../../CategoryPageTemplate'

const bodyContouringTreatments = [
  {
    name: "CoolSculpting",
    description: "Revolutionary fat freezing technology for permanent fat reduction without surgery",
    duration: "45-90 minutes",
    price: "From £450",
    image: "/api/placeholder/400/300",
    benefits: ["Permanent fat reduction", "No surgery", "Zero downtime", "FDA-approved"],
    route: "coolsculpting"
  },
  {
    name: "Vanquish ME",
    description: "Non-contact fat reduction technology for comfortable body contouring",
    duration: "45 minutes",
    price: "From £350",
    image: "/api/placeholder/400/300",
    benefits: ["Non-contact treatment", "No downtime", "Large area coverage", "Comfortable"],
    route: "vanquish"
  },
  {
    name: "Fat Freezing",
    description: "Advanced cryolipolysis treatment to eliminate stubborn fat cells naturally",
    duration: "60 minutes",
    price: "From £400",
    image: "/api/placeholder/400/300",
    benefits: ["Natural fat elimination", "Targeted areas", "Non-invasive", "Proven results"],
    route: "fat-freezing"
  },
  {
    name: "Body Sculpting",
    description: "Comprehensive body contouring using multiple advanced technologies",
    duration: "90 minutes",
    price: "From £500",
    image: "/api/placeholder/400/300",
    benefits: ["Complete contouring", "Multiple technologies", "Customized approach", "Dramatic results"],
    route: "body-sculpting"
  }
]

export default function BodyContouringPage() {
  const heroProps = {
    title: "Body",
    subtitle: "Contouring",
    description: "Sculpt your ideal silhouette with our advanced body contouring technologies. Non-surgical solutions for permanent fat reduction and body shaping."
  }

  const processSteps = [
    { step: "1", title: "Assessment", description: "Body composition and goal analysis" },
    { step: "2", title: "Design", description: "Custom contouring treatment plan" },
    { step: "3", title: "Sculpting", description: "Advanced body contouring sessions" },
    { step: "4", title: "Results", description: "Progress tracking and maintenance" }
  ]

  return (
    <CategoryPageTemplate 
      hero={heroProps}
      treatments={bodyContouringTreatments}
      processSteps={processSteps}
      showTreatmentGrid={true}
      showProcess={true}
    />
  )
}