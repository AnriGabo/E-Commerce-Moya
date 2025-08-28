import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [visiblePassword, setVisiblePassword] = useState<boolean>(false);

  const handleClick = () => setVisiblePassword((prev) => !prev);

  return (
    <Stack
      sx={{
        marginInline: "5.8rem",
        marginBlockStart: "10rem",
      }}
    >
      <Stack
        component="form"
        sx={{
          "& > :not(style)": { width: "45ch" },
        }}
        noValidate
        autoComplete="off"
        spacing={2}
      >
        <Box sx={{ width: "fit-content" }}>
          <Typography
            component="h2"
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.3rem",
              fontWeight: 500,
              letterSpacing: "0.04em",
            }}
          >
            Access account
          </Typography>
        </Box>
        <TextField
          id="standard-Email"
          label="Email address"
          variant="standard"
        />
        <TextField
          id="standard-password"
          label="Password"
          type={visiblePassword ? "text" : "password"}
          variant="standard"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClick}>
                  {visiblePassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Box>
          <Typography
            sx={{
              fontSize: "0.78rem",
              cursor: "pointer",
              fontFamily:
                "'Poppins', 'Roboto', 'Helvetica', 'Arial', sans-serif",
              fontWeight: 400,
              color: "#555",
              "&:hover": {
                textDecoration: "underline",
                color: "#1976d2",
              },
            }}
          >
            Forget password?
          </Typography>
        </Box>
        <Box sx={{ paddingBlockStart: "1.5rem" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "black",
              width: "22.5rem",
              textTransform: "capitalize",
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.875rem", // 14px
                fontWeight: 400,
                letterSpacing: "1px",
              }}
            >
              Enter System
            </Typography>
          </Button>
        </Box>
        <Box>
          <Link to={"/registration"}>
            <Button
              variant="outlined"
              sx={{
                width: "22.5rem",
                border: "1px solid black",
                color: "black",
                textTransform: "capitalize",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.875rem", // 14px
                  fontWeight: 400,
                  letterSpacing: "1px",
                  color: "black",
                }}
              >
                Registration
              </Typography>
            </Button>
          </Link>
        </Box>
      </Stack>
    </Stack>
  );
};

export default SignIn;
