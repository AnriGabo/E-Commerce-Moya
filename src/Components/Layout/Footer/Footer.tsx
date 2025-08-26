import { Box, Stack, Typography } from "@mui/material";
import FemaleModel from "../../../Assets/Images/female-model.jpg";
import FemaleModelBlindfold from "../../../Assets/Images/female-model-blindfold.jpg";
import MaleModelBlindfold from "../../../Assets/Images/male-model-blindfold.jpg";
import FooterCaption from "../../MuiUI/FooterCaption";

const footerImages = [
  {
    img: MaleModelBlindfold,
  },
  {
    img: FemaleModel,
  },
  {
    img: FemaleModelBlindfold,
  },
];
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
      <Box
        sx={{
          display: "flex",
          gap: "1.8rem",
          paddingBlock: "2rem",
          alignItems: "stretch",
        }}
      >
        {footerImages.map((item, i) => (
          <Box
            key={i}
            component="img"
            src={item.img}
            alt="Footer preview"
            loading="lazy"
            sx={{
              flex: "1 1 0",
              width: "100%",
              maxWidth: "240px",
              height: "130px",
              objectFit: "cover",
              borderRadius: "6px",
              display: "block",
              boxShadow: 5,
            }}
          />
        ))}
      </Box>
    </Stack>
  );
};

export default Footer;
