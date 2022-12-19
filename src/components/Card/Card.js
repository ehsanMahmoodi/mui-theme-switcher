import { Box, Typography } from "@mui/material";
import { useStyle } from "./Card.style";
import { useContext } from "react";
import { ThemeSwitcherContext } from "../../context/ThemeSwitcherProvider";

const Card = () => {
  //   get theme mode
  const { themeMode } = useContext(ThemeSwitcherContext);
  //   get css style
  const classes = useStyle({ themeMode });
  return (
    <Box className={classes.card}>
      <Typography variant={"h3"}>Card Title</Typography>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium
        animi beatae consequuntur esse explicabo inventore ipsam libero minima,
        numquam quidem repudiandae rerum sed, voluptatum.
      </Typography>
    </Box>
  );
};

export default Card;
