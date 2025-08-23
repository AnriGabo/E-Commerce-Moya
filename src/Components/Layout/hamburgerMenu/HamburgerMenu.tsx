import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton } from "@mui/material";


const BurgerMenu = () => {

  return (
    <Box>
      <IconButton>
        <MenuIcon
          sx={{
            cursor: "pointer",
            color: "black",
            fontSize: "3rem",
            position: "fixed",
          }}
        />
      </IconButton>
    </Box>
  );
};

export default BurgerMenu;
