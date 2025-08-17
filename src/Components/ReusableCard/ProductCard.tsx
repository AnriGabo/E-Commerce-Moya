import { Box, Button, Stack, Typography } from "@mui/material";

interface ProductCardType {
  image: string;
  title: string;
  price: number;
  description: string;
}
const ReusableCard = ({
  image,
  title,
  price,
  description,
}: ProductCardType) => {
  return (
    <Stack
      sx={{
        marginBlockStart: "8rem",
        marginInline: "15rem",
        flexDirection: "row",
      }}
    >
      <Box>
        <img
          src={image}
          alt={`Fashion Model Design `}
          style={{ width: "70%" }}
        />
      </Box>
      {/* Image Description */}
      <Stack sx={{ backgroundColor: "red" }}>
        <Box>
          <Typography>{title}</Typography>
        </Box>
        <Box>
          <Typography>{price}</Typography>
        </Box>
        <Box>
          <Button>დამატება</Button>
        </Box>
        <Box>
          <Typography sx={{ maxWidth: "20rem", fontSize: "1rem" }}>
            {description}
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
};

export default ReusableCard;
