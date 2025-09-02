import { Box } from "@mui/material";
import Collection from "../../Components/editorial/photo-gallery/TheNewSection";
import VideoSlider from "../../Components/editorial/video-carousel/VideoSlider";

const HomePage = () => {
  const HEADER_HEIGHT = "11rem";

  return (
    <Box component={"main"} sx={{ paddingBlockStart: HEADER_HEIGHT }}>
      <VideoSlider />
      <Collection />
    </Box>
  );
};

export default HomePage;
