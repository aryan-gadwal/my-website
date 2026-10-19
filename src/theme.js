import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: { main: "#1565c0" },
    secondary: { main: "#ff7043" },
    background: { default: "#f5f7fa" },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h2: { fontWeight: 700 },
  },
  shape: { borderRadius: 12 },
});

export default theme;