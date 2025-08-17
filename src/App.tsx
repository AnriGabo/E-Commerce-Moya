import { Stack } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Layout/header/Header";
import Card from "./Components/ReusableCard/Card";
import HomePage from "./pages/Home/Home";

function App() {
  return (
    <Stack sx={{ mx: 4 }}>
      <Header />

      <Routes>
        {/* რომელიც აღწერს თითოეულ გზას განსხვავებული გვერდების ჩვენს საიტზე */}
        {/* path (way) is like a url that defines the location */}
        {/* როცა გვიწერია path="/" ანუ / ეს url ნიშნავს რომ დეფოლტ ვერსია რა ფესვები ჩვენი აპლიკაციის უნდა იყოს ეს 
        localhost:323 რაც არის მითითებული ეგაა, და აქ უნდა იყოს LandingPage */}
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/AuthLink" element={<Card />}></Route>
      </Routes>
    </Stack>
  );
}

export default App;
