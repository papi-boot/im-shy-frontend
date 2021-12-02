import { createTheme } from "@mui/material/styles";

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
  },
  typography: {
    fontFamily: ["Plus Jakarta Sans"],
    fontWeight: "800",
    letterSpacing: "1rem",
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontWeight: "500",
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: ["Plus Jakarta Sans"],
    fontWeight: "800",
    letterSpacing: "1rem",
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontWeight: "500",
        },
      },
    },
  },
});
