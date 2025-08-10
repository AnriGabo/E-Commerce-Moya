import { Box, Button, Stack, Typography } from "@mui/material";
import { Helmet } from "react-helmet";

// ეს იქნება რეალურად ჰედერი რომელსაც აპში გამოვიყენებთ რადგან ყველგან ჩანდეს
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

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
            gap: "1rem",
          }}
        >
          <Box>
            <MenuOpenIcon
              sx={{
                cursor: "pointer",
                fontSize: "3rem",
              }}
            />
          </Box>
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
              }}
            >
              MOYA
            </Typography>
          </Box>
        </Stack>

        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "end",
            paddingInlineEnd: "1rem",
            gap: "1rem",
            marginBlockEnd: "2rem",
            alignItems: "center",
            // backgroundColor:"blue"
          }}
        >
          
          <Box>
            <Button sx={{ color: "red", textTransform: "capitalize" }}>
              Sign In
            </Button>
          </Box>
          <Box>
            <Button sx={{ color: "red", textTransform: "capitalize" }}>
              Sign Up
            </Button>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}
