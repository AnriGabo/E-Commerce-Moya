import { Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { NavLink } from "react-router-dom";
import Woman from "../../menuSections/woman/Woman";

interface stateType {
  open: boolean;
  handleClose: () => void;
}

const NavigationLinks = [
  { to: "/woman", label: "Woman" },
  { to: "/man", label: "Man" },
  { to: "/children", label: "Children" },
  { to: "/newcollection", label: "NEW IN" },
  { to: "/limitededition", label: "LIMITED EDITION" },
  { to: "/stories", label: "STORIES" },
];

export default function TemporaryDrawer({ open, handleClose }: stateType) {
  const DrawerList = (
    <Stack
      sx={{
        padding: "2.5rem",
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
      }}
    >
      <Box component={"nav"} role="presentation" sx={{ gridColumn: "1/2" }}>
        <Box component={"ul"}>
          {NavigationLinks.map((link) => (
            <Box
              component={"li"}
              key={link.to}
              sx={{
                display: "flex",
                flexDirection: "column",
                listStyle: "none",
                textDecoration: "none",
                padding: "0.5rem",
              }}
            >
              <NavLink to={link.to} style={{ textDecoration: "none" }}>
                <Typography
                  sx={{
                    fontFamily: "'Trebuchet MS', Tahoma, sans-serif",
                    fontWeight: 300,
                    fontSize: "0.9rem",
                    letterSpacing: "0.07em",
                    textTransform: "uppercase",
                    color: "#111111",
                    lineHeight: 1.4,
                  }}
                >
                  {link.label}
                </Typography>
              </NavLink>
            </Box>
          ))}
        </Box>
      </Box>
      {/* ეს არის მეორე სვეტი და ამ მეორე სვეტში დარენდერდება რეალურად ქალიც კაციც ბავშვივ და ასე შემდეგ */}
      <Stack onClick={handleClose}>
        <Woman />
      </Stack>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        Hire this is new level of brand
      </Box>
    </Stack>
  );

  return (
    <Stack>
      <Drawer
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            width: "767.5px",
          },
        }}
      >
        <Box>{DrawerList}</Box>
      </Drawer>
    </Stack>
  );
}
