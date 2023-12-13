import { Button, Typography } from "@material-tailwind/react";
import { COMMON_CONTENT, NAVBAR } from "../../utils/content";
import useLang from "../../hooks/useLang";
import logo from "../../assets/images/notes.png";
import { NavLink, useNavigate } from "react-router-dom";
import useModal from "../../hooks/useModal";
import Modal from "../modal";
import { FaPowerOff } from "react-icons/fa6";
import { MdUnarchive, MdArchive } from "react-icons/md";

const Navbar = () => {
  const { lang } = useLang();
  const [open, toggleModal] = useModal();

  const navigate = useNavigate();

  const Logout = () => {
    localStorage.removeItem("accessToken");
    navigate("/");
  };

  const openModal = () => {
    toggleModal();
  };

  return (
    <>
      <div className="w-full fixed z-[9999] top-0 p-3 px-4 md:px-5 flex items-center justify-between bg-white dark:bg-gray-900 border dark:border-none shadow">
        <div className="flex items-center justify-center gap-2">
          <img src={logo} alt="logo" className="w-7" />
          <NavLink to="/home">
            <h1 className="text-xl font-bold">{COMMON_CONTENT[lang].header}</h1>
          </NavLink>
        </div>
        <div className="flex gap-1 justify-center items-center">
          <div className="flex gap-3">
            <NavLink className="hidden md:block" to="/home">
              <Typography className="font-bold cursor-pointer hover:text-gray-500">
                {NAVBAR[lang].activeLink}
              </Typography>
            </NavLink>
            <NavLink className="hidden md:block" to="/archive">
              <Typography className="font-bold cursor-pointer hover:text-gray-500">
                {NAVBAR[lang].archiveLink}
              </Typography>
            </NavLink>
          </div>
          <NavLink to="/home">
            <button className="lg:hidden p-2 shadow-lg bg-blue-400 hover:bg-blue-300 active:bg-blue-500 dark:bg-blue-gray-500 dark:hover:bg-blue-gray-300 dark:active:bg-blue-gray-600 text-white rounded-lg transition-all ease-in-out duration-150">
              <MdUnarchive />
            </button>
          </NavLink>
          <NavLink to="/archive">
            <button className="lg:hidden p-2 shadow-lg bg-blue-400 hover:bg-blue-300 active:bg-blue-500 dark:bg-blue-gray-500 dark:hover:bg-blue-gray-300 dark:active:bg-blue-gray-600 text-white rounded-lg transition-all ease-in-out duration-150">
              <MdArchive />
            </button>
          </NavLink>
          <button
            onClick={openModal}
            className="lg:hidden p-2 shadow-lg bg-blue-400 hover:bg-blue-300 active:bg-blue-500 dark:bg-blue-gray-500 dark:hover:bg-blue-gray-300 dark:active:bg-blue-gray-600 text-white rounded-lg transition-all ease-in-out duration-150"
          >
            <FaPowerOff />
          </button>
          <Button
            onClick={openModal}
            className="hidden lg:block bg-red-400 dark:bg-blue-gray-500 dark:hover:bg-blue-gray-300"
            size="sm"
          >
            {lang === "id" ? "Keluar" : "Logout"}
          </Button>
        </div>
      </div>
      <Modal
        open={open}
        handleOpen={toggleModal}
        message={
          lang === "id"
            ? "Apakah anda yakin ingin keluar?"
            : "Are you sure want to logout?"
        }
        onConfirm={Logout}
      />
    </>
  );
};

export default Navbar;
