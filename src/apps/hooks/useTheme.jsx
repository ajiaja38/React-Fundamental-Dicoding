import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    alert("context not found");
  }

  return context;
};

export default useTheme;
