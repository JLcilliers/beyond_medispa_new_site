import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

const CarboxyPage = () => {
  const hero = {
    tagline: "CARBOXY THERAPY",
    title: "Carbon Dioxide Therapy",
    subtitle: "Innovative Skin Rejuvenation",
    description: "Experience the rejuvenating benefits of carboxy therapy, a cutting-edge treatment that uses controlled CO2 injections to improve skin texture, reduce cellulite, and enhance overall skin health through improved circulation."
  };

  const treatmentInfo = {
    duration: "45-60 minutes",
    results: "Gradual improvement over 6-8 weeks",
    price: "From £150",
    benefits: [
      "Improves skin elasticity and texture",
      "Reduces appearance of cellulite",
      "Enhances blood circulation",
      "Stimulates collagen production",
      "Non-surgical body contouring",
      "Minimal side effects"
    ]
  };

  return (
    <ProcedurePageTemplate 
      hero={hero}
      treatmentInfo={treatmentInfo}
    />
  );
};

export default CarboxyPage;
