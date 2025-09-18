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
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

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
    getData: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
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
  getData
}: propsType) => {
  return (
    <Stack
      component="form"
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
      />
      <TextField
        value={lastname}
        onChange={(e) => setLastName(e.target.value)}
        id="standard-lastname"
        label="Last name"
        variant="standard"
      />
      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        id="standard-emailAddress"
        label="Email address"
        variant="standard"
      />
      <TextField
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id="standard-password"
        label="Password"
        type={visiblePass ? "text" : "password"}
        variant="standard"
        autoComplete="on"
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
      <Box sx={{ paddingInlineStart: "0.5rem" }}>
        <Button
          variant="outlined"
          onClick={getData}
          sx={{
            width: "14rem",
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
      </Box>
    </Stack>
  );
};

export default RegistrationFields;
