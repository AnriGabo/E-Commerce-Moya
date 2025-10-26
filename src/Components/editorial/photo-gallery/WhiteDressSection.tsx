import { Box, Stack, Typography } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";

import WomanOutfitPolkaDot from "../../../Assets/Images/black_fashion_model_00.webp";
import WomanSandalPolkaDot from "../../../Assets/Images/black_fashion_model_shoes_00.webp";

const ImageSlider = [
  {
    id: 0,
    alt: "MOYA - Back view of woman in chocolate satin halter dress — MOYA Evening Collection",
    img: WomanOutfitPolkaDot,
  },

  {
    id: 1,
    alt: "MOYA - Brown heeled sandal with fine dotted straps — MOYA Accessories Collection",
    img: WomanSandalPolkaDot,
    h4: "SPECIAL EDITION",
    h5: "MOYA WOMAN COLLECTION",
    h6: "BLACK FRAME / 002",
  },
];

const WhiteDressSection = () => {
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
      {ImageSlider.map((Item) => (
        <Stack>
          <Box key={Item.id}>
            {Item.img && (
              <Box
                component={"img"}
                src={Item.img}
                alt={Item.alt}
                loading="lazy"
                decoding="async"
                sx={{
                  width: "100%",
                  cursor: "pointer",
                }}
              />
            )}
          </Box>

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

export default WhiteDressSection;
