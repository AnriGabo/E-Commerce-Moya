import { Box, Stack, Typography } from "@mui/material";
import Moyajewellery from "../../../Assets/Images/moya_jewellery_00.jpg";
import MoyaKeysCollection from "../../../Assets/Images/moya_keys_01.jpg";
import WomanWhiteBlouse  from "../../../Assets/Images/fashion_model_07.jpg";
import WomanBlackHeelsWithSocks  from "../../../Assets/Images/fashion_model_sock_02.jpg";

const ZaraCollectionOf2025 = [
  {
    img: WomanWhiteBlouse,
    h5: "Embroidered Collar Blouse",
    h6: "A D D B",
  },
  {
    img: WomanBlackHeelsWithSocks,
    h5: "Cotton Blend Kneel",
    h6: "E L N A",
  },
  {
    img: MoyaKeysCollection,
    h5: "Charm Lock Necklace",
    h4: "0 0 3",
  },
  {
    img: Moyajewellery,
    h5: "Layered Medallion Necklace",
    h4: "0 0 4",
  },
];

const ZaraWomanCollection = () => {
  return (
    <Stack
      sx={{
        marginBlockStart: "7rem",
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
