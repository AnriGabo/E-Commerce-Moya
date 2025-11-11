import { Box, Stack, Typography } from "@mui/material";
import WomanEarringDetail13 from "../../../../Assets/Images/fashion_model_13.webp";
import mobileVersion from "../../../../Assets/Images/fashion_model_13_400.webp";
import tabletVersion from "../../../../Assets/Images/fashion_model_13_800.webp";

const EarringEditorial = () => {
  return (
    <Stack
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        marginBlockStart: "3rem",
      }}
    >
      <Box
        component={"img"}
        src={WomanEarringDetail13}
        srcSet={`${mobileVersion} 400w, ${tabletVersion} 800w, ${WomanEarringDetail13} 850w`}
        sizes="(max-width:768px) 100vw, (max-width:1000px) 50vw, 850px)"
        loading="lazy"
        decoding="async"
        width={850}
        height={1275}
        alt={
          "MOYA - Close-up portrait of woman wearing minimalist gold ear cuff — MOYA Accessories Collection"
        }
        sx={{
          width: "100%",
          height:"auto",
          display:"block",
          cursor: "pointer",
        }}
      />
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Typography
          sx={{
            fontFamily: '"Didot", "Bodoni MT", "Times New Roman", serif',
            fontWeight: 400,
            letterSpacing: "0.4em",
            fontSize: "2rem",
            textTransform: "uppercase",
          }}
        >
          ACCS
        </Typography>
      </Box>
    </Stack>
  );
};

export default EarringEditorial;
