import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function VanquishPage() {
  const hero = {
    tagline: "CONTACTLESS FAT REDUCTION",
    title: "Vanquish",
    subtitle: "Non-Invasive Body Contouring",
    description: "Experience contactless fat reduction with Vanquish. This innovative treatment uses uniform heating to target the abdomen and flanks, reducing circumference without any downtime in a comfortable, non-invasive procedure.",
  };

  const treatmentInfo = {
    duration: "45 minutes",
    results: "Circumferential reduction over 4–8 weeks after a course",
    price: "Contact for pricing",
    benefits: [
      "Contactless fat reduction",
      "Targets abdomen/flanks",
      "No downtime",
      "Uniform heating",
      "Non-invasive",
      "Comfortable"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero}
      treatmentInfo={treatmentInfo}
    />
  );
}
