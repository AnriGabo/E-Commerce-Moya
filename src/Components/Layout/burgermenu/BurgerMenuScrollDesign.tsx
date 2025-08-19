import { Box, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import BurgerMenuVideo from "../../../Assets/Videos/HamburgerMenu1.mp4";

const BurgerMenuScrollDesign = () => {
  return (
    <Stack
      sx={{
        width: "30rem",
        height: "30rem",
        marginBlockStart: "5rem",
        backgroundColor: "#F8F9FA",
        overflowY: "scroll",
      }}
    >
      <Box sx={{ aspectRatio: "16/9 ", width: "100%", pl: "1rem" }}>
        <video
          autoPlay
          playsInline
          muted
          loop
          src={BurgerMenuVideo}
          style={{
            width: "70%",
            height: "70%",
            objectFit: "cover",
            display: "block",
          }}
        />
        <Typography
          component={"h4"}
          sx={{ paddingBlockStart: "0.5rem", cursor: "pointer" }}
        >
          AUTUMN.WINTER COLLECTION
        </Typography>
      </Box>
      <Box
        component={"nav"}
        sx={{ paddingInlineStart: "1rem", marginTop: "-2rem" }}
      >
        <Box
          component={"ul"}
          sx={{
            listStyleType: "none",
            paddingBlockStart: "1rem",
            display: "flex",
            gap: "3rem",
            flexDirection: "column",
          }}
        >
          <Box sx={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
            <li>
              <NavLink
                to={"/trendingforyou"}
                style={{ textDecoration: "none", color: "black" }}
              >
                TRENDING FOR YOU
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/trendingforyou"}
                style={{ textDecoration: "none", color: "black" }}
              >
                Jeans
              </NavLink>
            </li>
          </Box>
          <Box sx={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
            <li>
              <NavLink
                to={"/trendingforyou"}
                style={{ textDecoration: "none", color: "black" }}
              >
                Shoes
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/trendingforyou"}
                style={{ textDecoration: "none", color: "black" }}
              >
                Bag
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/trendingforyou"}
                style={{ textDecoration: "none", color: "red" }}
              >
                Special Price
              </NavLink>
            </li>
             <li>
              <NavLink
                to={"/trendingforyou"}
                style={{ textDecoration: "none", color: "red" }}
              >
                Special Price
              </NavLink>
            </li>
             <li>
              <NavLink
                to={"/trendingforyou"}
                style={{ textDecoration: "none", color: "red" }}
              >
                Special Price
              </NavLink>
            </li>
             <li>
              <NavLink
                to={"/trendingforyou"}
                style={{ textDecoration: "none", color: "red" }}
              >
                Special Price
              </NavLink>
            </li>
             <li>
              <NavLink
                to={"/trendingforyou"}
                style={{ textDecoration: "none", color: "red" }}
              >
                Special Price
              </NavLink>
            </li>
             <li>
              <NavLink
                to={"/trendingforyou"}
                style={{ textDecoration: "none", color: "red" }}
              >
                Special Price
              </NavLink>
            </li>
            
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default BurgerMenuScrollDesign;
