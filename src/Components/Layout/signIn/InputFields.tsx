import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Link as MuiLink,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link as RouterLink } from "react-router-dom";

interface inputType {
  visiblePassword: boolean;
  handleClick: () => void;
  SignInRequest: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

const InputFields = ({
  setEmail,
  setPassword,
  visiblePassword,
  handleClick,
  SignInRequest,
}: inputType) => {
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
          onChange={(e) => setEmail(e.target.value)}
          id="standard-Email"
          label="Email address"
          variant="standard"
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          id="standard-password"
          label="Password"
          type={visiblePassword ? "text" : "password"}
          variant="standard"
          autoComplete="on"
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
              width: "fit-content",
              cursor: "pointer",
              fontFamily:
                "'Poppins', 'Roboto', 'Helvetica', 'Arial', sans-serif",
              fontWeight: 400,
              color: "#5e6f8bff",
              "&:hover": {
                textDecoration: "underline",
                color: "#000",
              },
            }}
          >
            Forgot password?
          </Typography>
        </Box>
        <Box sx={{ paddingBlockStart: "1.5rem" }}>
          <Button
            onClick={SignInRequest}
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
              Access account
            </Typography>
          </Button>
          <Box sx={{ paddingBlockStart: "1rem" }}>
            <MuiLink component={RouterLink} to="/registration" underline="none">
              <Typography
                sx={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: 400,
                  letterSpacing: "1.5px",
                  color: "#5e6f8bff",
                  "&:hover": {
                    textDecoration: "underline",
                    color: "#000",
                  },
                }}
              >
                Don’t have an account? Sign up
              </Typography>
            </MuiLink>
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};

export default InputFields;
