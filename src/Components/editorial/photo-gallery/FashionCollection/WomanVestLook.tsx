import { Box, Stack } from "@mui/material";
import WomanVestLook12 from "../../../../Assets/Images/fashion_model_12.webp";
import WomanEarringDetail from "./EarringEditorial";

const Fashion = [
  {
    img: WomanVestLook12,
  },
];

const WomanVestLook = () => {
  return (
    <Stack
      sx={{
        marginBlockStart: "8rem",
        display: "grid",
        gridTemplateColumns: "repeat(1,1fr)",
      }}
    >
      {Fashion.map((Item) => (
        <Stack>
          {Item.img && (
            <Box
              component={"img"}
              src={Item.img}
              alt={`MOYA - Portrait of woman in minimalist beige sleeveless top against light background — MOYA Essentials Collection`}
              loading="lazy"
              decoding="async"
              sx={{
                width: "100%",
                cursor: "pointer",
              }}
            />
          )}
        </Stack>
      ))}
      <WomanEarringDetail />
    </Stack>
  );
};

export default WomanVestLook;
