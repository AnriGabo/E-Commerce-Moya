import { Box } from "@mui/material";
import "./App.css";
import Header from "./Components/Header/Header";

function App() {
  return (
    <Box
      sx={{ backgroundColor: "red", marginInline: "2rem", marginBlock: "1rem" }}
    >
      <Box component={"header"}>
        <Header />
      </Box>

      {/* Routes here */}
    </Box>
  );
}

export default App;
