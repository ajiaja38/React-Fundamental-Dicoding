import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
  Typography,
} from "@material-tailwind/react";
import { FaPlus } from "react-icons/fa6";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { IoLanguage } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import useTheme from "../../hooks/useTheme";
import useLang from "../../hooks/useLang";
import { NavLink, useLocation } from "react-router-dom";

const SpeedDials = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { lang, toggleLang } = useLang();
  const { pathname } = useLocation();

  return (
    <div className="fixed bottom-6 right-6">
      <div className="absolute bottom-0 right-0">
        <SpeedDial>
          <SpeedDialHandler>
            <IconButton
              size="lg"
              variant="text"
              className="bg-blue-500 hover:bg-blue-300 dark:bg-blue-gray-700 dark:hover:bg-blue-gray-800 rounded-full"
            >
              <IoMdSettings className="h-5 w-5 text-white transition-transform group-hover:rotate-45" />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent>
            <NavLink to="/add-note">
              <SpeedDialAction
                className={`h-14 w-14 dark:bg-blue-gray-800 dark:border-blue-gray-700 ${
                  pathname === "/" ||
                  pathname === "/register" ||
                  pathname === "/add-note"
                    ? "hidden"
                    : ""
                }`}
              >
                <FaPlus className="h-5 w-5" />
                <Typography className="text-xs font-normal">
                  {lang === "id" ? "Baru" : "New"}
                </Typography>
              </SpeedDialAction>
            </NavLink>
            <SpeedDialAction
              onClick={toggleTheme}
              className="h-14 w-14 dark:bg-blue-gray-800 dark:border-blue-gray-700"
            >
              {isDarkMode ? (
                <MdLightMode className="h-5 w-5" />
              ) : (
                <MdDarkMode className="h-5 w-5" />
              )}
              <Typography className="text-xs font-normal">
                {lang === "id" ? "Tema" : "Theme"}
              </Typography>
            </SpeedDialAction>
            <SpeedDialAction
              onClick={toggleLang}
              className="h-14 w-14 dark:bg-blue-gray-800 dark:border-blue-gray-700"
            >
              <IoLanguage className="h-5 w-5" />
              <Typography className="text-xs font-normal">
                {lang === "id" ? "Id" : "En"}
              </Typography>
            </SpeedDialAction>
          </SpeedDialContent>
        </SpeedDial>
      </div>
    </div>
  );
};

export default SpeedDials;
