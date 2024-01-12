/* eslint-disable react/prop-types */
function PrimaryButton({ handleClick, text, classes }) {
  return (
    <button
      className={`cursor-pointer py-4 flex items-center justify-center ${classes} px-[134px] w-fit mx-auto  bg-[#BA0039] rounded-[5px] text-base`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

export default PrimaryButton;
