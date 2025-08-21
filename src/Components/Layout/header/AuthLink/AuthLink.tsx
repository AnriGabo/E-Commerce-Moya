import { Button, Stack, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";

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
        <Link to={"/accsesyourAccount"} style={{ textDecoration: "none" }}>
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
        </Link>
      </Button>
    </Stack>
  );
};

export default EnterTheSystem;
