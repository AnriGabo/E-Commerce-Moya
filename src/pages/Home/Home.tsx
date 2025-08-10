
import { Stack } from "@mui/material";
import VideoSlider from "../../Components/VideoCarousel/VideoSlider";
import Collection from "../../Components/PhotoGallery/Collection";

const HomePage = () => {
  return (
    <Stack>
      <VideoSlider />
      <Collection />
    </Stack>
  );
};

export default HomePage;
