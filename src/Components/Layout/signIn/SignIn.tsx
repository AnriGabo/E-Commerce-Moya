import { Box } from "@mui/material";
import { useState } from "react";
import InputFields from "./AuthActions";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [visiblePassword, setVisiblePassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleClick = () => setVisiblePassword((prev) => !prev);
  const navigate = useNavigate();

  async function SignInRequest(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const URL = "http://localhost:5000/auth/login";

    const credentials = {
      email: email,
      password_hash: password,
    };

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(credentials),
        credentials: "include",
      });

      const result = await response.json();
      console.log(result.message);

      alert([result.title, result.detail]);

      // result message-ს სწორედ სნაქბარში გამოვიყენებთ

      navigate("/");
      // წარმატებით ემატება მონაცემები, მაგრამ არასწორი
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Box>
      <InputFields
        setEmail={setEmail}
        setPassword={setPassword}
        SignInRequest={SignInRequest}
        visiblePassword={visiblePassword}
        handleClick={handleClick}
      />

      {/* {save ? <Alert variant="filled">{save}</Alert> : "" } */}
    </Box>
  );
};

export default SignIn;
