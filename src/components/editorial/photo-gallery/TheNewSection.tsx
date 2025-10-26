import { Box, Divider, Stack, Typography } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";

import FashionEditorial from "./FashionCollection/FashionEditorial";
import SpringWomanEditorial from "./FashionCollection/SpringWomanEditorial";
import SummerWomanEditorial from "./FashionCollection/SummerWomanEditorial";
import FashionDesignChapter5 from "./FashionCollection/WomanVestLook";
import EveningWomanLook from "./EveningWomanLook";
import WhiteDressSection from "./WhiteDressSection";
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
      <SpringWomanEditorial />
      <WhiteDressSection />
      <EveningWomanLook />
      <SummerWomanEditorial />
      <FashionEditorial />

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
