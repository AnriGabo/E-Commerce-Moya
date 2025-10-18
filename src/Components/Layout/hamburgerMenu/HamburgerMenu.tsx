import { Box, IconButton, Slide } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { FiMenu } from "react-icons/fi";
import Drawer from "./DrawerMenu";
interface handleOpenType {
  handleOpen: () => void;
  handleClose: () => void;
  open: boolean;
}

const HamburgerMenu = ({ handleOpen, handleClose, open }: handleOpenType) => {
  const trigger = useScrollTrigger();

  return (
    <Box
      sx={{
        cursor: "pointer",
      }}
    >
      <Slide in={!trigger} direction="down" mountOnEnter unmountOnExit>
        <IconButton onClick={handleOpen} sx={{
          "&:hover":{
            backgroundColor:"transparent"
          }
        }}>
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
      <Drawer handleClose={handleClose} open={open}></Drawer>
    </Box>
  );
};

export default HamburgerMenu;
