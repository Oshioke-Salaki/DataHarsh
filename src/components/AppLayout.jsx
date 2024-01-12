import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function AppLayout() {
  return (
    <div className="w-[100dvw] pb-8 uppercase min-h-[100dvh] bg-primaryBg text-white pt-[38px] px-[36px]">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default AppLayout;
