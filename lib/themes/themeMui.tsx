import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#C0A179",
    },
  },
  typography: {
    allVariants: {
      color: "#FFFFFF",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-input": {
            color: "#FFFFFF", // Définit la couleur du texte pour les TextField
          },
          "& .MuiInput-underline:before": {
            borderBottomColor: "#FFFFFF", // Définit la couleur de la ligne sous le TextField
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "#FFFFFF", // Définit la couleur de la ligne sous le TextField après le focus
          },
          "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
            borderBottomColor: "#FFFFFF", // Définit la couleur de la ligne sous le TextField au survol
          },
        },
      },
    },
  },
});

export default theme;
