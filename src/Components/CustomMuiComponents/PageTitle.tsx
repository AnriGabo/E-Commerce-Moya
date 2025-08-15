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
          paddingInlineStart: "8rem",
          top: "1rem",
          margin: "0",
          left: "0",
        }}
      >
        {children}
      </Typography>
    </Box>
  );
}
