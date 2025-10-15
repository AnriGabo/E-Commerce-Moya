import { Box, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import manFashion from "../../../Assets/Images/manFashion6.jpg";
import manFashion7 from "../../../Assets/Images/manFashion7.jpg";
import manFashion3 from "../../../Assets/Images/manFashion5.jpg";

const manSectionList = [
  { to: "/mancoat", label: "Coats | Jackets" },
  { to: "/mansaccessories", label: "Shoes | Accessories" },
  { to: "/manstrouzers", label: "Trousers | Jeans" },
  { to: "/manshirts", label: "Sweatshirts | T-Shirts" },
];

const manList = [
  { key: 0, img: manFashion, alt: `First image` },
  { key: 1, img: manFashion7, alt: `Second Image` },
  { key: 2, img: manFashion3, alt: `Third Image` },
];

const Man = () => {
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
        {manList.map((Item) => (
          <Box
            component="img"
            alt={Item.alt}
            src={Item.img}
            key={Item.key}
            sx={{
              width: "8.438rem",
              height: "12.813rem",
              objectFit: "cover",
              objectPosition: "center",
              cursor: "pointer",
              borderRadius: "3px",
            }}
          />
        ))}
      </Stack>

      <Stack>
        <Box>
          <Typography
            component={"h2"}
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1rem",
              letterSpacing: "0.15rem",
              textTransform: "uppercase",
              fontWeight: 600,
              color: "#111",
            }}
          >
            MOYA MEN / Signature Line 21·01
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
            Modern tailoring. Effortless attitude.
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
          {manSectionList.map((item) => (
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
        <Box
          sx={{
            paddingBlockStart: "2rem",
          }}
        >
          <Typography
            component={"h2"}
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
            The Signature Capsule / Edition 24·01
          </Typography>
          <Typography
            sx={{
              fontSize: "0.88rem",
              fontFamily: "'Inter', sans-serif",
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

export default Man;
