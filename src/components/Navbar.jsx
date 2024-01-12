import ConnectButton from "./ConnectButton";
import Logo from "./Logo";
import Navlinks from "./Navlinks";

function Navbar() {
  return (
    <nav className="flex items-center justify-between border-[1px] border-solid border-[#C4C4C4] bg-black px-[30px] py-2">
      <Logo />
      <Navlinks />
      <ConnectButton />
    </nav>
  );
}

export default Navbar;
