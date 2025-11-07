import CategoryPageTemplate from '../../CategoryPageTemplate'

export default function LondonBodyPage() {
  const hero = {
    title: "Body",
    subtitle: "Treatments - London",
    description: "Transform your body with our advanced non-invasive treatments available at our London location."
  }

  const treatments = [
    {
      name: "Exilis",
      description: "Revolutionary radiofrequency technology for skin tightening and body contouring without surgery.",
      duration: "45-60 minutes",
      price: "From £250",
      benefits: ["Skin tightening", "Body contouring", "Cellulite reduction", "Non-invasive"],
      route: "procedures/body/exilis"
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
      name: "Unison",
      description: "Multi-technology platform combining radiofrequency and ultrasound for comprehensive body treatments.",
      duration: "60 minutes",
      price: "From £300",
      benefits: ["Multi-technology approach", "Comprehensive results", "Customizable treatment", "Professional grade"],
      route: "procedures/body/unison"
    },
    {
      name: "Vanquish",
      description: "Contactless radiofrequency technology for circumferential fat reduction across large treatment areas.",
      duration: "45 minutes",
      price: "From £280",
      benefits: ["Contactless treatment", "Large area coverage", "Comfortable sessions", "Gradual natural results"],
      route: "procedures/body/vanquish"
    }
  ]

  return (
    <CategoryPageTemplate 
      hero={hero}
      treatments={treatments}
    />
  )
}
