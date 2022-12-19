import { createContext, useEffect, useState } from "react";
// theme's
import { lightTheme } from "../theme/lightTheme";
import { darkTheme } from "../theme/darkTheme";
import { modernTheme } from "../theme/modernTheme";

export const ThemeSwitcherContext = createContext();
const ThemeSwitcherProvider = ({ children }) => {
  const [themeModeName, setThemeModeName] = useState("light");
  const currentTheme =
    themeModeName === "light"
      ? lightTheme
      : themeModeName === "dark"
      ? darkTheme
      : modernTheme;
  const [themeMode, setThemeMode] = useState(lightTheme);
  useEffect(() => {
    setThemeMode(currentTheme);
    localStorage.setItem("theme-mode", themeModeName);
  }, [currentTheme]);

  return (
    <ThemeSwitcherContext.Provider
      value={{
        setThemeModeName,
        themeMode,
      }}
    >
      {children}
    </ThemeSwitcherContext.Provider>
  );
};
export default ThemeSwitcherProvider;
