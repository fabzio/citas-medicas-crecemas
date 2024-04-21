import { Theme } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";

export default function Select() {
  return {
    MuiSelect: {
      styleOverrides: {
        root: {
          backgroundColor: "#f9f9f9",
          ".css-1gzq9tk-MuiFormLabel-root-MuiInputLabel-root": {
            color: "#485361",
            backgroundColor: "#f9f9f9",
            borderRadius: "5px",
          },
        },
      },
    },
  };
}
