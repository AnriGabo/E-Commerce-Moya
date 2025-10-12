import { Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { JSX } from "react/jsx-runtime";
import Children from "../../menuSections/children/children";
import Man from "../../menuSections/man/man";
import Woman from "../../menuSections/woman/Woman";

interface stateType {
  open: boolean;
  handleClose: () => void;
}

const NavigationLinks = [
  { key: "woman", label: "Woman", type: "view" },
  { key: "man", label: "Man", type: "view" },
  { key: "children", label: "Children", type: "view" },
  { key: "new", type: "direct", to: "/new", label: "NEW IN" },
  {
    key: "limited",
    type: "direct",
    to: "/registration",
    label: "LIMITED EDITION",
  },
  { key: "stories", type: "direct", to: "/stories", label: "STORIES" },
];

export default function TemporaryDrawer({ open, handleClose }: stateType) {
  const [selectedKey, setSelectedKey] = useState("woman");

  const viewsMap: Record<string, JSX.Element> = {
    woman: <Woman />,
    man: <Man />,
    children: <Children />,
  };

  const navigate = useNavigate();

  const DrawerList = (
    <Stack
      sx={{
        padding: "2.5rem",
        display: "grid",
        gridTemplateColumns: "250px 1fr",
        width: "47.938rem",
      }}
    >
      <Box component={"nav"} role="presentation">
        <Box component={"ul"}>
          {NavigationLinks.map((item) => (
            <Box
              component={"li"}
              key={item.key}
              onClick={() => {
                if (item.type === "view") setSelectedKey(item.key);
                if (item.type === "direct" && item.to) {
                  navigate(item.to);
                  handleClose();
                }
              }}
              sx={{
                display: "flex",
                flexDirection: "column",
                listStyle: "none",
                textDecoration: "none",
                padding: "0.5rem",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Trebuchet MS', Tahoma, sans-serif",
                  cursor: "pointer",
                  fontWeight: 300,
                  fontSize: "0.9rem",
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  color: "#111111",
                  lineHeight: 1.4,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    opacity: 0.6,
                    fontWeight: "bold",
                    transform: "translateX(2px)",
                  },
                }}
              >
                {item.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Stack onClick={handleClose}>
        <section>{viewsMap[selectedKey]}</section>
      </Stack>
    </Stack>
  );

  return (
    <Stack>
      <Drawer
        open={open}
        onClose={handleClose}
      >
        <Box>{DrawerList}</Box>
      </Drawer>
    </Stack>
  );
}
