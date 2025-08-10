import { Box, Button, Stack } from "@mui/material";

const EnterTheSystem = () => {
  return (
    <Box>
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "end",
          paddingInlineEnd: "1rem",
          gap: "1rem",
          marginBlockEnd: "2rem",
          alignItems: "center",
        }}
      >
        <Box>
          <Button sx={{ color: "red", textTransform: "capitalize" }}>
            Sign In
          </Button>
        </Box>
        <Box>
          <Button sx={{ color: "red", textTransform: "capitalize" }}>
            Sign Up
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default EnterTheSystem;
