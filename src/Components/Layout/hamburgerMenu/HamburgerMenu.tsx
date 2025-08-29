import { Box, IconButton, Slide } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { FiMenu } from "react-icons/fi";

const BurgerMenu = () => {
  const trigger = useScrollTrigger();

  return (
    <Box
      sx={{
        cursor: "pointer",
      }}
    >
      <Slide in={!trigger} direction="down" mountOnEnter unmountOnExit>
        <IconButton>
          <FiMenu
            style={{
              color: "black",
              fontSize: "3.5rem",
            }}
            aria-label="Open menu"
            aria-controls="main-menu"
          />
        </IconButton>
      </Slide>
    </Box>
  );
};

export default BurgerMenu;
