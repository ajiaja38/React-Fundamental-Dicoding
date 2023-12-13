import React from "react";
import ReactDOM from "react-dom/client";
import App from "./apps/App";
import "./apps/style/index.css";
import { ThemeProvider } from "./apps/context/ThemeContext";
import "react-toastify/dist/ReactToastify.css";
import { LangProvider } from "./apps/context/LangContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <LangProvider>
        <App />
      </LangProvider>
    </ThemeProvider>
  </React.StrictMode>
);
