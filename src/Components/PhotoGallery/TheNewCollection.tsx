import { Box, Divider, Stack, Typography } from "@mui/material";
import PhotoSlider from "./PhotoSlider";
import SummerCollection from "./SummerCollection";

import { Helmet } from "react-helmet";
import FashionBag from "./FashionBag";
import SpringCollection from "./SpringCollection";

const Collection = () => {
 

  return (
    <Stack sx={{ marginBlock: "2rem" }}>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

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
      <SummerCollection />
      {/* ვტესტავთ */}
      {/* <SummerCollection /> */}

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
