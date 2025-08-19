import { Box, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";

const BurgerMenuDesign = () => {
  return (
    <Stack
      sx={{
        marginBlockStart: "5rem",
        backgroundColor: "#F8F9FA",
        height: "20rem",
        width: "15rem",
      }}
    >
      <Box component="nav" sx={{ paddingInlineStart: "1rem" }}>
        <Box
          component="ul"
          sx={{
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            p: 0,
            m: 0,
            paddingBlockStart: "1rem",
          }}
        >
          <li>
            <NavLink
              to="/woman"
              style={{ textDecoration: "none", color: "black" }}
            >
              Woman
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/man"
              style={{ textDecoration: "none", color: "black" }}
            >
              Man
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/children"
              style={{ textDecoration: "none", color: "black" }}
            >
              Children
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/thenewcollection"
              style={{ textDecoration: "none", color: "black" }}
            >
              The New Collection
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/travelMode"
              style={{ textDecoration: "none", color: "black" }}
            >
              Travel Mode
            </NavLink>
          </li>
        </Box>
      </Box>
    </Stack>
  );
};

export default BurgerMenuDesign;
