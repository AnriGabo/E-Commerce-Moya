import { Box, Stack, Typography } from "@mui/material";

import ModelPolkaDotTop from "../../../Assets/Images/black_fashion_model_01.webp";
import BrownPolkaDotSandal from "../../../Assets/Images/black_fashion_model_shoes_01.webp";
import { HelmetProvider } from "react-helmet-async";

// mobile version
import mobileModelPolkaDotTop from "../../../Assets/Images/black_fashion_model_01_400.webp";
import mobileBrownPolkaDotSandal from "../../../Assets/Images/black_fashion_model_shoes_01_400.webp";

// desktop version

import tablet from "../../../Assets/Images/black_fashion_model_01_800.webp";
import tablet2 from "../../../Assets/Images/black_fashion_model_shoes_01_800.webp";

const FashionModelStyle = [
  {
    id: 0,
    alt: "MOYA - Back view of woman in chocolate satin halter dress — MOYA Evening Collection",
    img: ModelPolkaDotTop,
    mobileversion: mobileModelPolkaDotTop,
    tabletversion: tablet,
  },
  {
    id: 1,
    alt: "MOYA - Brown heeled sandal with fine dotted straps — MOYA Accessories Collection",
    img: BrownPolkaDotSandal,
    mobileversion: mobileBrownPolkaDotSandal,
    tabletversion: tablet2,
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
                srcSet={`${Item.mobileversion} 400w, ${Item.tabletversion} 800w, ${Item.img} 850w`}
                sizes="(max-width:768px) 100vw, (max-width:1000px) 50vw, 850px"
                alt={Item.alt}
                loading="lazy"
                decoding="async"
                width={850}
                height={1275}
                sx={{
                  width: "100%",
                  height:"auto",
                  display:"block",
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
