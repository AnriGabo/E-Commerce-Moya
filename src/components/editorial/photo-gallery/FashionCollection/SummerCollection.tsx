import { Box, Stack, Typography } from "@mui/material";
import SummerCollectionCloth from "../../../Images/FashionModel0.jpg";
import SummerCollectionCloth2 from "../../../Images/FashionModel1.jpg";
import SummerCollectionCloth3 from "../../../Images/FashionModel2.jpg";
import CustomBoxComponent from "../../CustomMuiComponents/BoxContainer";
import CustomImageDescriptionTypography from "../../CustomMuiComponents/ImageCaption";

const summerCollectionImg = [
  {
    img: SummerCollectionCloth,
  },
  {
    img: SummerCollectionCloth2,
  },
  {
    img: SummerCollectionCloth3,
  },
  {
    h4: "004",
    h5: "summer,woman",
    h6: "collection",
  },
];

const SummerCollection = () => {
  return (
    <Stack sx={{ marginBlockStart: "8rem" }}>
      <CustomBoxComponent>
        {summerCollectionImg.map((Item, I) => (
          <Stack key={I}>
            {Item.img && (
              <img
                src={Item.img}
                alt={`Summer Collection image ${I}`}
                style={{ width: "100%", cursor: "pointer" }}
              />
            )}
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
                sx={{ fontWeight: "bold",letterSpacing:"0.5rem" }}
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

export default SummerCollection;
