import { Stack } from "@mui/material";
import Zara2025CollectionN0 from "../../Images/ZaraWomanCollection.jpg";
import Zara2025CollectionN1 from "../../Images/ZaraWomanCollection1.jpg";
import Zara2025Keys from "../../Images/ZaraKeys.jpg";
import Zara2025Jewellery from "../../Images/ZaraJewellery.jpg";

const ZaraCollectionOf2025 = [
  {
    img: Zara2025CollectionN0,
  },
  {
    img: Zara2025CollectionN1,
  },
  {
    img: Zara2025Keys,
  },
  {
    img: Zara2025Jewellery,
  },
];

const ZaraWomanCollection = () => {
  return (
    <Stack
      sx={{
        marginBlockStart: "7rem",
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        gap: "3rem",
      }}
    >
      {ZaraCollectionOf2025.map((Item, I) => (
        <Stack
          key={I}
          sx={{
            flexDirection: "row",
            marginInlineStart: "1rem",
          }}
        >
          {Item.img && (
            <img
              src={Item.img}
              alt={`Fashion Model 2025 Collection ${I}`}
              style={{ width: "100%", objectFit: "cover", cursor: "pointer" }}
            />
          )}
        </Stack>
      ))}
    </Stack>
  );
};

export default ZaraWomanCollection;
