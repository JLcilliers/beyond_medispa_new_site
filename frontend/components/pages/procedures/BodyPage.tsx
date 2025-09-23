import CategoryPageTemplate from '../../CategoryPageTemplate'

const bodyTreatments = [
  {
    name: "Body Contouring",
    description: "Advanced non-surgical body sculpting to target stubborn fat areas",
    duration: "60-90 minutes",
    price: "From £450",
    image: "/api/placeholder/400/300",
    benefits: ["Fat reduction", "Skin tightening", "Improved contours", "Non-invasive"],
    route: "body-contouring"
  },
  {
    name: "Cellulite Treatment",
    description: "Comprehensive cellulite reduction using cutting-edge technology", 
    duration: "45-60 minutes",
    price: "From £300",
    image: "/api/placeholder/400/300",
    benefits: ["Smoother skin", "Improved texture", "Enhanced circulation", "Long-lasting results"],
    route: "cellulite-treatment"
  },
  {
    name: "CoolSculpting",
    description: "Revolutionary fat freezing technology for permanent fat reduction",
    duration: "45-90 minutes",
    price: "From £450",
    image: "/api/placeholder/400/300", 
    benefits: ["Permanent fat reduction", "No surgery", "Zero downtime", "FDA-approved"],
    route: "coolsculpting"
  },
  {
    name: "Vanquish ME",
    description: "Non-contact fat reduction for body contouring without surgery",
    duration: "45 minutes", 
    price: "From £350",
    image: "/api/placeholder/400/300",
    benefits: ["Non-contact treatment", "No downtime", "Large area coverage", "Comfortable"],
    route: "vanquish"
  }
]

export default function BodyPage() {
  const heroProps = {
    title: "Body",
    subtitle: "Treatments",
    description: "Transform your body with our comprehensive range of non-surgical treatments. From body contouring to skin rejuvenation, achieve your ideal silhouette with confidence."
  }

  const processSteps = [
    { step: "1", title: "Consultation", description: "Detailed assessment and body analysis" },
    { step: "2", title: "Planning", description: "Customized treatment plan creation" },
    { step: "3", title: "Treatment", description: "Professional body contouring sessions" },
    { step: "4", title: "Results", description: "Ongoing support and maintenance" }
  ]

  return (
    <CategoryPageTemplate 
      hero={heroProps}
      treatments={bodyTreatments}
      processSteps={processSteps}
      showTreatmentGrid={true}
      showProcess={true}
    />
  )
}