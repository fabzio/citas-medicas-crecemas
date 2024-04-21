export default function Input() {
  return {
    MuiTextField: {
      styleOverrides: {
        root: {
          ".MuiOutlinedInput-root": {
            backgroundColor: "#f9f9f9",
            boxShadow: "0px -5px 20px -10px #202020",
          },
          ".MuiInputLabel-root": {
            color: "#485361",
            backgroundColor: "#f9f9f9",
            borderRadius: "5px",
          },
          ".MuiFormLabel-root.MuiInputLabel-root.Mui-disabled": {
            color: "#202020",
            backgroundColor: "#f9f9f9",
            borderRadius: "5px",
          },
          ".MuiInputBase-input.MuiOutlinedInput-input.Mui-disabled": {
            color: "#202020",
          },
        },
      },
    },
  };
}
