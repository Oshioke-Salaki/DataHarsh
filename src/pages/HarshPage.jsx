import { useState } from "react";
import FormInput from "../components/FormInput";
import PageHeading from "../components/PageHeading";
import PrimaryButton from "../components/PrimaryButton";

function HarshPage() {
  let [code, setCode] = useState("");
  return (
    <div className="pt-[93px]">
      <PageHeading pageName={"Encrypted data"} />
      <h2 className="mt-6 text-base mb-[43px]">Hash code</h2>
      <div className="w-full pl-[130px] pr-[68px] mb-[91px]">
        <FormInput
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
          }}
          id={"code"}
        />
      </div>
      <PrimaryButton text={"share"} />
    </div>
  );
}

export default HarshPage;
