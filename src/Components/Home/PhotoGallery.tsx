import { Box, Stack, Typography } from "@mui/material";

const PhotoGallery = () => {
  const PhotoGallery = [
    "/src/Images/ModelView1.jpg",
    "/src/Images/ModelView2.jpg",
    "/src/Images/ModelView3.jpg",
  ];

  const PhotoGallery2 = [
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

  const PhotoGallery3 = [
    {
      img: "/src/Images/ModelViewN5.jpg",
    },
    {
      img: "/src/Images/ModelViewN6.jpg",
    },
    {
      img: "/src/Images/ModelView7.jpg",
    },
    {
      h5: "002",
      h6: "summer,woman collection",
    },
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

      <Stack sx={{ marginBlock: "5rem" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            marginInlineStart: "5rem",
            gap: "2rem",
          }}
        >
          {PhotoGallery2.map((Item2, I) => (
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

      <Stack sx={{ marginBlockStart: "5rem" }}>
        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)" }}>
          {PhotoGallery3.map((Item, I) => (
            <Stack>
              <img src={Item.img} key={I} style={{ width: "100%" }} />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant={"h4"}
                  component={"h5"}
                  sx={{ fontWeight: "bold" }}
                >
                  {Item.h5}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: `"Didot", "Bodoni MT", "Palatino Linotype", "Book Antiqua", Palatino, "Garamond", "Georgia", "Times New Roman", Times, serif`,
                    fontWeight: 400,
                    letterSpacing: "0.5px",
                  }}
                >
                   {Item.h6}
                </Typography>
              </Box>
            </Stack>
          ))}
        </Box>
      </Stack>
    </Stack>
  );
};

export default PhotoGallery;
