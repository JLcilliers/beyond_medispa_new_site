import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function PRPContent({ data }: any) {
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
