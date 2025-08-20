import { Box, Stack } from "@mui/material";
import CategoryDetail from "./CategoryDetail";
import MainCategories from "./MainCategories";

const Unite = () => {
  return (
    <Stack
      direction="row"
      alignItems="flex-start"
      marginBlockStart={"4rem"}
    >
      <Box sx={{ alignSelf: "flex-start" }}>
        <MainCategories />
      </Box>
      <Box sx={{ alignSelf: "flex-start" }}>
        <CategoryDetail />
      </Box>
    </Stack>
  );
};

export default Unite;
