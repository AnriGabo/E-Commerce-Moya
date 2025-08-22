import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { IconButton, InputAdornment, Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function RegistrationTextField() {
  const [visiblePass, setVisiblePass] = useState<boolean>(false);
  const handleClick = () => setVisiblePass((prev) => !prev);

  const [repeatVisiblePass, setRepeatVisiblePass] = useState<boolean>(false);
  const repeatHandleClick = () => setRepeatVisiblePass((prev) => (!prev));

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
    </Stack>
  );
}
