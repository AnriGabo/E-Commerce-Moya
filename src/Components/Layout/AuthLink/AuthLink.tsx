import { Button, Stack, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";

const EnterTheSystem = () => {
  return (
    <Stack>
      <Link to={"/accsesyourAccount"} style={{ textDecoration: "none" }}>
        <Button
          sx={{
            textTransform: "capitalize",
          
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
      </Link>
    </Stack>
  );
};

export default EnterTheSystem;
