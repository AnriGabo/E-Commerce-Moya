import { Typography } from "@mui/material";

interface ImageDescriptionTypographyType {
  children: React.ReactNode;
}
export default function CustomImageDescriptionTypography({
  children,
}: ImageDescriptionTypographyType) {
  return (
    <Typography
      sx={{
        fontFamily: `"Didot", "Bodoni MT", "Palatino Linotype", "Book Antiqua", Palatino, "Garamond", "Georgia", "Times New Roman", Times, serif`,
        fontWeight: 570,
        letterSpacing: "0.5px",
        fontSize: "1.2rem",
      }}
    >
        {children}
    </Typography>
  );
}
