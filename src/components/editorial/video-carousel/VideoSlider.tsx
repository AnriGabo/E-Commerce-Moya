import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Stack } from "@mui/material";
import { useState } from "react";

import VideoSlider1 from "../../../Assets/Videos/fashion_model_01.mp4";
import VideoSlider2 from "../../../Assets/Videos/fashion_model_02.mp4";
import VideoSlider3 from "../../../Assets/Videos/fashion_model_03.mp4";
import VideoSlider4 from "../../../Assets/Videos/fashion_model_04.mp4";

const videos = [VideoSlider2, VideoSlider1, VideoSlider4, VideoSlider3];

export default function VideoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <Stack
      sx={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "50%" }}>
        <Box sx={{ aspectRatio: "16 / 9", width: "100%" }}>
          <video
            preload="metadata"
            key={videos[currentIndex]}
            src={videos[currentIndex]}
            autoPlay
            playsInline
            muted
            loop
            style={{
              width: "100%",
              height: "100%",
              display: "block",
              objectFit: "cover",
              animation:" fadeIn .3s ease-in-out",
              
            }}
          />
        </Box>
      </Box>

      <Button
        onClick={goToPrev}
        style={navBtnStyle("left")}
        sx={{ color: "black" }}
      >
        <ArrowBackIcon sx={{ fontSize: "1.8rem" }} />
      </Button>
      <Button
        onClick={goToNext}
        style={navBtnStyle("right")}
        sx={{ color: "black", border: "none" }}
      >
        <ArrowForwardIcon sx={{ fontSize: "1.8rem" }} />
      </Button>
    </Stack>
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
