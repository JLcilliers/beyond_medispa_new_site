import CategoryPageTemplate from '../../CategoryPageTemplate'

export default function InjectablesPage() {
  const hero = {
    title: "Injectable",
    subtitle: "Treatments", 
    description: "Professional injectable treatments for aesthetic enhancement, wellness, and therapeutic benefits delivered by experienced practitioners."
  }

  const treatments = [
    {
      name: "Anti Wrinkle",
      description: "Professional anti-wrinkle injections to smooth fine lines and prevent new wrinkle formation.",
      duration: "30 minutes",
      price: "From £150",
      benefits: ["Wrinkle reduction", "Prevention treatment", "Natural results", "Quick procedure"],
      route: "procedures/injectables/anti-wrinkle"
    },
    {
      name: "Carboxy",
      description: "Carbon dioxide therapy injections for improved circulation and skin rejuvenation.",
      duration: "45 minutes",
      price: "From £180",
      benefits: ["Improved circulation", "Skin rejuvenation", "Natural healing", "Non-toxic treatment"],
      route: "procedures/injectables/carboxy"
    },
    {
      name: "Biofiller London",
      description: "Advanced biofiller treatments using cutting-edge techniques tailored for London clients.",
      duration: "60 minutes",
      price: "From £300",
      benefits: ["Advanced technique", "Natural enhancement", "Long-lasting results", "Professional application"],
      route: "procedures/injectables/biofiller-london"
    },
    {
      name: "Biofiller Edinburgh",
      description: "Specialized biofiller treatments customized for Edinburgh clients with regional expertise.",
      duration: "60 minutes", 
      price: "From £300",
      benefits: ["Regional expertise", "Customized approach", "Natural results", "Professional standards"],
      route: "procedures/injectables/biofiller-edinburgh"
    },
    {
      name: "Dermal Filler",
      description: "Professional dermal filler treatments for volume restoration and facial enhancement.",
      duration: "45-60 minutes",
      price: "From £250",
      benefits: ["Volume restoration", "Facial enhancement", "Immediate results", "Professional grade"],
      route: "procedures/injectables/dermal-filler"
    },
    {
      name: "Mole Removal",
      description: "Safe and effective mole removal procedures performed by qualified medical professionals.",
      duration: "15-30 minutes",
      price: "From £100",
      benefits: ["Safe procedure", "Medical professionals", "Quick treatment", "Minimal scarring"],
      route: "procedures/injectables/mole-removal"
    },
    {
      name: "Polynucleotides",
      description: "Advanced polynucleotide therapy for skin regeneration and healing enhancement.",
      duration: "60 minutes",
      price: "From £400",
      benefits: ["Skin regeneration", "Healing enhancement", "Advanced therapy", "Natural results"],
      route: "procedures/injectables/polynucleotides"
    },
    {
      name: "PRP",
      description: "Platelet-Rich Plasma therapy using your own blood for natural skin rejuvenation.",
      duration: "75 minutes",
      price: "From £300",
      benefits: ["Natural treatment", "Your own blood", "Skin rejuvenation", "Minimal side effects"],
      route: "procedures/injectables/prp"
    },
    {
      name: "Profhilo",
      description: "Revolutionary bio-remodeling treatment for skin hydration and firmness improvement.",
      duration: "30 minutes",
      price: "From £280",
      benefits: ["Bio-remodeling", "Deep hydration", "Skin firmness", "Natural enhancement"],
      route: "procedures/injectables/profhilo"
    },
    {
      name: "Neofound", 
      description: "Innovative treatment combining multiple active ingredients for comprehensive skin renewal.",
      duration: "45 minutes",
      price: "From £320",
      benefits: ["Multiple actives", "Comprehensive renewal", "Innovative approach", "Visible results"],
      route: "procedures/injectables/neofound"
    },
    {
      name: "Sclerotherapy",
      description: "Professional treatment for spider veins and small varicose veins using injection therapy.",
      duration: "30-45 minutes",
      price: "From £200",
      benefits: ["Vein treatment", "Minimally invasive", "Quick procedure", "Effective results"],
      route: "procedures/injectables/sclerotherapy"
    },
    {
      name: "Allergy",
      description: "Allergy testing and desensitization injections for various environmental and food allergies.",
      duration: "30 minutes",
      price: "From £80",
      benefits: ["Allergy relief", "Testing available", "Desensitization", "Medical support"],
      route: "procedures/injectables/allergy"
    },
    {
      name: "B12",
      description: "Vitamin B12 injections for energy boost and overall wellness enhancement.",
      duration: "15 minutes",
      price: "From £40",
      benefits: ["Energy boost", "Wellness support", "Quick treatment", "Vitamin supplementation"],
      route: "procedures/injectables/b12"
    },
    {
      name: "Biotin",
      description: "Biotin injections for hair, skin, and nail health improvement and strengthening.",
      duration: "15 minutes",
      price: "From £45",
      benefits: ["Hair health", "Skin improvement", "Nail strengthening", "Beauty from within"],
      route: "procedures/injectables/biotin"
    },
    {
      name: "Glutathione",
      description: "Powerful antioxidant injections for detoxification and skin brightening benefits.",
      duration: "20 minutes",
      price: "From £60",
      benefits: ["Antioxidant boost", "Detoxification", "Skin brightening", "Cellular protection"],
      route: "procedures/injectables/glutathione"
    },
    {
      name: "IV Drip",
      description: "Customized intravenous vitamin and mineral drips for optimal hydration and wellness.",
      duration: "45-60 minutes",
      price: "From £120",
      benefits: ["Direct absorption", "Customized formula", "Optimal hydration", "Wellness boost"],
      route: "procedures/injectables/iv-drip"
    },
    {
      name: "Magnesium",
      description: "Magnesium injections for muscle health, stress relief, and overall wellness support.",
      duration: "15 minutes",
      price: "From £50",
      benefits: ["Muscle health", "Stress relief", "Sleep improvement", "Wellness support"],
      route: "procedures/injectables/magnesium"
    },
    {
      name: "Vitamin D",
      description: "Vitamin D injections for immune support and bone health, especially important in limited sunlight.",
      duration: "15 minutes",
      price: "From £45",
      benefits: ["Immune support", "Bone health", "Mood improvement", "Essential vitamin"],
      route: "procedures/injectables/vitamin-d"
    }
  ]

  return (
    <CategoryPageTemplate 
      hero={hero}
      treatments={treatments}
    />
  )
}