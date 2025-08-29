import { Box, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import BurgerMenuVideo from "../../../../Assets/Videos/hamburger_meniu_fashion.mp4";

const WomanDetail = () => {
  return (
    <Stack
      sx={{
        maxWidth: "30rem",
        maxHeight: "31rem",
        fontSize: "2rem",
        backgroundColor: "rgba(247, 245, 245, 1)",
      }}
    >
      <Box
        sx={{
          aspectRatio: "16/9 ",
          width: "100%",
          pl: "1rem",
        }}
      >
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
          sx={{
            paddingBlockStart: "0.7rem",
            fontFamily: `"Didot", "Bodoni MT", "Times New Roman", serif`,
            fontSize: "0.8rem",
            letterSpacing: "0.15rem",
            fontWeight: 400,
            textTransform: "uppercase",
          }}
        >
          EVERYDAY, EVERYWHERE, ALWAYS NEW
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
          <Box sx={{ display: "flex", gap: "0.5rem", flexDirection: "column" }}>
            <NavLink
              to={"/trendingforyou"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Typography
                component={"li"}
                sx={{
                  fontFamily: `"Helvetica Neue", Arial, sans-serif`,
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  letterSpacing: "0.05rem",
                  textTransform: "uppercase",
                }}
              >
                TRENDING FOR YOU
              </Typography>
            </NavLink>
            <NavLink
              to={"/jeans"}
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive ? "red" : "black",
              })}
            >
              <Typography
                component={"li"}
                sx={{
                  fontFamily: `"Open Sans", sans-seriff`,
                  fontWeight: 300,
                  fontSize: "1rem",
                  letterSpacing: "0.03rem",
                  textTransform: "capitalize",
                  cursor: "pointer",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Dresses / Skirts
              </Typography>
            </NavLink>
          </Box>
          <Box sx={{ display: "flex", gap: "0.8rem", flexDirection: "column" }}>
            <NavLink
              to={"/jackets"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Typography
                component={"li"}
                sx={{
                  fontFamily: `"Open Sans", sans-seriff`,
                  fontWeight: 300,
                  fontSize: "1rem",
                  letterSpacing: "0.03rem",
                  textTransform: "capitalize",
                  cursor: "pointer",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Sweaters | Knitwear
              </Typography>
            </NavLink>
            <NavLink
              to={"/sweaters"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Typography
                component={"li"}
                sx={{
                  fontFamily: `"Open Sans", sans-seriff`,
                  fontWeight: 300,
                  fontSize: "1rem",
                  letterSpacing: "0.03rem",
                  textTransform: "capitalize",
                  cursor: "pointer",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Bags / Accessories
              </Typography>
            </NavLink>
            <NavLink
              to={"/specialprice"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Typography
                component={"li"}
                sx={{
                  fontFamily: `"Helvetica Neue", Arial, sans-serif`,
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  letterSpacing: "0.05rem",
                  textTransform: "uppercase",
                  color: "#b71c1c",
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

export default WomanDetail;
