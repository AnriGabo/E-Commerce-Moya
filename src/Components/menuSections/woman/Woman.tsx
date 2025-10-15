import { Box, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import womanSection from "../../../Assets/Images/womanSection77.jpg";
import womanSection2 from "../../../Assets/Images/womanSection1.jpg";
import womanSection3 from "../../../Assets/Images/womanSection55.jpg";

const womanSectionList = [
  { to: "/coatandjacket", label: "Coats | Jackets" },
  { to: "/dresses", label: "Dresses | Jumpsuits" },
  { to: "/knitwear", label: "Knitwear | Cardigans" },
  { to: "/accessories", label: "Shoes | Accessories" },
];

const imageList = [
  { key: 0, image: womanSection2, alt: "First Woman" },
  { key: 1, image: womanSection, alt: "First Woman" },
  { key: 2, image: womanSection3, alt: "First Woman" },
];
const Woman = () => {
  return (
    <Stack
      gap="2rem"
      sx={{
        minHeight: "100%",
        px: "2rem",
      }}
    >
      <Stack
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          flexDirection: "row",
          gap: "0.7rem",
        }}
      >
        {imageList.map((Item) => (
          <Box
            component="img"
            src={Item.image}
            key={Item.key}
            alt={Item.alt}
            sx={{
              width: "8.438rem",
              height: "12.813rem",
              objectFit: "cover",
              objectPosition: "center",
              borderRadius: "3px",
              cursor: "pointer",
            }}
          />
        ))}
      </Stack>
      <Stack>
        <Box>
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
            HARRY LAMBERT for MOYA x DISNEY
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
            An exclusive collaboration blending fashion and imagination.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "0.8rem",
            flexDirection: "column",
            paddingBlockStart: "2rem",
          }}
        >
          {womanSectionList.map((item) => (
            <Typography
              key={item.to}
              sx={{
                fontFamily: "'General Sans', sans-serif",
                fontSize: "0.95rem",
                fontWeight: 400,
                letterSpacing: "0.02rem",
                color: "#202020",
                transition: "all 0.3s ease",
                "&:hover": {
                  opacity: 0.6,
                  color: "#888",
                  transform: "translateX(2px)",
                },
              }}
            >
              <NavLink
                to={item.to}
                style={{ textDecoration: "none", color: "black" }}
              >
                {item.label}
              </NavLink>
            </Typography>
          ))}
        </Box>
        <Box sx={{ paddingBlockStart: "2rem" }}>
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
            Exclusive Capsule / 25·01 Release
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
            Best sellers. Limited edition. Special prices.
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Woman;
