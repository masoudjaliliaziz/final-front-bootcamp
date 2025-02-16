import { colors, createTheme } from "@mui/material";

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "VazirMatn",
  },
  palette: {
    background: {
      default: colors.grey[100],
    },
  },
});

export default theme;
