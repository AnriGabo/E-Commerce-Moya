import { Box, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import BurgerMenuVideo from "../../../Assets/Videos/BurgerMeniuAd.mp4";
// import { Helmet } from "react-helmet-async";

// state, state Changer

const BurgerMenuScrollDesign = () => {
  return (
    <Stack
      sx={{
        maxWidth: "30rem",
        maxHeight: "31rem",
        backgroundColor: "#F8F9FA",
        fontSize: "2rem",
      }}
    >
      <Box sx={{ aspectRatio: "16/9 ", width: "100%", pl: "1rem" }}>
      {/* react router v5 ში იყო რეალურად activeClassname რომელიც იღებდა active */}
      {/* მაგრამ v6ვერსიაში ფუნქცია არის className რომელიც პარამეტრის სახით იღებს isActive , და მერე ტერნერული ლოგიკა*/}
        <NavLink to={"/coldweathercollection"}>
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
              cursor: "pointer",
            }}
          />
        </NavLink>
        <NavLink
          to={"/coldweathercollection"}
          style={{ color: "black", textDecoration: "none" }}
        >
          <Typography
            component={"h4"}
            sx={{
              paddingBlockStart: "0.5rem",
              cursor: "pointer",
              fontFamily: `"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
              fontSize: "0.8rem",
            }}
          >
            AUTUMN.WINTER COLLECTION
          </Typography>
        </NavLink>
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
              <Typography
                component={"li"}
                sx={{
                  fontWeight: "bold",
                  fontFamily: `"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
                }}
              >
                TRENDING FOR YOU
              </Typography>
            </NavLink>
            <NavLink
              to={"/jeans"}
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <Typography
                component={"li"}
                sx={{
                  fontFamily: `"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
                }}
              >
                Jeans / Trousers
              </Typography>
            </NavLink>
          </Box>
          <Box sx={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
            <NavLink
              to={"/jackets"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Typography
                component={"li"}
                sx={{
                  fontFamily: `"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
                }}
              >
                Jackets | Coats
              </Typography>
            </NavLink>
            <NavLink
              to={"/sweaters"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Typography
                component={"li"}
                sx={{
                  fontFamily: `"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
                }}
              >
                Sweaters | Knitwear
              </Typography>
            </NavLink>
            <NavLink
              to={"/specialprice"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Typography
                component={"li"}
                sx={{
                  fontFamily: `"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
                  fontWeight: "bold",
                  fontStyle: "inherit",
                }}
              >
                SPECIAL PRICE
              </Typography>
            </NavLink>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default BurgerMenuScrollDesign;
