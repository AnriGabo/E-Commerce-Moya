import { Box, Stack, Typography } from "@mui/material";
import manSection from "../../../Assets/Images/manSection.jpg";
import { NavLink } from "react-router-dom";

const manSectionList = [
  { to: "mancoat", label: "Coats & Jackets" },
  { to: "mansuits", label: "Blazers & Suits" },
  { to: "mansweatshirts", label: "Knitwear & Sweatshirts" },
  { to: "mansaccessories", label: "Shoes & Accessories" },
  { to: "manstrouzers", label: "Trousers & Jeans" },
  { to: "manshirts", label: "Shirts & T-Shirts" },
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
      <Box>
        <Box
          component="img"
          src={manSection}
          alt="Woman fashion"
          sx={{
            width: 200,
            height: 200,
            objectFit: "cover",
            borderRadius: "8px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
          }}
        />
      </Box>
      <Box>
        <Typography>50 Years of unniversary</Typography>
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
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontSize: "0.9rem",
                letterSpacing: "0.05em",
                color: "#111",
                textTransform: "capitalize",
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  opacity: 0.6,
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
      </Box>
    </Stack>
  );
};

export default Man;
