import CategoryPageTemplate from '../../CategoryPageTemplate'

export default function LondonPeelsPage() {
  const hero = {
    title: "Chemical",
    subtitle: "Peels - London",
    description: "Professional chemical peels to rejuvenate your skin, reduce imperfections, and reveal a brighter, smoother complexion at our London location."
  }

  const treatments = [
    {
      name: "Medik8",
      description: "Advanced professional peels from Medik8, tailored to London skin needs and environmental factors.",
      duration: "45-60 minutes",
      price: "From £120",
      benefits: ["Professional grade", "London-specific formulation", "Visible results", "Minimal downtime"],
      route: "procedures/peels/medik8-london"
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
      description: "ZO Skin Health peels specifically formulated for London environmental challenges.",
      duration: "45-60 minutes",
      price: "From £150",
      benefits: ["Environmental protection", "Advanced formulation", "City-specific needs", "Professional results"],
      route: "procedures/peels/zo-london"
    }
  ]

  return (
    <CategoryPageTemplate 
      hero={hero}
      treatments={treatments}
    />
  )
}
