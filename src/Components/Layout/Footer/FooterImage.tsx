import { Box } from "@mui/material";
import FemaleModel from "../../../Assets/Images/fashion_model_08.webp";
import MaleModelBlindfold from "../../../Assets/Images/male-model-blindfold.webp";

const footerImages = [
  {
    alt: "MOYA -Monochrome artistic portrait of a man covering his face — MOYA editorial photo series",
    id: 0,
    img: MaleModelBlindfold,
  },
  {
    alt: "MOYA - Black and white conceptual photograph of intertwined hands with rope — MOYA art collection",
    id: 1,
    img: FemaleModel,
  },
  {
    alt: "MOYA - Artistic black and white portrait of a man with blindfold, minimal background ",
    id: 2,
    img: MaleModelBlindfold,
  },
];

const FooterImage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "1.8rem",
        paddingBlock: "2rem",
        alignItems: "stretch",
      }}
    >
      {footerImages.map((item) => (
        <Box key={item.id}>
          <Box
            component="img"
            src={item.img}
            alt={item.alt}
            loading="lazy"
            decoding="async"
            sx={{
              flex: "1 1 0",
              width: "100%",
              maxWidth: "240px",
              height: "130px",
              objectFit: "cover",
              borderRadius: "6px",
              display: "block",
              boxShadow: 5,
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default FooterImage;
