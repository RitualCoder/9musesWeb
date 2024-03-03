import { createTheme } from "@mui/material/styles";

//@ts-ignore
import Avander from "../fonts/Avander.ttf";
//@ts-ignore
import CenturyGothic from "../fonts/CenturyGothic.ttf";

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
      fontFamily: ["CenturyGothic", "Avander", "sans-serif"].join(","),
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
