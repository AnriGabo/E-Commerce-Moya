import { Box, Button, Link as MuiLink, Stack, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import CredentialsForm from "./CredentialsForm";

interface inputType {
  visiblePassword: boolean;
  handleClick: () => void;
  SignInRequest: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
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
  const [checked, setChecked] = React.useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <Stack
      sx={{
        marginInline: "5.8rem",
        marginBlockStart: "10rem",
      }}
    >
      <Stack
        component="form"
        onSubmit={SignInRequest}
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
        <CredentialsForm
          setEmail={setEmail}
          setPassword={setPassword}
          visiblePassword={visiblePassword}
          handleClick={handleClick}
        ></CredentialsForm>
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "0.85rem",
                width: "fit-content",
                cursor: "pointer",
                fontFamily:
                  "'Poppins', 'Roboto', 'Helvetica', 'Arial', sans-serif",
                fontWeight: 400,
                color: "#1E1E1E",
              }}
            >
              Remember me
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 18,
                  },
                }}
              />
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "0.85rem",
                width: "fit-content",
                cursor: "pointer",
                fontFamily:
                  "'Poppins', 'Roboto', 'Helvetica', 'Arial', sans-serif",
                fontWeight: 400,
                color: "#000f89",
                "&:hover": {
                  textDecoration: "underline",
                  color: "#000",
                },
              }}
            >
              Forgot password?
            </Typography>
          </Box>
        </Stack>
        <Box sx={{ paddingBlockStart: "1rem" }}>
          <Button
            type="submit"
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
                Don’t have an account?{" "}
                <span style={{ color: "#000f89" }}>Sign up</span>
              </Typography>
            </MuiLink>
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};

export default InputFields;
