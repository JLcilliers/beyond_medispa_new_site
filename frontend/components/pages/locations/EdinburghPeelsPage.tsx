import CategoryPageTemplate from '../../CategoryPageTemplate'

export default function EdinburghPeelsPage() {
  const hero = {
    title: "Chemical",
    subtitle: "Peels - Edinburgh",
    description: "Professional chemical peels to rejuvenate your skin, reduce imperfections, and reveal a brighter, smoother complexion at our Edinburgh location."
  }

  const treatments = [
    {
      name: "Medik8", 
      description: "Specialized Medik8 peels designed for Edinburgh climate and skin concerns.",
      duration: "45-60 minutes",
      price: "From £120",
      benefits: ["Climate-adapted formula", "Regional expertise", "Proven results", "Professional application"],
      route: "procedures/peels/medik8-edinburgh"
    },
    {
      name: "Obagi",
      description: "Physician-strength Obagi peels for dramatic skin transformation and anti-aging results.",
      duration: "60 minutes",
      price: "From £180",
      benefits: ["Physician strength", "Dramatic results", "Anti-aging focus", "Professional grade"],
      route: "procedures/peels/obagi"
    },
    {
      name: "ZO",
      description: "Customized ZO Skin Health peels adapted for Edinburgh's unique climate and skin needs.",
      duration: "45-60 minutes", 
      price: "From £150",
      benefits: ["Climate customized", "Regional expertise", "Advanced technology", "Tailored approach"],
      route: "procedures/peels/zo-edinburgh"
    }
  ]

  return (
    <CategoryPageTemplate 
      hero={hero}
      treatments={treatments}
    />
  )
}
