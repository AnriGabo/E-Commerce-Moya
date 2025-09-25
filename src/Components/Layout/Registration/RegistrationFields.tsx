import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  Box,
  Button,
  Checkbox,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

interface propsType {
  visiblePass: boolean;
  handleClick: () => void;
  checked: boolean;
  username: string;
  lastname: string;
  email: string;
  password: string;
  repeatpass: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setLastName: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setRepeatPass: React.Dispatch<React.SetStateAction<string>>;
  getData: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const RegistrationFields = ({
  visiblePass,
  handleClick,
  checked,
  handleChange,
  setUsername,
  setLastName,
  setEmail,
  setPassword,
  setRepeatPass,
  username,
  lastname,
  email,
  password,
  repeatpass,
  getData,
}: propsType) => {
  return (
    <Stack
      component="form"
      onSubmit={getData}
      sx={{ "& > :not(style)": { width: "45ch" }, marginBlockStart: "2rem" }}
      noValidate
      autoComplete="off"
      spacing={2}
    >
      <TextField
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        id="standard-name"
        label="First name"
        variant="standard"
        autoComplete="given-name"
      />
      <TextField
        value={lastname}
        onChange={(e) => setLastName(e.target.value)}
        id="standard-lastname"
        label="Last name"
        variant="standard"
        autoComplete="family-name"
      />
      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        id="standard-emailAddress"
        label="Email address"
        variant="standard"
        autoComplete="email"
      />
      <TextField
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id="standard-password"
        label="Password"
        type={visiblePass ? "text" : "password"}
        variant="standard"
        autoComplete="new-password"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleClick}>
                {visiblePass ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <TextField
        value={repeatpass}
        onChange={(e) => setRepeatPass(e.target.value)}
        id="repeat-password"
        label="Repeat password"
        type="password"
        variant="standard"
        autoComplete="on"
      />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          paddingBlockStart: "0.5rem",
          paddingInlineStart: "0.4rem",
          gap: "0.5rem",
        }}
      >
        <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
          sx={{
            m: 0,
            p: 0,
          }}
        />
        <Typography
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1rem",
            fontWeight: 500,
            color: "#2c2c2c",
          }}
        >
          I have read the privacy and cookie policy.
        </Typography>
      </Box>
      <Stack sx={{ paddingInlineStart: "0.5rem" }}>
        <Button
          type="submit"
          variant="outlined"
          sx={{
            width: "16.1rem",
            textTransform: "capitalize",
            color: "black",
            border: "1px solid black",
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.875rem",
              fontWeight: 400,
              letterSpacing: "1px",
              color: "black",
            }}
          >
            Create account
          </Typography>
        </Button>
        <Box sx={{ paddingBlockStart: "1rem" }}>
          <Link to={"/signin"} style={{ textDecoration: "none" }}>
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
                  cursor: "pointer",
                },
              }}
            >
              Already have an account? Sign in
            </Typography>
          </Link>
        </Box>
      </Stack>
    </Stack>
  );
};

export default RegistrationFields;
