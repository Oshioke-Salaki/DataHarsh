import { NavLink } from "react-router-dom";

function Navlinks() {
  return (
    <ul className="navigationLinks flex items-center gap-x-[154px] text-sm">
      <li>
        <NavLink to={"data"}>DATA</NavLink>
      </li>
      <li>
        <NavLink to={"harsh"}>HARSH</NavLink>
      </li>
      <li>
        <NavLink to={"share"}>SHARE</NavLink>
      </li>
    </ul>
  );
}

export default Navlinks;
