import { Box, Button } from "@mui/material";
import { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const videos = [
  "/src/Videos/FashionModel1.mp4",
  "/src/Videos/FashionModel5.mp4",
  "/src/Videos/FashionModel4.mp4",
  "/src/Videos/FashionModel2.mp4",
  "/src/Videos/FashionModel3.mp4",
];

export default function VideoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", marginBlock: "6rem" }}
    >
      <video
        key={videos[currentIndex]}
        src={videos[currentIndex]}
        autoPlay
        playsInline
        muted
        loop
        style={{ width: "50%", objectFit: "cover" }}
      />

      <Button
        onClick={goToPrev}
        style={navBtnStyle("left")}
        sx={{ color: "black" }}
      >
        <ArrowBackIcon />
      </Button>
      <Button
        onClick={goToNext}
        style={navBtnStyle("right")}
        sx={{ color: "black", border: "none" }}
      >
        <ArrowForwardIcon />
      </Button>
    </Box>
  );
}

function navBtnStyle(position: "left" | "right") {
  return {
    position: "absolute" as const,
    top: "50%",
    [position]: "30px",
    cursor: "pointer",
  };
}
