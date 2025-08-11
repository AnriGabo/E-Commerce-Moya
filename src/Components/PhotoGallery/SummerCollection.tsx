import { Box, Stack, Typography } from "@mui/material";
import SummerCollectionCloth from "../../Images/FashionModel0.jpg";
import SummerCollectionCloth2 from "../../Images/FashionModel1.jpg";
import SummerCollectionCloth3 from "../../Images/FashionModel2.jpg";

const summerCollectionImg = [
  {
    img: SummerCollectionCloth,
  },
  {
    img: SummerCollectionCloth2,
  },
  {
    img: SummerCollectionCloth3,
  },
  {
    h4: "002",
    h5: "summer,woman",
    h6: "collection",
  },
];

const SummerCollection = () => {
  return (
    <Stack sx={{ marginBlockStart: "8rem" }}>
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)" }}>
        {summerCollectionImg.map((Item, I) => (
          <Stack>
            <img
              src={Item.img}
              key={I}
              style={{ width: "100%", cursor: "pointer" }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
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
                {Item.h4}
              </Typography>
              <Typography
                sx={{
                  fontFamily: `"Didot", "Bodoni MT", "Palatino Linotype", "Book Antiqua", Palatino, "Garamond", "Georgia", "Times New Roman", Times, serif`,
                  fontWeight: 570,
                  letterSpacing: "0.5px",
                  fontSize: "1.2rem",
                }}
              >
                <i>{Item.h5}</i>
              </Typography>
               <Typography
                sx={{
                  fontFamily: `"Didot", "Bodoni MT", "Palatino Linotype", "Book Antiqua", Palatino, "Garamond", "Georgia", "Times New Roman", Times, serif`,
                  fontWeight:570,
                  letterSpacing: "0.5px",
                  fontSize: "1.2rem",
                }}
              >
                <i>{Item.h6}</i>
              </Typography>
            </Box>
          </Stack>
        ))}
      </Box>
    </Stack>
  );
};

export default SummerCollection;
