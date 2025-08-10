import { Box, Stack } from "@mui/material";

const ImageSlider = [
  {
    img: "/src/Images/ModelViewN2.jpg",
  },

  {
    img: "/src/Images/ModelViewN3.jpg",
  },
  {
    img: "/src/Images/ModelViewN4.jpg",
  },
];

const PhotoSlider = () => {
  return (
    <Stack sx={{ marginBlock: "5rem" }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          marginInlineStart: "5rem",
          gap: "2rem",
        }}
      >
        {ImageSlider.map((Item2, I) => (
          <Box>
            <img
              src={Item2.img}
              key={I}
              alt={`Image-${I}`}
              style={{ width: "90%" }}
            />
          </Box>
        ))}
      </Box>
    </Stack>
  );
};

export default PhotoSlider;
