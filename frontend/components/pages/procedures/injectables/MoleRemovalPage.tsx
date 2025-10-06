import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function MoleRemovalPage() {
  const hero = {
    tagline: "SAFE LESION REMOVAL",
    title: "Mole Removal",
    subtitle: "Professional Skin Lesion Treatment",
    description: "Safely remove unwanted moles and skin lesions with our professional treatment. Quick procedures under local anesthetic with minimal downtime and scar-minimizing techniques.",
  };

  const treatmentInfo = {
    duration: "20–45 minutes",
    results: "Immediate removal; healing 1–3 weeks",
    price: "Contact for pricing",
    benefits: [
      "Quick under local anaesthetic",
      "Precise",
      "Minimal downtime",
      "Option for histology",
      "Suitable for many lesions",
      "Scar-minimising"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero}
      treatmentInfo={treatmentInfo}
    />
  );
}
