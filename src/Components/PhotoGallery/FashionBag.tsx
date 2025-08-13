// ეს გვერდი დასასრულებელი :)

import { Stack } from "@mui/material";
import FashionBag0 from "../../Images/FashionBag1.jpg";
import FashionBag1 from "../../Images/FashionBag2.jpg";

const LuxuryBag = [
  {
    img: FashionBag0,
  },
  {
    img: FashionBag1,
  },
];

const FashionBag = () => {
  return (
    <Stack
      sx={{
        marginBlockStart: "7rem",
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        gap:"3rem"
      }}
    >
      {LuxuryBag.map((Item, I) => (
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
              alt={`Fashion Model Bag ${I}`}
              style={{ width: "100%", objectFit: "cover" }}
            />
          )}
        </Stack>
      ))}
    </Stack>
  );
};

export default FashionBag;
