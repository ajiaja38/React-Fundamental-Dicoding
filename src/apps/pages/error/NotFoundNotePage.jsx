import { Typography } from "@material-tailwind/react";
import notFoundLight from "../../assets/images/page-not-found-light.svg";
import useLang from "../../hooks/useLang";

const NotFoundNotePage = () => {
  const { lang } = useLang();

  return (
    <div className="w-full flex flex-col items-center justify-center gap-2">
      <img
        src={notFoundLight}
        alt={lang === "id" ? "Catatan Tidak Ditemukan" : "Note Not Found"}
        className="w-96 md:w-80"
      />
      <Typography variant="h3" className="font-extrabold text-center">
        {lang === "id" ? "Catatan Tidak Ditemukan" : "Note Not Found"}
      </Typography>
    </div>
  );
};

export default NotFoundNotePage;
