import { Stack } from "@mui/material";
import NewWoman2025Collection from "../../../../Assets/Images/FashionModelNewChapter0.jpg";
import FashionDesignChapter6 from "./FashionDesignChapter6";

const Fashion = [
  {
    img: NewWoman2025Collection,
  },
];


const FashionDesignChapter5 = () => {
  return (
    <Stack
      sx={{
        marginBlockStart: "8rem",
        display: "grid",
        gridTemplateColumns: "repeat(1,1fr)",
      }}
    >
      {Fashion.map((Item, I) => (
        <Stack key={I}>
          {Item.img && (
            <img
              src={Item.img}
              alt={`Fashion Model Girl ${I}`}
              style={{ width: I === 0 ? "100%" : "50%", cursor: "pointer" }}
            />
          )}
        </Stack>
      ))}
      <FashionDesignChapter6 />
    </Stack>
  );
};

export default FashionDesignChapter5;
