
import { Stack } from "@mui/material";
import VideoSlider from "../../Components/VideoCarousel/VideoSlider";
import PhotoGallery from "../../Components/PhotoGallery/Collection";

const HomePage = () => {
  return (
    <Stack>
      <VideoSlider />
      <PhotoGallery />
    </Stack>
  );
};

export default HomePage;
