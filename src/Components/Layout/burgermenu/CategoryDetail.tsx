import { Box, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import BurgerMenuVideo from "../../../Assets/Videos/BurgerMeniuAd.mp4";
// import { Helmet } from "react-helmet-async";

// state, state Changer

// გარეთ ვერ დაწერ ამას რადგან არ დააბრუნებს რამეს
{/* <Helmet>
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Playfair+Display:wght@400;600&display=swap"
    rel="stylesheet"
  />
</Helmet>; */}
const BurgerMenuScrollDesign = () => {
  return (
    <Stack
      sx={{
        maxWidth: "30rem",
        maxHeight: "31rem",
        backgroundColor: "#F8F9FA",
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
            paddingBlock: "1rem",
            display: "flex",
            gap: "3rem",
            flexDirection: "column",
          }}
        >
          <Box sx={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
            <NavLink
              to={"/trendingforyou"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Typography component={"li"} sx={{ fontWeight: "bold" }}>
                TRENDING FOR YOU
              </Typography>
            </NavLink>
            <NavLink
              to={"/trendingforyou"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Typography component={"li"}>Jeans / Trousers</Typography>
            </NavLink>
          </Box>
          <Box sx={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
            <NavLink
              to={"/trendingforyou"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Typography component={"li"}>Jackets | Coats</Typography>
            </NavLink>
            <NavLink
              to={"/trendingforyou"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Typography component={"li"}>Sweaters | Knitwear</Typography>
            </NavLink>
            <NavLink
              to={"/trendingforyou"}
              style={{ textDecoration: "none", color: "red" }}
            >
              <Typography component={"li"}>SPECIAL PRICE</Typography>
            </NavLink>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default BurgerMenuScrollDesign;
