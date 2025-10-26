import { Box, Stack, Typography } from "@mui/material";
import WomanWhiteBlouse from "../../../Assets/Images/fashion_model_07.webp";
import WomanBlackHeelsWithSocks from "../../../Assets/Images/fashion_model_sock_02.webp";
import Moyajewellery from "../../../Assets/Images/moya_jewellery_00.webp";
import MoyaKeysCollection from "../../../Assets/Images/moya_keys_01.webp";

const ZaraCollectionOf2025 = [
  {
    id: 0,
    alt: "MOYA - Silver layered necklace with delicate chain and small pendants — MOYA Accessories Collection",
    img: WomanWhiteBlouse,
    h5: "Embroidered Collar Blouse",
    h6: "A D D B",
  },
  {
    id: 1,
    alt: "MOYA - Antique gold multi-chain necklace with small rounded charms — MOYA Jewelry Selection",
    img: WomanBlackHeelsWithSocks,
    h5: "Cotton Blend Kneel",
    h6: "E L N A",
  },
  {
    id: 2,
    alt: "MOYA - Model wearing embroidered white collar blouse with black wide trousers — MOYA Editorial Collection",
    img: MoyaKeysCollection,
    h5: "Charm Lock Necklace",
    h4: "0 0 3",
  },
  {
    id: 3,
    alt: "MOYA - Close-up of ribbed black socks paired with high-heeled sandals — MOYA Accessories Campaign",
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
      {ZaraCollectionOf2025.map((Item) => (
        <Stack>
          <Box key={Item.id}>
            {Item.img && (
              <Box
                component={"img"}
                src={Item.img}
                alt={Item.alt}
                loading="lazy"
                decoding="async"
                sx={{
                  width: "100%",
                  cursor: "pointer",
                }}
              />
            )}
          </Box>
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
