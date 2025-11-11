import { Box, Stack, Typography } from "@mui/material";
import SummerLookFull from "../../../../Assets/Images/fashion01.webp";
import SummerLookClose from "../../../../Assets/Images/fashion02.webp";
import SummerLookDetail from "../../../../Assets/Images/fashion03.webp";

//mobileVersion
import mobileVersion1 from "../../../../Assets/Images/fashion01_400.webp";
import mobileVersion2 from "../../../../Assets/Images/fashion02_400.webp";
import mobileVersion3 from "../../../../Assets/Images/fashion03_400.webp";

// Tablet Version
import tabletVersion1 from "../../../../Assets/Images/fashion01_800.webp";
import tabletVersion2 from "../../../../Assets/Images/fashion02_800.webp";
import tabletVersion3 from "../../../../Assets/Images/fashion03_800.webp";

import CustomBoxComponent from "../../../MuiUI/BoxContainer";
import CustomImageDescriptionTypography from "../../../MuiUI/ImageCaption";

const summerCollectionImg = [
  {
    id: 0,
    alt: "MOYA - Female model in navy denim vest and wide-leg trousers walking in a Paris street — MOYA Summer Collection",
    img: SummerLookFull,
    mobileversion: mobileVersion1,
    tabletVersion: tabletVersion1,
  },
  {
    id: 1,
    alt: "MOYA -Close-up of woman wearing sleeveless denim vest with metallic buttons — MOYA Summer Campaign",
    img: SummerLookClose,
    mobileversion: mobileVersion2,
    tabletVersion: tabletVersion2,
  },
  {
    id: 2,
    alt: "MOYA - Model in yellow sleeveless set posing under soft sunlight — MOYA Summer Collection 2025",
    img: SummerLookDetail,
    mobileversion: mobileVersion3,
    tabletVersion: tabletVersion3,
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
                  srcSet={`${Item.mobileversion} 400w, ${Item.tabletVersion} 800w, ${Item.img} 850w`}
                  sizes="(max-width:768px) 100vw, (max-width:1000px) 50vw, 850px"
                  loading="lazy"
                  decoding="async"
                  width={850}
                  height={1275}
                  sx={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    cursor: "pointer",
                  }}
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
