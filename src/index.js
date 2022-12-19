import React from "react";
import ReactDOM from "react-dom";
// component
import App from "./app/App";
// style
import "./assets/css/index.css";
// context
import ThemeSwitcherProvider from "./context/ThemeSwitcherProvider";

ReactDOM.render(
  <React.StrictMode>
    <ThemeSwitcherProvider>
      <App />
    </ThemeSwitcherProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
