import { useState } from "react";
import FormControl from "./FormControl";
import FormInput from "./FormInput";
import FormLabel from "./FormLabel";
import PrimaryButton from "./PrimaryButton";

function DataForm() {
  let [patientName, setPatientName] = useState("");
  let [age, setAge] = useState("");
  let [sex, setSex] = useState("");
  let [history, setHistory] = useState("");

  return (
    <div className="px-[63px] ">
      <form className="flex flex-col gap-y-[30px]">
        <FormControl>
          <FormLabel htmlFor={"patientName"} label={"patient name"} />
          <FormInput
            value={patientName}
            id={"patientName"}
            onChange={(e) => {
              setPatientName(e.target.value);
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor={"age"} label={"age"} />
          <FormInput
            value={age}
            id={"age"}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor={"sex"} label={"sex"} />
          <FormInput
            value={sex}
            id={"sex"}
            onChange={(e) => {
              setSex(e.target.value);
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor={"history"} label={"Medical History"} />
          <FormInput
            value={history}
            id={"history"}
            onChange={(e) => {
              setHistory(e.target.value);
            }}
          />
        </FormControl>
        <PrimaryButton text={"ENCRYPT"} classes={"mt-5"} />
      </form>
    </div>
  );
}

export default DataForm;
