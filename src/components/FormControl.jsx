/* eslint-disable react/prop-types */
function FormControl({ children }) {
  return (
    <div className="grid grid-cols-[200px_1fr] gap-x-3 items-center">
      {children}
    </div>
  );
}

export default FormControl;
