/* eslint-disable react/prop-types */
function PageHeading({ pageName }) {
  return (
    <div className="pb-2 text-2xl w-full border-b-solid border-b-[1px] border-b-white">
      {pageName}
    </div>
  );
}

export default PageHeading;
