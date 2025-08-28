import { Box, ButtonBase, Divider, Stack, Slide } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import CustomMainTitleTypography from "../../MuiUI/PageTitle";
import BurgerMenu from "../hamburgerMenu/HamburgerMenu";
import AuthLink from "../AuthLink/AuthLink";
import AnnouncmentBar from "./AnnouncmentBar";
import { useLocation } from "react-router-dom";
import useScrollTrigger from "@mui/material/useScrollTrigger";

export default function Header() {
  const trigger = useScrollTrigger();

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
    <Box component={"header"} sx={{position:"fixed",top:"0",width:"96%",zIndex:1200}}>
      <AnnouncmentBar />
      <Divider sx={{ mx: { xs: 2, sm: 4, md: 8, lg: "30rem" } }} />

      <HelmetProvider>
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&display=swap"
          rel="stylesheet"
        />
      </HelmetProvider>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        sx={{
          height:"6rem",
        }}
      >
        <Stack
          sx={{
            flexDirection: "row",
            gap: "1rem",
            alignItems:"center",
          }}
        >
          <BurgerMenu />
          <Slide in={!trigger} direction="down" mountOnEnter unmountOnExit>
            <ButtonBase component={NavLink} to={"/"} onClick={handleClick}>
              <CustomMainTitleTypography>MOYA</CustomMainTitleTypography>
            </ButtonBase>
          </Slide>
        </Stack>

        {!hideRoute && <AuthLink />}
      </Stack>
    </Box>
  );
}
