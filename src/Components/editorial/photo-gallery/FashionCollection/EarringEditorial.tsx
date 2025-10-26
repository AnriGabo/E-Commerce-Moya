import { Box, Stack, Typography } from "@mui/material";
import WomanEarringDetail13 from "../../../../Assets/Images/fashion_model_13.webp";

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
        loading="lazy"
        decoding="async"
        alt={
          "MOYA - Close-up portrait of woman wearing minimalist gold ear cuff — MOYA Accessories Collection"
        }
        sx={{
          width: "100%",
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
