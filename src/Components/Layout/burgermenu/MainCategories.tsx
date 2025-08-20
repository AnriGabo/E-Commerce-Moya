import { Box, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const MainCategories = () => {
  return (
    <Stack
      sx={{
        backgroundColor: "#F8F9FA",
        height: "21rem",
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
          <NavLink
            to="/woman"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Typography component={"li"}> Woman</Typography>
          </NavLink>
          <NavLink to="/man" style={{ textDecoration: "none", color: "black" }}>
            <Typography component={"li"}>Man</Typography>
          </NavLink>
          <NavLink
            to="/children"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Typography component={"li"}>Children</Typography>
          </NavLink>
          <NavLink
            to="/thenewcollection"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Typography component={"li"}> The New Collection</Typography>
          </NavLink>
          <NavLink
            to="/travelMode"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Typography component={"li"}> TRAVEL MODE</Typography>
          </NavLink>
        </Box>
      </Box>
    </Stack>
  );
};

export default MainCategories;
