import { Box, Typography } from "@mui/material";

import BeigeTopWithOliveBag  from "../../../../Assets/Images/fashion_model_03.jpg"
import OliveBagDetail  from "../../../../Assets/Images/fashion_model_04.jpg";
import BurgundyShirtPlaidPants  from "../../../../Assets/Images/fashion_model_05.jpg";

import BoxContainer from "../../../MuiUI/BoxContainer";
import ImageCaption from "../../../MuiUI/ImageCaption";

const SpringCollectionGallery = [
  {
    img: BeigeTopWithOliveBag,
  },
  {
    img: OliveBagDetail,
  },
  {
    h4: "001",
    h5: "spring,woman",
    h6: "collection",
  },
  {
    img: BurgundyShirtPlaidPants ,
  },
];

const SpringWomanCollection = () => {
  return (
    <BoxContainer>
      {SpringCollectionGallery.map((Item, i) => (
        <Box key={i} sx={{ display: "flex", flexDirection: "column" }}>
          {Item.img && (
            <img
              src={Item.img}
              alt={`Spring Woman Collection Image-${i}`}
              style={{ width: "100%", cursor: "pointer" }}
            />
          )}

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
            <ImageCaption>
              {Item.h5}
            </ImageCaption>
            <ImageCaption>
              {Item.h6}
            </ImageCaption>
          </Box>
        </Box>
      ))}
    </BoxContainer>
  );
};

export default SpringWomanCollection;
