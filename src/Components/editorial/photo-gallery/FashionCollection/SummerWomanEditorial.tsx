import { Box, Stack, Typography } from "@mui/material";
import SummerLookFull from "../../../../Assets/Images/fashion01.webp";
import SummerLookClose from "../../../../Assets/Images/fashion02.webp";
import SummerLookDetail from "../../../../Assets/Images/fashion03.webp";

import CustomBoxComponent from "../../../MuiUI/BoxContainer";
import CustomImageDescriptionTypography from "../../../MuiUI/ImageCaption";

const summerCollectionImg = [
  {
    id: 0,
    alt: "MOYA - Female model in navy denim vest and wide-leg trousers walking in a Paris street — MOYA Summer Collection",
    img: SummerLookFull,
  },
  {
    id: 1,
    alt: "MOYA -Close-up of woman wearing sleeveless denim vest with metallic buttons — MOYA Summer Campaign",
    img: SummerLookClose,
  },
  {
    id: 2,
    alt: "MOYA - Model in yellow sleeveless set posing under soft sunlight — MOYA Summer Collection 2025",
    img: SummerLookDetail,
  },
  {
    h4: "004",
    h5: "summer,woman",
    h6: "collection",
  },
];

const SummerWomanEditorial = () => {
  return (
    <Stack sx={{ marginBlockStart: "8rem" }}>
      <CustomBoxComponent>
        {summerCollectionImg.map((Item) => (
          <Stack>
            <Box key={Item.id}>
              {Item.img && (
                <Box
                  component={"img"}
                  src={Item.img}
                  alt={Item.alt}
                  loading="lazy"
                  decoding="async"
                  sx={{ width: "100%", cursor: "pointer" }}
                />
              )}
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                height: "100%",
                flexDirection: "column",
              }}
            >
              <Typography
                variant={"h4"}
                component={"h5"}
                sx={{ fontWeight: "bold", letterSpacing: "0.5rem" }}
              >
                {Item.h4}
              </Typography>
              <CustomImageDescriptionTypography>
                {Item.h5}
              </CustomImageDescriptionTypography>
              <CustomImageDescriptionTypography>
                {Item.h6}
              </CustomImageDescriptionTypography>
            </Box>
          </Stack>
        ))}
      </CustomBoxComponent>
    </Stack>
  );
};

export default SummerWomanEditorial;
