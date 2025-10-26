import { Box, Stack, Typography } from "@mui/material";

import BeigeTopWithOliveBag from "../../../../Assets/Images/fashion_model_03.webp";
import OliveBagDetail from "../../../../Assets/Images/fashion_model_04.webp";
import BurgundyShirtPlaidPants from "../../../../Assets/Images/fashion_model_05.webp";

import BoxContainer from "../../../MuiUI/BoxContainer";
import ImageCaption from "../../../MuiUI/ImageCaption";

const SpringCollectionGallery = [
  {
    id: 0,
    alt: "MOYA - Model wearing a burgundy shirt and plaid yellow trousers, styled with a minimal brown suede tote — MOYA Spring Collection",
    img: BeigeTopWithOliveBag,
  },
  {
    id: 0,
    alt: "MOYA -Close-up of oversized olive suede bag paired with ruffled ochre skirt — MOYA Spring Campaign",
    img: OliveBagDetail,
  },
  {
    h4: "001",
    h5: "spring,woman",
    h6: "collection",
  },
  {
    id: 0,
    alt: "MOYA -Female model in beige lightweight top and large olive bag, walking against soft grey backdrop — MOYA New Arrivals",
    img: BurgundyShirtPlaidPants,
  },
];

const SpringWomanEditorial = () => {
  return (
    <BoxContainer>
      {SpringCollectionGallery.map((Item) => (
        <Stack>
          <Box key={Item.id} sx={{ display: "flex", flexDirection: "column" }}>
            {Item.img && (
              <Box
                component={"img"}
                src={Item.img}
                alt={Item.alt}
                sx={{
                  width: "100%",
                  cursor: "pointer",
                }}
              />
            )}
          </Box>

          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <Typography
              variant={"h4"}
              component={"h5"}
              sx={{ fontWeight: "bold", letterSpacing: "0.5rem" }}
            >
              {Item.h4}
            </Typography>
            <ImageCaption>{Item.h5}</ImageCaption>
            <ImageCaption>{Item.h6}</ImageCaption>
          </Box>
        </Stack>
      ))}
    </BoxContainer>
  );
};

export default SpringWomanEditorial;
