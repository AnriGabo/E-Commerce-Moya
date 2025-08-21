import { Box, Button, Stack, Typography } from "@mui/material";
import Accssesyouraccount from "../../../../Assets/Images/AuthenticationImage.jpg";

const AccountAccessLink = () => {
  return (
    <Stack
      sx={{
        marginInline: "3.5rem",
        marginBlockStart: "6rem",
      }}
    >
      <Stack
        sx={{
          width: "fit-content",
        }}
        spacing={1.25}
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
      </Stack>

      <Stack
        sx={{ width: "fit-content", marginBlockStart: "2rem" }}
        spacing={1.5}
      >
        <Button
          variant="contained"
          sx={{ width: "13rem", textTransform: "capitalize" }}
        >
          Access your account
        </Button>
        <Button
          variant="outlined"
          sx={{ width: "13rem", textTransform: "capitalize" }}
        >
          Registration
        </Button>
      </Stack>

      <Box sx={{display:"flex",marginInlineStart:"28rem",marginTop:"-12rem"}}>
        <img src={Accssesyouraccount} style={{width:"95%"}} />
      </Box>
    </Stack>
  );
};

export default AccountAccessLink;
