import { Box, Stack, Typography } from "@mui/material";

import FashionModel3 from "../../Images/FashionModel3.jpg";
import FashionModel4 from "../../Images/FashionModel4.jpg";
import FashionModel5 from "../../Images/FashionModel5.jpg";

const SpringCollectionGallery = [
  
  {
    img: FashionModel3,
  },
  {
    img: FashionModel4,
  },
  {
    h4: "001",
    h5: "spring,woman",
    h6: "collection",
  },
  {
    img: FashionModel5,
  },
];

const SpringCollection = () => {
  return (
    <Stack
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        gridTemplateRows: "repeat(2,1fr)",
      }}
    >
      {SpringCollectionGallery.map((Item, i) => (
        <Box key={i} sx={{ display: "flex", flexDirection: "column" }}>
          {Item.img && (
            <img
              src={Item.img}
              alt={`Fashion Model Image-${i}`}
              style={{ width: "100%", objectFit: "cover", cursor: "pointer" }}
            />
          )}

          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <Typography
              variant={"h4"}
              component={"h5"}
              sx={{ fontWeight: "bold" }}
            >
              {Item.h4}
            </Typography>
            <Typography
              sx={{
                fontFamily: `"Didot", "Bodoni MT", "Palatino Linotype", "Book Antiqua", Palatino, "Garamond", "Georgia", "Times New Roman", Times, serif`,
                fontWeight: 570,
                letterSpacing: "0.5px",
                fontSize: "1.2rem",
              }}
            >
              <i>{Item.h5}</i>
            </Typography>
            <Typography
              sx={{
                fontFamily: `"Didot", "Bodoni MT", "Palatino Linotype", "Book Antiqua", Palatino, "Garamond", "Georgia", "Times New Roman", Times, serif`,
                fontWeight: 570,
                letterSpacing: "0.5px",
                fontSize: "1.2rem",
              }}
            >
              <i>{Item.h6}</i>
            </Typography>
          </Box>
        </Box>
      ))}
    </Stack>
  );
};

export default SpringCollection;
