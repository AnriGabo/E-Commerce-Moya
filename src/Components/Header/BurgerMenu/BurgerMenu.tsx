import { Box, IconButton } from "@mui/material";
// import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import MenuIcon from "@mui/icons-material/Menu";

type BurgerMenuProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  
  // open: boolean;
};

const BurgerMenu = ({ onClick }: BurgerMenuProps) => {
  return (
    <Box>
      <IconButton onClick={onClick}>
        <MenuIcon
          sx={{
            cursor: "pointer",
            fontSize: "3rem",
            position: "fixed",
            marginBlockStart: "2rem",
            color: "black",
          }}
        />
      </IconButton>
    </Box>
  );
};

export default BurgerMenu;
