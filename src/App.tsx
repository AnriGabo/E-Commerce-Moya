import { Stack } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Layout/header/Header";
import HomePage from "./pages/Home/Home";
import Collection from "./Components/editorial/photo-gallery/TheNewSection";

function App() {
  return (
    <Stack sx={{ mx: 4 }}>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/thenewcollection" element={<Collection />}></Route>
      </Routes>
    </Stack>
  );
}

export default App;
