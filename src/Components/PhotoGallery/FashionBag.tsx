import { Stack } from "@mui/material";
import FashionBag0 from "../../Images/FashionBag1.jpg";
import FashionBag1 from "../../Images/FashionBag2.jpg";

const LuxuryBag = [
  {
    img: FashionBag0,
  },
  {
    img: FashionBag1,
  },
];

const FashionBag = () => {
  return (
    <Stack sx={{ flexDirection: "row", marginBlockStart: "8rem", }}>
      <Stack sx={{flexDirection:"row",gap: "3rem",marginInlineStart:"7rem"}}>
        {LuxuryBag.map((Item, I) => (
          <img src={Item.img} alt={`Item ${I}`} style={{ width: "45%" }}></img>
        ))}
      </Stack>
    </Stack>
  );
};

export default FashionBag;
