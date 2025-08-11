import { Box, Stack } from "@mui/material";
import { HelmetProvider } from 'react-helmet-async';
// ეს იქნება რეალურად ჰედერი რომელსაც აპში გამოვიყენებთ რადგან ყველგან ჩანდეს
import CustomMainTitleTypography from "../CustomMuiComponents/CustomPageTitleTypography";
// import BurgerMenu from "./BurgerMenu/BurgerMenu";
import OpenMenu from "./BurgerMenu/OpenMenu";
import EnterTheSystem from "./EnterTheSystem/EnterTheSystem";

export default function Header() {
  return (
    <Box component={"header"}>
      <HelmetProvider>
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&display=swap"
          rel="stylesheet"
        />
      </HelmetProvider>
      <Stack
        sx={{
          flexDirection: "row",
        }}
      >
        <Stack
          sx={{
            flex: "1",
            flexDirection: "row",
            alignItems: "center",
            gap: "2rem",
          }}
        >
         <OpenMenu />
         <CustomMainTitleTypography>MOYA</CustomMainTitleTypography>
        </Stack>

       <EnterTheSystem />
      </Stack>
    </Box>
  );
}
