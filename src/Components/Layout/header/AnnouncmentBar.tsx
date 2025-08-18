import { Box, Typography } from "@mui/material";

const AnnouncmentBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "33px",
      }}
    >
      <Typography
        component={"h4"}
        sx={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 500,
          fontSize: { xs: 11, md: 13 },
          letterSpacing: "0.7px",
          whiteSpace: "nowrap",
        }}
      >
        FREE SHIPPING OVER 100 GEL ·{" "}
        <Box component="span" sx={{ fontWeight: 600 }}>
          30-DAY RETURNS
        </Box>
      </Typography>
    </Box>
  );
};

export default AnnouncmentBar;
