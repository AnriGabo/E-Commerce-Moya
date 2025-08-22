import { Box, Stack, Typography } from "@mui/material";
import AuthButtons from "./AuthButtons";

import AccountImage from "../../../Assets/Images/AuthenticationImage.jpg";

const AccountAccessLink = () => {
  return (
    <Stack
      sx={{
        marginInline: "3.5rem",
        marginBlockStart: "6rem",
        justifyContent: "space-between",
        flexDirection: "row",
      }}
    >
      <Stack
        sx={{
          width: "22rem",
          height: "fit-content",
        }}
        spacing={2.75}
      >
        <Typography
          component={"h2"}
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.3rem",
            fontWeight: 500,
            letterSpacing: "0.02em",
          }}
        >
          Unlock your full experience
        </Typography>
        <Box>
          <Typography
            component={"p"}
            sx={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.9rem" }}
          >
            Log in to get a personalized experience
          </Typography>
          <Typography
            component={"p"}
            sx={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.9rem" }}
          >
            and take advantage of all our services.
          </Typography>
        </Box>
        <AuthButtons />
      </Stack>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <img
          src={AccountImage}
          style={{ width: "75%" }}
          alt="Authlink page image"
        />
      </Box>
    </Stack>
  );
};

export default AccountAccessLink;
