import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles({
  card: {
    maxWidth: "26rem",
    background: ({ themeMode }) => themeMode.palette.background.paper,
    color: ({ themeMode }) => themeMode.palette.text.primary,
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "4px",
    border: ({ themeMode }) => `1px solid ${themeMode.palette.warning.light}`,
  },
});
