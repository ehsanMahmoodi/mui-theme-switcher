import { lightTheme } from "../theme/lightTheme";
import { darkTheme } from "../theme/darkTheme";
import {
  Box,
  Button,
  CssBaseline,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { modernTheme } from "../theme/modernTheme";
import { useStyle } from "./App.style";
import { ThemeSwitcherContext } from "../context/ThemeSwitcherProvider";
import Card from "../components/Card/Card";

const App = () => {
  const { setThemeModeName, themeMode } = useContext(ThemeSwitcherContext);

  const getThemeModeFromLocalStorage = localStorage.getItem("theme-mode");
  useEffect(() => {
    if (getThemeModeFromLocalStorage) {
      setThemeModeName(getThemeModeFromLocalStorage);
    }
  }, []);

  const changeThemeHandler = (theme) => {
    setThemeModeName(theme);
  };

  const classes = useStyle();
  return (
    <ThemeProvider theme={themeMode}>
      <CssBaseline />
      <Box className={classes.App}>
        <Card />
        <div
          style={{
            marginBottom: "2rem",
          }}
        >
          <Button
            onClick={() => changeThemeHandler("light")}
            variant={"contained"}
          >
            Light
          </Button>
          <Button onClick={() => changeThemeHandler("dark")} variant={"text"}>
            Dark
          </Button>
          <Button
            onClick={() => changeThemeHandler("modern")}
            variant={"outlined"}
          >
            Modern
          </Button>
        </div>
      </Box>
    </ThemeProvider>
  );
};

export default App;
