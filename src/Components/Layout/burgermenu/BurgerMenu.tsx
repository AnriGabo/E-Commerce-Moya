import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton } from "@mui/material";
import { useState } from "react";
import Unite from "./Unite";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  const handleOpen = () => setIsOpen((prev) => !prev);
  return (
    <Box>
      <IconButton onClick={handleOpen}>
        <MenuIcon
          sx={{
            cursor: "pointer",
            color: "black",
            fontSize: "3rem",
            position: "fixed",
          }}
        />
      </IconButton>
      {isOpen  ? <Unite /> : ""}
    </Box>
  );
};

export default BurgerMenu;
