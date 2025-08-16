import { Box, Stack, Typography } from "@mui/material";

import BlackFashionModel3 from "../../Assets/Images/BlackFashionModel3.jpg";
import BlackFashionModel2 from "../../Assets/Images/BlackFashionModel2.jpg";
import { HelmetProvider } from "react-helmet-async";

const FashionModelStyle = [
  {
    img: BlackFashionModel3,
  },
  {
    img: BlackFashionModel2,
    h4: "LIMITED DROP",
    h5: "MOYA WOMAN COLLECTION",
    h6: "BLACK CUT / 003",
  },
];
const FashionModel = () => {
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
      {FashionModelStyle.map((Item, I) => (
        <Stack key={I} sx={{ display: "flex", flexDirection: "column" }}>
          {Item.img && (
            <img
              src={Item.img}
              alt={`Fashion Model Style ${I}`}
              style={{ width: "100%", objectFit: "cover" }}
            />
          )}
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

export default FashionModel;
