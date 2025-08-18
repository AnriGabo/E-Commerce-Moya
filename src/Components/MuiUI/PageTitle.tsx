import { Box, Typography } from "@mui/material";
import type React from "react";

interface MainTitleTypographyType {
  children: React.ReactNode;
}

export default function CustomMainTitleTypography({
  children,
}: MainTitleTypographyType) {
  return (
    <Box>
      <Typography
        variant={"h1"}
        component={"h2"}
        sx={{
          fontSize: "7rem",
          cursor: "pointer",
          fontFamily: "'Libre Baskerville', serif",
          fontWeight: 700,
          letterSpacing: "1px",
          position: "fixed",
          zIndex: 1000,
          top: "2rem",
         
        }}
      >
        {children}
      </Typography>
    </Box>
  );
}
