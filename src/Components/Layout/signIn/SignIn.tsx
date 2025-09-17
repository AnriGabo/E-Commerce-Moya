import { useState } from "react";
import InputFields from "./InputFields";

// xval jwt ის დაწყება
const SignIn = () => {
  const [visiblePassword, setVisiblePassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleClick = () => setVisiblePassword((prev) => !prev);


  async function SignInRequest(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    // url სწორია
    const URL = "http://localhost:5000/auth/login";

    // ეს სწორია
    const credentials = {
      email: email,
      password_hash: password,
    };

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(credentials),
      });


      
      if (!response.ok) {
        throw new Error(`Response status : ${response.status}`);
      }

      const result = await response.json();
      console.log(result.message);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <InputFields
      visiblePassword={visiblePassword}
      handleClick={handleClick}
      setEmail={setEmail}
      setPassword={setPassword}
      SignInRequest={SignInRequest}
    />
  );
};

export default SignIn;
