import {
  Box,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import HttpsIcon from "@mui/icons-material/Https";

interface inputType {
  visiblePassword: boolean;
  handleClick: () => void;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

const CredentialsForm = ({
  visiblePassword,
  handleClick,
  setEmail,
  setPassword,
}: inputType) => {
  return (
    <Stack sx={{gap:"0.8rem"}}>
      <TextField
        id="standard-Email"
        variant="standard"
        autoComplete="email"
        onChange={(e) => setEmail(e.target.value)}
        label={
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              pointerEvents: "none",
            }}
          >
            <AlternateEmailIcon sx={{ fontSize: 22 }} />
            <Typography sx={{ fontSize: 14,letterSpacing:"0.5px" }}> Enter your Email</Typography>
          </Box>
        }
        InputLabelProps={{
          sx: { whiteSpace: "nowrap" },
        }}
      />
      <TextField
        onChange={(e) => setPassword(e.target.value)}
        id="standard-password"
        label={
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              pointerEvents: "none",
            }}
          >
            <HttpsIcon sx={{ fontSize: 22 }} />
            <Typography sx={{ fontSize: 14,letterSpacing:"0.5px" }}> Enter your Password</Typography>
          </Box>
        }
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
        InputLabelProps={{
          sx: { whiteSpace: "nowrap" },
        }}
      />
    </Stack>
  );
};

export default CredentialsForm;
