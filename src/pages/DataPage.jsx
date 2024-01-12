import DataForm from "../components/DataForm";
import PageHeading from "../components/PageHeading";

function DataPage() {
  return (
    <div className="pt-[93px]">
      <PageHeading pageName={"DATA"} />
      <h2 className="mt-6 text-base mb-[43px]">Healthcare data</h2>
      <DataForm />
    </div>
  );
}

export default DataPage;
