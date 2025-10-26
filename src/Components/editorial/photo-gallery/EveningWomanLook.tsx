import { Box, Stack, Typography } from "@mui/material";

import ModelPolkaDotTop from "../../../Assets/Images/black_fashion_model_01.webp";
import BrownPolkaDotSandal from "../../../Assets/Images/black_fashion_model_shoes_01.webp";
import { HelmetProvider } from "react-helmet-async";

const FashionModelStyle = [
  {
    id: 0,
    alt: "MOYA - Back view of woman in chocolate satin halter dress — MOYA Evening Collection",
    img: ModelPolkaDotTop,
  },
  {
    id: 0,
    alt: "MOYA - Brown heeled sandal with fine dotted straps — MOYA Accessories Collection",
    img: BrownPolkaDotSandal,
    h4: "LIMITED DROP",
    h5: "MOYA WOMAN COLLECTION",
    h6: "BLACK CUT / 003",
  },
];
const EveningWomanLook = () => {
  return (
    <Stack
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        marginBlockStart: "8rem",
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
      {FashionModelStyle.map((Item) => (
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
                fontWeight: 500,
              }}
            >
              {Item.h4}
            </Typography>
            <Typography
              component={"h4"}
              sx={{
                letterSpacing: "2px",
                fontWeight: 500,
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              {Item.h5}
            </Typography>
            <Typography
              component={"h4"}
              sx={{
                letterSpacing: "2px",
                fontWeight: 500,
                fontFamily: "Playfair Display, serif",
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

export default EveningWomanLook;
