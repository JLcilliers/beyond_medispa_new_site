import CategoryPageTemplate from '../../CategoryPageTemplate'

const wellbeingTreatments = [
  {
    name: "Harmony Massage",
    description: "Therapeutic full-body massage for deep relaxation and stress relief",
    duration: "60-90 minutes",
    price: "From £150",
    image: "/api/placeholder/400/300",
    benefits: ["Deep relaxation", "Stress relief", "Improved circulation", "Muscle tension release"],
    route: "harmony-massage"
  },
  {
    name: "B12 Injections",
    description: "Vitamin B12 boost for enhanced energy and overall wellness",
    duration: "15 minutes",
    price: "From £50",
    image: "/api/placeholder/400/300",
    benefits: ["Increased energy", "Improved metabolism", "Enhanced mood", "Better sleep"],
    route: "b12-injections"
  },
  {
    name: "Wellness Consultation",
    description: "Comprehensive health and wellness assessment with personalized plan",
    duration: "60 minutes",
    price: "From £200",
    image: "/api/placeholder/400/300",
    benefits: ["Personalized plan", "Expert guidance", "Holistic approach", "Ongoing support"],
    route: "wellness-consultation"
  },
  {
    name: "Stress Management",
    description: "Targeted treatments to reduce stress and promote mental well-being",
    duration: "75 minutes",
    price: "From £180",
    image: "/api/placeholder/400/300",
    benefits: ["Stress reduction", "Mental clarity", "Emotional balance", "Relaxation techniques"],
    route: "stress-management"
  }
]

export default function WellbeingPage() {
  const heroProps = {
    title: "Wellbeing",
    subtitle: "Treatments",
    description: "Nurture your mind, body, and spirit with our comprehensive wellbeing treatments designed to restore balance and enhance your overall quality of life."
  }

  const processSteps = [
    { step: "1", title: "Assessment", description: "Comprehensive wellness evaluation" },
    { step: "2", title: "Planning", description: "Personalized wellbeing strategy" },
    { step: "3", title: "Treatment", description: "Therapeutic wellness sessions" },
    { step: "4", title: "Balance", description: "Ongoing wellness support" }
  ]

  return (
    <CategoryPageTemplate 
      hero={heroProps}
      treatments={wellbeingTreatments}
      processSteps={processSteps}
      showTreatmentGrid={true}
      showProcess={true}
    />
  )
}