import { Box, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import womanSection from "../../../Assets/Images/womanSection77.webp";
import womanSection2 from "../../../Assets/Images/womanSection1.webp";
import womanSection3 from "../../../Assets/Images/womanSection55.webp";

const womanSectionList = [
  { to: "/coats-jackets", label: "Coats | Jackets" },
  { to: "/dresses-jumpsuits", label: "Dresses | Jumpsuits" },
  { to: "/knitwear-cardigans", label: "Knitwear | Cardigans" },
  { to: "/shoes-accessories", label: "Shoes | Accessories" },
];

const imageList = [
  {
    id: 0,
    image: womanSection2,
    alt: "MOYA - Close-up of woman in a beige shearling coat",
  },
  {
    id: 1,
    image: womanSection,
    alt: "MOYA - Woman in olive quilted jacket and cap walking outdoors",
  },
  {
    id: 2,
    image: womanSection3,
    alt: "MOYA - Woman crossing street wearing a brown shearling jacket and sunglasses",
  },
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
          <Box key={Item.id}>
            <Box
              component="img"
              src={Item.image}
              alt={Item.alt}
              loading="eager"
              sx={{
                width: "8.438rem",
                height: "12.813rem",
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: "3px",
                cursor: "pointer",
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
            HARRY LAMBERT for MOYA x DISNEY
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
              to={"/exclusive-collaboration"}
              style={{ textDecoration: "none", color: "#333" }}
            >
              An exclusive collaboration blending fashion and imagination.
            </NavLink>
          </Typography>
      </Stack>

      <Stack>
        <Box
          sx={{
            display: "flex",
            gap: "0.8rem",
            flexDirection: "column",
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
                style={{ textDecoration: "none", color: "#202020" }}
              >
                {item.label}
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
            <NavLink
              to={"/womans/special-prices"}
              style={{ textDecoration: "none", color: "#333" }}
            >
              Best sellers. Limited edition. Special prices.
            </NavLink>
          </Typography>
      </Stack>
    </Stack>
  );
};

export default Woman;
