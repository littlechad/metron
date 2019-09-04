import { SheetsRegistry } from 'jss'
import { createMuiTheme } from '@material-ui/core/styles'
import { createGenerateClassName } from '@material-ui/styles'

import blue from '@material-ui/core/colors/blue'
import grey from '@material-ui/core/colors/grey'
import pink from '@material-ui/core/colors/pink'
import green from '@material-ui/core/colors/green'
import red from '@material-ui/core/colors/red'

const theme = createMuiTheme({
  typography: {
    fontFamily: "'Open Sans', sans-serif",
    fontSize: 14,
  },
  palette: {
    backgroud: {
      default: '#000000',
    },
    primary: {
      light: red[500],
      main: red[600],
      dark: red[700],
    },
    secondary: {
      light: blue[300],
      main: blue[700],
      dark: blue[800],
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
    default: {
      light: grey[100],
      main: grey[50],
      dark: grey[200],
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

function createPageContext() {
  return {
    theme,
    sheetsManager: new Map(),
    sheetsRegistry: new SheetsRegistry(),
    generateClassName: createGenerateClassName(),
  }
}

/* eslint-disable no-underscore-dangle */
export default function getPageContext() {
  if (!process.browser) {
    return createPageContext()
  }

  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext()
  }

  return global.__INIT_MATERIAL_UI__
}
/* eslint-enable no-underscore-dangle */
