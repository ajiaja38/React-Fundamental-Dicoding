import { toast } from "react-toastify";
import useTheme from "./useTheme";

const useToast = () => {
  const { isDarkMode } = useTheme();

  const showToast = (type, message) => {
    toast[type](message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: isDarkMode ? "dark" : "light",
    });
  };

  return {
    showToast,
  };
};

export default useToast;
