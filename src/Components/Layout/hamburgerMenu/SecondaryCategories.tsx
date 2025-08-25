import { Stack } from "@mui/material";
import WomanDetail from "./List/WomanDetail";
import MenDetail from "./List/MenDetail";
import Children from "./List/Children";

interface listmenegmentType {
  listmenegment: string;
}

const SecondaryCategories = ({ listmenegment }: listmenegmentType) => {
  console.log("SecondaryCategories", listmenegment);
  return (
    <Stack>
      {listmenegment === "Man" && <MenDetail />}
      {listmenegment === "Woman" && <WomanDetail />}
      {listmenegment === "Children" && <Children />}
      {listmenegment === "Thenewcollection" && <h1>The New Collection</h1>}
    </Stack>
  );
};

export default SecondaryCategories;
