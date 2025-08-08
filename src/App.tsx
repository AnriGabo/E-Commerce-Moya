import { Box } from "@mui/material";
import "./App.css";
import Header from "./Components/Header/Header";
import HomePage from "./pages/Home/Home";

function App() {
  return (
    <Box
      sx={{marginInline: "2rem"}}
    >
      <Box component={"header"}>
        <Header />
      </Box>

      {/* Routes here */}
      <HomePage />
    </Box>
  );
}

export default App;
