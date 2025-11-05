import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function DermalFillerContent({ data }: any) {
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
