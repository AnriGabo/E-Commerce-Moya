import { Stack } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Collection from "./Components/editorial/photo-gallery/TheNewSection";
import AccountAccessLink from "./Components/Layout/AuthLink/AccountAccessLink";
import Header from "./Components/Layout/header/Header";
import HomePage from "./pages/Home/Home";
import Registration from "./Components/Layout/AuthLink/Registration";

function App() {
  return (
    <Stack sx={{ mx: 4 }}>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/thenewcollection" element={<Collection />} />
        <Route path="/accsesyourAccount" element={<AccountAccessLink />} />
        <Route path="registration" element={<Registration />} />
        <Route path="signin" element={""} />
      </Routes>
    </Stack>
  );
}

export default App;
