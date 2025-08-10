import { Box, Stack, Typography } from "@mui/material";

const summerCollectionImg = [
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

const SummerCollection = () => {
  return (
    <Stack sx={{ marginBlockStart: "5rem" }}>
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)" }}>
        {summerCollectionImg.map((Item, I) => (
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
  );
};

export default SummerCollection;
