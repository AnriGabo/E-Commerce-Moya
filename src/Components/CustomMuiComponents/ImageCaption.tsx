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
        fontFamily: "'Bodoni Moda', serif",
        fontStyle: "italic",
        fontWeight: 500,
        letterSpacing: "1.2px",
        textTransform: "lowercase",
      }}
    >
      {children}
    </Typography>
  );
}
