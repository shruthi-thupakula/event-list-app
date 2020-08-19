import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
export const theme = createMuiTheme({
  palette: {
    common: {
      black: "#000000",
      white: "#ffffff",
    },
    background: {
      default: "#f7f7f7",
      paper: "#ffffff",
    },
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#ffffff",
    },
    error: {
      main: "#cb1930",
    },
    success: {
      main: "#26d400",
    },
    warning: {
      main: "#f8ba16",
    },
    info: {
      main: "#04cee0",
    },
    text: {
      primary: "#000000",
      secondary: "#666666",
    },
    divider: "#eeeeee",
  },
  // status: {
  //   danger: 'orange',
  // },
  typography: {
    fontFamily: "Open Sans, serif",
    // htmlFontSize: 12,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
      fontFamily: "Open Sans, serif",
      fontWeight: 700,
      fontSize: 22,
      lineHeight: "32px",
      letterSpacing: "normal",
    },

    h2: {
      fontFamily: "Open Sans, serif",
      fontWeight: 700,
      fontSize: 18,
      lineHeight: "28px",
      letterSpacing: "normal",
    },

    h3: {
      fontFamily: "Open Sans, serif",
      fontWeight: 700,
      fontSize: 16,
      lineHeight: "normal",
      letterSpacing: "normal",
    },

    h4: {
      fontFamily: "Open Sans, serif",
      fontWeight: 600,
      fontSize: 14,
      lineHeight: "24px",
      letterSpacing: "normal",
    },

    h5: {
      fontFamily: "Open Sans, serif",
      fontWeight: 600,
      fontSize: 13,
      lineHeight: "23px",
      letterSpacing: "normal",
    },

    h6: {
      fontFamily: "Open Sans, serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "17px",
      letterSpacing: "normal",
    },

    body1: {
      fontFamily: "Open Sans, serif !important",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "22px",
      letterSpacing: "normal !important",
    },
    body2: {
      fontFamily: "Open Sans, serif !important",
      letterSpacing: "normal !important",
    },
    button: {
      fontFamily: "Open Sans, serif",
      letterSpacing: "normal",
      fontStretch: "normal",
      textTransform: "capitalize",
      fontWeight: 700,
      fontSize: 13,
      lineHeight: 1.77,
    },
  },
  shape: {
    borderRadius: 4,
  },
  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The default props to change
      disableRipple: true, // No more ripple, on the whole application 💣!
      disableTouchRipple: true,
      focusRipple: true,
    },
  },
  transitions: {
    duration: {
      enteringScreen: 500,
      leavingScreen: 500,
    },
  },

  overrides: {
    MuiToolbar: {
      dense: {
        height: 52,
      },
    },
  },
});

export default theme;
