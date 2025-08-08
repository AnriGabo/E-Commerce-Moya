import { Box, Stack } from "@mui/material";
import { Helmet } from "react-helmet";

// ეს იქნება რეალურად ჰედერი რომელსაც აპში გამოვიყენებთ რადგან ყველგან ჩანდეს
import BurgerMenu from "./BurgerMenu";

export default function Header() {
  return (
    <Box component={"header"}>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Stack
        sx={{
          flexDirection: "row",
        }}
      >
         <BurgerMenu />
      </Stack>
    </Box>
  );
}
