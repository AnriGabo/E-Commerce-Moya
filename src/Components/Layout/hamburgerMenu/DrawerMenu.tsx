import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Stack } from "@mui/material";

interface stateType {
  open: boolean;
  handleClose: () => void;
}

export default function TemporaryDrawer({ open, handleClose }: stateType) {
  const DrawerList = (
    <Box sx={{ width: 250, backgroundColor: "red" }} role="presentation">
      <Box>anriko</Box>
    </Box>
  );

  return (
    <Stack sx={{ backgroundColor: "yellow" }}>
      <Drawer
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: { width: "767.5px" },
        }}
      >
        <Box>{DrawerList}</Box>
      </Drawer>
    </Stack>
  );
}
