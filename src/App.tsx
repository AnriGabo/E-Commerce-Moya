import { Box, Stack } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AccountAccessLink from "./Components/Layout/AuthLink/AccountAccessLink";
import Footer from "./Components/Layout/Footer/Footer";
import Header from "./Components/Layout/header/Header";
import Registration from "./Components/Layout/Registration/Registration";
import SignIn from "./Components/Layout/signIn/SignIn";
import usePageTitle from "./hook/usePageTitle";
import HomePage from "./pages/Home/Home";

function App() {
  usePageTitle();

  return (
    <Stack sx={{ mx: 4, minHeight: "100vh" }}>
      <Header />

      <Box component={"main"} sx={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/accsesyourAccount" element={<AccountAccessLink />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Box>
       {location.pathname !== "/accsesyourAccount" &&
        location.pathname !== "/signin" &&
        location.pathname !== "/registration" && <Footer />}
    </Stack>
  );
}

export default App;
