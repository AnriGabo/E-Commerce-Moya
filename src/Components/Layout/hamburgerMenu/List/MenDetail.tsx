import { Box, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import ManListFashion from "../../../../Assets/Videos/man_fashion_video.mp4";

const MenDetail = () => {
  return (
    <Stack
      sx={{
        maxWidth: "30rem",
        maxHeight: "31rem",
        backgroundColor: "rgba(247, 245, 245, 1)",
        fontSize: "2rem",
      }}
    >
      <Box sx={{ aspectRatio: "16/9 ", width: "100%", pl: "1rem" }}>
        <video
          autoPlay
          playsInline
          muted
          loop
          src={ManListFashion}
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
          CLASSIC, MODERN, TIMELESS.
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
                FEATURED LOOKS
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
                Jackets / Coats
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
                Trousers | Jeans
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
                Shoes / Accessories
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
                LIMITED OFFER
              </Typography>
            </NavLink>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default MenDetail;
