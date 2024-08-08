import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";

interface InputProps {
  label: string;
}

const Input: React.FC<InputProps> = ({ label }) => {
  return (
    <ThemeProvider theme={customTheme()}>
      <TextField id="filled-basic" label={label} variant="filled" />
    </ThemeProvider>
  );
};

const customTheme = () =>
  createTheme({
    components: {
      // input 최상위
      MuiTextField: {
        styleOverrides: {
          root: {
            width: "100%",
          },
        },
      },
      // label style
      MuiFormLabel: {
        styleOverrides: {
          root: {
            "&": {
              fontSize: "17px",
              color: "rgb(51, 54, 57)",
            },
          },
        },
      },
      // fill type input style
      MuiFilledInput: {
        styleOverrides: {
          root: {
            "&": {
              width: "100%",
              height: "56px",
              border: "2px solid rgb(51, 54, 57)",
              borderRadius: "4px",
              color: "#fff",
            },
            "&::before, &::after, &:hover:not(.Mui-disabled, .Mui-error):before":
              {
                border: "none",
              },
            "&.Mui-focused": {
              height: "56px",
              width: "100%",
              border: "2px solid rgb(29, 155, 240)",
            },
            "&.Mui-focused:after": {
              border: "none",
            },
          },
        },
      },
    },
  });

export default Input;
