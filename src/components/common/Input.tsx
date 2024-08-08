import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";

interface InputProps {}

const Input: React.FC<InputProps> = ({}) => {
  return (
    <ThemeProvider theme={customTheme()}>
      <TextField
        id="filled-basic"
        label="휴대폰 번호, 이메일 주소 또는 사용자 아이디"
        variant="filled"
      />
    </ThemeProvider>
  );
};

const customTheme = () =>
  createTheme({
    components: {
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
      MuiFilledInput: {
        styleOverrides: {
          root: {
            "&": {
              height: "56px",
              width: "300px",
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
