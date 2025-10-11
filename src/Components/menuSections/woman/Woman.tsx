import { Box, Stack, Typography } from "@mui/material";
import womanSection from "../../../Assets/Images/womanSection.jpg";
import { NavLink } from "react-router-dom";

const womanSectionList = [
  { to: "coatandjacket", label: "Coats & Jackets" },
  { to: "suits", label: "Blazers & Suits" },
  { to: "dresses", label: "Dresses & Jumpsuits" },
  { to: "tops", label: "Tops & Bodysuits" },
  { to: "trousers", label: "Trousers & Jeans" },
  { to: "shirts", label: "Shirts & T-Shirts" },
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
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src={womanSection}
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
      <Box sx={{ display: "flex", gap: "0.8rem", flexDirection: "column" }}>
        {womanSectionList.map((item) => (
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
            <NavLink to={item.to} style={{textDecoration:"none"}}>{item.label}</NavLink>
          </Typography>
        ))}
      </Box>
    </Stack>
  );
};

export default Woman;
