import { Box, Stack } from "@mui/material";

// ეს იქნება რეალურად ჰედერი რომელსაც აპში გამოვიყენებთ რადგან ყველგან ჩანდეს

export default function Header() {
  return (
    <Box component={"header"}>
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingInline: "1rem",
          backgroundColor: "red",
        }}
      >
        <Box>1</Box>
        <Box>1</Box>
        <Box>1</Box>
      </Stack>
    </Box>
  );
}
