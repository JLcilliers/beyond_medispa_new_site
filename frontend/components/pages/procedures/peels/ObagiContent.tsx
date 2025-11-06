import ProcedurePageTemplate from "../../../ProcedurePageTemplate";

export default function ObagiContent({ data }: any) {
  const treatment = data?.data?.treatment;

  if (!treatment) {
    return null;
  }

  return (
    <ProcedurePageTemplate
      hero={treatment.hero}
      treatmentInfo={treatment.treatmentInfo}
      translations={treatment.translations}
    />
  );
}
