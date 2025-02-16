import { Box } from "@mui/material";

type Props = {
  children: Readonly<{
    children: React.ReactNode;
  }>;
};

export default function Layout({ children }: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100svh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </Box>
  );
}
