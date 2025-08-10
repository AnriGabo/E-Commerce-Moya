import { Box } from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

const BurgerMenu = () => {
  return (
    <Box>
      <MenuOpenIcon
        sx={{
          cursor: "pointer",
          fontSize: "3rem",
        }}
      />
    </Box>
  );
};

export default BurgerMenu;
