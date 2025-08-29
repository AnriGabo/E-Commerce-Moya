import { Stack } from "@mui/material";
import WomanDetail from "./List/WomanDetail";
import MenDetail from "./List/MenDetail";
import Children from "./List/Children";

interface listmenegmentType {
  listmenegment: string;
}

const SecondaryCategories = ({ listmenegment }: listmenegmentType) => {
  
  return (
    <Stack>
      {listmenegment === "man" && <MenDetail />}
      {listmenegment === "woman" && <WomanDetail />}
      {listmenegment === "children" && <Children />}
    </Stack>
  );
};

export default SecondaryCategories;
