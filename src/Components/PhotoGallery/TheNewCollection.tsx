import { Box, Divider, Stack, Typography } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";

import PhotoSlider from "./PhotoSlider";
import FashionBag from "./FashionBag";
import SpringCollection from "./FashionCollection/SpringCollection";
import SummerCollection from "./FashionCollection/SummerCollection";
import FashionModel from "./FashionModel";

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

      <SpringCollection />
      <PhotoSlider />
      <FashionModel />
      <SummerCollection />

      <Divider
        sx={{
          backgroundColor: "rgba(0,0,0,0.1)",
          height: "2px",
          marginBlockStart: "8rem",
          marginInline: "10rem",
        }}
      />

      <FashionBag />
      {/* <FashionBag /> */}
    </Stack>
  );
};

export default Collection;
