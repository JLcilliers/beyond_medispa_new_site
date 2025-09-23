import CategoryPageTemplate from '../../CategoryPageTemplate'

const skinConcernsTreatments = [
  {
    name: "Acne Treatment",
    description: "Comprehensive acne management using advanced therapies and treatments",
    duration: "45-60 minutes",
    price: "From £200",
    image: "/api/placeholder/400/300",
    benefits: ["Reduces breakouts", "Clears pores", "Prevents scarring", "Improves skin texture"],
    route: "acne-treatment"
  },
  {
    name: "Pigmentation Correction",
    description: "Advanced treatments to reduce dark spots and even skin tone",
    duration: "60 minutes",
    price: "From £300",
    image: "/api/placeholder/400/300",
    benefits: ["Even skin tone", "Reduced dark spots", "Brighter complexion", "Professional results"],
    route: "pigmentation-correction"
  },
  {
    name: "Rosacea Management",
    description: "Gentle treatments specifically designed for sensitive, rosacea-prone skin",
    duration: "45 minutes",
    price: "From £180",
    image: "/api/placeholder/400/300",
    benefits: ["Reduced redness", "Calming effects", "Gentle approach", "Long-term management"],
    route: "rosacea-management"
  },
  {
    name: "Scar Reduction",
    description: "Advanced therapies to minimize the appearance of scars and improve skin texture",
    duration: "60-90 minutes",
    price: "From £350",
    image: "/api/placeholder/400/300",
    benefits: ["Scar reduction", "Improved texture", "Skin renewal", "Enhanced confidence"],
    route: "scar-reduction"
  }
]

export default function SkinConcernsPage() {
  const heroProps = {
    title: "Skin",
    subtitle: "Concerns",
    description: "Address specific skin concerns with our targeted treatments. From acne to pigmentation, our expert team provides personalized solutions for healthier, clearer skin."
  }

  const processSteps = [
    { step: "1", title: "Analysis", description: "Detailed skin concern assessment" },
    { step: "2", title: "Strategy", description: "Targeted treatment plan development" },
    { step: "3", title: "Treatment", description: "Specialized concern-focused therapy" },
    { step: "4", title: "Maintenance", description: "Ongoing skin health support" }
  ]

  return (
    <CategoryPageTemplate 
      hero={heroProps}
      treatments={skinConcernsTreatments}
      processSteps={processSteps}
      showTreatmentGrid={true}
      showProcess={true}
    />
  )
}