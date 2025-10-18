import { Box, Stack, Typography } from "@mui/material";
import childrenColl1 from "../../../Assets/Images/childrenColl.jpg";
import childrenColl2 from "../../../Assets/Images/childrenColl2.jpg";
import childrenColl3 from "../../../Assets/Images/childrenColl3.jpg";
import { NavLink } from "react-router-dom";

const menuLinks = [
  { to: "/girls-6-14", label: "Girl 6 - 14 years" },
  { to: "/boys-6-14", label: "Boy 6 - 14 years" },
  { to: "/girls-1-6", label: "Girl 1 - 6 years" },
  { to: "/boys-1-6", label: "Boy 1 - 6 years" },
  { to: "/babies-0-18m", label: "Babies 0 - 18 months" },
];

const childrenList = [
  {
    id: 0,
    img: childrenColl1,
    alt: "Toddler in brown fleece outfit sitting on leaves",
  },
  {
    id: 1,
    img: childrenColl2,
    alt: "Little girl in pink dress holding a metallic bag",
  },
  {
    id: 2,
    img: childrenColl3,
    alt: "Boy in blue long sleeve shirt and brown pants",
  },
];
const Children = () => {
  return (
    <Stack gap="2rem" sx={{ minHeight: "100%", px: "2px" }}>
      <Stack
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          flexDirection: "row",
          gap: "0.7rem",
        }}
      >
        {childrenList.map((Item) => (
          <Box key={Item.id}>
            <Box
              component="img"
              src={Item.img}
              alt={Item.alt}
              loading="lazy"
              style={{
                width: "8.438rem",
                height: "12.813rem",
                objectFit: "cover",
                objectPosition: "center",
                cursor: "pointer",
                borderRadius: "3px",
              }}
            />
          </Box>
        ))}
      </Stack>

      <Stack>
        <Typography
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1rem",
            letterSpacing: "0.15rem",
            textTransform: "uppercase",
            fontWeight: 600,
            color: "#111",
          }}
        >
          MOYA KIDS / Everyday Magic 21·01
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.88rem",
            opacity: 0.7,
            paddingBlockStart: "0.4rem",
            cursor: "pointer",
          }}
        >
          <NavLink
            to={"/playful-collection"}
            style={{ textDecoration: "none", color: "#333" }}
          >
            Designed for play. Made with love
          </NavLink>
        </Typography>
      </Stack>
      <Stack>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
          {menuLinks.map((Item) => (
            <Typography
              sx={{
                fontFamily: "'General Sans', sans-serif",
                fontSize: "0.95rem",
                fontWeight: 400,
                letterSpacing: "0.02rem",
                transition: "all 0.3s ease",
                "&:hover": {
                  opacity: 0.6,
                  color: "#888",
                  transform: "translateX(2px)",
                },
              }}
            >
              <NavLink
                to={Item.to}
                style={{ textDecoration: "none", color: "#202020" }}
              >
                {Item.label}
              </NavLink>
            </Typography>
          ))}
        </Box>
      </Stack>
      <Stack>
        <Typography
          sx={{
            fontFamily: "'Satoshi', 'Inter', sans-serif",
            fontSize: "1.05rem",
            fontWeight: 530,
            color: "#1a1a1a",
            letterSpacing: "0.04rem",
            textAlign: "left",
            position: "relative",
          }}
        >
          Joy Capsule / 25·01 Release
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.88rem",
            opacity: 0.7,
            color: "#333",
            paddingBlockStart: "0.4rem",
            cursor: "pointer",
          }}
        >
          <NavLink
            to={"/best-sellers"}
            style={{ textDecoration: "none", color: "#333" }}
          >
            Best sellers. Limited edition. Special prices.
          </NavLink>
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Children;
