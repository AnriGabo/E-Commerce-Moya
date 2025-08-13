import { Stack } from "@mui/material";

interface BoxComponentType {
  children: React.ReactNode;
}

export default function CustomBoxComponent({ children }: BoxComponentType) {
  return (
    <Stack
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        gridTemplateRows: "repeat(2,1fr)",
        marginInlineStart: "1rem",
      }}
    >
      {children}
    </Stack>
  );
}
