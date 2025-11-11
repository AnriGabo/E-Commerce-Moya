import { Box, Stack, Typography } from "@mui/material";

// Desktop Version
import BeigeTopWithOliveBag from "../../../../Assets/Images/fashion_model_03.webp";
import OliveBagDetail from "../../../../Assets/Images/fashion_model_04.webp";
import BurgundyShirtPlaidPants from "../../../../Assets/Images/fashion_model_05.webp";

// Tablet Version
import tabletVersion1 from "../../../../Assets/Images/fashion_model_03_800.webp";
import tabletVersion2 from "../../../../Assets/Images/fashion_model_04_800.webp";
import tabletVersion3 from "../../../../Assets/Images/fashion_model_05_800.webp";

// Mobile Version
import mobileversion1 from "../../../../Assets/Images/fashion_model_03_400.webp";
import mobileversion2 from "../../../../Assets/Images/fashion_model_04_400.webp";
import mobileversion3 from "../../../../Assets/Images/fashion_model_05_400.webp";

import BoxContainer from "../../../MuiUI/BoxContainer";
import ImageCaption from "../../../MuiUI/ImageCaption";

const SpringCollectionGallery = [
  {
    id: 0,
    alt: "MOYA - Model wearing a burgundy shirt and plaid yellow trousers, styled with a minimal brown suede tote — MOYA Spring Collection",
    desktop: BeigeTopWithOliveBag,
    mobileversion: mobileversion1,
    tabletVersion: tabletVersion1,
  },
  {
    id: 1,
    alt: "MOYA -Close-up of oversized olive suede bag paired with ruffled ochre skirt — MOYA Spring Campaign",
    desktop: OliveBagDetail,
    mobileversion: mobileversion2,
    tabletVersion: tabletVersion2,
  },
  {
    h4: "001",
    h5: "spring,woman",
    h6: "collection",
  },
  {
    id: 2,
    alt: "MOYA -Female model in beige lightweight top and large olive bag, walking against soft grey backdrop — MOYA New Arrivals",
    desktop: BurgundyShirtPlaidPants,
    mobileversion: mobileversion3,
    tabletVersion: tabletVersion3,
  },
];

const SpringWomanEditorial = () => {
  return (
    <BoxContainer>
      {SpringCollectionGallery.map((Item, idx) => (
        <Stack key={idx}>
          <Box sx={{ display: "flex", flexDirection: "column" }} key={Item.id}>
            {Item.desktop && (
              <Box
                component={"img"}
                src={Item.desktop}
                // ეს არის ფოტოების გალერია, რომელსაც ბრაუზერი ირჩევს შესაბამისი ზომის მიხედვით
                srcSet={`${Item.mobileversion} 400w, ${Item.tabletVersion} 800w, ${Item.desktop} 850w`}
                // 3 breakpoint
                sizes="(max-width:768px) 100vw, (max-width:1000px) 50vw, 850px"
                alt={Item.alt}
                width={850}
                height={1275}
                loading={idx === 0 ? "eager" : "lazy"}
                fetchPriority={idx === 0 ? "high" : "low"}
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
