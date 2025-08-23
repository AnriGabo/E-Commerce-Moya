import { Box, ButtonBase, Divider, Stack } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import CustomMainTitleTypography from "../../MuiUI/PageTitle";
import BurgerMenu from "../hamburgerMenu/HamburgerMenu";
import EnterTheSystem from "../AuthLink/AuthLink";
import AnnouncmentBar from "./AnnouncmentBar";
import { useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();



  const hideRoute =
    pathname.startsWith("/registration") ||
    pathname.startsWith("/signin") ||
    pathname.startsWith("/accsesyourAccount");

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Box component={"header"}>
      <AnnouncmentBar />
      <Divider sx={{ marginInline: "30rem" }}></Divider>

      <HelmetProvider>
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&display=swap"
          rel="stylesheet"
        />
      </HelmetProvider>
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBlockStart: "2rem",
          marginInline: "2rem",
        }}
      >
        <Stack
          sx={{
            flexDirection: "row",
            gap: "3rem",
          }}
        >
          <Box>
            <BurgerMenu />
          </Box>
          <ButtonBase component={NavLink} to={"/"} onClick={handleClick}>
            <CustomMainTitleTypography>MOYA</CustomMainTitleTypography>
          </ButtonBase>
        </Stack>
        {!hideRoute && <EnterTheSystem />}
      </Stack>
    </Box>
  );
}
