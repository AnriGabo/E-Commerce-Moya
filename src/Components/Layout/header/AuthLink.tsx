import { Button, Stack, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

const EnterTheSystem = () => {
  return (
    <Stack>
      <Button
        sx={{
          textTransform: "capitalize",
          "&:hover": { backgroundColor: "transparent", boxShadow: "none" },
          "&:active": { boxShadow: "none", backgroundColor: "transparent" },
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Josefin Sans', sans-serif",
            fontWeight: 500,
            fontSize: "1rem",
            letterSpacing: "1px",
            color: "black",
            gap: "0.4rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          Access your account
          <LoginIcon />
        </Typography>
      </Button>
    </Stack>
  );
};

export default EnterTheSystem;
