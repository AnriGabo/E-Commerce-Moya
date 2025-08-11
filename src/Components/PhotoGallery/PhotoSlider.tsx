import { Box, Stack, Typography } from "@mui/material";

import Kneel from "../../Images/FashionModel6.jpg";
import KneelShirt from "../../Images/FashionModel11.jpg";

const ImageSlider = [
  {
    img: Kneel,
    h5: "Look 01",
  },

  {
    img: KneelShirt,
    h5: "Look 02",
  },
];

const PhotoSlider = () => {
  return (
    <Stack sx={{ marginBlockStart: "8rem" }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          marginInlineStart: "1rem",
        }}
      >
        {ImageSlider.map((Item2, I) => (
          <Stack>
            <img
              src={Item2.img}
              key={I}
              alt={`Image-${I}`}
              style={{ width: "100%", cursor: "pointer", objectFit: "cover" }}
            />
            <Box sx={{ marginBlockStart: "1rem",marginInlineStart:"0.2rem" }}>
              <Typography
                component={"h4"}
                sx={{
                  fontSize: "1rem",
                  fontFamily: "'Playfair Display', serif;",
                }}
              >
                {Item2.h5}
              </Typography>
            </Box>
          </Stack>
        ))}
      </Box>
    </Stack>
  );
};

export default PhotoSlider;
