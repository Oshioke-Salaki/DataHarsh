/* eslint-disable react/prop-types */

function FormInput({ value, onChange, id }) {
  return (
    <input
      type="text"
      value={value}
      id={id}
      onChange={(e) => {
        onChange(e);
      }}
      className="bg-white p-2 outline-none rounded-sm text-[#333] w-full"
    />
  );
}

export default FormInput;
