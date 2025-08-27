import { Box, Stack, Typography } from "@mui/material";
import SummerLookFull  from "../../../../Assets/Images/fashion_model_00.jpg"
import SummerLookClose  from "../../../../Assets/Images/fashion_model_01.jpg";
import SummerLookDetail  from "../../../../Assets/Images/fashion_model_02.jpg";



import CustomBoxComponent from "../../../MuiUI/BoxContainer";
import CustomImageDescriptionTypography from "../../../MuiUI/ImageCaption";

const summerCollectionImg = [
  {
    img: SummerLookFull,
  },
  {
    img: SummerLookClose,
  },
  {
    img: SummerLookDetail,
  },
  {
    h4: "004",
    h5: "summer,woman",
    h6: "collection",
  },
];

const SummerWomanCollection = () => {
  return (
    <Stack sx={{ marginBlockStart: "8rem" }}>
      <CustomBoxComponent>
        {summerCollectionImg.map((Item, I) => (
          <Stack key={I}>
            {Item.img && (
              <img
                src={Item.img}
                alt={`Summer Woman Collection image ${I}`}
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

export default SummerWomanCollection;
