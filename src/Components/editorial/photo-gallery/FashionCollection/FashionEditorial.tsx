import { Box, Stack, Typography } from "@mui/material";
import MainFashionModel from "../../../../Assets/Images/fashion_model_06.webp";
import mobilemodel from "../../../../Assets/Images/fashion_model_06_400.webp";
import tabletVersion from "../../../../Assets/Images/fashion_model_06_800.webp";

const MainModels = [
  {
    id:0,
    img: MainFashionModel,
    h4: "Shapes are clear-cut, lines are decisive. A study in sharp proportions, dense fabrics, confident stances.",
    h5: "The kind of clothes that lead",
    h6: "/CLEAR-CUT.",
    alt: "MOYA - Model in a black and white halter dress posing against a red background for MOYA fashion brand",
  },
];

const headingBase = {
  fontFamily: `'Bodoni Moda', 'Didot', 'Bodoni', 'Times New Roman', serif`,
  lineHeight: 1.3,
};

const h4Style = {
  ...headingBase,
  fontWeight: 400,
  fontSize: "1.25rem",
  letterSpacing: "-0.02em",
};

const h5Style = {
  ...headingBase,
  fontWeight: 300,
  fontSize: "1.1rem",
  letterSpacing: "-0.01em",
};

const h6Style = {
  ...headingBase,
  fontWeight: "400",
  letterSpacing: "-0.03em",
  lineHeight: 1.1,
};

const FashionEditorial = () => {
  return (
    <Stack
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(1,1fr)",
        marginBlockStart: "8rem",
      }}
    >
      {MainModels.map((Item) => (
        <Box key={Item.id}>
          <Box
            component={"img"}
            src={Item.img}
            srcSet={`${mobilemodel} 400w,  ${tabletVersion} 800w, ${MainFashionModel} 1500w`}
            sizes="(max-width:768px) 100vw, (max-width:1000px) 50vw, 1500px"
            alt={Item.alt}
            loading="lazy"
            decoding="async"
            width={1500}
            height={1875}
            sx={{
              width: "100%",
              height:"auto",
              display:"block",
              cursor: "pointer",
            }}
          />
          <Stack sx={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                paddingBlockStart: "2rem",
                paddingInlineStart: "1rem",
              }}
            >
              <Typography component={"h4"} sx={h4Style}>
                {Item.h4}
              </Typography>
              <Typography component={"h5"} sx={h5Style}>
                {Item.h5}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                paddingInlineEnd: "8rem",
                paddingBlockStart: "2.5rem",
              }}
            >
              <Typography variant={"h4"} component={"h4"} sx={h6Style}>
                {Item.h6}
              </Typography>
            </Box>
          </Stack>
        </Box>
      ))}
    </Stack>
  );
};

export default FashionEditorial;
