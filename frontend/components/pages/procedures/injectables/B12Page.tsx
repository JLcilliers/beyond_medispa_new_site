import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function B12Page() {
  const hero = {
    tagline: "VITAMIN B12 INJECTION",
    title: "B12 Injections",
    subtitle: "Energy & Wellbeing Boost",
    description: "Address B12 deficiency and support energy metabolism with quick intramuscular injections. Boost your energy and nervous system health with minimal downtime.",
  };

  const treatmentInfo = {
    duration: "10–15 minutes",
    results: "Energy and wellbeing may improve over days to weeks",
    price: "Contact for pricing",
    benefits: [
      "Addresses deficiency",
      "Supports energy metabolism",
      "Nervous system support",
      "Quick",
      "Minimal downtime",
      "Intramuscular"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero}
      treatmentInfo={treatmentInfo}
    />
  );
}
