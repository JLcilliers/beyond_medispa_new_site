import CategoryPageTemplate from '../../CategoryPageTemplate'

export default function PeelsPage() {
  const hero = {
    title: "Chemical",
    subtitle: "Peels",
    description: "Professional chemical peels to rejuvenate your skin, reduce imperfections, and reveal a brighter, smoother complexion."
  }

  const treatments = [
    {
      name: "Medik8 London",
      description: "Advanced professional peels from Medik8, tailored to London skin needs and environmental factors.",
      duration: "45-60 minutes",
      price: "From £120",
      benefits: ["Professional grade", "London-specific formulation", "Visible results", "Minimal downtime"],
      route: "procedures/peels/medik8-london"
    },
    {
      name: "Medik8 Edinburgh", 
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
      name: "ZO London",
      description: "ZO Skin Health peels specifically formulated for London environmental challenges.",
      duration: "45-60 minutes",
      price: "From £150",
      benefits: ["Environmental protection", "Advanced formulation", "City-specific needs", "Professional results"],
      route: "procedures/peels/zo-london"
    },
    {
      name: "ZO Edinburgh",
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