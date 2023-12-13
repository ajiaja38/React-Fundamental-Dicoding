import { createContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "id");

  const toggleLang = () => {
    setLang((prevState) => {
      const newLang = prevState === "id" ? "en" : "id";
      localStorage.setItem("lang", newLang);
      return newLang;
    });
  };

  const contextValue = useMemo(() => {
    return {
      lang,
      toggleLang,
    };
  }, [lang]);

  return (
    <LangContext.Provider value={contextValue}>{children}</LangContext.Provider>
  );
};

LangProvider.propTypes = {
  children: PropTypes.node,
};

export default LangContext;
