import CategoryPageTemplate from '../../CategoryPageTemplate'

export default function FacialPage() {
  const hero = {
    title: "Facial", 
    subtitle: "Treatments",
    description: "Advanced facial treatments using cutting-edge technology to revitalize, hydrate, and restore your skin's natural radiance."
  }

  const treatments = [
    {
      name: "Skin Scanner",
      description: "Advanced skin analysis technology to assess your skin condition and create personalized treatment plans.",
      duration: "15-30 minutes",
      price: "From £50",
      benefits: ["Detailed skin analysis", "Personalized recommendations", "Treatment planning", "Progress tracking"],
      route: "procedures/facial/skin-scanner"
    },
    {
      name: "Hydrafacial London",
      description: "The signature HydraFacial treatment customized for London skin needs and environmental factors.",
      duration: "60 minutes",
      price: "From £150", 
      benefits: ["Instant results", "No downtime", "Deep cleansing", "Hydrating boost"],
      route: "procedures/facial/hydrafacial-london"
    },
    {
      name: "Hydrafacial Edinburgh",
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
      name: "Oxygen Facial",
      description: "Revitalizing oxygen-infused facial treatment for instant radiance and skin rejuvenation.",
      duration: "60 minutes", 
      price: "From £120",
      benefits: ["Instant radiance", "Oxygen infusion", "Skin rejuvenation", "Immediate glow"],
      route: "procedures/facial/oxygen-facial"
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
      name: "Microneedling London",
      description: "Professional microneedling treatment tailored for London skin types and environmental challenges.",
      duration: "60-75 minutes",
      price: "From £180",
      benefits: ["Collagen stimulation", "Texture improvement", "Scar reduction", "Natural results"],
      route: "procedures/facial/microneedling-london"
    },
    {
      name: "Microneedling Edinburgh", 
      description: "Customized microneedling therapy designed for Edinburgh's climate and regional skin needs.",
      duration: "60-75 minutes",
      price: "From £180", 
      benefits: ["Regional customization", "Skin renewal", "Fine line reduction", "Professional technique"],
      route: "procedures/facial/microneedling-edinburgh"
    },
    {
      name: "Exosome",
      description: "Cutting-edge exosome therapy for advanced skin regeneration and anti-aging benefits.",
      duration: "75-90 minutes",
      price: "From £350",
      benefits: ["Advanced regeneration", "Stem cell technology", "Anti-aging focus", "Cutting-edge treatment"],
      route: "procedures/facial/exosome"
    },
    {
      name: "Dermaplaning",
      description: "Professional exfoliation treatment removing dead skin cells and fine facial hair for smoother skin.",
      duration: "45 minutes",
      price: "From £100",
      benefits: ["Instant smoothness", "Better product absorption", "Makeup application", "Gentle exfoliation"],
      route: "procedures/facial/dermaplaning"
    }
  ]

  return (
    <CategoryPageTemplate 
      hero={hero}
      treatments={treatments}
    />
  )
}