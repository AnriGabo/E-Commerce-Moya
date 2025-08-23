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
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

export default function RegistrationTextField() {
  const [visiblePass, setVisiblePass] = useState<boolean>(false);
  const handleClick = () => setVisiblePass((prev) => !prev);

  const [repeatVisiblePass, setRepeatVisiblePass] = useState<boolean>(false);
  const repeatHandleClick = () => setRepeatVisiblePass((prev) => !prev);

  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Stack
      component="form"
      sx={{ "& > :not(style)": { width: "45ch" }, marginBlockStart: "2rem" }}
      noValidate
      autoComplete="off"
      spacing={2}
    >
      <TextField id="standard-name" label="First name" variant="standard" />
      <TextField id="standard-lastname" label="Last name" variant="standard" />
      <TextField
        id="standard-emailAddress"
        label="Email address"
        variant="standard"
      />
      <TextField
        id="standard-password"
        label="Password"
        type={visiblePass ? "text" : "password"}
        variant="standard"
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
        id="standard-password"
        label="Repeat password"
        type={repeatVisiblePass ? "text" : "password"}
        variant="standard"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={repeatHandleClick}>
                {repeatVisiblePass ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          paddingBlockStart: "0.5rem",
          gap:"0.5rem"
        }}
      >
        <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
          sx={{
            m:0,
            p:0
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
              fontSize: "0.875rem", // 14px
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
}
