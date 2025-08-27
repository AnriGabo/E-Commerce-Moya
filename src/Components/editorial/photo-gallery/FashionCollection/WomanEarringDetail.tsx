import { Box, Stack, Typography } from "@mui/material";
import WomanEarringDetail13 from "../../../../Assets/Images/fashion_model_13.jpg"

const WomanEarringDetail = () => {
  return (
    <Stack
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        marginBlockStart: "3rem",
      }}
    >
      <img src={WomanEarringDetail13} alt={"Fashion Model"} style={{width:"90%"}}  />
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

export default WomanEarringDetail;
