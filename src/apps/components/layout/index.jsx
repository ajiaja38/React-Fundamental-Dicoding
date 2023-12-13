import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SpeedDials from "../SpeedDial";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-[1400px] w-full mx-auto p-4 px-4 md:px-6 mt-14">
        <Outlet />
      </div>
      <SpeedDials />
    </>
  );
};

export default Layout;
