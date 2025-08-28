import { Stack, Typography } from "@mui/material";
import RegistrationTextField from "./RegistrationField";

const Registration = () => {
  return (
    <Stack sx={{ marginBlockStart: "10rem", marginInline: "6rem" }}>
      <Typography
        component="h2"
        sx={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "1.3rem",
          fontWeight: 500,
          letterSpacing: "0.04em",
        }}
      >
        Create your account
      </Typography>
      <RegistrationTextField />
    </Stack>
  );
};

export default Registration;
