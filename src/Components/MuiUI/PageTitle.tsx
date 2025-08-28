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
        component={"h1"}
        sx={{
          fontSize: "6rem",
          cursor: "pointer",
          fontFamily: "'Libre Baskerville', serif",
          fontWeight: 700,
        }}
      >
        {children}
      </Typography>
    </Box>
  );
}
