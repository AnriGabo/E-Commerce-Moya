import { Stack, Typography } from "@mui/material";
import FooterCaption from "../../MuiUI/FooterCaption";
import FooterImage from "./FooterImage";

const Footer = () => {
  return (
    <Stack
      component={"footer"}
      id="app-footer"
      sx={{
        backgroundColor: "rgba(236, 234, 234, 1)",
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        paddingInline: "3rem",
        marginBlockStart: "8rem",
        borderTopLeftRadius: "8px",
        borderTopRightRadius: "8px",
      }}
    >
      <Stack
        sx={{
          gap: "1.7rem",
          paddingBlockStart: "3rem",
          flexWrap: "wrap",
          alignItems: "center",
        }}
        direction={"row"}
      >
        <FooterCaption>About Us</FooterCaption>
        <FooterCaption> Customer Service</FooterCaption>
        <FooterCaption> Orders & Returns</FooterCaption>
        <FooterCaption> Privacy Policy</FooterCaption>

        <Typography
          variant="body2"
          component={"h6"}
          sx={{
            flexBasis: "100%",
            fontFamily: "Cormorant Garamond, serif",
            fontWeight: 400,
            fontSize: "0.9rem",
            letterSpacing: "0.02em",
            color: "text.secondary",
          }}
        >
          English | Georgian • © 2025 YourBrand. All rights reserved.
        </Typography>
      </Stack>
      <FooterImage />
    </Stack>
  );
};

export default Footer;
