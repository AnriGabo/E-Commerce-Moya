import { Box, Stack, Typography } from "@mui/material";
import Zara2025Jewellery from "../../../Assets/Images/ZaraJewellery.jpg";
import Zara2025Keys from "../../../Assets/Images/ZaraKeys.jpg";
import Zara2025CollectionN0 from "../../../Assets/Images/ZaraWomanCollection.jpg";
import Zara2025CollectionN1 from "../../../Assets/Images/ZaraWomanCollection1.jpg";

const ZaraCollectionOf2025 = [
  {
    img: Zara2025CollectionN0,
    h5: "Embroidered Collar Blouse",
    h6: "A D D B",
  },
  {
    img: Zara2025CollectionN1,
    h5: "Cotton Blend Kneel",
    h6: "E L N A",
  },
  {
    img: Zara2025Keys,
    h5: "Charm Lock Necklace",
    h4: "0 0 3",
  },
  {
    img: Zara2025Jewellery,
    h5: "Layered Medallion Necklace",
    h4: "0 0 4",
  },
];

const ZaraWomanCollection = () => {
  return (
    <Stack
      sx={{
        marginBlock: "7rem",
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        gridTemplateRows: "repeat(2,1fr)",
        gap: "3rem",
      }}
    >
      {ZaraCollectionOf2025.map((Item, I) => (
        <Stack key={I}>
          {Item.img && (
            <img
              src={Item.img}
              alt={`Fashion Model 2025 Collection ${I}`}
              style={{ width: "100%", cursor: "pointer" }}
            />
          )}
          <Box
            sx={{
              marginBlockStart: "0.5rem",
              display: "flex",
              justifyContent: "space-between",
              paddingInline: "1rem",
            }}
          >
            <Typography
              component={"h4"}
              sx={{
                fontFamily: "Didot, Playfair Display, serif",
                fontWeight: 400,
                letterSpacing: "0.05em",
                textTransform: "capitalize",
                fontSize: "1.1rem",
              }}
            >
              {Item.h5}
            </Typography>
            <Typography
              component={"h5"}
              sx={{
                fontSize: "1.3rem",
                fontFamily: '"Didot", "Bodoni MT", "Times New Roman", serif',
                fontWeight: 400,
                letterSpacing: "0.4em",
                textTransform: "uppercase",
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

export default ZaraWomanCollection;
