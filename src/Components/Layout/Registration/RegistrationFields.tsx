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

// ⬇️ ეს უკვე გაქვს სადაც-то ფაილის თავში (React ტიპებისთვის)
import React from "react";

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

// ✅ ნებადართული საკონტროლო ღილაკები (წაშლა, ისრები და სხვ.)
const allowedControlKeys = [
  "Backspace",
  "Delete",
  "ArrowLeft",
  "ArrowRight",
  "Tab",
  "Home",
  "End",
];

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
  const handlepaste = (e: React.ClipboardEvent<HTMLInputElement>) =>
    e.preventDefault();

  // ⬇️ მთავარი ლოგიკა: ვუშვებთ მხოლოდ ასოებს და control ღილაკებს
  const handleNameKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { key, ctrlKey, metaKey } = event;
console.log(ctrlKey, metaKey)
    // 1) ნებადართული shortcut-ები: Ctrl/⌘ + A/C/V/X
    if (
      (ctrlKey || metaKey) &&
      ["a", "c", "v", "x"].includes(key.toLowerCase())
    ) {
      return;
    }

    // 2) ნებადართული საკონტროლო ღილაკები (ბექსპეისი, ისრები და სხვ.)
    if (allowedControlKeys.includes(key)) {
      return;
    }

    // 3) თუ ასოა (a–z ან A–Z) → ვუშვებთ
    const isLetter = /^[a-zA-Z]$/.test(key);
    if (isLetter) {
      return;
    }

    // 4) ყველა სხვა კლავიში — ბლოკი (არ დაიწეროს input-ში)
    event.preventDefault();
  };

  return (
    <Stack
      component="form"
      onSubmit={getData}
      sx={{ "& > :not(style)": { width: "45ch" }, marginBlockStart: "1rem" }}
      noValidate
      autoComplete="off"
      spacing={2}
    >
      <TextField
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onKeyDown={handleNameKeyDown}
        placeholder="Latin letters only"
        onPaste={handlepaste}
        id="standard-name"
        label="First name"
        variant="standard"
        autoComplete="given-name"
      />
      <TextField
        value={lastname}
        onChange={(e) => setLastName(e.target.value)}
        onKeyDown={handleNameKeyDown}
        onPaste={handlepaste}
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
        onPaste={handlepaste}
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
