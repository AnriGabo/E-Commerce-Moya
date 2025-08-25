import { Box, Stack } from "@mui/material";
import { useState } from "react";
import MainCategories from "./MainCategories";
import SecondaryCategories from "./SecondaryCategories";

const Unite = () => {
  // Listmenegment დეფოლტადინახავს Woman string
  // listmenegment ვაწვდით სექონდ კატეგორიში და ეგრევე Woman -ია
  // იქ ამოწმებს რომ listmanagment === woman დარენდერდეს woman component
  const [listmenegment, setListMenegment] = useState<string>("Woman");
  console.log(listmenegment)

  const handleClick = (name: string): void => setListMenegment(name);

  return (
    <Stack direction="row" alignItems="flex-start" marginBlockStart={"4rem"}>
      <Box sx={{ alignSelf: "flex-start" }}>
        <MainCategories handleClick={handleClick} />
      </Box>
      <Box sx={{ alignSelf: "flex-start" }}>
        <SecondaryCategories listmenegment={listmenegment} />
      </Box>
    </Stack>
  );
};

export default Unite;
