import { createMuiTheme } from '@material-ui/core/styles'

import {
  blue,
  grey,
  pink,
  green,
  red,
  yellow,
} from '@material-ui/core/colors'

const theme = createMuiTheme({
  typography: {
    fontFamily: "'Open Sans', sans-serif",
    // fontFamily: "'Cormorant Garamond'",
    fontSize: 14,
  },
  palette: {
    backgroud: {
      default: '#000000',
    },
    primary: {
      light: blue.A200,
      main: blue.A400,
      dark: blue.A700,
    },
    secondary: {
      light: red[500],
      main: red[600],
      dark: red[700],
    },
    success: {
      light: green[400],
      main: green[500],
      dark: green[600],
    },
    error: {
      light: pink[400],
      main: pink[500],
      dark: pink[600],
    },
    warning: {
      light: yellow[500],
      main: yellow[600],
      dark: yellow[700],
    },
    default: {
      light: grey[100],
      main: grey[50],
      dark: grey[200],
    },
    facebook: {
      light: blue[700],
      main: blue[800],
      dark: blue[900],
    },
    google: {
      light: red[500],
      main: red[600],
      dark: red[700],
    },
    green: {
      main: '#30826C',
    },
    blue: {
      main: '#008297',
    },
    purple: {
      main: '#4a4290',
    },
    red: {
      main: '#9F4B84',
    },
  },
})

export default theme
