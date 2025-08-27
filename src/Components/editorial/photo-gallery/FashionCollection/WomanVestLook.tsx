import { Stack } from "@mui/material";
import WomanVestLook12 from "../../../../Assets/Images/fashion_model_12.jpg";
import WomanEarringDetail from "./WomanEarringDetail";

const Fashion = [
  {
    img: WomanVestLook12,
  },
];


const WomanVestLook = () => {
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
      <WomanEarringDetail />
    </Stack>
  );
};

export default WomanVestLook;
