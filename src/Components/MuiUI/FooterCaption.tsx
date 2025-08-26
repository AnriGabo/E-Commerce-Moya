import { Box, Typography } from "@mui/material";
import type React from "react";

interface FooterCaptionType {
  children: React.ReactNode;
}

export default function FooterCaption({ children }: FooterCaptionType) {
  return (
    <Box>
      <Typography
       component={"h5"}
        sx={{
          fontFamily: "Playfair Display, serif",
          fontWeight: 400,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          color: "text.primary",
          cursor: "pointer",
          "&:hover": {
            textDecoration: "underline",
          },
        }}
      >
        {children}
      </Typography>
    </Box>
  );
}

