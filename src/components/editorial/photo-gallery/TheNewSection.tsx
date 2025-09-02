import { Box, Divider, Stack, Typography } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";

import MainFashionDesign from "./FashionCollection/MainFashionDesign";
import SpringWomanCollection from "./FashionCollection/SpringWomanCollection";
import SummerWomanCollection from "./FashionCollection/SummerWomanCollection";
import FashionDesignChapter5 from "./FashionCollection/WomanVestLook";
import FashionModel from "./FashionModel";
import PhotoSlider from "./PhotoSlider";
import ZaraWomanCollection from "./WomanCollection2025";

const Collection = () => {
  return (
    <Stack sx={{ marginBlock: "2rem" }}>
      <HelmetProvider>
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&display=swap"
          rel="stylesheet"
        />
      </HelmetProvider>

      <Box sx={{ marginBlock: "4rem" }}>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: "3rem",
            fontFamily: "'Libre Baskerville', serif",
            fontWeight: 700,
            letterSpacing: "0,5px",
          }}
        >
          The New
        </Typography>
      </Box>
      <SpringWomanCollection />
      <PhotoSlider />
      <FashionModel />
      <SummerWomanCollection />
      <MainFashionDesign />

      <Divider sx={{ marginBlockStart: "6rem", marginInline: "5rem" }}>
        <Typography
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.1rem",
            fontWeight: 500,
            letterSpacing: "0.1em",
          }}
        >
          Zara Woman /2025 Collection
        </Typography>
      </Divider>
      <FashionDesignChapter5 />
      <ZaraWomanCollection />
    </Stack>
  );
};

export default Collection;
