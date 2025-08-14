import { Box, Typography } from "@mui/material";

import FashionModel3 from "../../../Images/FashionModel3.jpg";
import FashionModel4 from "../../../Images/FashionModel4.jpg";
import FashionModel5 from "../../../Images/FashionModel5.jpg";
import CustomBoxComponent from "../../CustomMuiComponents/CustomBoxComponent";
import CustomImageDescriptionTypography from "../../CustomMuiComponents/CustomImageDescriptionTypo";

const SpringCollectionGallery = [
  {
    img: FashionModel3,
  },
  {
    img: FashionModel4,
  },
  {
    h4: "001",
    h5: "spring,woman",
    h6: "collection",
  },
  {
    img: FashionModel5,
  },
];

const SpringCollection = () => {
  return (
    <CustomBoxComponent>
      {SpringCollectionGallery.map((Item, i) => (
        <Box key={i} sx={{ display: "flex", flexDirection: "column" }}>
          {Item.img && (
            <img
              src={Item.img}
              alt={`Fashion Model Image-${i}`}
              style={{ width: "100%", objectFit: "cover", cursor: "pointer" }}
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
            <CustomImageDescriptionTypography>
              {Item.h5}
            </CustomImageDescriptionTypography>
            <CustomImageDescriptionTypography>
              {Item.h6}
            </CustomImageDescriptionTypography>
          </Box>
        </Box>
      ))}
    </CustomBoxComponent>
  );
};

export default SpringCollection;
