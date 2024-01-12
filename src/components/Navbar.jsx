/* eslint-disable react/prop-types */
import Logo from "./Logo";
import Navlinks from "./Navlinks";

function Navbar({ children, connection }) {
  return (
    <nav className="flex items-center justify-between border-[1px] border-solid border-[#C4C4C4] bg-black px-[30px] py-2">
      <Logo />
      {connection && <Navlinks />}
      {children}
    </nav>
  );
}

export default Navbar;
