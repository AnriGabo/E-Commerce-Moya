import { Stack } from "@mui/material"
import BurgerMenuDesign from "./BurgerMenuDesign"
import BurgerMenuScrollDesign from "./BurgerMenuScrollDesign"

const Unite = () => {
  return (
    <Stack sx={{flexDirection:"row"}}>
      <BurgerMenuDesign />
      <BurgerMenuScrollDesign />
    </Stack>
  )
}

export default Unite
