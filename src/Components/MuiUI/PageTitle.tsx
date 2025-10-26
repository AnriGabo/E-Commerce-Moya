import { Typography } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";
import type React from "react";

interface MainTitleTypographyType {
  children: React.ReactNode;
}

export default function CustomMainTitleTypography({ children }: MainTitleTypographyType) {
  return (
    <>
      <HelmetProvider>
        <link
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,700&display=swap"
          rel="stylesheet"
        />
      </HelmetProvider>

      <Typography
        component="h1"
        sx={{
          fontFamily: `"Bodoni Moda", serif`,
          fontWeight: 700,
          textTransform: "uppercase",
          fontSize: "7rem",     
          lineHeight: 0.95,      
          letterSpacing: "-0.02em", 
          userSelect: "none",
          cursor: "pointer",
          color: "text.primary",
          fontKerning: "normal",
          fontFeatureSettings: `"liga" 1, "kern" 1`,
        }}
      >
        {children}
      </Typography>
    </>
  );
}
