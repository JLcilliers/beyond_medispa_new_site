import CategoryPageTemplate from '../../CategoryPageTemplate'

export default function EdinburghFacialPage() {
  const hero = {
    title: "Facial", 
    subtitle: "Treatments - Edinburgh",
    description: "Advanced facial treatments using cutting-edge technology to revitalize, hydrate, and restore your skin's natural radiance at our Edinburgh location."
  }

  const treatments = [
    {
      name: "Exosome",
      description: "Cutting-edge exosome therapy for advanced skin regeneration and anti-aging benefits.",
      duration: "75-90 minutes",
      price: "From £350",
      benefits: ["Advanced regeneration", "Stem cell technology", "Anti-aging focus", "Cutting-edge treatment"],
      route: "procedures/facial/exosome"
    },
    {
      name: "HydraFacial",
      description: "HydraFacial treatments adapted for Edinburgh's climate and specific skin concerns.",
      duration: "60 minutes",
      price: "From £150",
      benefits: ["Climate-adapted", "Instant glow", "Deep hydration", "Gentle yet effective"],
      route: "procedures/facial/hydrafacial-edinburgh"
    },
    {
      name: "HydraTite",
      description: "Innovative hydrating facial treatment that combines deep moisture with skin tightening benefits.",
      duration: "75 minutes",
      price: "From £180",
      benefits: ["Deep hydration", "Skin tightening", "Anti-aging benefits", "Immediate results"],
      route: "procedures/facial/hydratite"
    },
    {
      name: "Keravive",
      description: "Advanced scalp and hair follicle treatment for healthier hair growth and scalp condition.",
      duration: "90 minutes",
      price: "From £200",
      benefits: ["Hair growth stimulation", "Scalp health", "Follicle cleansing", "Professional grade"],
      route: "procedures/facial/keravive"
    },
    {
      name: "LED Facial",
      description: "Light therapy facial using specific wavelengths to target various skin concerns and promote healing.",
      duration: "45 minutes",
      price: "From £80",
      benefits: ["Light therapy", "Multiple skin concerns", "Pain-free treatment", "Healing promotion"],
      route: "procedures/facial/led-facial"
    },
    {
      name: "Microneedling", 
      description: "Customized microneedling therapy designed for Edinburgh's climate and regional skin needs.",
      duration: "60-75 minutes",
      price: "From £180", 
      benefits: ["Regional customization", "Skin renewal", "Fine line reduction", "Professional technique"],
      route: "procedures/facial/microneedling-edinburgh"
    },
    {
      name: "Skin Scanner",
      description: "Advanced skin analysis technology to assess your skin condition and create personalized treatment plans.",
      duration: "15-30 minutes",
      price: "From £50",
      benefits: ["Detailed skin analysis", "Personalized recommendations", "Treatment planning", "Progress tracking"],
      route: "procedures/facial/skin-scanner"
    }
  ]

  return (
    <CategoryPageTemplate 
      hero={hero}
      treatments={treatments}
    />
  )
}
