import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { SELECT_TYPES } from "@/constants/select_type";

interface SelectProps {
  label: string;
  type: "month" | "day" | "year";
}

const Select: React.FC<SelectProps> = ({ label, type }) => {
  return (
    <ThemeProvider theme={customTheme()}>
      <TextField
        id="filled-select-currency-native"
        select
        label={label}
        SelectProps={{
          native: true,
        }}
        variant="filled"
      >
        {SELECT_TYPES[type].map((type) => (
          <option key={type.value} value={type.value}>
            {type.label}
          </option>
        ))}
      </TextField>
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
      MuiSvgIcon: {},
    },
  });

export default Select;
