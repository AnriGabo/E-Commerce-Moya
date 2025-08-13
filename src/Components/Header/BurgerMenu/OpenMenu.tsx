import { Stack } from "@mui/material";
import { useState } from "react";
import BurgerMenu from "./BurgerMenu";

const OpenMenu = () => {
  const [open, setOpen] = useState<boolean>(false);
  console.log(open);
  const handleClick = () => {
    setOpen((prev: boolean) => !prev);
  };

  return (
    <Stack>
      <BurgerMenu onClick={handleClick} />
    </Stack>
  );
};

export default OpenMenu;
