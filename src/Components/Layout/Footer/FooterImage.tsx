import { Box } from "@mui/material";
import FemaleModel from "../../../Assets/Images/fashion_model_08.webp";
import FemaleModelBlindfold from "../../../Assets/Images/female-model-blindfold.webp";
import MaleModelBlindfold from "../../../Assets/Images/male-model-blindfold.webp";

const footerImages = [
  {
    img: MaleModelBlindfold,
  },
  {
    img: FemaleModel,
    alt:"R"
  },
  {
    img: FemaleModelBlindfold,
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
      {footerImages.map((item, i) => (
        <Box
          key={i}
          component="img"
          src={item.img}
          alt="Footer preview"
          loading="lazy"
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
      ))}
    </Box>
  );
};

export default FooterImage;
