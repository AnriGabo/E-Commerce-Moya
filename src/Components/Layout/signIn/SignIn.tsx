import { Box } from "@mui/material";
import { useState } from "react";
import InputFields from "./InputFields";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [visiblePassword, setVisiblePassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleClick = () => setVisiblePassword((prev) => !prev);
  const navigate = useNavigate();
  // შეინახება სერვერიდან წამოსული პასუხი
  // const [save, setSave] = useState("");

  async function SignInRequest(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
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
        // ეუბნება,რომ გამოაგზავნე არსებული ქოქიები ამ რექვესთთან ერთად
          credentials: "include"
      });

      if (!response.ok) {
        throw new Error(`Response status : ${response.status}`);
      }

      const result = await response.json();
      console.log(result.message);
      // setSave(result.message);
      // result message-ს სწორედ სნაქბარში გამოვიყენებთ

      navigate("/");
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
