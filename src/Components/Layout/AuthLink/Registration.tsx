import { Box, Stack, Typography } from "@mui/material";
import RegistrationTextField from "./RegistrationField";

const Registration = () => {
  return (
    <Stack sx={{ marginBlockStart: "6rem", marginInline: "4rem" }}>
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
      <Box>
        <RegistrationTextField />
      </Box>
    </Stack>
  );
};

export default Registration;
