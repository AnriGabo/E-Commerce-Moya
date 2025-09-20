import { Stack } from "@mui/material";
import { useState } from "react";
import RegistrationFields from "./RegistrationFields";
// import PositionedSnackbar from "./Snackbar";
import {useNavigate } from "react-router-dom";

export default function RegistrationTextField() {
  const [visiblePass, setVisiblePass] = useState<boolean>(false);
  const handleClick = () => setVisiblePass((prev) => !prev);
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>("");
  const [lastname, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState("");
  const [repeatpass, setRepeatPass] = useState("");
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  async function getData(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    const URL = "http://localhost:5000/auth/register";

    const newUser = {
      username: username,
      lastname: lastname,
      email: email,
      password_hash: password,
      repeatpass,
    };

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        throw new Error(`Response status : ${response.status}`);
      }

      const result = await response.json();
      console.log(result.message);

      setUsername("");
      setLastName("");
      setEmail("");
      setPassword("");
      setRepeatPass("");

      navigate("/signin");
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.log(error);
      }
    }
  }

  return (
    <Stack>
      <RegistrationFields
        username={username}
        lastname={lastname}
        email={email}
        password={password}
        repeatpass={repeatpass}
        setUsername={setUsername}
        setLastName={setLastName}
        setEmail={setEmail}
        setPassword={setPassword}
        setRepeatPass={setRepeatPass}
        visiblePass={visiblePass}
        handleClick={handleClick}
        checked={checked}
        handleChange={handleChange}
        getData={getData}
      />
    </Stack>
  );
}
