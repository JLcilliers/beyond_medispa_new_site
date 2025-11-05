import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function ElectrolysisContent({ data }: any) {
  const treatment = data?.data?.treatment;

  if (!treatment) {
    return null;
  }

  return (
    <ProcedurePageTemplate
      hero={treatment.hero}
      treatmentInfo={treatment.treatmentInfo}
    />
  );
}
