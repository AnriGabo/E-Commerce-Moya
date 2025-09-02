import { Stack } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Collection from "./Components/editorial/photo-gallery/TheNewSection";
import AccountAccessLink from "./Components/Layout/AuthLink/AccountAccessLink";
import Footer from "./Components/Layout/Footer/Footer";
import Header from "./Components/Layout/header/Header";
import Registration from "./Components/Layout/Registration/Registration";
import SignIn from "./Components/Layout/signIn/SignIn";
import HomePage from "./pages/Home/Home";

function App() {
  return (
    <Stack sx={{ mx: 4 }}>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/woman" element={<Collection />} />
        <Route path="/man" element={<Collection />} />
        <Route path="/children" element={<Collection />} />
        <Route path="/accsesyourAccount" element={<AccountAccessLink />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer />
    </Stack>
  );
}

export default App;
