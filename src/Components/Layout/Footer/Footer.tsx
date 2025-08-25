import { Box, Stack, Typography } from "@mui/material";
import anro from "../../../Assets/Images/AuthenticationImage.jpg";
const Footer = () => {
  return (
    <Stack
      sx={{
        backgroundColor: "rgba(246, 244, 244, 1)",
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        marginInline: "2rem",
        marginBlockStart: "8.3rem",
        position: "static",
        bottom: 0,
        borderRadius:"5px"
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "1.5rem",
          alignItems: "center",
          paddingInlineStart: "2rem",
          cursor:"pointer",
        }}
      >
        <Typography>Contact</Typography>
        <Typography>My Moya Account</Typography>
        <Typography>Prouduct And Size</Typography>
        <Typography>Contact</Typography>
        <Typography>Contact</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "1.5rem",
          paddingBlock: "2rem",
          paddingInlineEnd: "2rem",
        }}
      >
        <img
          src={anro}
          style={{ width: "30%", height: "100%", cursor: "pointer" }}
        />
        <img
          src={anro}
          style={{ width: "30%", height: "100%", cursor: "pointer" }}
        />
        <img
          src={anro}
          style={{ width: "30%", height: "100%", cursor: "pointer" }}
        />
      </Box>
    </Stack>
  );
};

export default Footer;
