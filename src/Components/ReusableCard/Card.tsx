import { Stack } from "@mui/material";
import ReusableCard from "./ProductCard";

import Puchase1 from "../../Assets/Images/Puchase1.jpg";

const Card = () => {
  return (
    <Stack>
      <ReusableCard
        image={Puchase1}
        title={"სანდალი ქუსლიანი ბანტი ზამში"}
        price={130}
        description={"ზამშის ქუსლიანი სანდლის ტიპის ფეხსაცმელი. ბანტის დეტალი წინა ნაწილში. რეგულირებადი ელასტიკური უკანა თასმა. მაღალი ქუსლი."}
      />
    </Stack>
  );
};

export default Card;
