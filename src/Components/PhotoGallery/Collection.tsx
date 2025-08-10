import { Box, Stack } from "@mui/material";

const Collection = () => {
  const PhotoGallery = [
    "/src/Images/ModelView1.jpg",
    "/src/Images/ModelView2.jpg",
    "/src/Images/ModelView3.jpg",
  ];

  return (
    <Stack sx={{ marginBlock: "6.5rem" }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "2rem",
        }}
      >
        {PhotoGallery.map((Item, i) => (
          <img
            key={i}
            src={Item}
            alt={`Image- ${i}`}
            style={{ width: "100%", gridColumn: i === 0 ? "1 / -1 " : "auto" }}
          />
        ))}
      </Box>
    </Stack>
  );
};

export default Collection;
