import { useContext } from "react";
import LangContext from "../context/LangContext";

const useLang = () => {
  const context = useContext(LangContext);

  if (!context) {
    alert("context not found");
  }

  return context;
};

export default useLang;
