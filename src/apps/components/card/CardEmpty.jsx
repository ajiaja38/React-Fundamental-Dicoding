import useTheme from "../../hooks/useTheme";
import lightSVG from "../../assets/images/colorized-empty.svg";
import darkSVG from "../../assets/images/white-empty.svg";
import { Typography } from "@material-tailwind/react";
import { useLocation } from "react-router-dom";
import useLang from "../../hooks/useLang";

const CardEmpty = () => {
  const { isDarkTheme } = useTheme();
  const { lang } = useLang();
  const { pathname } = useLocation();

  return (
    <div>
      <img
        src={isDarkTheme ? darkSVG : lightSVG}
        alt="empty"
        className="w-96 md:w-80"
        loading="lazy"
      />
      <div>
        <Typography variant="h3" className="text-center">
          Oops...
        </Typography>
        <Typography variant="lead" className="text-center">
          {pathname === "/home"
            ? lang === "id"
              ? "Tidak ada catatan yang aktif"
              : "No active notes"
            : lang === "id"
            ? "Tidak ada catatan yang diarsipkan"
            : "No archived notes"}
        </Typography>
      </div>
    </div>
  );
};

export default CardEmpty;
