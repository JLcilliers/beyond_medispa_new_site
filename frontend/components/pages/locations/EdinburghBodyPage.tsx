import CategoryPageTemplate from '../../CategoryPageTemplate'

export default function EdinburghBodyPage() {
  const hero = {
    title: "Body",
    subtitle: "Treatments - Edinburgh",
    description: "Transform your body with our advanced non-invasive treatments available at our Edinburgh location."
  }

  const treatments = [
    {
      name: "Electrolysis",
      description: "The only FDA-approved method for permanent hair removal, suitable for all hair and skin types.",
      duration: "15-45 minutes",
      price: "From £30",
      benefits: ["100% permanent", "All hair types", "All skin tones", "FDA approved"],
      route: "procedures/body/electrolysis"
    },
    {
      name: "Exilis",
      description: "Revolutionary radiofrequency technology for skin tightening and body contouring without surgery.",
      duration: "45-60 minutes",
      price: "From £250",
      benefits: ["Skin tightening", "Body contouring", "Cellulite reduction", "Non-invasive"],
      route: "procedures/body/exilis"
    },
    {
      name: "CM Slim",
      description: "Advanced electromagnetic muscle stimulation for muscle building and fat reduction.",
      duration: "30 minutes",
      price: "From £200",
      benefits: ["Muscle building", "Fat reduction", "Core strengthening", "Quick sessions"],
      route: "procedures/body/cmslim"
    },
    {
      name: "Cool Laser",
      description: "Innovative cold laser technology for targeted fat reduction and body sculpting.",
      duration: "45 minutes",
      price: "From £180",
      benefits: ["Targeted fat reduction", "Pain-free treatment", "No recovery time", "Immediate results"],
      route: "procedures/body/cool-laser"
    },
    {
      name: "CoolSculpting",
      description: "FDA-approved cryolipolysis treatment that freezes and eliminates stubborn fat cells.",
      duration: "35-60 minutes",
      price: "From £400",
      benefits: ["FDA approved", "Permanent fat reduction", "No surgery required", "Proven results"],
      route: "procedures/body/coolsculpting"
    },
    {
      name: "Hifu",
      description: "High-Intensity Focused Ultrasound for precise body contouring and skin lifting.",
      duration: "60-90 minutes", 
      price: "From £350",
      benefits: ["Deep tissue lifting", "Precise targeting", "Long-lasting results", "No downtime"],
      route: "procedures/body/hifu"
    },
    {
      name: "Laser Hair Removal",
      description: "Professional laser hair removal for smooth, hair-free skin on any area of the body.",
      duration: "15-60 minutes",
      price: "From £50",
      benefits: ["Permanent hair reduction", "All skin types", "Quick treatments", "Smooth results"],
      route: "procedures/body/laser-hair-removal"
    }
  ]

  return (
    <CategoryPageTemplate 
      hero={hero}
      treatments={treatments}
    />
  )
}
