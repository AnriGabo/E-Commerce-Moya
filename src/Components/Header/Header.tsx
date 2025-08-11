import { Box, Stack, Typography } from "@mui/material";
import { Helmet } from "react-helmet";

// ეს იქნება რეალურად ჰედერი რომელსაც აპში გამოვიყენებთ რადგან ყველგან ჩანდეს
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import EnterTheSystem from "./EnterTheSystem/EnterTheSystem";

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
        <Stack
          sx={{
            flex: "1",
            flexDirection: "row",
            alignItems: "center",
            gap: "2rem",
          }}
        >
         <BurgerMenu />
          <Box>
            <Typography
              variant={"h1"}
              component={"h2"}
              sx={{
                fontSize: "7rem",
                cursor: "pointer",
                fontFamily: "'Libre Baskerville', serif",
                fontWeight: 700,
                letterSpacing: "1px",
                position:"fixed",
                zIndex:1000,
                paddingInlineStart:"5rem",
                top:"0",
                margin:"0",
                left:"0"
              }}
            >
              MOYA
            </Typography>
          </Box>
        </Stack>

       <EnterTheSystem />
      </Stack>
    </Box>
  );
}
