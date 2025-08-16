import { Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const BurgerMenu = () => {
  return (
    <Box>
      <IconButton>
        <MenuIcon
          sx={{
            cursor: "pointer",
            fontSize: "3rem",
            position: "fixed",
            marginBlockStart: "4rem",
            marginInlineStart: "2rem",
            color: "black",
          }}
        />
      </IconButton>
    </Box>
  );
};

export default BurgerMenu;
