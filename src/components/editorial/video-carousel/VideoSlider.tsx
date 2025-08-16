import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button, Stack } from "@mui/material";
import { useState } from "react";

import VideoSlider0 from "../../../Assets/Videos/FashionModel1.mp4";
import VideoSlider1 from "../../../Assets/Videos/FashionModel5.mp4";
import VideoSlider2 from "../../../Assets/Videos/FashionModel4.mp4";
import VideoSlider3 from "../../../Assets/Videos/FashionModel3.mp4";
// 1 5 4 3

const videos = [VideoSlider0, VideoSlider2, VideoSlider3, VideoSlider1];

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
        display: "flex",
        justifyContent: "center",
        marginBlockStart: "6rem",
        flexDirection: "row",
      }}
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
