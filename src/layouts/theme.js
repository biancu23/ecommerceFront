import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  palette: {
    common: {
      black: "#262626",
      white: "#f9f9f9",
    },
    primary: {
      main: "#52378A",
    },
    secondary: {
      main: "#003388",
    },
    info: {
      main: "#7D06A5",
    },
    default: {
      main: "#4caf50"
    },
    error: {
      main: "#f44336"
    }
  },
})
export default theme
