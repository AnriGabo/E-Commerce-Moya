import { Box, Stack } from "@mui/material";
import { useState } from "react";

import Zara from "../../../Assets/Videos/Introduction.mov";

const videos = [Zara];

export default function VideoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

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
              animation: " fadeIn .3s ease-in-out",
            }}
          />
        </Box>
      </Box>
    </Stack>
  );
}
