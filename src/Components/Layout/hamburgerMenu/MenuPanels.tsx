import { Box, Stack } from "@mui/material";
import { useLocation } from "react-router-dom";
import MainCategories from "./MainCategories";
import SecondaryCategories from "./SecondaryCategories";

type Category = "woman" | "man" | "children";

const fallback: Category = "woman";

const Unite = () => {
  const { pathname } = useLocation();
  const slug = pathname.split("/")[1]?.toLowerCase();
  const selected: Category =
    slug === "man" || slug === "children" || slug === "woman"
      ? (slug as Category)
      : fallback;

  return (
    <Stack direction="row" alignItems="flex-start" marginBlockStart={"4rem"}>
      <Box sx={{ alignSelf: "flex-start" }}>
        <MainCategories />
      </Box>
      <Box sx={{ alignSelf: "flex-start" }}>
        <SecondaryCategories listmenegment={selected} />
      </Box>
    </Stack>
  );
};

export default Unite;
