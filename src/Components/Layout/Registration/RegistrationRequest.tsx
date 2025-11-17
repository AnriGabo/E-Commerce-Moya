import { Stack } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegistrationFields from "./RegistrationFields";

export default function RegistrationTextField() {
  const [visiblePass, setVisiblePass] = useState<boolean>(false);
    const [checked, setChecked] = useState(false);
  const handleClick = () => setVisiblePass((prev) => !prev);
  const navigate = useNavigate();


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  async function getData(data: {
    username:string,
    lastname:string,
    email:string,
    password_hash:string,
    repeatpass:string
  }) {

    const URL = "http://localhost:5000/auth/register";

    const registrationForm = {
      username:data.username,
      lastname:data.lastname,
      email:data.email,
      password_hash:data.password_hash,
      repeatpass:data.repeatpass
    }

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registrationForm),
        
      });

      // server-იდან დაბრუნებ reponse ვუკეთებთ დესერიალიზაციას ისევ
      const result = await response.json();

      if (!response.ok) {
        return alert([result.title, result.detail]);
      }

      alert(result.message);

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
        visiblePass={visiblePass}
        handleClick={handleClick}
        checked={checked}
        handleChange={handleChange}
        getData={getData} errors={""}      />
    </Stack>
  );
}
