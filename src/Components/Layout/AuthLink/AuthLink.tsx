import { Button, Stack, Typography } from "@mui/material";
import { FiLogIn, FiSend } from "react-icons/fi";
import { Link } from "react-router-dom";

const AuthLink = () => {
  const scrollToFooter = () => {
    const el = document.getElementById("app-footer");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <Stack direction={"row"} sx={{ gap: "1rem" }}>
      <Button sx={{ textTransform: "capitalize" }} onClick={scrollToFooter}>
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
          Contact
          <FiSend style={{ fontSize: "1.2rem" }} />
        </Typography>
      </Button>
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
            <FiLogIn style={{ fontSize: "1.3rem" }} />
          </Typography>
        </Button>
      </Link>
    </Stack>
  );
};

export default AuthLink;
