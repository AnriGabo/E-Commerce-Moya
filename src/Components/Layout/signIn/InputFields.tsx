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
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  SignInRequest: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
}

const InputFields = ({
  visiblePassword,
  handleClick,
  setEmail,
  setPassword,
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
              Enter System
            </Typography>
          </Button>
          <Box>
            <MuiLink component={RouterLink} to="/registration" underline="none">
              <Button
                variant="outlined"
                sx={{
                  width: "22.5rem",
                  border: "1px solid black",
                  color: "black",
                  textTransform: "capitalize",
                  marginBlockStart: "1rem",
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
            </MuiLink>
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};

export default InputFields;
