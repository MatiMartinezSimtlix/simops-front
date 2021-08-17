import { createTheme } from "@material-ui/core/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#f16431",
    },
    secondary: {
      main: "#8e8e8e",
    },
    error: {
      main: "#b31d15",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});
