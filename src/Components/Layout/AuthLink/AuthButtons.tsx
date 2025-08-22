import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const AuthButtons = () => {
  return (
    <Stack sx={{ width: "fit-content" }} spacing={1.5}>
      <Link to={"/signin"}>
        <Button
          variant="contained"
          sx={{
            width: "13rem",
            backgroundColor: "black",
          }}
        >
          <Typography
            component={"p"}
            sx={{
              textTransform: "capitalize",
              fontSize: "0.8rem",
              letterSpacing: "0.3px",
              color: "white",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: "500",
            }}
          >
            Access your account
          </Typography>
        </Button>
      </Link>

      <Link to={"/registration"}>
        <Button
          variant="outlined"
          sx={{
            width: "13rem",
            color: "black",
            border: "1px solid black",
          }}
        >
          <Typography
            component={"p"}
            sx={{
              textTransform: "capitalize",
              fontSize: "0.8rem",
              letterSpacing: "0.5px",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: "500",
            }}
          >
            Registration
          </Typography>
        </Button>
      </Link>
    </Stack>
  );
};

export default AuthButtons;
