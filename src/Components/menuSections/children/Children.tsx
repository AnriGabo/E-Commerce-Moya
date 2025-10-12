import { Box, Stack } from "@mui/material";
import child0 from "../../../Assets/Images/children0.jpg";
import child1 from "../../../Assets/Images/children1.jpg";
import child2 from "../../../Assets/Images/children2.jpg";
import child3 from "../../../Assets/Images/children3.jpg";

const imageSlider = [
  { id: 0, img: child0, alt: "2 years old children", label: "1-3y" },
  { id: 1, img: child1, alt: "4 years old children", label: "1½ - 6y" },
  { id: 2, img: child2, alt: "4 years old children", label: "3-6y" },
  { id: 3, img: child3, alt: "4 years old children", label: "3-6y" },
];

// ქვემოთა ჩამონათვალი
// const childrenSection = [
//   { to: "coatandjacket", label: "Coats & Jackets" },
//   { to: "suits", label: "Blazers & Suits" },
//   { to: "dresses", label: "Dresses & Jumpsuits" },
//   { to: "tops", label: "Tops & Bodysuits" },
//   { to: "trousers", label: "Trousers & Jeans" },
//   { to: "shirts", label: "Shirts & T-Shirts" },
// ];

const children = () => {
  return (
    <Stack
      gap={2}
      sx={{
        minHeight: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "440px",
          overflowX: "auto",
          cursor: "pointer",
          gap: "1.5rem",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {imageSlider.map((Item) => (
          <Box
            key={Item.id}
            sx={{
              scrollSnapAlign: "start",
              flex: "0 0 130px",
              display: "flex",
              gap: "0.5rem",
              flexDirection: "column",
            }}
          >
            <img
              src={Item.img}
              alt={Item.alt}
              style={{
                width: 130,
                height: 130,
                objectFit: "cover",
                borderRadius: "8px",
                boxShadow: "0 4px 20px rgba(15, 1, 1, 0.05)",
              }}
            />
            {Item.label}
          </Box>
        ))}
      </Box>
    </Stack>
  );
};

export default children;
