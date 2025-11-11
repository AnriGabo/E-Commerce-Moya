import { Box, Stack } from "@mui/material";
import WomanVestLook12 from "../../../../Assets/Images/fashion_model_12.webp";
import WomanEarringDetail from "./EarringEditorial";

import mobileVersion from "../../../../Assets/Images/fashion_model_12_400.webp";
import tabletVersion from "../../../../Assets/Images/fashion_model_12_800.webp";



const Fashion = [
  {
    id:0,
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
        <Box key={Item.id}>
          {Item.img && (
            <Box
              component={"img"}
              src={Item.img}
              srcSet={`${mobileVersion} 400w, ${tabletVersion} 800w, ${Item.img} 1920w`}
              sizes="(max-width:768px) 100vw, (max-width:1000px) 50vw, 1920px"
              alt={`MOYA - Portrait of woman in minimalist beige sleeveless top against light background — MOYA Essentials Collection`}
              loading="lazy"
              decoding="async"
              width={1920}
              height={2880}
              sx={{
                width: "100%",
                height:"auto",
                display:"block",
                cursor: "pointer",
              }}
            />
          )}
        </Box>
      ))}
      <WomanEarringDetail />
    </Stack>
  );
};

export default WomanVestLook;
