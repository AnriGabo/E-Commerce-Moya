import { Box, Stack, Typography } from "@mui/material";
import NewWomanCollection2025 from "../../../../Assets/Images/FashionModelNewChapter1.jpg"

const FashionDesignChapter6 = () => {
  return (
    <Stack
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        marginBlockStart: "3rem",
      }}
    >
      <img src={NewWomanCollection2025} alt={"Fashion Model"} style={{width:"90%"}}  />
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

export default FashionDesignChapter6;
