import { Box } from "@mui/material";
import { useState } from "react";
import InputFields from "./AuthActions";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [visiblePassword, setVisiblePassword] = useState<boolean>(false);
  const handleClick = () => setVisiblePassword((prev) => !prev);
  const navigate = useNavigate();

  async function SignInRequest(data: { email: string; password_hash: string }) {
    const URL = "http://localhost:5000/auth/login";

    // data მოდის safeParse როცა წარმატებით დააბრუნებს
    // ობიექტს data შიგნით იქნება სუფთა მონაცემები უკვე
    // რომლებმაც წარმატებით გაიარეს ზოდის სქემა

    const credentials = {
      email: data.email,
      password_hash: data.password_hash,
    };

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(credentials),
        credentials: "include",
      });

      const result = await response.json();

      if (!response.ok) {
        return alert([result.title, result.detail]);
      }

      console.log(result.message);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Box>
      <InputFields
        SignInRequest={SignInRequest}
        visiblePassword={visiblePassword}
        handleClick={handleClick}
        errors={""}
      />
    </Box>
  );
};

export default SignIn;
