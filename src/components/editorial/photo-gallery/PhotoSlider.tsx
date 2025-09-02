import { Box, Stack, Typography } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";

import WomanOutfitPolkaDot from "../../../Assets/Images/black_fashion_model_00.jpg";
import WomanSandalPolkaDot  from "../../../Assets/Images/black_fashion_model_shoes_00.jpg";

const ImageSlider = [
  {
    img: WomanOutfitPolkaDot,
  },

  {
    img: WomanSandalPolkaDot,
    h4: "SPECIAL EDITION",
    h5: "MOYA WOMAN COLLECTION",
    h6: "BLACK FRAME / 002",
  },
];

const PhotoSlider = () => {
  return (
    <Stack
      sx={{
        marginBlockStart: "8rem",
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        marginInlineStart: "1rem",
      }}
    >
      <HelmetProvider>
        <link
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </HelmetProvider>
      {ImageSlider.map((Item, I) => (
        <Stack key={I}>
          <img
            src={Item.img}
            alt={`Image-${I}`}
            style={{ width: "100%", cursor: "pointer" }}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              flexDirection: "column",
              paddingBlockStart: "1rem",
            }}
          >
            <Typography
              component={"h4"}
              sx={{
                fontFamily: "'Bodoni Moda', serif",
                letterSpacing: "2px",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              {Item.h4}
            </Typography>
            <Typography
              component={"h4"}
              sx={{
                fontFamily: "'Montserrat', sans-serif",
                letterSpacing: "1px",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              {Item.h5}
            </Typography>
            <Typography
              component={"h4"}
              sx={{
                fontFamily: "'Playfair Display', serif",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              {Item.h6}
            </Typography>
          </Box>
        </Stack>
      ))}
    </Stack>
  );
};

export default PhotoSlider;
