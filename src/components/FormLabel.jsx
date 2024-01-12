/* eslint-disable react/prop-types */
function FormLabel({ htmlFor, label }) {
  return (
    <label htmlFor={htmlFor} className="text-base">
      {label}
    </label>
  );
}

export default FormLabel;
