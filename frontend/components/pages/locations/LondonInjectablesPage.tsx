import CategoryPageTemplate from '../../CategoryPageTemplate'

export default function LondonInjectablesPage() {
  const hero = {
    title: "Injectable",
    subtitle: "Treatments - London", 
    description: "Professional injectable treatments for aesthetic enhancement, wellness, and therapeutic benefits delivered by experienced practitioners at our London location."
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
      name: "Biofiller",
      description: "Advanced biofiller treatments using cutting-edge techniques tailored for London clients.",
      duration: "60 minutes",
      price: "From £300",
      benefits: ["Advanced technique", "Natural enhancement", "Long-lasting results", "Professional application"],
      route: "procedures/injectables/biofiller-london"
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
    }
  ]

  return (
    <CategoryPageTemplate 
      hero={hero}
      treatments={treatments}
    />
  )
}
