import { Box, Divider, Stack, Typography } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";
import CustomMainTitleTypography from "../CustomMuiComponents/CustomPageTitleTypography";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import EnterTheSystem from "./Auth/EnterTheSystem";

export default function Header() {
  return (
    <Box component={"header"}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "33px",
        }}
      >
        <Typography
          component={"h4"}
          sx={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 500,
            fontSize: { xs: 11, md: 12 },
            letterSpacing: "0.7px",
            whiteSpace: "nowrap",
          }}
        >
          FREE SHIPPING OVER 100 GEL ·{" "}
          <Box component="span" sx={{ fontWeight: 600 }}>
            30-DAY RETURNS
          </Box>
        </Typography>
      </Box>
      <Divider sx={{ marginInline: "30rem" }}></Divider>

      <HelmetProvider>
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&display=swap"
          rel="stylesheet"
        />
      </HelmetProvider>
      <Stack>
        <Stack
          sx={{
            flex: "1",
            flexDirection: "row",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <BurgerMenu />
          <CustomMainTitleTypography>MOYA</CustomMainTitleTypography>
        </Stack>
        <EnterTheSystem />
      </Stack>
    </Box>
  );
}
